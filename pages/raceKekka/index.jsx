import Syussouhyou from "components/K02_Syussouhyou";
import { getRaceKekka } from "lib/api";
import styles from "styles/page/K02_RaceKekka.module.css";

/*
    予想画面
    getServerSidePropsでサーバから取得してきた競走馬の情報を表示
 */
export default function RaceKekkaMemo({raceKekkaList}){
    return (
        <div className={styles.raceContentsBox}>
            <div>
                <span>日本ダービー</span>
                <span> GI</span>
            </div>
            <Syussouhyou raceKekkaList={raceKekkaList} />
            {/* メモ入力欄 */}
            <div className={styles.raceMemoArea}>
                <h3>レースメモ</h3>
                <textarea 
                    className={styles.textArea} 
                    name="memo"
                    rows="8"
                />
                <button>保存</button>
            </div>
        </div>
    );
}

/* SSG */
export async function getServerSideProps(){
    
    console.log("raceKekkaMemo/index.jsx#getServerSideProps");

    // サーバからレース結果の競走馬一覧を取得
    const response = await getRaceKekka();
    console.log(response);
    // サーバからレース結果のメモを取得

    return {
        props:{
            raceKekkaList:response.raceKekkaList,
        },
    }




}
