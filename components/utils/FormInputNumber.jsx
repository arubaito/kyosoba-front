import { useFormContext } from "react-hook-form";
import FormParts from "./FormParts";
import styles from "styles/utils/FormInputText.module.css";

/**
 * インプットフォームを構築する汎用コンポーネント
 * 
 * @param {boolean} required: 必須項目かどうか 
 * @param {string} labelName: ラベル名 
 * @param {string} formName: フォームのID 
 * @returns JSXコンポーネント
 */
export default function FormInputNumber({ required = false, labelName, formName }) {

    const {register, formState} = useFormContext();

    return (
        <FormParts required={required} labelName={labelName}>
            <label className={styles.formItemInput}>
                {/* 必須項目かどうかで切り替え */}
                {required ? 
                    <input
                        id={formName}
                        type="number"
                        {...register(formName, {
                            required: '必須項目です。'
                        })}
                    />:
                    <input
                        id={formName}
                        type="number"
                        {...register(formName)}
                    />
            }
                {/* エラーメッセージ(validation) */}
                {!!formState.errors[formName] && required && 
                    <p className={styles.errorMessage}>{formState.errors[formName].message}</p>}
            </label>
        </FormParts>

    );
}