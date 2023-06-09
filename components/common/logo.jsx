import Link from "next/link";
import styles from "styles/common_components/logo.module.css"

/* 
    ロゴのコンポーネント
    boxOn : ロゴの見た目を切り替える
*/
export default function Logo({boxOn=false}){
    return(
        <Link 
            href="/"
            className={boxOn ? styles.box : styles.basic}
        >
            <div className={boxOn ? styles.logoTitleBox : styles.logoTitleBasic}>
                競馬予想アプリ
            </div>
        </Link>
    );
}