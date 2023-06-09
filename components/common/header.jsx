import Logo from "./logo";
import Nav from "./nav";
import styles from "styles/common_components/header.module.css";
import SearchBox from "./searchBox";

/* ページ共通のヘッダ */
export default function Header(){
    return (
        <header>
            <div className={styles.flexContainer}>
                <Logo boxOn/>
                <div className={styles.searchBox}>
                    <SearchBox />
                </div>
                <Nav />
            </div>
        </header>
    );
}