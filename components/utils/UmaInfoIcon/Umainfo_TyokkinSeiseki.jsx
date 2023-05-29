import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/utils_components/UmaInfoIcon/UmaInfo_TyokkinSeiseki.module.css";

/**
 * 直近成績を表示する枠組みモジュール
 */
export default function UmaInfoTyokkinSeiseki({raceResultList}){
    console.log(raceResultList);
    return (
        <div className={styles.seisekiGroupContainer}>
            <h1 className={styles.title}>
                <FontAwesomeIcon className={styles.icon} icon={faTrophy} />
                <span>直近成績</span>
            </h1>
            <span>※データが流動的のため工事中※</span>
            <div className={styles.seisekiContainer}>
                {/* 最新 */}
                <UmaInfoSeiseki
                    raceResult={raceResultList[0]}
                />
                {/* ２番目 */}
                <UmaInfoSeiseki
                    raceResult={raceResultList[0]}
                />
            </div>
        </div>
    );
}

/**
 * レースの成績を表示するモジュール
 */
function UmaInfoSeiseki({raceResult}){
    return (
        <div className={styles.seisekiContents}>
            <div className={styles.raceName}>
                {raceResult.raceName}
                <span>{raceResult.raceRank}</span>
            </div>
            <div className={styles.date}>
                {raceResult.date}
            </div>
            <div className={styles.rank}>
                {raceResult.rank}
            </div>
            <div className={styles.kyori}>
                {raceResult.kyori}
            </div>
            <div className={styles.jockey}>
                {raceResult.jockey}
            </div>
            <div className={styles.waku}>
                {raceResult.waku}
            </div>
        </div>


    );
}