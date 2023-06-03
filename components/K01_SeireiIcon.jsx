import styles from "styles/page/K01_SeireiIcon.module.css";

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