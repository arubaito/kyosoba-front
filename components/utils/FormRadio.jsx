import FormParts from "./FormParts";
import styles from "styles/utils/FormRadio.module.css";
import { useFormContext } from "react-hook-form";

/**
 * セレクトボックスの汎用コンポーネント
 * 
 * @param {string} labelName: ラベル名
 * @param {string} formName: フォームID 
 * @param {Array<VF>} optionsList: セレクトボックスのoptionを要素に持つリスト 
 */
export default function FormRadio({required = false, labelName, formName, radioItemsList}){
    
    // RHFの管理下にするregisterを取得
    const {register, formState} = useFormContext();
    
    return (
        <FormParts required={required} labelName={labelName}>
            <label className={styles.formItemRadio}>
                {/* ラジオボタン */}
                {radioItemsList.map((radioItem) => {
                    const {value, label} = radioItem;
                    return (
                        <label key={label}>
                            {/* 必須項目かどうかで切り替え */}
                            {required ? 
                                <input 
                                    type="radio"
                                    name={formName}
                                    value={value}
                                    {...register(formName, {
                                        required: '必須項目です。'
                                    })}
                                /> :
                                <input 
                                    type="radio"
                                    name={formName}
                                    value={value}
                                    {...register(formName)}
                                />
                            }
                            {label}
                        </label>
                    );
                })}
                {/* エラーメッセージ(validation) */}
                {!!formState.errors[formName] && required && 
                    <p className={styles.errorMessage}>{formState.errors[formName].message}</p>}
            </label>
        </FormParts>
    );
}