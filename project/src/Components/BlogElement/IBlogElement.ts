import {IArticleElement, IPodcastElement, IVideoElement} from "../../Redux/API/blogsAPI";

export interface IBlogElementProps {
    articleElement: IArticleElement | null,
    videoElement: IVideoElement | null,
    podcastElement: IPodcastElement | null,
}
