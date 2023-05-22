import UmaInfo from "components/utils/UmaInfoIcon/UmaInfoIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/utils_components/UmaInfoIcon/UmaInfoIcon.module.css";

export default function UmaInfoBanushi({banushi}){
    return (
        <UmaInfo>
            <FontAwesomeIcon className={styles.icon} icon={faUserTie} />
            <p className={styles.title}>馬主(馬主会)</p>
            <p className={styles.contents}>{banushi}</p>
        </UmaInfo>
    );
}