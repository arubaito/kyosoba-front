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
                    <Link href="/raceIchiran">
                        <GiHorseshoe />
                        <div className={styles.navText}>レース一覧</div>
                    </Link>
                </li>
                <li>
                    <Link href="/">メニュー２</Link>
                </li>
                <li>
                    <Link href="/kanri">
                        <FontAwesomeIcon icon={faGear} />
                        <div className={styles.navText}>管理メニュー</div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}