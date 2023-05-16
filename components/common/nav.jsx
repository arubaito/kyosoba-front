import Link from "next/link";
import styles from "styles/common_components/nav.module.css";

/* ナビゲーションメニューを表示するコンポーネント */
export default function Nav(){
    return(
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href="/">トップ</Link>
                </li>
                <li>
                    <Link href="/">工事中</Link>
                </li>
                <li>
                    <Link href="/">ふが</Link>
                </li>
            </ul>
        </nav>
    );
}