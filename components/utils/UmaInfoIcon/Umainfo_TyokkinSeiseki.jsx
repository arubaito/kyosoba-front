import UmaInfo from "components/utils/UmaInfoIcon/UmaInfoIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/utils_components/UmaInfoIcon/UmaInfoIcon.module.css";

export default function UmaInfoJockey({jockey}){
    return (
        <UmaInfo>
            <FontAwesomeIcon className={styles.icon} icon={faTshirt} />
            <p className={styles.title}>主な鞍上</p>
            <p className={styles.contents}>{jockey}</p>
        </UmaInfo>
    );
}