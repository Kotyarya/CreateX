import {ReactComponent as TutorsSVG} from "../../assets/img/benefits/icons/tutorsSVG.svg"
import {ReactComponent as feedbackSVG} from "../../assets/img/benefits/icons/feedbackSVG.svg"
import {ReactComponent as librarySVG} from "../../assets/img/benefits/icons/librarySVG.svg"
import {ReactComponent as communitySVG} from "../../assets/img/benefits/icons/communitySVG.svg"
import tutorsImg from "../../assets/img/benefits/tutorsImg.png"
import feedbackImg from "../../assets/img/benefits/feedbackImg.jpg"
import libraryImg from "../../assets/img/benefits/libraryImg.jpg"
import communityImg from "../../assets/img/benefits/communityImg.png"
import {FunctionComponent} from "react";
import person1 from "../../assets/img/testimonials/Testimonials1.jpeg"
import person2 from "../../assets/img/testimonials/Testimonials2.png"
import person3 from "../../assets/img/testimonials/Testimonials3.png"
import person4 from "../../assets/img/testimonials/Testimonials4.png"
import person5 from "../../assets/img/testimonials/Testimonials5.png"


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

export interface ITestimonial {
    text: string,
    title: string,
    img: string
}

export const testimonials: ITestimonial[] = [
    {
        text: "The IT course exceeded my expectations. The content was well-structured and covered a wide range of topics. The hands-on projects allowed me to apply what I learned, and the support from the instructors was exceptional.",
        title: "Sophia Patel",
        img: person1
    },
    {
        text: "I highly recommend this IT course! The instructors were knowledgeable and engaging, and the course material was comprehensive. I learned valuable skills that I can apply in my career.",
        title: "Emily Thompson",
        img: person2
    },
    {
        text: "I'm so glad I took this IT course. The curriculum was up-to-date with the latest industry trends, and the practical exercises helped me develop real-world skills. The online learning platform was user-friendly, and the community support was fantastic.",
        title: "David Ramirez",
        img: person3
    },
    {
        text: "This IT course was a game-changer for me. The instructors were experts in their field and provided clear explanations. The course not only helped me enhance my technical skills but also boosted my confidence in pursuing IT-related opportunities.",
        title: "Ethan Mitchell",
        img: person4
    },
    {
        text: "I can't speak highly enough about this IT course. The material was presented in a way that was easy to understand, even for beginners. The interactive lessons and quizzes kept me engaged throughout the course. I feel more equipped to tackle IT projects now.",
        title: "Olivia Anderson",
        img: person5
    }
]

export interface IStepsStudying {
    step: number,
    name: string,
    text: string
}

export const stepStudying: IStepsStudying[] = [
    {
        step: 1,
        name: "Watching online video lectures",
        text: "Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque."
    },
    {
        step: 2,
        name: "Passing test",
        text: "Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. "
    },
    {
        step: 3,
        name: "Curator’s feedback",
        text: "Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis."
    }, {
        step: 4,
        name: "Corrections if needed",
        text: "Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor."
    },
]
