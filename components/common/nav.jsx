import Link from "next/link";
import styles from "styles/common_components/nav.module.css";
import { GiHorseshoe } from "react-icons/gi"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHorse } from "@fortawesome/free-solid-svg-icons"; 

/* ナビゲーションメニューを表示するコンポーネント */
export default function Nav(){
    return(
        <nav>
            <ul className={styles.list}>
                <li className={styles.race}>
                    <Link href="/raceIchiran">
                        <GiHorseshoe />
                        <div className={styles.navText}>レース</div>
                    </Link>
                </li>
                <li className={styles.kyosoba}>
                    <Link href="/">
                        <FontAwesomeIcon icon={faHorse} />
                    <div className={styles.navText}>競走馬</div>
                    </Link>
                </li>
                <li className={styles.kanri}>
                    <Link href="/kanri">
                        <FontAwesomeIcon icon={faGear} />
                        <div className={styles.navText}>管理メニュー</div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}