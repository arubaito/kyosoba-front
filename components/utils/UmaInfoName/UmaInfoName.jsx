import styles from "styles/utils_components/UmaInfoName/UmaInfoName.module.css"

/*
    馬名と性齢を表示するコンポーネント
 */
export default function UmaInfoName() {
    return (
        <div className={styles.horseNameContents}>
            <h1 className={styles.Name}>ソダシ</h1>
            <p className={styles.discript}>牝 5 歳　白毛</p>
        </div>
    );
}