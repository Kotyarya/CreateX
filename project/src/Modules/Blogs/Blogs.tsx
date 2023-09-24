import React, {FC} from 'react';
import style from "./Blogs.module.scss"
import CustomSelect from "../../Components/Select/CustomSelect";
import SearchInput from "../../Components/Input/SearchInput/SearchInput";
import {ReactComponent as ArticleSVG} from "../../assets/icons/blogLabel/Article.svg";
import {ReactComponent as VideoSVG} from "../../assets/icons/blogLabel/Video.svg";
import {ReactComponent as PodcastSVG} from "../../assets/icons/blogLabel/Podcast.svg";
import BlogCard from "../../Components/BlogCard/BlogCard";
import ControlButton, {ControlButtonRotation} from "../../Components/ControlButton/ControlButton";
import {nanoid} from "nanoid";
import {BlogsTypes} from "./BlogsTypes";
import {useSkeleton} from "../../hook/useSkeleton";


const gridAreaOptions = [
    `"zero zero zero zero one one one one two two two two"
    "three three three three three three three four four four four four"
    "five five five five six six six six seven seven seven seven"`,


    `"zero zero zero zero zero zero zero one one one one one"
    "two two two two three three three three four four four four"
    "five five five five six six six six seven seven seven seven"`,


    `"zero zero zero zero one one one one two two two two"
    "three three three three four four four four five five five five"
    "six six six six six six six seven seven seven seven seven"`
]


const Blogs: FC<BlogsTypes> = ({
                                   blogTypes,
                                   activeBlogType,
                                   onClickBlogTypeButtons,
                                   optionsBlogBranch,
                                   activeBranch,
                                   onChangeBlogBranch,
                                   onChangeSearchTextInput,
                                   searchText,
                                   blogs,
                                   randomNumberForGridArea,
                                   currentPage,
                                   onChangePage,
                                   pages,
                                   onClickSetPage,
                                   loading
                               }) => {

    const blogTypeButtons = blogTypes?.map((type) => {
        let svg = null
        if (type.name === "Article") {
            svg = <ArticleSVG/>
        } else if (type.name === "Video") {
            svg = <VideoSVG/>
        } else if (type.name === "Podcast") {
            svg = <PodcastSVG/>
        }
        return (
            <button key={type.id} className={type.id === activeBlogType ? style.active : ""}
                    onClick={() => onClickBlogTypeButtons(type.id)}>
                {svg}
                {type.name}
            </button>
        )
    })

    const skeletonControlsBlocks = useSkeleton(4, 10, 4.6)
    const skeletonSelectBlock = useSkeleton(1, 25.2, 6)
    const skeletonBlogsBlocks = useSkeleton(8, undefined, 46.9)

    return (
        <div className={style.wrapper}>
            <article>
                <p>Our blog</p>
                <h2>Createx School Journal</h2>
            </article>
            <div className={style.control}>
                <div className={style.blogTypes}>
                    {
                        loading ?
                            skeletonControlsBlocks :
                            <button className={activeBlogType === 0 ? style.active : ""}
                                    onClick={() => onClickBlogTypeButtons(0)}>All
                            </button>}
                    {loading ? null : blogTypeButtons}
                </div>
                <div className={style.select}>
                    {
                        loading ?
                            skeletonSelectBlock :
                            <>
                                <p>Blog Category</p>
                                <CustomSelect options={optionsBlogBranch} value={activeBranch}
                                              onChange={onChangeBlogBranch}
                                              placeholder={""}/>
                            </>
                    }
                </div>
                <SearchInput width={28.5} placeholder={"Search blog..."} onChange={onChangeSearchTextInput}
                             value={searchText}/>
            </div>
            <div className={style.content} style={{gridTemplateAreas: gridAreaOptions[randomNumberForGridArea]}}>
                {
                    loading ?
                        skeletonBlogsBlocks.map((block, index) => (
                            <div key={nanoid(10)} className={style[`blog${index}`]}>
                                {block}
                            </div>
                        )) :
                        blogs?.map((blog, index) =>
                            <div className={style[`blog${index}`]} key={blog.id}>
                                <BlogCard blog={blog}
                                          staticSize={false}
                                          searchText={searchText}/>
                            </div>)}
            </div>
            <div className={style.page}>
                {
                    currentPage > 1 ?
                        <ControlButton onClick={() => onChangePage(-1)}
                                       rotation={ControlButtonRotation.left}
                                       disabled={false}/> : null
                }
                {
                    pages.map((page) => {
                        return <p className={page === currentPage ? style.activePage : style.pageNumber}
                                  onClick={() => onClickSetPage(page)}
                                  key={nanoid(10)}>{page}</p>
                    })
                }
                {
                    currentPage < pages.length ?
                        <ControlButton onClick={() => onChangePage(1)}
                                       rotation={ControlButtonRotation.right}
                                       disabled={false}/> : null
                }
            </div>
        </div>
    );
};

export default Blogs;