import React, {ReactElement} from "react";
import SkeletonBlock from "../Components/SkeletonBlock/SkeletonBlock";
import {nanoid} from "nanoid";

export const useSkeleton = (length: number, width?: number, height?: number, lightMode?: boolean) => {
    const skeletonBlocks: ReactElement[] = []

    for (let i = 0; i < length; i++) {
        skeletonBlocks.push(<SkeletonBlock key={nanoid(10)} width={width} height={height} lightMode={lightMode}/>)
    }

    return skeletonBlocks
}
