import TitleAndIcon from "components/common/titleAndIcon";
import FormButton from "components/utils/FormButton";
import FormInputDate from "components/utils/FormInputDate";
import FormInputText from "components/utils/FormInputText";
import FormSelect from "components/utils/FormSelect";
import { FormProvider, useForm } from "react-hook-form";
import { GiHorseHead } from "react-icons/gi";
import styles from "styles/page/K05_RegisterKysobaMaster.module.css";

/**
 * (K05) 競走馬マスタ登録画面
 * @returns 
 */
export default function RegisterKyosobaMaster() {

    return (
        <div className={styles.kanriContentsBox}>
            <TitleAndIcon title="競走馬登録">
                <GiHorseHead />
            </TitleAndIcon>
            <div>
                <RegisterForm />
            </div>
        </div>
    );
}


/**
 * 登録フォームのコンポーネント
 */
function RegisterForm() {

    // 登録フォームの設定
    const { register, handleSubmit, formState } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            // raceName: '',
        }
    })

    // 性別
    const optionsSeibetsuList = [
        <option value="true" key={1}>牡</option>,
        <option value="false" key={2}>牝</option>
    ];
    // 毛色
    const optionsKeiroList = [
        <option value="" key={1}>栗毛</option>,
        <option value="" key={2}>鹿毛</option>,
        <option value="" key={3}>芦毛</option>,
        <option value="" key={4}>黒鹿毛</option>,
        <option value="" key={5}>白毛</option>,
    ];
    
    // 登録ボタンのハンドラ
    const handleOnSubmit = (values) => {
        console.log(values);
        registerKyosoba(values);
    } 

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(handleOnSubmit)} >
                <FormProvider register={register} formState={formState}>

                    {/* 競走馬名 */}
                    <FormInputText labelName="馬名" formName="bamei" required="true" />

                    {/* 誕生日 */}
                    <FormInputDate required="true" labelName="誕生日" formName="birthday" />

                    {/* 厩舎 */}
                    <FormInputText labelName="厩舎" formName="kyusya" />

                    {/* 馬主 */}
                    <FormInputText labelName="馬主" formName="banushi" />

                    {/* 生産者 */}
                    <FormInputText labelName="生産者" formName="seisansya" />

                    {/* 性別 */}
                    <FormSelect labelName="性別" formName="seibetsu" optionsList={optionsSeibetsuList}/>

                    {/* 毛色 */}
                    <FormSelect labelName="毛色" formName="keiro" optionsList={optionsKeiroList} />

                    {/* 送信ボタン */}
                    <FormButton buttonName="登録" />

                </FormProvider>
            </form>
        </>
    )
}

/**
 * 競走馬を登録するAPIを呼び出す関数
 * @param {*} param0 
 */
async function registerKyosoba({bamei, banushi, birthday, keiro, kyusya, seibetsu, seisansya}){
    
    console.log("#registerKyosoba");

    // API呼び出し
    const response = await fetch("http://localhost:8080/register-kyosoba-master", {
        method: "POST", 
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            bamei,
            banushi,
            birthday,
            keiro,
            kyusya,
            seibetsu,
            seisansya
        })
    });

    if(response.status === 200){
        alert("保存しました。");
    } else{
        alert("保存できませんでした。管理者にご連絡ください。");
    }
}