import styles from "styles/page/K05_RegisterRaceResult.module.css";
import TitleAndIcon from "components/common/titleAndIcon";
import { BsClipboardCheck } from "react-icons/bs";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Select from "react-select";
import { useState } from "react";

/**
 * (K05) レース結果登録画面
 * @returns 
 */
export default function RegisterRaceResulet({ raceZisshiNameList, kyosobaList, jockeyList }) {

    return (
        <div className={styles.kanriContentsBox}>
            <TitleAndIcon title="レース結果登録">
                <BsClipboardCheck />
            </TitleAndIcon>
            <div>
                <RegisterForm
                    raceZisshiNameList={raceZisshiNameList}
                    kyosobaList={kyosobaList}
                    jockeyList={jockeyList}
                />
            </div>
        </div>
    );
}

/**
 * SSG
 */
export async function getServerSideProps() {

    console.log("registerRaceResult#getServerSideProps");

    // レース実施名と実施日付とレース実施IDを取得
    const raceZisshiNameList = await getRaceNameAndZisshiDate();
    console.log(raceZisshiNameList);
    const kyosobaList = await getKyosoba();
    const jockeyList = await getJockey();

    return {
        props: {
            raceZisshiNameList: raceZisshiNameList,
            kyosobaList: kyosobaList,
            jockeyList: jockeyList,
        },
    }
}

/**
 * 過去のレース名とか実施日とかを返す関数
 */
async function getRaceNameAndZisshiDate() {
    try {
        const response = await fetch("http://localhost:8080/get-race-zisshi-name-date");
        const res = await response.json();
        return res;
    } catch (err) {
        console.log(err);
    }
}

/**
 * 騎手名と騎手IDを返す関数
 */
async function getJockey() {
    try {
        const response = await fetch("http://localhost:8080/get-jockey");
        const res = await response.json();
        return res;
    } catch (err) {
        console.log(err);
    }
}

/**
 * 競走馬名とIDを返す関数
 */
async function getKyosoba() {
    try {
        const response = await fetch("http://localhost:8080/get-kyosoba");
        const res = await response.json();
        return res;
    } catch (err) {
        console.log(err);
    }
}


/**
 * 登録フォーム本体
 * 
 * @param {array} レース名のリスト
 * @param {array} 競走馬名のリスト
 * @param {array} 騎手のリスト 
 * @returns 登録フォーム本体のコンポーネント
 */
