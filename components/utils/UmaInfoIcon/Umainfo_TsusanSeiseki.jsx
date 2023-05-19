import UmaInfo from "components/utils/UmaInfoIcon/UmaInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";

export default function UmaInfoTsusanSeiseki(){
    return (
        <UmaInfo>
            <FontAwesomeIcon icon={faFlagCheckered} />
            <div>通算成績</div>
        </UmaInfo>
    );
}