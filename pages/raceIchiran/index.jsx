import styles from "styles/page/K03_RaceIchiran.module.css";
import RaceInfoBox from "components/K03_RaceInfoBox";
import TitleAndIcon from "components/common/titleAndIcon";
import { GiHorseshoe } from "react-icons/gi"

/**
 * (K03)レース一覧画面のコンポーネント
 * 
 * @param {*} param0 
 * @returns 
 */
export default function ({raceInfoList}) {
    return (
        <div className={styles.raceIchiranContentsBox}>
            {/* タイトル */}
            <TitleAndIcon title="レース一覧">
                <GiHorseshoe />
            </TitleAndIcon>

            {/* メインコンテンツ */}
            <RaceInfoBox raceInfoList={raceInfoList} />
        </div>
    );
}

/* SSG */
export async function getServerSideProps(){

    console.log("raceIchiran/index.jsx#getServerSideProps");

    // サーバからレース結果の一覧を取得
    const response = await getRaceIchiran();
    console.log(response);

    return {
        props:{
            raceInfoList:response,
        },
    }
} 


// レース結果の一覧をサーバから取得する関数
async function getRaceIchiran(){
    try{
        const response = await fetch("http://localhost:8080/race-kekka-ichiran");
        const res = await response.json();
        return res;
    }catch(err){
        console.log(err);
    }
}
