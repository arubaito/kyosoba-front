import { useFormContext } from "react-hook-form";
import FormParts from "./FormParts";
import styles from "styles/utils/FormInputDate.module.css";

/**
 * インプットフォームを構築する汎用コンポーネント
 * @param {boolean} required: 必須マークを付けるかどうか 
 * @param {string} labelName: ラベル名 
 * @param {string} formName: フォームのID 
 * @returns JSXコンポーネント
 */
export default function FormInputDate({required = true, labelName, formName }) {

    // FormProviderタグで囲まれると、useFormの機能をまとめて渡してuseFormContextで使う事ができる
    const {register, formState} = useFormContext();

    // TODO エラーメッセージで参照してるプロパティが汎用的じゃない
    return (
        <FormParts required={required} labelName={labelName}>
            <div className={styles.formItemInput}>
                <input
                    id={formName}
                    type="date"
                    {...register(formName, {
                        required: '必須項目'
                    })}
                />
                {/* エラーメッセージ(validation) */}
                {!!formState.errors.raceName && required && 
                    <p>{formState.errors.raceName.message}</p>}
            </div>
        </FormParts>

    );
}