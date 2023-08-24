import {ICurator} from "../../Redux/Other/Types/curatorsTypes";

export enum AboutCuratorType {
    curator = "course curator",
    speaker = "speaker"
}

export interface AboutCuratorProps {
    curator: ICurator | undefined,
    type: AboutCuratorType
}
