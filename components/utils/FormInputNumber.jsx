import { useFormContext } from "react-hook-form";
import FormParts from "./FormParts";
import styles from "styles/utils/FormInputText.module.css";

/**
 * インプットフォームを構築する汎用コンポーネント
 * 
 * @param {boolean} required: 必須マークを付けるかどうか 
 * @param {string} labelName: ラベル名 
 * @param {string} formName: フォームのID 
 * @returns JSXコンポーネント
 */
export default function FormInputNumber({ required = false, labelName, formName }) {

    const {register, formState} = useFormContext();

    return (
        <FormParts required={required} labelName={labelName}>
            <label className={styles.formItemInput}>
                {/* numberのインプットフォーム */}
                <input
                    id={formName}
                    type="number"
                    {...register(formName, {
                        required: '必須項目'
                    })}
                />
                {/* エラーメッセージ(validation) */}
                {!!formState.errors.raceName && required && 
                    <p>{formState.errors.raceName.message}</p>}
            </label>
        </FormParts>

    );
}