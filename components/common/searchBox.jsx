import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "styles/common_components/search.module.css";
/**
 * 検索ボックス
 * ほぼコピペ⇒https://cotodama.co/search-box/
 */ 
export default function SearchBox(){
    return(
        <>
            <form className={styles.searchBox} onClick={(value) => {console.log(value)}}>
                <input type="text" size="25" placeholder="レース検索" />
                <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </>
    );
}