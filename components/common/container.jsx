import styles from "styles/common_components/container.module.css";

/* このコンポーネントで囲むと画面幅をいい感じに調整してくれる物を作成予定 */

export default function Container({children}){
    return (
        <div className={styles.default}>
            {children}
        </div>
    );
}


