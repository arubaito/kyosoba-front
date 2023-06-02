import RaceKekkaMemo from "components/K02_RaceKekkaMemo";
import Syussouhyou from "components/K02_Syussouhyou";
import { getRaceKekka } from "lib/api";
import { useRouter } from "next/router";
import styles from "styles/page/K02_RaceKekka.module.css";

/*
    (K02)レース結果メモ画面
    getServerSidePropsでサーバから取得してきた競走馬の情報を表示
 */
export default function RaceKekka({raceKekkaList}){
    return (
        <div className={styles.raceContentsBox}>
            <div>
                <span>日本ダービー</span>
                <span> GI</span>
            </div>
            <Syussouhyou raceKekkaList={raceKekkaList} />
            {/* メモ入力欄 */}
            <RaceKekkaMemo />
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
    // サーバからレース結果のメモを取得

    return {
        props:{
            raceKekkaList:response.raceKekkaList,
        },
    }

}
