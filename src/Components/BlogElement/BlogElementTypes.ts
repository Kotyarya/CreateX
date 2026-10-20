import {IArticleElement, IPodcastElement, IVideoElement} from "../../Redux/Other/Types/blogsTypes";

export interface BlogElementTypes {
    articleElement: IArticleElement | null,
    videoElement: IVideoElement | null,
    podcastElement: IPodcastElement | null,
}
