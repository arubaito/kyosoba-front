import Button from "components/utils/Button";
import styles from "styles/page/K01_MiruButton.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

/*
    「見る」ボタン
 */
export default function MiruButton({eventHandler}){
    return(
        <>
            <Button eventHandler={eventHandler}>
                <FontAwesomeIcon className={styles.icon} icon={faEye} />
                <span className={styles.text}>見る</span>
            </Button>
        </>
    );
}