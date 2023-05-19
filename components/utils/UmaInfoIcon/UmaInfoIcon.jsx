import styles from "styles/utils_components/UmaInfoIcon/UmaInfoIcon.module.css"

/*
   馬の情報をアイコン表示するパーツ 
 */
export default function UmaInfoIcon({children}){
    return (
        <div className={styles.iconContainer}>
            {children}
        </div>
    );
}