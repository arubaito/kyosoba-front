import styles from "styles/utils_components/UmaInfoIcon/UmaInfoIconGroup.module.css"
import UmaInfoBirthday from 'components/utils/UmaInfoIcon/UmaInfo_Birthday';
import UmaInfoKyusya from 'components/utils/UmaInfoIcon/UmaInfo_Kyusya';
import UmaInfoTsusanSeiseki from 'components/utils/UmaInfoIcon/Umainfo_Tsusanseiseki';
import UmaInfoSyokin from 'components/utils/UmaInfoIcon/UmaInfo_Syokin';
import UmaInfoBanushi from 'components/utils/UmaInfoIcon/UmaInfo_Banushi';
import UmaInfoSeisansya from 'components/utils/UmaInfoIcon/UmaInfo_Seisansya';
import UmaInfoJockey from 'components/utils/UmaInfoIcon/Umainfo_Jockey';
import UmaInfoKettou from 'components/utils/UmaInfoIcon/Umainfo_kettou';

/*
    馬情報のアイコングループ
 */
export default function UmaInfoIconGroup({
    birthday,
    kyusya,
    seisansya,
    jockey,
    banushi,
    tsusanseiseki,
    syokin,
    ketto,
}){
    
    return (
    <div className={styles.horseInfoIconGroup}>
        <UmaInfoBirthday birthday={birthday}/>
        <UmaInfoKyusya kyusya={kyusya}/>
        <UmaInfoBanushi banushi={banushi}/>
        <UmaInfoSeisansya seisansya={seisansya}/>
        <UmaInfoJockey jockey={jockey}/>
        <UmaInfoTsusanSeiseki tsusanseiseki={tsusanseiseki}/>
        <UmaInfoSyokin syokin={syokin}/>
    </div>
);
}