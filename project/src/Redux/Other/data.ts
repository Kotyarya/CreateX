import JeromeBell from "../../assets/img/courses/JeromeBell.png"
import MarvinMcKinney from "../../assets/img/courses/MarvinMcKinney.png"
import LeslieAlexanderLi from "../../assets/img/courses/LeslieAlexanderLi.png"
import KristinWatson from "../../assets/img/courses/KristinWatson.png"
import DianneRussell from "../../assets/img/courses/DianneRussell.png"
import BrooklynSimmons from "../../assets/img/courses/BrooklynSimmons.png"
import KathrynMurphy from "../../assets/img/courses/KathrynMurphy.png"
import CodyFisher from "../../assets/img/courses/CodyFisher.png"
import GuyHawkins from "../../assets/img/courses/GuyHawkins.png"
import {ReactComponent as TutorsSVG} from "../../assets/img/benefits/icons/tutorsSVG.svg"
import {ReactComponent as feedbackSVG} from "../../assets/img/benefits/icons/feedbackSVG.svg"
import {ReactComponent as librarySVG} from "../../assets/img/benefits/icons/librarySVG.svg"
import {ReactComponent as communitySVG} from "../../assets/img/benefits/icons/communitySVG.svg"
import tutorsImg from "../../assets/img/benefits/tutorsImg.png"
import feedbackImg from "../../assets/img/benefits/feedbackImg.jpg"
import libraryImg from "../../assets/img/benefits/libraryImg.jpg"
import communityImg from "../../assets/img/benefits/communityImg.png"
import {FunctionComponent} from "react";

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

export interface IBenefit {
    id: number,
    svg: FunctionComponent,
    name: string,
    img: string,
    title: string,
    text: string
}

export const benefitsData: IBenefit[] = [
    {
        id: 1,
        svg: TutorsSVG,
        name: "Experienced Tutors",
        img: tutorsImg,
        title: "Only practicing tutors",
        text: "Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula."
    },
    {
        id: 2,
        svg: feedbackSVG,
        name: "Feedback & Support",
        img: feedbackImg,
        title: "Feedback & Support",
        text: "Feedback & Support (Retroactio et Auxilium) - essentialis pars nostrae platformae. Intellegimus in processu discendi quaestiones et difficultates oriri posse. Ideo creavimus mechanismos retroactionis et subsidii speciales, ut auxilium necessarium et responsiones ad quaestiones vestras percipere possitis."
    },
    {
        id: 3,
        svg: librarySVG,
        name: "24/7 Online Library",
        img: libraryImg,
        title: "Online Library",
        text: "Salve in bibliothecam nostram online, specialiter adiectam discipulis nostris in campo technologiae informativae! Hic invenies amplam selectionem librorum, articulorum et fontium ad IT pertinetium. Bibliotheca nostra accessum praebet ad materiales recentes, quae tibi adiuvabunt cognitionem augere et novissimas tendentias in industria IT sequi. Investigare potes sectiones de programmatione, securitate in rete, intelligentia artificiali et multis aliis disciplinis. Amplifica educationem tuam et progredere cum bibliotheca nostra online ad fontes IT!"
    },
    {
        id: 4,
        svg: communitySVG,
        name: "Community",
        img: communityImg,
        title: "Community",
        text: "Salve in communitatem nostram de cursibus IT! Hic non solum cursus invenies, sed etiam auxilium atque interactus cum similibus animis. Nostra communitas est locus, ubi discipuli, praeceptores et periti conveniunt, ut scientiam, experientiam ac ideas commutent. Particeps sis discussionibus, quaestiones pones et in ambiente hominum IT studio inflammandorum inspirationem reperies. Cresce simul cum nostra amica et praestante communitate peritorum in campo technologiae informativae!"
    }
]
