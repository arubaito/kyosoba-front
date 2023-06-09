import { useFormContext } from "react-hook-form";
import styles from "styles/utils/FormButton.module.css";

/**
 * フォーム送信ボタン
 * React Hook Form のformStateが渡されてくる前提
 * 
 * @param {string} buttonName: ボタンの名前 
 */
export default function FormButton({buttonName}){
    
    const {formState} = useFormContext(); 
    
    return (
        <>
            <button 
                className={styles.formButton}
                type="submit"
                disabled={!formState.isDirty || formState.isSubmitting}>
                {buttonName}
            </button>
        </>
    );
}