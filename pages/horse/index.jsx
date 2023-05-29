import Image from 'next/image';
import styles from 'styles/page/horse.module.css';
import sodashi from 'public/image/sodashi.jpg'; // 画像をimportするとNext.jsは色々便利
import UmaInfoIconGroup from 'components/utils/UmaInfoIcon/UmaInfoIconGroup';
import UmaInfoName from 'components/utils/UmaInfoName/UmaInfoName';
import { getKyosobaInfo } from 'lib/api';
import UmaInfoKettou from 'components/utils/UmaInfoIcon/Umainfo_kettou';
import KettouhyouSyousai from 'components/KettouhyouSyousai';
import UmaInfoTyokkinSeiseki from 'components/utils/UmaInfoIcon/Umainfo_TyokkinSeiseki';

/*
    競走馬詳細情報画面
    getServerSidePropsでサーバから取得してきた競走馬の情報を表示
 */
export default function Horse({ 
        name,
        birthday,
        kyusya,
        seisansya,
        jockey,
        banushi,
        tsusanseiseki,
        syokin,
        raceResultList,
        sosen,
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
                            placeholder="blur"
                        />
                        <div style={{border:"1px solid black", margin:"0 1em"} }> 写真を拡大する(おいおい実装)</div>
                    </div>
                    {/* 馬の情報：引数で渡された情報をアイコンに渡す */}
                    <div className={styles.horseInfoDetail}>
                        <UmaInfoIconGroup 
                            birthday={birthday}
                            kyusya={kyusya}
                            seisansya={seisansya}
                            jockey={jockey}
                            banushi={banushi}
                            tsusanseiseki={tsusanseiseki}
                            syokin={syokin}
                        />
                    </div>
                </div>
                <UmaInfoKettou>
                    <KettouhyouSyousai sosen={sosen} />
                </UmaInfoKettou>
                <UmaInfoTyokkinSeiseki
                    raceResultList={raceResultList}
                 />
                
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

    // 競走馬の各情報をページコンポーネントへリターン
    return {
        props:{
            name:response.name,
            birthday:response.birthday,
            kyusya: response.kyusya,
            seisansya: response.seisansya,     
            banushi: response.banushi,
            syokin: response.syokin,
            tsusanseiseki: `${response.tsusanSeiseki.syobusu}戦${response.tsusanSeiseki.syorisu}勝`,
            raceResultList: response.raceResultList,
            sosen: response.sosen,
        },
    }
}
