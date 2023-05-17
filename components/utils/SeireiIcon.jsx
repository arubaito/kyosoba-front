import styles from "styles/utils_components/SeireiIcon.module.css";

/*
    性齢のアイコン
 */
export default function SeireiIcon({children}){
    return (
        <div className={styles.icon}>
            {children}
        </div>
    );
}