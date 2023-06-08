import Link from "next/link";
import styles from "styles/common_components/nav.module.css";
import { GiHorseshoe } from "react-icons/gi"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons"; 

/* ナビゲーションメニューを表示するコンポーネント */
export default function Nav(){
    return(
        <nav>
            <ul className={styles.list}>
                <li>
                    <GiHorseshoe />
                    <Link href="/raceIchiran" className={styles.navText}>レース一覧</Link>
                </li>
                <li>
                    <Link href="/">メニュー２</Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faGear} />
                    <Link href="/kanri" className={styles.navText}>管理メニュー</Link>
                </li>
            </ul>
        </nav>
    );
}