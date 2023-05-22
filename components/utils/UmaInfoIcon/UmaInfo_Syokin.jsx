import UmaInfo from "components/utils/UmaInfoIcon/UmaInfoIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/utils_components/UmaInfoIcon/UmaInfoIcon.module.css";

export default function UmaInfoSyokin({syokin}){
    return (
        <UmaInfo>
            <FontAwesomeIcon className={styles.icon} icon={faSackDollar} />
            <p className={styles.title}>獲得賞金</p>
            <p className={styles.contents}>{syokin}</p>
        </UmaInfo>
    );
}