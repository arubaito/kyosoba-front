import styles from "styles/common_components/titleAndIcon.module.css"

/**
 * 画面のタイトルとアイコンを設定するためのコンポーネント
 * @param {*} param0 : 子要素にアイコンを設定 
 */
export default function TitleAndIcon({children, title}){

    return (
        <h1 className={styles.titleAndIcon}>
            {children}
            <div className={styles.title}>{title}</div>
        </h1>
    );
}