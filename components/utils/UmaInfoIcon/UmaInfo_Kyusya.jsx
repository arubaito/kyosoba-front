import UmaInfo from "components/utils/UmaInfoIcon/UmaInfoIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/utils_components/UmaInfoIcon/UmaInfoIcon.module.css";

export default function UmaInfoKyusya({kyusya}){
    return (
        <UmaInfo>
            <FontAwesomeIcon className={styles.icon} icon={faHouse} />
            <p className={styles.title}>厩舎</p>
            <p className={styles.contents}>{kyusya}</p>
        </UmaInfo>
    );
}