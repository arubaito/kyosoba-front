import styles from "styles/page/K03_RaceIchiran.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDungeon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function () {
    return (
        <div className={styles.raceIchiranContentsBox}>
            <h1 className={styles.titleAndIcon}>
                <FontAwesomeIcon icon={faDungeon} size="1.5x" />
                <div className={styles.title}>レース一覧</div>
            </h1>
            <div className={styles.raceIchiran}>
                {/* 各レースのボックス */}
                <div className={styles.raceBox}>
                    <div className={styles.raceRank}>GI</div>
                    <div className={styles.raceName}>日本ダービー</div>
                    <div className={styles.raceInfo}>
                        <div>2023/5/28</div>
                        <div>2400m</div>
                        <div>16頭</div>
                        <div>天気：<FontAwesomeIcon icon={faSun} /></div>
                        <div>芝：良</div>
                    </div>
                    <div className={styles.tyakuzyun}>
                        <div>1着:タスティエーラ</div>
                        <div>2着:タスティエーラ</div>
                        <div>3着:タスティエーラ</div>
                    </div>
                </div>



                <div className={styles.raceBox}>
                    <div className={styles.raceName}>日本ダービー</div>
                    <div className={styles.raceInfo}>
                        <div>2023/5/28</div>
                        <div>芝</div>
                        <div>2400m</div>
                        <div>16着</div>
                        <div>晴</div>
                        <div>良</div>
                    </div>
                    <div className={styles.tyakuzyun}>
                        <div>1着:タスティエーラ</div>
                        <div>2着:タスティエーラ</div>
                        <div>3着:タスティエーラ</div>
                    </div>
                </div>
                <div className={styles.raceBox}>
                    <div className={styles.raceName}>日本ダービー</div>
                    <div className={styles.raceInfo}>
                        <div>2023/5/28</div>
                        <div>芝</div>
                        <div>2400m</div>
                        <div>16着</div>
                        <div>晴</div>
                        <div>良</div>
                    </div>
                    <div className={styles.tyakuzyun}>
                        <div>1着:タスティエーラ</div>
                        <div>2着:タスティエーラ</div>
                        <div>3着:タスティエーラ</div>
                    </div>
                </div>
                
                
                
                
            </div>
        </div>
    );
}