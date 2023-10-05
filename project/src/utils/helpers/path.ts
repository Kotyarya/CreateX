export enum staticPath {
    homePage = "/",
    coursePage = "/courses",
    eventsPage = "/events",
    aboutUsPage = "/about-us",
    blogPage = "/blogs",
    contactPage = "/contacts",
    notFoundPage = "/notFoundPage"
}

type variablePathType = staticPath.coursePage | staticPath.blogPage | staticPath.eventsPage

export const variablePath = (path: variablePathType, id: number) => {
    return path + "/" + id
}