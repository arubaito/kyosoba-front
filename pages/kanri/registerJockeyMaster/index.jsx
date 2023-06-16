import TitleAndIcon from "components/common/titleAndIcon";
import styles from "styles/page/K05_RegisterJockeyMaster.module.css";
import { RiTShirt2Line } from "react-icons/ri"
import FormInputText from "components/utils/FormInputText";
import { FormProvider, useForm } from "react-hook-form";
import FormButton from "components/utils/FormButton";

/**
 * (K05) 騎手マスタ登録画面
 * @returns 
 */
export default function RegisterJockeyMaster({ raceMasterList }) {

    return (
        <div className={styles.kanriContentsBox}>
            <TitleAndIcon title="騎手登録">
                <RiTShirt2Line />
            </TitleAndIcon>
            <div>
                <RegisterForm raceMasterList={raceMasterList} />
            </div>
        </div>
    );
}

/**
 * 登録フォームのコンポーネント
 * 
 * @returns 登録フォームのコンポーネント
 */
function RegisterForm() {

    // 登録フォームの設定
    const { register, handleSubmit, formState } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            jockeyName: '',
        }
    })

    // 登録時に呼び出す関数
    const handleOnSubmit = (values) => {
        registerJockey(values);
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(handleOnSubmit)} >
                <FormProvider register={register} formState={formState}>

                    {/* 騎手名 */}
                    <FormInputText required="true" labelName="騎手名" formName="kisyumei" />

                    {/* 送信ボタン */}
                    <FormButton buttonName="登録"/>

                </FormProvider>
            </form>
        </>
    );
}

async function registerJockey({kisyumei}){

    console.log("registerJockey");

    // API呼び出し
    const response = await fetch("http://localhost:8080/register-kisyu-master", {
        method: "POST", 
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            kisyumei,
        })
    });

    if(response.status === 200){
        alert("保存しました。");
    } else if(response.status === 422) {
        // テーブルにデータが既に登録されている場合は422エラーが返ってくる
        const responseJson = await response.json();
        alert(responseJson.message);
    } else{
        alert("保存できませんでした。管理者にご連絡ください。");
    }


}
