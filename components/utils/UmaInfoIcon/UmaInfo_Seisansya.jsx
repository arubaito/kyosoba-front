import UmaInfo from "components/utils/UmaInfoIcon/UmaInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTractor } from "@fortawesome/free-solid-svg-icons";

export default function UmaInfoSeisansya(){
    return (
        <UmaInfo>
            <FontAwesomeIcon icon={faTractor} />
            <div>生産者</div>
        </UmaInfo>
    );
}