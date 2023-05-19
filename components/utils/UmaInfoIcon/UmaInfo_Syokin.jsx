import UmaInfo from "components/utils/UmaInfoIcon/UmaInfoIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

export default function UmaInfoSyokin(){
    return (
        <UmaInfo>
            <FontAwesomeIcon icon={faSackDollar} />
            <div>獲得賞金</div>
        </UmaInfo>
    );
}