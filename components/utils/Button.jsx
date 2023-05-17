import styles from "styles/utils_components/Button.module.css"

/*
    汎用的なボタン
    eventHandler:処理をおこなうイベントハンドラ
 */
export default function Button({eventHandler, children}){
    return (
        <div className={styles.button} onClick={eventHandler}>
            {children}
        </div>
    );
}