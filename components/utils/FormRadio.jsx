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
export default function FormRadio({required, labelName, formName, radioItemsList}){
    
    // RHFの管理下にするregisterを取得
    const {register, formState} = useFormContext();
    
    return (
        <FormParts required labelName={labelName}>
            <label className={styles.formItemRadio}>
                {/* ラジオボタン */}
                {radioItemsList.map((radioItem) => {
                    const {value, label} = radioItem;
                    return (
                        <label key={label}>
                            <input 
                                type="radio"
                                name={formName}
                                value={value}
                                {...register(formName, {
                                    required: '必須項目'
                                })}
                            />
                            {label}
                        </label>
                    );
                })}
                {/* エラーメッセージ(validation) */}
                {!!formState.errors.mawari && required && 
                    <p>{formState.errors.mawari.message}</p>}
            </label>
        </FormParts>
    );
}