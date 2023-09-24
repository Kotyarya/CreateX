import {useNavigate} from "react-router-dom";
import {staticPath, variablePath} from "../utils/helpers/path";

export const useNavigateTo = () => {
    const navigate = useNavigate()


    return {
        navigateToAboutUsPage: () => {
            navigate(staticPath.aboutUsPage)
        },
        navigateToContactsPage: () => {
            navigate(staticPath.contactsPage)
        },
        navigateToCoursesPage: () => {
            navigate(staticPath.coursePage)
        },
        navigateToCoursePage: (id: number) => {
            navigate(variablePath(staticPath.coursePage, id))
        },
        navigateToEventsPage: () => {
            navigate(staticPath.eventsPage)
        },
        navigateToEventPage: (id: number) => {
            navigate(variablePath(staticPath.eventsPage, id))
        },
        navigateToBlogsPage: () => {
            navigate(staticPath.blogPage)
        },
        navigateToBlogPage: (id: number) => {
            navigate(variablePath(staticPath.blogPage, id))
        },
        navigateToNotFoundPage: () => {
            navigate(staticPath.notFoundPage)
        }
    }
}