import styles from "styles/page/K02_Syussouhyou.module.css";
import { useState } from "react";
import Select from "react-select";
import { GrEmptyCircle } from "react-icons/gr"
import { FiTriangle, FiCircle } from "react-icons/fi";
import { BsFillTriangleFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineStar } from "react-icons/ai";

export default function Syussouhyou({raceKekkaList, raceZisshiId}){
    return (
        <table className={styles.table}>
            {/* テーブルのヘッダ */}
            <thead>
                <tr className={styles.header}>
                    <td>着順</td>
                    <td>枠</td>
                    <td>馬番</td>
                    <td>予想</td>
                    <td>馬名</td>
                    <td>性齢</td>
                    <td>騎手</td>
                    <td>人気</td>
                </tr>
            </thead>
            <RaceKekkaTableBody raceKekkaList={raceKekkaList} raceZisshiId={raceZisshiId} />
        </table>
    );
}

// 予想セレクトボックスの選択肢(react-selectで使う)
const options = [
    {
        value: 7,
        label:"--",
    },
    {
        value: 1,
        label:<GrEmptyCircle />,
    },
    {
        value: 2,
        label:<FiCircle />,
    },
    {
        value: 3,
        label:<BsFillTriangleFill />,
    },
    {
        value: 4,
        label:<FiTriangle />,
    },
    {
        value: 5,
        label:<RxCross1 />,
    },
    {
        value: 6,
        label:<AiOutlineStar />,
    },
];

/**
 * レース結果の各競走馬のテーブルデータを表示するコンポーネント
 * 
 * @param APIから送られてくるレースに出走した馬とその結果のリスト 
 * @returns <tr>でマークアップされた各要素
 */
function RaceKekkaTableBody({raceKekkaList, raceZisshiId}){
    
    return (
        <tbody>
            {/* 各レコードを生成 */}
            {raceKekkaList.map(({
                tyakuzyun, waku, umaban, yosou, bamei, seirei, kisyu, ninki, kyosobaId
            }) => {

                // 予想の値は前回選択した値で初期化
                const [selectedValue, setSelectedValue] = useState(options[yosou]);

                // コンポーネントの返却
                return(
                    <tr key={umaban}>
                        <td className={styles.tyakuzyun}>{tyakuzyun}</td>
                        <td className={`${styles.waku} ${
                            (waku == 1) ? styles.waku :
                            (waku == 2) ? styles.waku2 :
                            (waku == 3) ? styles.waku3 :
                            (waku == 4) ? styles.waku4 :
                            (waku == 5) ? styles.waku5 :
                            (waku == 6) ? styles.waku6 :
                            (waku == 7) ? styles.waku7 :
                            styles.waku8                        
                        }`}>
                        {waku}</td>
                        <td className={styles.umaban}>{umaban}</td>
                        <td className={styles.yosou}>
                            <Select
                                id="yosouSelectBox"
                                instanceId="yosouSelectBox"
                                options={options}
                                defaultValue={selectedValue}
                                onChange={(value) => {
                                    value ? updateRaceYosou(raceZisshiId, kyosobaId, value.value) : null;
                                }}
                            />
                        </td>
                        <td className={styles.bamei}>{bamei}</td>
                        <td className={styles.seirei}>{seirei}</td>
                        <td className={styles.kisyu}>{kisyu}</td>
                        <td className={styles.ninki}>{ninki}</td>
                    </tr>
                )
        })}
        </tbody>
    );
}

/**
 * レース予想のセレクトボックスを更新した際にDBの値を更新
 * 
 * @param {*} raceZisshiId 
 * @param {*} kyosobaId 
 * @param {*} yosou 
 */
async function updateRaceYosou(raceZisshiId, kyosobaId, yosou){
    
    console.log("K02_Syussouhyou.jsx#updateRaceYosou");
    
    const response = await fetch("http://localhost:8080/update-race-yosou", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            raceZisshiId, 
            kyosobaId,
            yosou,
        }),
    })
}