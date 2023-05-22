import UmaInfo from "components/utils/UmaInfoIcon/UmaInfoIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTractor } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/utils_components/UmaInfoIcon/UmaInfoIcon.module.css";

export default function UmaInfoSeisansya({seisansya}){
    return (
        <UmaInfo>
            <FontAwesomeIcon className={styles.icon} icon={faTractor} />
            <p className={styles.title}>生産者</p>
            <p className={styles.contents}>{seisansya}</p>
        </UmaInfo>
    );
}