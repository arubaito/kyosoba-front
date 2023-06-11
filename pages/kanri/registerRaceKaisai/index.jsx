import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleAndIcon from "components/common/titleAndIcon";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/page/K05_RegisterRaceKaisai.module.css";
import { FormProvider, useForm } from "react-hook-form";
import FormSelect from "components/utils/FormSelect";
import FormInputNumber from "components/utils/FormInputNumber";
import FormButton from "components/utils/FormButton";
import FormInputDate from "components/utils/FormInputDate";
import { useEffect } from "react";

/**
 * (K05)
 * @returns 
 */
export default function RegisterRaceKaisai({raceMasterList}){

    return (
        <div className={styles.kanriContentsBox}>
            <TitleAndIcon title="開催レース登録">
                <FontAwesomeIcon icon={faFlagCheckered} />
            </TitleAndIcon>
            <div className={styles.menuContentsBox}>
                <RegisterForm raceMasterList={raceMasterList} />
            </div>
        </div>        
    );
}




/**
 * レース名とレースIDを取得
 * @returns 
 */
async function getRaceNameAndRaceId(){
    try{
        const response = await fetch("http://localhost:8080/get-race-name");
        const res = await response.json();
        return res;
    }catch(err){
        console.log(err);
    }
}

/**
 * SSG
 */
export async function getServerSideProps(){
    console.log("registerRaceKaisai#getServerSideProps");

    // レース名とレースIDを取得
    const raceMasterList = await getRaceNameAndRaceId();
    console.log(raceMasterList);

    return{
        props:{
            raceMasterList:raceMasterList
        }
    }

}

/**
 * 登録フォームのコンポーネント
 * @returns 
 */
function RegisterForm({raceMasterList}){

    // 登録フォームの設定
    const { register, handleSubmit, formState } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            raceName: '',
        }
    })

    /* セレクトボックスの選択肢を変数で用意 */
    
    // レース名
    const optionsRaceList = [];
    raceMasterList.map(({raceId, raceName}) => {
        var youso = <option value={raceId} key={raceId}>{raceName}</option>;
        optionsRaceList.push(youso);
    });
    
    // 天候
    const optionsTenkoList = [
        <option value="1" key={1}>晴れ</option>, 
        <option value="2" key={2}>曇</option>, 
        <option value="3" key={3}>雨</option>, 
        <option value="4" key={4}>小雨</option>,
        <option value="5" key={5}>雪</option>,
        <option value="6" key={6}>小雪</option>
    ];
    // <FontAwesomeIcon icon={faSun} />
    // <FontAwesomeIcon icon={faCloud} />
    // <FontAwesomeIcon icon={faCloudShowersHeavy} />
    // <FontAwesomeIcon icon={faCloudRain} />
    // <FontAwesomeIcon icon={faSnowman} /> 
    // <FontAwesomeIcon icon={faSnowflake} />

    // 馬場
    const optionsBabaList = [
        <option value="" key={5}>--</option>, 
        <option value="1" key={1}>良</option>, 
        <option value="2" key={2}>稍重</option>, 
        <option value="3" key={3}>重</option>, 
        <option value="4" key={4}>不良</option>
    ];

    // 登録ボタンのハンドラ
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log("handleOnsubmit");
        console.log(e)
        // registerRaceMaster(values);
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleOnSubmit} >
                <FormProvider register={register} formState={formState}>
                    {/* レース名 */}
                    <FormSelect labelName="レース名" formName="raceName" optionsList={optionsRaceList} />

                    {/* 日付 */}
                    <FormInputDate required="true" labelName="日付" formName="kaisaiDate" />

                    {/* 天候 */}
                    <FormSelect labelName="天候" formName="tenko" optionsList={optionsTenkoList} />

                    {/* 馬場 */}
                    <FormSelect labelName="馬場" formName="baba" optionsList={optionsBabaList}/>

                    {/* 頭数 */}
                    <FormInputNumber required="true" labelName="頭数" formName="tosu" />

                    {/* 送信ボタン */}
                    <FormButton buttonName="登録"/>
                </FormProvider>
            </form>
        </>
    );
}


