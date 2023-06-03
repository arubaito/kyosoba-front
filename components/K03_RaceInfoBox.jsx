import styles from "styles/page/K03_RaceInfoBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faSnowman } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

/**
 * レース一覧画面の各レース情報を表示するコンポーネント
 * @param {*} param0 
 * @returns 
 */
export default function RaceInfoBox({raceInfoList}){
    return (
        <div className={styles.raceIchiran}>
                {/* 各レースのボックス */}
                {
                    raceInfoList.map(({
                        raceZisshiId, raceName, raceGrade, raceDate, kyori, tousu,
                        tenko, baba, tyakuzyun1, tyakuzyun2, tyakuzyun3
                    }) => {
                        /* 定数の変換 */
                        // レースグレード
                        raceGrade = (
                            raceGrade === 1 ? "GI"
                            : raceGrade === 2 ? "GⅡ"
                            : raceGrade === 3 ? "GⅢ"
                            : ""
                        );
                        // 馬場状態
                        baba = (
                            baba ===  1 ? "良"
                            : baba === 2 ? "稍重"
                            : baba === 3 ? "重"
                            : "不良"
                        );

                        /* 各レースのボックスを生成 */
                        return (
                        <Link href={{pathname : "/raceKekka", query : {
                            // リンク先にqueryパラメータで値を受け渡し
                            raceZisshiId: raceZisshiId,
                            raceName: raceName,
                            raceGrade: raceGrade,
                            raceDate: raceDate,
                            kyori: kyori,
                            tousu: tousu,
                            tenko: tenko, // 天候はアイコンに変換してるので定数で受け渡しておく
                            baba: baba,
                        }}}>
                        <div className={styles.raceBox}>
                            <div className={styles.raceRank}>{raceGrade}</div>
                            <div className={styles.raceName}>{raceName}</div>
                            <div className={styles.raceInfo}>
                                <div>{raceDate}</div>
                                <div>{kyori}m</div>
                                <div>{tousu}頭</div>
                                <div>天気：
                                    {
                                    tenko === 1 ? <FontAwesomeIcon icon={faSun} />
                                    : tenko == 2 ? <FontAwesomeIcon icon={faCloud} />
                                    : tenko == 3 ? <FontAwesomeIcon icon={faCloudShowersHeavy} />
                                    : tenko == 4 ? <FontAwesomeIcon icon={faCloudRain} />
                                    : tenko == 5 ? <FontAwesomeIcon icon={faSnowman} /> 
                                    : <FontAwesomeIcon icon={faSnowflake} />
                                    }
                                </div>
                                <div>芝：
                                    {baba}
                                </div>
                            </div>
                            <div className={styles.tyakuzyun}>
                                <div>1着:{tyakuzyun1}</div>
                                <div>2着:{tyakuzyun2}</div>
                                <div>3着:{tyakuzyun3}</div>
                            </div>
                        </div>
                        </Link>
                    )}
                    )
                }
        </div>
    );
}