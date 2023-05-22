import UmaInfo from "components/utils/UmaInfoIcon/UmaInfoIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/utils_components/UmaInfoIcon/UmaInfoIcon.module.css";

export default function UmaInfoTsusanSeiseki({tsusanseiseki}){
    
    return (
        <UmaInfo>
            <FontAwesomeIcon className={styles.icon} icon={faFlagCheckered} />
            <p className={styles.title}>通算成績</p>
            <p className={styles.contents}>{tsusanseiseki}</p>
        </UmaInfo>
    );
}