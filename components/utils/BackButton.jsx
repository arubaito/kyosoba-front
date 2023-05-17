import styles from "styles/utils_components/BackButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import Button from "components/utils/Button";

/*
    戻るボタン
    eventHandler:処理をおこなうイベントハンドラ
 */
export default function BackButton({ eventHandler, children }) {
    return (
        <Button eventHandler={eventHandler}>
            <FontAwesomeIcon className={styles.icon} icon={faLeftLong} />
            <span className={styles.text}> 戻る</span>
        </Button>
    );
}