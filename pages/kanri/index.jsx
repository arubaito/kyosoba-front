import styles from "styles/page/K05_Kanri.module.css";
import TitleAndIcon from "components/common/titleAndIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons"; 
import Link from "next/link";

/**
 * (K05)管理画面
 */
export default function K05_Kanri(){
    return (
        <div className={styles.kanriContentsBox}>
            <TitleAndIcon title="管理メニュー">
                <FontAwesomeIcon icon={faGear} />
            </TitleAndIcon>

            <div className={styles.menuContentsBox}>
                <Link 
                    className={styles.menuContents} 
                    href="kanri/registerRace"
                >
                    <div>レース登録</div>
                </Link>
                <Link 
                    className={styles.menuContents} 
                    href="kanri/registerRace"
                >
                    <div>レース結果登録</div>
                </Link>
                <Link 
                    className={styles.menuContents} 
                    href="kanri/registerRace"
                >
                    <div>競走馬登録</div>
                </Link>
            </div>
        </div>
    );
}