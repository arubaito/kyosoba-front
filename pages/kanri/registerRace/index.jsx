import styles from "styles/page/K05_RegisterRace.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHorse } from "@fortawesome/free-solid-svg-icons"; 
import TitleAndIcon from "components/common/titleAndIcon";
import { FormProvider, useForm } from "react-hook-form";
import Select from "react-select";
import { useState } from "react";
import FormInputText from "components/utils/FormInputText";
import FormInputNumber from "components/utils/FormInputNumber";
import FormSelect from "components/utils/FormSelect";
import FormRadio from "components/utils/FormRadio";
import FormButton from "components/utils/FormButton";


/**
 * (K05)レース登録画面
 */
export default function registerRace(){

    return (
        <div className={styles.kanriContentsBox}>
            <TitleAndIcon title="レース登録">
                <FontAwesomeIcon icon={faHorse} />
            </TitleAndIcon>
            <div className={styles.menuContentsBox}>
                <RegisterForm />

            </div>
        </div>
    );
}

/**
 * レースを登録するフォーム部品
 */
function RegisterForm(){
    
    // 登録フォームの設定
    const { register, handleSubmit, formState } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            raceName: '',
        }
    })
    // 登録ボタンのハンドラ
    const handleOnSubmit = async (values) => {
        await registerRaceMaster(values)
    }
    // エラー時のハンドラ
    const handleOnError = (errors) => {
        console.log(errors)
    }
    
    // 周り方向のラジオボタン
    const radioItemsList = [
        {value: "true", label: "右"},
        {value: "false", label: "左"},
    ];

    const optionsGradeList = [
        <option value="1" key={1}>GI</option>, 
        <option value="2" key={2}>GⅡ</option>, 
        <option value="3" key={3}>GⅢ</option>, 
        <option value="" key={4}>なし</option>
    ];

    const optionsPlaceList = [
        <option value="6" key={6}>東京競馬場</option>,
        <option value="8" key={8}>京都競馬場</option>,
        <option value="9" key={9}>阪神競馬場</option>,
        <option value="5" key={5}>中山競馬場</option>,
        <option value="1" key={1}>札幌競馬場</option>,
        <option value="2" key={2}>函館競馬場</option>,
        <option value="3" key={3}>福島競馬場</option>,
        <option value="4" key={4}>新潟競馬場</option>,
        <option value="7" key={7}>中京競馬場</option>,
        <option value="10"key={10}>小倉競馬場</option>
    ];

    return (
        <wrapper>
          <form onSubmit={handleSubmit(handleOnSubmit, handleOnError)} className={styles.form} >
            <FormProvider register={register} formState={formState}>
                {/* レース名 */}
                <FormInputText required={true} labelName="レース名" formName="raceName"/>

                {/* グレード */}
                <FormSelect labelName="グレード" formName="grade" optionsList={optionsGradeList} />

                {/* 開催場所 */}
                <FormSelect labelName="開催場所" formName="place" optionsList={optionsPlaceList} />

                {/* 周り方向 */}
                <FormRadio required={true} labelName="周り方向" formName="mawari" radioItemsList={radioItemsList} />

                {/* 距離 */}
                <FormInputNumber required={true} labelName="距離" formName="kyori"/>

                {/* 登録ボタン */}
                <FormButton buttonName="登録" />
            </FormProvider>
          </form>
        </wrapper>
    )
}

/**
 * レースマスタに入力した内容を登録する関数
 * 
 * @param {Type:{grade, kyori, mawari, place, raceName}}: 登録データ 
 */
async function registerRaceMaster({raceName, grade, place, mawari, kyori}){

    console.log("#registerRaceMaster");

    // API呼び出し
    const response = await fetch("http://localhost:8080/register-race-master",{
        method: "POST", 
        headers:{
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({
            raceName,
            grade, 
            place,
            mawari, 
            kyori, 
        }),
    });

    if(response.status === 200){
        alert("保存しました。");
    } else {
        alert("保存できませんでした。管理者にご連絡ください。");
    }
}