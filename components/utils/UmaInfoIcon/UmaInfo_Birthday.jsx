import UmaInfo from "components/utils/UmaInfoIcon/UmaInfoIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/utils_components/UmaInfoIcon/UmaInfoIcon.module.css";

export default function UmaInfoBirthday({birthday}){
    return (
        <UmaInfo>
            <FontAwesomeIcon className={styles.icon} icon={faCakeCandles} /> 
            <p className={styles.title}>生年月日</p>
            <p className={styles.contents}>{birthday}</p>
        </UmaInfo>
    );
}