import { useFormContext } from "react-hook-form";
import FormParts from "./FormParts";
import styles from "styles/utils/FormInputText.module.css";

/**
 * インプットフォームを構築する汎用コンポーネント
 * @param {boolean} required: 必須マークを付けるかどうか 
 * @param {string} labelName: ラベル名 
 * @param {string} formName: フォームのID 
 * @returns JSXコンポーネント
 */
export default function FormInputText({ required = false, labelName, formName, defaultValue }) {

    // FormProviderタグで囲まれると、useFormの機能をまとめて渡してuseFormContextで使う事ができる
    const {register, formState} = useFormContext();

    return (
        <FormParts required={required} labelName={labelName}>
            <div className={styles.formItemInput}>
                {/* 必須の制約を付けるかどうか切り替え */}
                {required ? 
                    <input
                        id={formName}
                        type="text"
                        value={defaultValue}
                        {...register(formName, {
                            required: '必須項目です。'
                        })}
                        /> : 
                        <input
                        id={formName}
                        type="text"
                        value={defaultValue}
                        {...register(formName)}
                    />
                }
                {/* エラーメッセージ(validation) */}
                {formState.errors[formName] && required && 
                    <p className={styles.errorMessage}>{formState.errors[formName].message}</p>}
            </div>
        </FormParts>

    );
}