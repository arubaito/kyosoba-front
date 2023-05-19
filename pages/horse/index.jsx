import Image from 'next/image';
import styles from 'styles/page/horse.module.css';
import sodashi from 'public/image/sodashi.jpg'; // 画像をimportするとNext.jsは色々便利
import UmaInfoIconGroup from 'components/utils/UmaInfoIcon/UmaInfoIconGroup';
import UmaInfoName from 'components/utils/UmaInfoName/UmaInfoName';

export default function Horse({ horseName }) {
    return (
        <>
            <div className={styles.horseInfo}>
                {/* 馬名 */}
                <UmaInfoName />
                <div className={styles.flexibleContents}>
                    {/* 馬の写真 */}
                    <div className={styles.horsePictureContainer}>
                        <Image
                            src={sodashi}
                            className={styles.horsePicture}
                        />
                        <div style={{border:"1px solid black", margin:"0 1em"} }> 写真を拡大する(おいおい実装)</div>
                    </div>
                    {/* 馬の情報 */}
                    <div className={styles.horseInfoDetail}>
                        <UmaInfoIconGroup />
                    </div>
                </div>
            </div>
        </>
    );
} 