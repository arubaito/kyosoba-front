import RaceKekkaMemo from "components/K02_RaceKekkaMemo";
import Syussouhyou from "components/K02_Syussouhyou";
import styles from "styles/page/K02_RaceKekka.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faSnowman } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";

/*
    (K02)レース結果メモ画面
    getServerSidePropsでサーバから取得してきた競走馬の情報を表示
 */
export default function RaceKekka({
    raceKekkaList, raceZisshiId, raceName, raceGrade, raceDate, kyori, tousu, tenko, baba
}){
    return (
        <div className={styles.raceContentsBox}>
            <div className={styles.gridContainer}>
                <div className={styles.raceGrade}>{raceGrade}</div>
                <h1 className={styles.raceName}>{raceName}</h1>
                <div>
                    <span className={styles.raceDate}>{raceDate}</span>
                    <span className={styles.kyori}> / {kyori}m</span>
                    <span className={styles.tenko}> / 天候：
                                    {
                                    tenko == 1 ? <FontAwesomeIcon icon={faSun} />
                                    : tenko == 2 ? <FontAwesomeIcon icon={faCloud} />
                                    : tenko == 3 ? <FontAwesomeIcon icon={faCloudShowersHeavy} />
                                    : tenko == 4 ? <FontAwesomeIcon icon={faCloudRain} />
                                    : tenko == 5 ? <FontAwesomeIcon icon={faSnowman} /> 
                                    : <FontAwesomeIcon icon={faSnowflake} />
                                    }</span>
                    <span className={styles.tousu}> / {tousu}頭</span>
                    <span className={styles.baba}> / 馬場:{baba}</span>
                </div>
            </div>
            <Syussouhyou raceKekkaList={raceKekkaList} raceZisshiId={raceZisshiId} />
            {/* メモ入力欄 */}
            <RaceKekkaMemo raceZisshiId={raceZisshiId}/>
        </div>
    );
}

/**
 * SSG
 * 
 * getServerSidePropsの引数contextから受け取れるクエリパラメータから
 * レース実施IDを受け取りケース結果を検索する。
 *  
 * */
export async function getServerSideProps(context){
    
    console.log("raceKekkaMemo/index.jsx#getServerSideProps");

    // サーバからレース結果の競走馬一覧を取得
    const response = await getRaceKekka(context.query.raceZisshiId);
    console.log(response);

    return {
        props:{
            raceKekkaList: response.raceKekkaList,
            raceZisshiId: context.query.raceZisshiId,
            raceName: context.query.raceName, 
            raceGrade: context.query.raceGrade,
            raceDate: context.query.raceDate, 
            kyori: context.query.kyori,
            tousu: context.query.tousu, 
            tenko: context.query.tenko,
            baba: context.query.baba,
        },
    }
}

// レース結果の情報をサーバから取得する関数
async function getRaceKekka(raceZisshiId){
    try{
        const response = await fetch(`http://localhost:8080/race-kekka-${raceZisshiId}`);
        const res = await response.json();
        return res;
    }catch(err){
        console.log(err);
    }
}