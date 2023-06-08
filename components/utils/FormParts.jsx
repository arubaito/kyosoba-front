import styles from "styles/utils/FormParts.module.css";

/**
 * フォームの枠組み
 * 
 * @param {boolean} required: 必須マークを付けるかどうか 
 * @param {string} labelName: ラベル名 
 * @param {string} formName: フォームのID
 * @returns JSXコンポーネント
 */
export default function FormParts({ required = false, labelName, formName, children }) {

    return (
        <div className={styles.formItem}>
            {/* ラベル */}
            <p className={styles.formItemLabel}>
                {/* 必須マーク */}
                {required &&
                    <span className={styles.formItemLabelRequired}>必須</span>}
                <label htmlFor={formName}>{labelName}</label>
            </p>
            {/* フォーム部品をchildrenで受け取る */}
            {children}
        </div>
    );

}