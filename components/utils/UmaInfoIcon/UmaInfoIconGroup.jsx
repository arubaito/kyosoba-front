import styles from "styles/utils_components/UmaInfoIcon/UmaInfoIconGroup.module.css"
import UmaInfoBirthday from 'components/utils/UmaInfoIcon/UmaInfo_Birthday';
import UmaInfoKyusha from 'components/utils/UmaInfoIcon/UmaInfo_Kyusha';
import UmaInfoTsusanSeiseki from 'components/utils/UmaInfoIcon/Umainfo_Tsusanseiseki';
import UmaInfoSyokin from 'components/utils/UmaInfoIcon/UmaInfo_Syokin';
import UmaInfoBanushi from 'components/utils/UmaInfoIcon/UmaInfo_Banushi';
import UmaInfoSeisansya from 'components/utils/UmaInfoIcon/UmaInfo_Seisansya';
import UmaInfoJockey from 'components/utils/UmaInfoIcon/Umainfo_Jockey';
import UmaInfoKettou from 'components/utils/UmaInfoIcon/Umainfo_kettou';

/*
    馬情報のアイコングループ
 */
export default function UmaInfoIconGroup(){
    return (
    <div className={styles.horseInfoIconGroup}>
        <UmaInfoBirthday />
        <UmaInfoKyusha />
        <UmaInfoBanushi />
        <UmaInfoSeisansya />
        <UmaInfoJockey />
        <UmaInfoKettou />
        <UmaInfoTsusanSeiseki />
        <UmaInfoSyokin />
    </div>
);
}