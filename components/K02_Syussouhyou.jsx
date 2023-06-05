import styles from "styles/page/K02_Syussouhyou.module.css";
import { useState } from "react";
import Select from "react-select";
import { GrEmptyCircle } from "react-icons/gr"
import { FiTriangle, FiCircle } from "react-icons/fi";
import { BsFillTriangleFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineStar } from "react-icons/ai";

export default function Syussouhyou({raceKekkaList}){
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
            <RaceKekkaTableBody raceKekkaList={raceKekkaList} />
        </table>
    );
}

// 予想セレクトボックスの選択肢(react-selectで使う)
const options = [
    {
        value: "未選択",
        label:"--",
    },
    {
        value: "本命",
        label:<GrEmptyCircle />,
    },
    {
        value: "対抗",
        label:<FiCircle />,
    },
    {
        value: "単穴",
        label:<BsFillTriangleFill />,
    },
    {
        value: "連下",
        label:<FiTriangle />,
    },
    {
        value: "バツ",
        label:<RxCross1 />,
    },
    {
        value: "穴馬",
        label:<AiOutlineStar />,
    },
];

/**
 * 
 * @param APIから送られてくるレースに出走した馬とその結果のリスト 
 * @returns <tr>でマークアップされた各要素
 */
function RaceKekkaTableBody({raceKekkaList}){
    const [selectedValue, setSelectedValue] = useState(options[0]);
    
    return (
        <tbody>
            {/* 各レコードを生成 */}
            {raceKekkaList.map(({
                tyakuzyun, waku, umaban, yosou, bamei, seirei, kisyu, ninki
            }) => {
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
                                    console.log(value);
                                    value ? setSelectedValue(value) : null;
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
