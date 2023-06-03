import RaceKekkaMemo from "components/K02_RaceKekkaMemo";
import Syussouhyou from "components/K02_Syussouhyou";
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
            // TODO contextからレース名とレースグレードを取得する(Java側も要修正)
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