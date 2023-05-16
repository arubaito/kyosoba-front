import Link from "next/link";
import styles from "styles/common_components/logo.module.css"

/* 
    ロゴのコンポーネント
    boxOn : ロゴの見た目をボックススタイルかただのロゴにするか切り替え
*/
export default function Logo({boxOn=false}){
    return(
        <Link 
            href="/"
            className={boxOn ? styles.box : styles.basic}
        >
            (仮)競走馬
        </Link>
    );
}