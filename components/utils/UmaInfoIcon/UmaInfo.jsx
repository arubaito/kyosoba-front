import styles from "styles/utils_components/UmaInfoIcon/UmaInfo.module.css"

/*
   馬の情報をアイコン表示するパーツ 
 */
export default function UmaInfo({children}){
    return (
        <div className={styles.iconContainer}>
            {children}
        </div>
    );
}