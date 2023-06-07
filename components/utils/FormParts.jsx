import styles from "styles/utils/FormParts.module.css";
import { Form, FormProvider, useForm } from "react-hook-form";

/**
 * インプットフォームを構築する汎用コンポーネント
 * @param {*} param0 
 * @returns 
 */
export default function FormParts({ required = false, labelName, formName, children }) {

    return (
        <div className={styles.formItem}>
            {/* ラベル */}
            <p className={styles.formItemLabel}>
                {/* 必須マーク */}
                {
                    required &&
                    <span className={styles.formItemLabelRequired}>必須</span>
                }
                <label htmlFor={formName}>{labelName}</label>
            </p>
                {/* 入力フォーム */}
            <div className={styles.formItemInput}>
                {children}
            </div>
        </div>
    );

}