import Image from 'next/image';
import styles from 'styles/page/horse.module.css';
import sodashi from 'public/image/sodashi.jpg'; // 画像をimportするとNext.jsは色々便利
import UmaInfoIconGroup from 'components/utils/UmaInfoIcon/UmaInfoIconGroup';
import UmaInfoName from 'components/utils/UmaInfoName/UmaInfoName';
import { getKyosobaInfo } from 'lib/api';

/*
    競走馬詳細情報画面
    getServerSidePropsでサーバから取得してきた競走馬の情報を表示
 */
export default function Horse({ 
    name,
    birthday,
    kyusha,
    seisansyla,
    jockey,
    banushi,
    tsusanseiseki,
    syokin,
    ketto,
    }) {
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

/* SSG */
export async function getServerSideProps(){
    
    console.log("horse/index.jsx#getServerSideProps")

    // サーバから競走馬の情報を取得
    const response = await getKyosobaInfo();
    console.log(response);

    // 競走馬の各情報をオブジェクト形式に
    return {
        props:{
            name:response.name,
            birthday:response.birthday,
            kyusha: response.kyusha,
            seisansya: response.seisansya,     
            jockey: response.jockey,
            banushi: response.banushi,
            tsusanseiseki: response.tsusanseiseki,
            syokin: response.syokin,
            ketto: response.ketto,
        },
    }
}