function RegisterForm({ raceZisshiNameList, kyosobaList, jockeyList }) {

    console.log("registerRaceResult#RegisterForm")

    // React Hook Formの設定
    const { register, handleSubmit, formState, control } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {

        }
    })

    // 登録ボタンのハンドラ
    const handleOnSubmit = (values) => {
        console.log(values);
    }

    //**** セレクトボックスのリスト ****//
    // レース名
    const optionsRaceList = [];
    raceZisshiNameList.map(({ raceZisshiId, raceName, kaisaiDate }) => {
        optionsRaceList.push({ value: { raceZisshiId }, label: `${raceName}`, date: {kaisaiDate} }); // ``で囲まないとエラー
    });
    // 競走馬
    const optionsKyosobaList = [];
    kyosobaList.map(({ id, bamei }) => {
        optionsKyosobaList.push({ value: { id }, label: `${bamei}` })
    });
    // 騎手
    const optionsJockeyList = [];
    jockeyList.map(({ kisyuId, kisyumei }) => {
        optionsJockeyList.push({ value: { kisyuId }, label: `${kisyumei}` });
    });

    /* MAXが頭数になる処理 */
    const tousu = 17; // TODO API側で頭数を取ってきて、レース名に応じて動的に変更の必要あり
    // 着順のセレクトボックス
    const optionsTyakuzyunList = [];
    for (var i = 1; i <= tousu; i++) {
        optionsTyakuzyunList.push({ value: { i }, label: `${i}` });
    }
    optionsTyakuzyunList.push({ value: "", label: "--" })

    // 人気のセレクトボックス
    const optionsNinkiList = [];
    for (var i = 1; i <= tousu; i++) {
        optionsNinkiList.push({ value: { i }, label: `${i}` });
    }

    // テーブルのレコードの生成
    const recordList = [];
    for (var i = 1; i <= tousu; i++) {
        recordList.push(
            <tr key={i}>
                <td>
                    {/* 枠 */}
                    <input className={styles.waku} type="number" defaultValue={i} {...register(`result.${i}.waku`)} />
                </td>
                <td>
                    {/* 馬番 */}
                    <div className={styles.umaban}>{i}</div>
                    <input type="hidden" value={i} {...register(`result.${i}.umaban`)} />
                </td>
                <td>
                    {/* 馬名 */}
                    <Controller
                        name={`result.${i}.bamei`}
                        control={control}
                        render={({ field }) =>
                            <Select
                                className={styles.bamei}
                                options={optionsKyosobaList}
                                onChange={(newValue) => field.onChange(newValue.value)}
                            />}
                    />
                </td>
                <td>
                    {/* 騎手名 */}
                    <Controller
                        name={`result.${i}.kisyu`}
                        control={control}
                        render={({ field }) =>
                            <Select
                                className={styles.kisyu}
                                options={optionsJockeyList}
                                onChange={(newValue) => field.onChange(newValue.value)}
                            />}
                    />
                </td>
                <td>
                    {/* 着順 */}
                    <Controller
                        name={`result.${i}.tyakuzyun`}
                        control={control}
                        render={({ field }) =>
                            <Select
                                className={styles.tyakuzyun}
                                options={optionsTyakuzyunList}
                                defaultValue={{ value: "", label: "--" }}
                                onChange={(newValue) => field.onChange(newValue.value)}
                            />}
                    />
                </td>
                <td>
                    {/* 人気 */}
                    <Controller
                        name={`result.${i}.ninki`}
                        control={control}
                        render={({ field }) =>
                            <Select
                                className={styles.ninki}
                                options={optionsNinkiList}
                                defaultValue={{ value: "", label: "--" }}
                                onChange={(newValue) => field.onChange(newValue.value)}
                            />}
                    />
                </td>
            </tr>
        )
    }
    const [zisshibi, changeDate] = useState("実施日");

    /* コンポーネントの返却 */
    return (
        <>
            <form onSubmit={handleSubmit(handleOnSubmit)} className={styles.form} >
                <FormProvider register={register} formState={formState}>
                    <div className={styles.raceNameAndDateContainer}>
                        <div className={styles.raceItem}>
                            {/* レース名 */}
                            <label className={styles.formItemSelect}>
                                <p>レース名</p>
                            </label>
                            {/* React-SelectとRHFを組み合わせる https://goodlife.tech/posts/react-select.html */}
                            <Controller
                                name="raceZisshiId"
                                control={control}
                                render={({ field }) =>
                                    <Select
                                        options={optionsRaceList}
                                        onChange={(newValue) => {
                                            console.log(newValue);
                                            changeDate(newValue.date.kaisaiDate);
                                            field.onChange(newValue.value)
                                        }}
                                    />}
                            />
                        </div>
                        {/* 日付表示 */}
                        <div className={styles.dateItem}>
                            <div>開催日</div>
                            <div>{zisshibi}</div>
                        </div>
                    </div>

                    {/* レース結果入力欄 */}
                    <div className={styles.tableContainer}>
                        <table className={styles.formTable}>
                            <thead>
                                <tr>
                                    <th className={styles.waku}>枠</th>
                                    <th>馬番</th>
                                    <th>馬名</th>
                                    <th>騎手</th>
                                    <th>着順</th>
                                    <th>人気</th>
                                </tr>
                            </thead>
                            {/* テーブル本体 */}
                            <tbody>
                                {recordList}
                            </tbody>
                        </table>
                    </div>
                    {/* 登録ボタン */}
                    <button className={styles.formButton} type="submit">
                        登録
                    </button>
                </FormProvider>
            </form >
        </>
    )
}