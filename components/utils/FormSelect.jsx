import FormParts from "./FormParts";
import styles from "styles/utils/FormSelect.module.css";
import { useFormContext } from "react-hook-form";

/**
 * セレクトボックスの汎用コンポーネント
 * 
 * @param {string} labelName: ラベル名 
 * @param {string} formName: フォームID 
 * @param {Array<VF>} optionsList: セレクトボックスのoptionを要素に持つリスト 
 */
export default function FormSelect({labelName, formName, optionsList}){

    // RHFの管理下にするregisterを取得
    const {register} = useFormContext();

    return (
        <FormParts labelName={labelName}>
            <label className={styles.formItemSelect}>
                <select {...register(formName)}>
                    {optionsList.map(option => {
                        return (
                            option
                        );
                    })}
                </select>
            </label>
        </FormParts>
    );
}