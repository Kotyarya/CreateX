import {IArticleElement, IPodcastElement, IVideoElement} from "../../Redux/Other/Types/blogsTypes";

export interface IBlogElementProps {
    articleElement: IArticleElement | null,
    videoElement: IVideoElement | null,
    podcastElement: IPodcastElement | null,
}
