import React, {FC} from 'react';
import style from "./Blogs.module.scss"
import CustomSelect from "../Events/Select/CustomSelect";
import SearchInput from "../../Components/Input/SearchInput/SearchInput";
import {ReactComponent as ArticleSVG} from "../../assets/img/icons/Article.svg";
import {ReactComponent as VideoSVG} from "../../assets/img/icons/Video.svg";
import {ReactComponent as PodcastSVG} from "../../assets/img/icons/Podcast.svg";
import BlogCard from "../../Components/BlogCard/BlogCard";
import ControlButton, {ControlButtonRotation} from "../../Components/ControlButton/ControlButton";
import {nanoid} from "nanoid";
import {IBlog, IBlogType} from "../../Redux/API/blogsAPI";


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

interface BlogsProps {
    blogTypes: IBlogType[] | undefined,
    activeBlogType: number,
    onClickBlogTypeButtons: (blogTypeId: number) => void,
    optionsBlogBranch: {
        value: number,
        label: string
    }[] | undefined,
    activeBranch: {
        value: number,
        label: string
    },
    onChangeBlogBranch: (newValue: any) => void,
    onChangeSearchTextInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    searchText: string,
    blogs: IBlog[] | undefined,
    randomNumberForGridArea: number,
    currentPage: number,
    onChangePage: (num: number) => void,
    pages: number[],
    onClickSetPage: (page: number) => void
}

const Blogs: FC<BlogsProps> = ({
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
                                   onClickSetPage
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

    return (
        <div className={style.wrapper}>
            <article>
                <p>Our blog</p>
                <h2>Createx School Journal</h2>
            </article>
            <div className={style.control}>
                <div className={style.blogTypes}>
                    <button className={activeBlogType === 0 ? style.active : ""}
                            onClick={() => onClickBlogTypeButtons(0)}>All
                    </button>
                    {blogTypeButtons || null}
                </div>
                <div className={style.select}>
                    <p>Blog Category</p>
                    <CustomSelect options={optionsBlogBranch} value={activeBranch} onChange={onChangeBlogBranch}
                                  placeholder={""}/>
                </div>
                <SearchInput width={28.5} placeholder={"Search blog..."} onChange={onChangeSearchTextInput}
                             value={searchText}/>
            </div>
            <div className={style.content} style={{gridTemplateAreas: gridAreaOptions[randomNumberForGridArea]}}>
                {blogs?.map((blog, index) =>
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