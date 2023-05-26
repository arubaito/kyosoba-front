// import UmaInfo from "components/utils/UmaInfoIcon/UmaInfoIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/utils_components/UmaInfoIcon/UmaInfo_Kettou.module.css";

export default function UmaInfoKettou({ children }) {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <FontAwesomeIcon icon={faVenusMars} />
                <span>血統</span>
            </h1>
            <p>(作成中)血統表は5-7世代見れる様にする</p>
            <div className={styles.contents}>{children}</div>
            
        </div>
    );
}