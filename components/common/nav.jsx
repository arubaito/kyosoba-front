import Link from "next/link";
import styles from "styles/common_components/nav.module.css";

/* ナビゲーションメニューを表示するコンポーネント */
export default function Nav(){
    return(
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href="/raceIchiran">レース結果一覧</Link>
                </li>
                <li>
                    <Link href="/">メニュー２</Link>
                </li>
                <li>
                    <Link href="/">メニュー３</Link>
                </li>
            </ul>
        </nav>
    );
}