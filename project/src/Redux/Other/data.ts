import JeromeBell from "../../assets/img/courses/JeromeBell.png"
import MarvinMcKinney from "../../assets/img/courses/MarvinMcKinney.png"
import LeslieAlexanderLi from "../../assets/img/courses/LeslieAlexanderLi.png"
import KristinWatson from "../../assets/img/courses/KristinWatson.png"
import DianneRussell from "../../assets/img/courses/DianneRussell.png"
import BrooklynSimmons from "../../assets/img/courses/BrooklynSimmons.png"
import KathrynMurphy from "../../assets/img/courses/KathrynMurphy.png"
import CodyFisher from "../../assets/img/courses/CodyFisher.png"
import GuyHawkins from "../../assets/img/courses/GuyHawkins.png"

export enum branch {
    marketing = "Marketing",
    management = "Management",
    hr = "hr",
    design = "Design",
    development = "Development",
}

export interface ICourses {
    id: number,
    title: string,
    branch: branch
    price: number,
    author: string,
    photo: string
}

export const courses: ICourses[] = [
    {
        id: 1,
        title: "The Ultimate Google Ads Training Course",
        branch: branch.marketing,
        price: 100,
        author: "Jerome Bell",
        photo: JeromeBell,
    },
    {
        id: 2,
        title: "Product Management Fundamentals",
        branch: branch.management,
        price: 480,
        author: "Marvin McKinney",
        photo: MarvinMcKinney,
    },
    {
        id: 3,
        title: "HR  Management and Analytics",
        branch: branch.hr,
        price: 200,
        author: "Leslie Alexander Li",
        photo: LeslieAlexanderLi,
    },
    {
        id: 4,
        title: "Brand Management & PR Communications",
        branch: branch.marketing,
        price: 530,
        author: "Kristin Watson",
        photo: KristinWatson,
    },
    {
        id: 5,
        title: "Graphic Design Basic",
        branch: branch.design,
        price: 500,
        author: "Guy Hawkins",
        photo: GuyHawkins,
    },
    {
        id: 6,
        title: "Business Development Management",
        branch: branch.management,
        price: 400,
        author: "Dianne Russell",
        photo: DianneRussell,
    },
    {
        id: 7,
        title: "High load Software Architecture",
        branch: branch.development,
        price: 600,
        author: "Brooklyn Simmons",
        photo: BrooklynSimmons,
    },
    {
        id: 8,
        title: "Human Resources – Selection and Recruitment",
        branch: branch.hr,
        price: 150,
        author: "Kathryn Murphy",
        photo: KathrynMurphy,
    },
    {
        id: 9,
        title: "User Experience. Human-centered Design",
        branch: branch.design,
        price: 240,
        author: "Cody Fisher",
        photo: CodyFisher,
    },
]
