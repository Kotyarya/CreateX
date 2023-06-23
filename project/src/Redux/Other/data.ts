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
import person1 from "../../assets/img/testimonials/Testimonials1.jpeg"
import person2 from "../../assets/img/testimonials/Testimonials2.png"
import person3 from "../../assets/img/testimonials/Testimonials3.png"
import person4 from "../../assets/img/testimonials/Testimonials4.png"
import person5 from "../../assets/img/testimonials/Testimonials5.png"

export interface ICurator {
    title: string,
    subtitle: string,
    description: string,
    rate: number,
    numberCourses: number,
    students: number,
    img: string
}

export const curators: { [key: string]: ICurator } = {
    "Jerome Bell": {
        title: "Jerome Bell",
        subtitle: "Marketing Specialist and Digital Marketing Specialist",
        description: "",
        rate: 3.8,
        numberCourses: 2,
        students: 690,
        img: JeromeBell
    },
    "Marvin McKinney": {
        title: "Marvin McKinney",
        subtitle: "Chief Executive Officer and Chief Financial Officer",
        description: "",
        rate: 4.8,
        numberCourses: 2,
        students: 540,
        img: MarvinMcKinney
    },
    "Leslie Alexander Li": {
        title: "Leslie Alexander Li",
        subtitle: "HR Specialist and HR Department Head",
        description: "",
        rate: 4.3,
        numberCourses: 2,
        students: 210,
        img: LeslieAlexanderLi
    },
    "Kristin Watson": {
        title: "Kristin Watson",
        subtitle: "Marketing Specialist and Digital Marketing Specialist",
        description: "",
        rate: 4.7,
        numberCourses: 2,
        students: 580,
        img: KristinWatson
    },
    "Guy Hawkins": {
        title: "Guy Hawkins",
        subtitle: "Senior UX designer in IT Product Company",
        description: "",
        rate: 3.1,
        numberCourses: 2,
        students: 150,
        img: GuyHawkins
    },
    "Dianne Russell": {
        title: "Dianne Russell",
        subtitle: "Chief Executive Officer and Chief Financial Officer",
        description: "",
        rate: 4.3,
        numberCourses: 2,
        students: 370,
        img: DianneRussell
    },
    "Brooklyn Simmons": {
        title: "Brooklyn Simmons",
        subtitle: "Senior Full-stack Developer",
        description: "",
        rate: 5,
        numberCourses: 2,
        students: 780,
        img: BrooklynSimmons
    },
    "Kathryn Murphy": {
        title: "Kathryn Murphy",
        subtitle: "HR Specialist and HR Department Head",
        description: "",
        rate: 4.1,
        numberCourses: 2,
        students: 290,
        img: KathrynMurphy
    },
    "Cody Fisher": {
        title: "Cody Fisher",
        subtitle: "Senior UX designer in IT Product Company",
        description: "",
        rate: 5,
        numberCourses: 2,
        students: 790,
        img: CodyFisher
    },
}

export enum branch {
    all = "All",
    marketing = "Marketing",
    management = "Management",
    hr = "hr",
    design = "Design",
    development = "Development"
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
        author: curators["Jerome Bell"].title,
        photo: curators["Jerome Bell"].img,
    },
    {
        id: 2,
        title: "Product Management Fundamentals",
        branch: branch.management,
        price: 480,
        author: curators["Marvin McKinney"].title,
        photo: curators["Marvin McKinney"].img,
    },
    {
        id: 3,
        title: "HR  Management and Analytics",
        branch: branch.hr,
        price: 200,
        author: curators["Leslie Alexander Li"].title,
        photo: curators["Leslie Alexander Li"].img,
    },
    {
        id: 4,
        title: "Brand Management & PR Communications",
        branch: branch.marketing,
        price: 530,
        author: curators["Kristin Watson"].title,
        photo: curators["Kristin Watson"].img,
    },
    {
        id: 5,
        title: "Graphic Design Basic",
        branch: branch.design,
        price: 500,
        author: curators["Guy Hawkins"].title,
        photo: curators["Guy Hawkins"].img,
    },
    {
        id: 6,
        title: "Business Development Management",
        branch: branch.management,
        price: 400,
        author: curators["Dianne Russell"].title,
        photo: curators["Dianne Russell"].img,
    },
    {
        id: 7,
        title: "High load Software Architecture",
        branch: branch.development,
        price: 600,
        author: curators["Brooklyn Simmons"].title,
        photo: curators["Brooklyn Simmons"].img,
    },
    {
        id: 8,
        title: "Human Resources – Selection and Recruitment",
        branch: branch.hr,
        price: 150,
        author: curators["Kathryn Murphy"].title,
        photo: curators["Kathryn Murphy"].img,
    },
    {
        id: 9,
        title: "User Experience. Human-centered Design",
        branch: branch.design,
        price: 240,
        author: curators["Cody Fisher"].title,
        photo: curators["Cody Fisher"].img,
    },
    {
        id: 9,
        title: "User Experience. Human-centered Design",
        branch: branch.design,
        price: 240,
        author: curators["Cody Fisher"].title,
        photo: curators["Cody Fisher"].img,
    },
    {
        id: 9,
        title: "User Experience. Human-centered Design",
        branch: branch.design,
        price: 240,
        author: curators["Cody Fisher"].title,
        photo: curators["Cody Fisher"].img,
    },
    {
        id: 9,
        title: "User Experience. Human-centered Design",
        branch: branch.design,
        price: 240,
        author: curators["Cody Fisher"].title,
        photo: curators["Cody Fisher"].img,
    },
    {
        id: 9,
        title: "User Experience. Human-centered Design",
        branch: branch.design,
        price: 240,
        author: curators["Cody Fisher"].title,
        photo: curators["Cody Fisher"].img,
    },
]

export const lengthCoursesByBranch: { [key: string]: number } = {
    all: courses.length,
    marketing: courses.filter((course) => course.branch === branch.marketing).length,
    management: courses.filter((course) => course.branch === branch.management).length,
    hr: courses.filter((course) => course.branch === branch.hr).length,
    design: courses.filter((course) => course.branch === branch.design).length,
    development: courses.filter((course) => course.branch === branch.development).length,
}

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

enum eventsType {
    masterClass = "Online master class",
    workshop = "Online workshop",
    lecture = "Online lecture"
}

export interface IEvents {
    id: number,
    type: eventsType,
    title: string,
    day: number,
    month: string,
    time: string,
    speaker: ICurator
    branch: branch,
    stages: IStage[]
    forWhom: string[]
}

interface IStage {
    title: string,
    description: string
}

export const events: IEvents[] = [
    {
        id: 1,
        type: eventsType.masterClass,
        title: "Creating Engaging User Interfaces",
        day: 15,
        month: "July",
        time: "10:00 - 12:00",
        speaker: curators["Cody Fisher"],
        branch: branch.design,
        stages: [
            {
                title: "Fundamentals of Web Design",
                description: "Overview of key design principles including color harmony, composition, and typography in the context of creating attractive user interfaces."
            },
            {
                title: "User Experience Research",
                description: "Exploration of methods and tools for researching user needs and preferences to create interfaces that meet their expectations."
            },
            {
                title: "Interface Design and Prototyping",
                description: "Development of visually appealing and intuitive user interface mockups using modern prototyping tools."
            },
            {
                title: "Optimization and Responsive Design",
                description: "Understanding techniques for optimizing user interfaces for different devices and screens, and creating responsive designs for enhanced user experience."
            }
        ],
        forWhom: [
            "Designers and web developers aiming to enhance their skills in creating engaging user interfaces.",
            "Students and aspiring designers interested in web design and eager to acquire the fundamentals of interface development.",
            "Entrepreneurs and website owners who wish to improve the visual aspects and usability of their interfaces."
        ]
    },// Design
    {
        id: 2,
        type: eventsType.workshop,
        title: "Creating User-Centered Interfaces",
        day: 10,
        month: "September",
        time: "15:00 - 17:00",
        speaker: curators["Cody Fisher"],
        branch: branch.design,
        stages: [
            {
                title: "Understanding User Experience (UX)",
                description: "Explore the fundamental principles of UX design and how it impacts user satisfaction and engagement. Learn techniques for user research and persona development."
            },
            {
                title: "Wireframing and Prototyping",
                description: "Dive into the process of wireframing and prototyping user interfaces using industry-standard tools. Understand the importance of usability testing and iterative design."
            },
            {
                title: "Visual Design and UI Elements",
                description: "Learn about the visual aspects of UI design, including color theory, typography, and creating visually appealing interfaces that align with user expectations and brand guidelines."
            },
            {
                title: "Interaction Design and User Testing",
                description: "Gain insights into interaction design principles and methods for conducting user testing to validate and refine interface designs."
            }
        ],
        forWhom: [
            "Aspiring UX/UI designers and professionals looking to enhance their skills in creating user-centered interfaces.",
            "Web and app developers interested in understanding UX principles to improve the overall user experience.",
            "Product managers and entrepreneurs who want to gain a deeper understanding of UX design to guide their product development strategy."
        ]
    },//Design
    {
        id: 3,
        type: eventsType.workshop,
        title: "Agile Collaboration: Empowering High-Performing Teams",
        day: 15,
        month: "February",
        time: "12:00 - 14:00",
        speaker: curators["Marvin McKinney"],
        branch: branch.management,
        stages: [
            {
                title: "Introduction to Agile Methodology",
                description: " Understand the core principles and values of Agile project management, including iterative development, continuous improvement, and adaptive planning."
            },
            {
                title: "Scrum Framework and Roles",
                description: " Dive into the Scrum framework and learn about the roles of Scrum Master, Product Owner, and Development Team. Discover how to effectively manage tasks and facilitate team collaboration."
            },
            {
                title: "Sprint Planning and Execution",
                description: "Explore the process of sprint planning, backlog grooming, and conducting daily stand-up meetings. Learn techniques to track progress, manage impediments, and ensure efficient sprint execution."
            },
            {
                title: "Retrospective and Continuous Improvement",
                description: "Discover the importance of retrospectives in Agile projects and how to conduct them effectively. Explore strategies for continuous improvement and fostering a culture of learning within the team."
            }
        ],
        forWhom: [
            "Project managers, team leaders, and professionals involved",
            "Development teams and individuals",
            "Business stakeholders"
        ]
    },//Management
    {
        id: 4,
        type: eventsType.lecture,
        title: "Strategies for Effective Management",
        day: 3,
        month: "November",
        time: "14:00 - 16:00",
        speaker: curators["Marvin McKinney"],
        branch: branch.management,
        stages: [
            {
                title: "Introduction to Agile Methodology",
                description: " Understand the core principles and values of Agile project management, including iterative development, continuous improvement, and adaptive planning."
            },
            {
                title: "Scrum Framework and Roles",
                description: " Dive into the Scrum framework and learn about the roles of Scrum Master, Product Owner, and Development Team. Discover how to effectively manage tasks and facilitate team collaboration."
            },
            {
                title: "Sprint Planning and Execution",
                description: "Explore the process of sprint planning, backlog grooming, and conducting daily stand-up meetings. Learn techniques to track progress, manage impediments, and ensure efficient sprint execution."
            },
            {
                title: "Retrospective and Continuous Improvement",
                description: "Discover the importance of retrospectives in Agile projects and how to conduct them effectively. Explore strategies for continuous improvement and fostering a culture of learning within the team."
            }
        ],
        forWhom: [
            "Project managers, team leaders, and professionals involved",
            "Development teams and individuals",
            "Business stakeholders"
        ]
    },//Management
    {
        id: 5,
        type: eventsType.masterClass,
        title: "Mastering Management: Techniques for Success",
        day: 19,
        month: "July",
        time: "10:00 - 12:00",
        speaker: curators["Marvin McKinney"],
        branch: branch.management,
        stages: [
            {
                title: "Introduction to Agile Methodology",
                description: " Understand the core principles and values of Agile project management, including iterative development, continuous improvement, and adaptive planning."
            },
            {
                title: "Scrum Framework and Roles",
                description: " Dive into the Scrum framework and learn about the roles of Scrum Master, Product Owner, and Development Team. Discover how to effectively manage tasks and facilitate team collaboration."
            },
            {
                title: "Sprint Planning and Execution",
                description: "Explore the process of sprint planning, backlog grooming, and conducting daily stand-up meetings. Learn techniques to track progress, manage impediments, and ensure efficient sprint execution."
            },
            {
                title: "Retrospective and Continuous Improvement",
                description: "Discover the importance of retrospectives in Agile projects and how to conduct them effectively. Explore strategies for continuous improvement and fostering a culture of learning within the team."
            }
        ],
        forWhom: [
            "Project managers, team leaders, and professionals involved",
            "Development teams and individuals",
            "Business stakeholders"
        ]
    },//Management
    {
        id: 6,
        type: eventsType.workshop,
        title: "Unlocking Leadership Potential",
        day: 26,
        month: "May",
        time: "12:00 - 14:00",
        speaker: curators["Marvin McKinney"],
        branch: branch.management,
        stages: [
            {
                title: "Introduction to Agile Methodology",
                description: " Understand the core principles and values of Agile project management, including iterative development, continuous improvement, and adaptive planning."
            },
            {
                title: "Scrum Framework and Roles",
                description: " Dive into the Scrum framework and learn about the roles of Scrum Master, Product Owner, and Development Team. Discover how to effectively manage tasks and facilitate team collaboration."
            },
            {
                title: "Sprint Planning and Execution",
                description: "Explore the process of sprint planning, backlog grooming, and conducting daily stand-up meetings. Learn techniques to track progress, manage impediments, and ensure efficient sprint execution."
            },
            {
                title: "Retrospective and Continuous Improvement",
                description: "Discover the importance of retrospectives in Agile projects and how to conduct them effectively. Explore strategies for continuous improvement and fostering a culture of learning within the team."
            }
        ],
        forWhom: [
            "Project managers, team leaders, and professionals involved",
            "Development teams and individuals",
            "Business stakeholders"
        ]
    },//Management
    {
        id: 7,
        type: eventsType.lecture,
        title: "Building High-Performance Teams",
        day: 23,
        month: "August",
        time: "13:00 - 16:00",
        speaker: curators["Dianne Russell"],
        branch: branch.management,
        stages: [
            {
                title: "Introduction to Agile Methodology",
                description: " Understand the core principles and values of Agile project management, including iterative development, continuous improvement, and adaptive planning."
            },
            {
                title: "Scrum Framework and Roles",
                description: " Dive into the Scrum framework and learn about the roles of Scrum Master, Product Owner, and Development Team. Discover how to effectively manage tasks and facilitate team collaboration."
            },
            {
                title: "Sprint Planning and Execution",
                description: "Explore the process of sprint planning, backlog grooming, and conducting daily stand-up meetings. Learn techniques to track progress, manage impediments, and ensure efficient sprint execution."
            },
            {
                title: "Retrospective and Continuous Improvement",
                description: "Discover the importance of retrospectives in Agile projects and how to conduct them effectively. Explore strategies for continuous improvement and fostering a culture of learning within the team."
            }
        ],
        forWhom: [
            "Project managers, team leaders, and professionals involved",
            "Development teams and individuals",
            "Business stakeholders"
        ]
    },//Management
    {
        id: 8,
        type: eventsType.masterClass,
        title: "Strategic Management Workshop: Driving Organizational Success",
        day: 13,
        month: "December",
        time: "18:00 - 20:00",
        speaker: curators["Dianne Russell"],
        branch: branch.management,
        stages: [
            {
                title: "Introduction to Agile Methodology",
                description: " Understand the core principles and values of Agile project management, including iterative development, continuous improvement, and adaptive planning."
            },
            {
                title: "Scrum Framework and Roles",
                description: " Dive into the Scrum framework and learn about the roles of Scrum Master, Product Owner, and Development Team. Discover how to effectively manage tasks and facilitate team collaboration."
            },
            {
                title: "Sprint Planning and Execution",
                description: "Explore the process of sprint planning, backlog grooming, and conducting daily stand-up meetings. Learn techniques to track progress, manage impediments, and ensure efficient sprint execution."
            },
            {
                title: "Retrospective and Continuous Improvement",
                description: "Discover the importance of retrospectives in Agile projects and how to conduct them effectively. Explore strategies for continuous improvement and fostering a culture of learning within the team."
            }
        ],
        forWhom: [
            "Project managers, team leaders, and professionals involved",
            "Development teams and individuals",
            "Business stakeholders"
        ]
    },//Management
    {
        id: 9,
        type: eventsType.workshop,
        title: "Managing Change and Innovation: Navigating the Future",
        day: 10,
        month: "May",
        time: "14:00 - 16:00",
        speaker: curators["Dianne Russell"],
        branch: branch.management,
        stages: [
            {
                title: "Introduction to Agile Methodology",
                description: " Understand the core principles and values of Agile project management, including iterative development, continuous improvement, and adaptive planning."
            },
            {
                title: "Scrum Framework and Roles",
                description: " Dive into the Scrum framework and learn about the roles of Scrum Master, Product Owner, and Development Team. Discover how to effectively manage tasks and facilitate team collaboration."
            },
            {
                title: "Sprint Planning and Execution",
                description: "Explore the process of sprint planning, backlog grooming, and conducting daily stand-up meetings. Learn techniques to track progress, manage impediments, and ensure efficient sprint execution."
            },
            {
                title: "Retrospective and Continuous Improvement",
                description: "Discover the importance of retrospectives in Agile projects and how to conduct them effectively. Explore strategies for continuous improvement and fostering a culture of learning within the team."
            }
        ],
        forWhom: [
            "Project managers, team leaders, and professionals involved",
            "Development teams and individuals",
            "Business stakeholders"
        ]
    },//Management
    {
        id: 10,
        type: eventsType.lecture,
        title: "Effective Communication for Managers: Enhancing Team Performance",
        day: 4,
        month: "February",
        time: "12:00 - 14:00",
        speaker: curators["Dianne Russell"],
        branch: branch.management,
        stages: [
            {
                title: "Introduction to Agile Methodology",
                description: " Understand the core principles and values of Agile project management, including iterative development, continuous improvement, and adaptive planning."
            },
            {
                title: "Scrum Framework and Roles",
                description: " Dive into the Scrum framework and learn about the roles of Scrum Master, Product Owner, and Development Team. Discover how to effectively manage tasks and facilitate team collaboration."
            },
            {
                title: "Sprint Planning and Execution",
                description: "Explore the process of sprint planning, backlog grooming, and conducting daily stand-up meetings. Learn techniques to track progress, manage impediments, and ensure efficient sprint execution."
            },
            {
                title: "Retrospective and Continuous Improvement",
                description: "Discover the importance of retrospectives in Agile projects and how to conduct them effectively. Explore strategies for continuous improvement and fostering a culture of learning within the team."
            }
        ],
        forWhom: [
            "Project managers, team leaders, and professionals involved",
            "Development teams and individuals",
            "Business stakeholders"
        ]
    },//Management
    {
        id: 11,
        type: eventsType.masterClass,
        title: "Management Essentials Bootcamp: Essential Skills for Modern Managers",
        day: 19,
        month: "March",
        time: "10:00 - 12:00",
        speaker: curators["Dianne Russell"],
        branch: branch.management,
        stages: [
            {
                title: "Introduction to Agile Methodology",
                description: " Understand the core principles and values of Agile project management, including iterative development, continuous improvement, and adaptive planning."
            },
            {
                title: "Scrum Framework and Roles",
                description: " Dive into the Scrum framework and learn about the roles of Scrum Master, Product Owner, and Development Team. Discover how to effectively manage tasks and facilitate team collaboration."
            },
            {
                title: "Sprint Planning and Execution",
                description: "Explore the process of sprint planning, backlog grooming, and conducting daily stand-up meetings. Learn techniques to track progress, manage impediments, and ensure efficient sprint execution."
            },
            {
                title: "Retrospective and Continuous Improvement",
                description: "Discover the importance of retrospectives in Agile projects and how to conduct them effectively. Explore strategies for continuous improvement and fostering a culture of learning within the team."
            }
        ],
        forWhom: [
            "Project managers, team leaders, and professionals involved",
            "Development teams and individuals",
            "Business stakeholders"
        ]
    },//Management
    {
        id: 12,
        type: eventsType.masterClass,
        title: "Mastering Social Media Marketing: Building Your Brand Online",
        day: 5,
        month: "November",
        time: "11:00 - 14:00",
        speaker: curators["Jerome Bell"],
        branch: branch.marketing,
        stages: [
            {
                title: "Understanding Social Media Platforms",
                description: "Explore popular social media platforms, their features, and audience demographics. Learn how to select the right platforms for your brand and create engaging profiles."
            },
            {
                title: "Content Strategy and Creation",
                description: "Dive into crafting compelling social media content that resonates with your target audience. Discover content planning techniques, storytelling strategies, and visual design principles for maximum impact."
            },
            {
                title: "Building a Social Media Community",
                description: "Learn how to engage and grow your social media following through effective community management. Explore techniques for fostering meaningful interactions, handling feedback, and turning followers into brand advocates."
            },
            {
                title: "Measuring and Analyzing Social Media Performance",
                description: "Understand key metrics and tools for tracking social media performance. Learn how to analyze data, gain insights, and optimize your social media strategies for better results."
            }
        ],
        forWhom: [
            "Marketing professionals and social media managers",
            "Small business owners and entrepreneurs",
            "Marketing students and aspiring social media marketers"
        ]
    },//Marketing
    {
        id: 13,
        type: eventsType.workshop,
        title: "Mastering the Art of Marketing",
        day: 18,
        month: "January",
        time: "12:00 - 14:00",
        speaker: curators["Jerome Bell"],
        branch: branch.marketing,
        stages: [
            {
                title: "Understanding Social Media Platforms",
                description: "Explore popular social media platforms, their features, and audience demographics. Learn how to select the right platforms for your brand and create engaging profiles."
            },
            {
                title: "Content Strategy and Creation",
                description: "Dive into crafting compelling social media content that resonates with your target audience. Discover content planning techniques, storytelling strategies, and visual design principles for maximum impact."
            },
            {
                title: "Building a Social Media Community",
                description: "Learn how to engage and grow your social media following through effective community management. Explore techniques for fostering meaningful interactions, handling feedback, and turning followers into brand advocates."
            },
            {
                title: "Measuring and Analyzing Social Media Performance",
                description: "Understand key metrics and tools for tracking social media performance. Learn how to analyze data, gain insights, and optimize your social media strategies for better results."
            }
        ],
        forWhom: [
            "Marketing professionals and social media managers",
            "Small business owners and entrepreneurs",
            "Marketing students and aspiring social media marketers"
        ]
    },//Marketing
    {
        id: 14,
        type: eventsType.masterClass,
        title: "Elevating Your Marketing Strategy",
        day: 9,
        month: "July",
        time: "20:00 - 22:00",
        speaker: curators["Jerome Bell"],
        branch: branch.marketing,
        stages: [
            {
                title: "Understanding Social Media Platforms",
                description: "Explore popular social media platforms, their features, and audience demographics. Learn how to select the right platforms for your brand and create engaging profiles."
            },
            {
                title: "Content Strategy and Creation",
                description: "Dive into crafting compelling social media content that resonates with your target audience. Discover content planning techniques, storytelling strategies, and visual design principles for maximum impact."
            },
            {
                title: "Building a Social Media Community",
                description: "Learn how to engage and grow your social media following through effective community management. Explore techniques for fostering meaningful interactions, handling feedback, and turning followers into brand advocates."
            },
            {
                title: "Measuring and Analyzing Social Media Performance",
                description: "Understand key metrics and tools for tracking social media performance. Learn how to analyze data, gain insights, and optimize your social media strategies for better results."
            }
        ],
        forWhom: [
            "Marketing professionals and social media managers",
            "Small business owners and entrepreneurs",
            "Marketing students and aspiring social media marketers"
        ]
    },//Marketing
    {
        id: 15,
        type: eventsType.workshop,
        title: "Strategies for Success in the Digital Age",
        day: 18,
        month: "August",
        time: "13:00 - 15:00",
        speaker: curators["Jerome Bell"],
        branch: branch.marketing,
        stages: [
            {
                title: "Understanding Social Media Platforms",
                description: "Explore popular social media platforms, their features, and audience demographics. Learn how to select the right platforms for your brand and create engaging profiles."
            },
            {
                title: "Content Strategy and Creation",
                description: "Dive into crafting compelling social media content that resonates with your target audience. Discover content planning techniques, storytelling strategies, and visual design principles for maximum impact."
            },
            {
                title: "Building a Social Media Community",
                description: "Learn how to engage and grow your social media following through effective community management. Explore techniques for fostering meaningful interactions, handling feedback, and turning followers into brand advocates."
            },
            {
                title: "Measuring and Analyzing Social Media Performance",
                description: "Understand key metrics and tools for tracking social media performance. Learn how to analyze data, gain insights, and optimize your social media strategies for better results."
            }
        ],
        forWhom: [
            "Marketing professionals and social media managers",
            "Small business owners and entrepreneurs",
            "Marketing students and aspiring social media marketers"
        ]
    },//Marketing
    {
        id: 16,
        type: eventsType.masterClass,
        title: "Navigating the Ever-Changing",
        day: 25,
        month: "September",
        time: "11:00 - 12:00",
        speaker: curators["Jerome Bell"],
        branch: branch.marketing,
        stages: [
            {
                title: "Understanding Social Media Platforms",
                description: "Explore popular social media platforms, their features, and audience demographics. Learn how to select the right platforms for your brand and create engaging profiles."
            },
            {
                title: "Content Strategy and Creation",
                description: "Dive into crafting compelling social media content that resonates with your target audience. Discover content planning techniques, storytelling strategies, and visual design principles for maximum impact."
            },
            {
                title: "Building a Social Media Community",
                description: "Learn how to engage and grow your social media following through effective community management. Explore techniques for fostering meaningful interactions, handling feedback, and turning followers into brand advocates."
            },
            {
                title: "Measuring and Analyzing Social Media Performance",
                description: "Understand key metrics and tools for tracking social media performance. Learn how to analyze data, gain insights, and optimize your social media strategies for better results."
            }
        ],
        forWhom: [
            "Marketing professionals and social media managers",
            "Small business owners and entrepreneurs",
            "Marketing students and aspiring social media marketers"
        ]
    },//Marketing
    {
        id: 17,
        type: eventsType.lecture,
        title: "Unleashing Marketing Innovations",
        day: 21,
        month: "March",
        time: "15:00 - 17:00",
        speaker: curators["Kristin Watson"],
        branch: branch.marketing,
        stages: [
            {
                title: "Understanding Social Media Platforms",
                description: "Explore popular social media platforms, their features, and audience demographics. Learn how to select the right platforms for your brand and create engaging profiles."
            },
            {
                title: "Content Strategy and Creation",
                description: "Dive into crafting compelling social media content that resonates with your target audience. Discover content planning techniques, storytelling strategies, and visual design principles for maximum impact."
            },
            {
                title: "Building a Social Media Community",
                description: "Learn how to engage and grow your social media following through effective community management. Explore techniques for fostering meaningful interactions, handling feedback, and turning followers into brand advocates."
            },
            {
                title: "Measuring and Analyzing Social Media Performance",
                description: "Understand key metrics and tools for tracking social media performance. Learn how to analyze data, gain insights, and optimize your social media strategies for better results."
            }
        ],
        forWhom: [
            "Marketing professionals and social media managers",
            "Small business owners and entrepreneurs",
            "Marketing students and aspiring social media marketers"
        ]
    },//Marketing
    {
        id: 18,
        type: eventsType.workshop,
        title: "Riding the Trends of Effective Marketing",
        day: 12,
        month: "October",
        time: "16:00 - 18:00",
        speaker: curators["Kristin Watson"],
        branch: branch.marketing,
        stages: [
            {
                title: "Understanding Social Media Platforms",
                description: "Explore popular social media platforms, their features, and audience demographics. Learn how to select the right platforms for your brand and create engaging profiles."
            },
            {
                title: "Content Strategy and Creation",
                description: "Dive into crafting compelling social media content that resonates with your target audience. Discover content planning techniques, storytelling strategies, and visual design principles for maximum impact."
            },
            {
                title: "Building a Social Media Community",
                description: "Learn how to engage and grow your social media following through effective community management. Explore techniques for fostering meaningful interactions, handling feedback, and turning followers into brand advocates."
            },
            {
                title: "Measuring and Analyzing Social Media Performance",
                description: "Understand key metrics and tools for tracking social media performance. Learn how to analyze data, gain insights, and optimize your social media strategies for better results."
            }
        ],
        forWhom: [
            "Marketing professionals and social media managers",
            "Small business owners and entrepreneurs",
            "Marketing students and aspiring social media marketers"
        ]
    },//Marketing
    {
        id: 19,
        type: eventsType.workshop,
        title: "Connecting Ideas, Strategies, and Success",
        day: 19,
        month: "April",
        time: "9:00 - 11:00",
        speaker: curators["Kristin Watson"],
        branch: branch.marketing,
        stages: [
            {
                title: "Understanding Social Media Platforms",
                description: "Explore popular social media platforms, their features, and audience demographics. Learn how to select the right platforms for your brand and create engaging profiles."
            },
            {
                title: "Content Strategy and Creation",
                description: "Dive into crafting compelling social media content that resonates with your target audience. Discover content planning techniques, storytelling strategies, and visual design principles for maximum impact."
            },
            {
                title: "Building a Social Media Community",
                description: "Learn how to engage and grow your social media following through effective community management. Explore techniques for fostering meaningful interactions, handling feedback, and turning followers into brand advocates."
            },
            {
                title: "Measuring and Analyzing Social Media Performance",
                description: "Understand key metrics and tools for tracking social media performance. Learn how to analyze data, gain insights, and optimize your social media strategies for better results."
            }
        ],
        forWhom: [
            "Marketing professionals and social media managers",
            "Small business owners and entrepreneurs",
            "Marketing students and aspiring social media marketers"
        ]
    },//Marketing
    {
        id: 20,
        type: eventsType.lecture,
        title: "Unlocking the Secrets of Modern Marketing",
        day: 13,
        month: "April",
        time: "18:00 - 21:00",
        speaker: curators["Kristin Watson"],
        branch: branch.marketing,
        stages: [
            {
                title: "Understanding Social Media Platforms",
                description: "Explore popular social media platforms, their features, and audience demographics. Learn how to select the right platforms for your brand and create engaging profiles."
            },
            {
                title: "Content Strategy and Creation",
                description: "Dive into crafting compelling social media content that resonates with your target audience. Discover content planning techniques, storytelling strategies, and visual design principles for maximum impact."
            },
            {
                title: "Building a Social Media Community",
                description: "Learn how to engage and grow your social media following through effective community management. Explore techniques for fostering meaningful interactions, handling feedback, and turning followers into brand advocates."
            },
            {
                title: "Measuring and Analyzing Social Media Performance",
                description: "Understand key metrics and tools for tracking social media performance. Learn how to analyze data, gain insights, and optimize your social media strategies for better results."
            }
        ],
        forWhom: [
            "Marketing professionals and social media managers",
            "Small business owners and entrepreneurs",
            "Marketing students and aspiring social media marketers"
        ]
    },//Marketing
    {
        id: 21,
        type: eventsType.lecture,
        title: "Mastering the Art of Interviewing: Hiring the Right Candidates",
        day: 10,
        month: "December",
        time: "12:00 - 14:00",
        speaker: curators["Leslie Alexander Li"],
        branch: branch.hr,
        stages: [
            {
                title: "Preparing for Successful Interviews",
                description: "Learn essential preparation techniques, including reviewing resumes, developing interview questions, and creating an effective interview structure. Discover strategies for evaluating candidates' skills, experience, and cultural fit."
            },
            {
                title: "Conducting Engaging Interviews",
                description: "Explore techniques to engage candidates and create a positive interview experience. Learn how to ask behavioral and situational questions, actively listen, and assess candidates' competencies and potential."
            },
            {
                title: "Assessing Candidate Fit",
                description: " Dive into assessing candidates' qualifications, values, and alignment with organizational culture. Discover techniques for evaluating soft skills, motivation, and potential for growth within the organization."
            },
            {
                title: "Making Informed Hiring Decisions",
                description: "Understand how to evaluate interview feedback, compare candidates, and make data-driven hiring decisions. Learn about the importance of diversity and inclusion in the hiring process and techniques for mitigating biases."
            }
        ],
        forWhom: [
            "HR professionals and recruiters",
            "Hiring managers and team leaders",
            "Business owners and entrepreneurs"
        ]
    },//HR
    {
        id: 22,
        type: eventsType.workshop,
        title: "HR Innovation Summit: Redefining the Future of Work",
        day: 5,
        month: "April",
        time: "14:00 - 16:00",
        speaker: curators["Leslie Alexander Li"],
        branch: branch.hr,
        stages: [
            {
                title: "Preparing for Successful Interviews",
                description: "Learn essential preparation techniques, including reviewing resumes, developing interview questions, and creating an effective interview structure. Discover strategies for evaluating candidates' skills, experience, and cultural fit."
            },
            {
                title: "Conducting Engaging Interviews",
                description: "Explore techniques to engage candidates and create a positive interview experience. Learn how to ask behavioral and situational questions, actively listen, and assess candidates' competencies and potential."
            },
            {
                title: "Assessing Candidate Fit",
                description: " Dive into assessing candidates' qualifications, values, and alignment with organizational culture. Discover techniques for evaluating soft skills, motivation, and potential for growth within the organization."
            },
            {
                title: "Making Informed Hiring Decisions",
                description: "Understand how to evaluate interview feedback, compare candidates, and make data-driven hiring decisions. Learn about the importance of diversity and inclusion in the hiring process and techniques for mitigating biases."
            }
        ],
        forWhom: [
            "HR professionals and recruiters",
            "Hiring managers and team leaders",
            "Business owners and entrepreneurs"
        ]
    },//HR
    {
        id: 23,
        type: eventsType.masterClass,
        title: "Strategic HR Forum: Building People-Centric Organizations",
        day: 16,
        month: "January",
        time: "16:00 - 18:00",
        speaker: curators["Leslie Alexander Li"],
        branch: branch.hr,
        stages: [
            {
                title: "Preparing for Successful Interviews",
                description: "Learn essential preparation techniques, including reviewing resumes, developing interview questions, and creating an effective interview structure. Discover strategies for evaluating candidates' skills, experience, and cultural fit."
            },
            {
                title: "Conducting Engaging Interviews",
                description: "Explore techniques to engage candidates and create a positive interview experience. Learn how to ask behavioral and situational questions, actively listen, and assess candidates' competencies and potential."
            },
            {
                title: "Assessing Candidate Fit",
                description: " Dive into assessing candidates' qualifications, values, and alignment with organizational culture. Discover techniques for evaluating soft skills, motivation, and potential for growth within the organization."
            },
            {
                title: "Making Informed Hiring Decisions",
                description: "Understand how to evaluate interview feedback, compare candidates, and make data-driven hiring decisions. Learn about the importance of diversity and inclusion in the hiring process and techniques for mitigating biases."
            }
        ],
        forWhom: [
            "HR professionals and recruiters",
            "Hiring managers and team leaders",
            "Business owners and entrepreneurs"
        ]
    },//HR
    {
        id: 24,
        type: eventsType.lecture,
        title: "Talent Acquisition Conference: Strategies for Finding and Hiring Top Talent",
        day: 19,
        month: "November",
        time: "20:00 - 22:00",
        speaker: curators["Leslie Alexander Li"],
        branch: branch.hr,
        stages: [
            {
                title: "Preparing for Successful Interviews",
                description: "Learn essential preparation techniques, including reviewing resumes, developing interview questions, and creating an effective interview structure. Discover strategies for evaluating candidates' skills, experience, and cultural fit."
            },
            {
                title: "Conducting Engaging Interviews",
                description: "Explore techniques to engage candidates and create a positive interview experience. Learn how to ask behavioral and situational questions, actively listen, and assess candidates' competencies and potential."
            },
            {
                title: "Assessing Candidate Fit",
                description: " Dive into assessing candidates' qualifications, values, and alignment with organizational culture. Discover techniques for evaluating soft skills, motivation, and potential for growth within the organization."
            },
            {
                title: "Making Informed Hiring Decisions",
                description: "Understand how to evaluate interview feedback, compare candidates, and make data-driven hiring decisions. Learn about the importance of diversity and inclusion in the hiring process and techniques for mitigating biases."
            }
        ],
        forWhom: [
            "HR professionals and recruiters",
            "Hiring managers and team leaders",
            "Business owners and entrepreneurs"
        ]
    },//HR
    {
        id: 25,
        type: eventsType.workshop,
        title: "Employee Engagement Symposium: Cultivating a Thriving Workplace Culture",
        day: 25,
        month: "May",
        time: "11:00 - 13:00",
        speaker: curators["Leslie Alexander Li"],
        branch: branch.hr,
        stages: [
            {
                title: "Preparing for Successful Interviews",
                description: "Learn essential preparation techniques, including reviewing resumes, developing interview questions, and creating an effective interview structure. Discover strategies for evaluating candidates' skills, experience, and cultural fit."
            },
            {
                title: "Conducting Engaging Interviews",
                description: "Explore techniques to engage candidates and create a positive interview experience. Learn how to ask behavioral and situational questions, actively listen, and assess candidates' competencies and potential."
            },
            {
                title: "Assessing Candidate Fit",
                description: " Dive into assessing candidates' qualifications, values, and alignment with organizational culture. Discover techniques for evaluating soft skills, motivation, and potential for growth within the organization."
            },
            {
                title: "Making Informed Hiring Decisions",
                description: "Understand how to evaluate interview feedback, compare candidates, and make data-driven hiring decisions. Learn about the importance of diversity and inclusion in the hiring process and techniques for mitigating biases."
            }
        ],
        forWhom: [
            "HR professionals and recruiters",
            "Hiring managers and team leaders",
            "Business owners and entrepreneurs"
        ]
    },//HR
    {
        id: 26,
        type: eventsType.workshop,
        title: "Diversity and Inclusion Forum: Fostering Equality and Empowerment",
        day: 27,
        month: "February",
        time: "15:00 - 17:00",
        speaker: curators["Kathryn Murphy"],
        branch: branch.hr,
        stages: [
            {
                title: "Preparing for Successful Interviews",
                description: "Learn essential preparation techniques, including reviewing resumes, developing interview questions, and creating an effective interview structure. Discover strategies for evaluating candidates' skills, experience, and cultural fit."
            },
            {
                title: "Conducting Engaging Interviews",
                description: "Explore techniques to engage candidates and create a positive interview experience. Learn how to ask behavioral and situational questions, actively listen, and assess candidates' competencies and potential."
            },
            {
                title: "Assessing Candidate Fit",
                description: " Dive into assessing candidates' qualifications, values, and alignment with organizational culture. Discover techniques for evaluating soft skills, motivation, and potential for growth within the organization."
            },
            {
                title: "Making Informed Hiring Decisions",
                description: "Understand how to evaluate interview feedback, compare candidates, and make data-driven hiring decisions. Learn about the importance of diversity and inclusion in the hiring process and techniques for mitigating biases."
            }
        ],
        forWhom: [
            "HR professionals and recruiters",
            "Hiring managers and team leaders",
            "Business owners and entrepreneurs"
        ]
    },//HR
    {
        id: 27,
        type: eventsType.masterClass,
        title: "HR Leadership Retreat: Inspiring HR Professionals to Drive Change",
        day: 2,
        month: "September",
        time: "11:00 - 14:00",
        speaker: curators["Kathryn Murphy"],
        branch: branch.hr,
        stages: [
            {
                title: "Preparing for Successful Interviews",
                description: "Learn essential preparation techniques, including reviewing resumes, developing interview questions, and creating an effective interview structure. Discover strategies for evaluating candidates' skills, experience, and cultural fit."
            },
            {
                title: "Conducting Engaging Interviews",
                description: "Explore techniques to engage candidates and create a positive interview experience. Learn how to ask behavioral and situational questions, actively listen, and assess candidates' competencies and potential."
            },
            {
                title: "Assessing Candidate Fit",
                description: " Dive into assessing candidates' qualifications, values, and alignment with organizational culture. Discover techniques for evaluating soft skills, motivation, and potential for growth within the organization."
            },
            {
                title: "Making Informed Hiring Decisions",
                description: "Understand how to evaluate interview feedback, compare candidates, and make data-driven hiring decisions. Learn about the importance of diversity and inclusion in the hiring process and techniques for mitigating biases."
            }
        ],
        forWhom: [
            "HR professionals and recruiters",
            "Hiring managers and team leaders",
            "Business owners and entrepreneurs"
        ]
    },//HR
    {
        id: 28,
        type: eventsType.masterClass,
        title: "Performance Management Workshop: Maximizing Employee Potential",
        day: 12,
        month: "April",
        time: "10:00 - 12:00",
        speaker: curators["Kathryn Murphy"],
        branch: branch.hr,
        stages: [
            {
                title: "Preparing for Successful Interviews",
                description: "Learn essential preparation techniques, including reviewing resumes, developing interview questions, and creating an effective interview structure. Discover strategies for evaluating candidates' skills, experience, and cultural fit."
            },
            {
                title: "Conducting Engaging Interviews",
                description: "Explore techniques to engage candidates and create a positive interview experience. Learn how to ask behavioral and situational questions, actively listen, and assess candidates' competencies and potential."
            },
            {
                title: "Assessing Candidate Fit",
                description: " Dive into assessing candidates' qualifications, values, and alignment with organizational culture. Discover techniques for evaluating soft skills, motivation, and potential for growth within the organization."
            },
            {
                title: "Making Informed Hiring Decisions",
                description: "Understand how to evaluate interview feedback, compare candidates, and make data-driven hiring decisions. Learn about the importance of diversity and inclusion in the hiring process and techniques for mitigating biases."
            }
        ],
        forWhom: [
            "HR professionals and recruiters",
            "Hiring managers and team leaders",
            "Business owners and entrepreneurs"
        ]
    },//HR
    {
        id: 29,
        type: eventsType.lecture,
        title: "Workforce Planning Conference: Aligning HR Strategy with Business Objectives",
        day: 21,
        month: "July",
        time: "16:00 - 18:00",
        speaker: curators["Kathryn Murphy"],
        branch: branch.hr,
        stages: [
            {
                title: "Preparing for Successful Interviews",
                description: "Learn essential preparation techniques, including reviewing resumes, developing interview questions, and creating an effective interview structure. Discover strategies for evaluating candidates' skills, experience, and cultural fit."
            },
            {
                title: "Conducting Engaging Interviews",
                description: "Explore techniques to engage candidates and create a positive interview experience. Learn how to ask behavioral and situational questions, actively listen, and assess candidates' competencies and potential."
            },
            {
                title: "Assessing Candidate Fit",
                description: " Dive into assessing candidates' qualifications, values, and alignment with organizational culture. Discover techniques for evaluating soft skills, motivation, and potential for growth within the organization."
            },
            {
                title: "Making Informed Hiring Decisions",
                description: "Understand how to evaluate interview feedback, compare candidates, and make data-driven hiring decisions. Learn about the importance of diversity and inclusion in the hiring process and techniques for mitigating biases."
            }
        ],
        forWhom: [
            "HR professionals and recruiters",
            "Hiring managers and team leaders",
            "Business owners and entrepreneurs"
        ]
    },//HR
    {
        id: 30,
        type: eventsType.lecture,
        title: "Mastering Full-Stack Web Development: From Frontend to Backend",
        day: 10,
        month: "November",
        time: "9:00 - 11:00",
        speaker: curators["Brooklyn Simmons"],
        branch: branch.development,
        stages: [
            {
                title: "Introduction to Web Development",
                description: "Dive into the world of web development and learn the basics of HTML, CSS, and JavaScript. Understand how these technologies work together to create interactive web pages."
            },
            {
                title: "Backend Development with Node.js",
                description: "Explore server-side development using Node.js. Learn how to build RESTful APIs, handle data storage and retrieval, and implement user authentication and authorization."
            },
            {
                title: "Frontend Development with React",
                description: "Discover the power of React for building responsive and dynamic user interfaces. Learn about component-based architecture, state management, and integrating APIs to create interactive web applications."
            },
            {
                title: "Database Integration and Deployment",
                description: "Learn how to integrate databases into web applications using MongoDB. Explore database design, querying, and data manipulation. Understand the deployment process and best practices for launching web applications."
            }
        ],
        forWhom: [
            "Aspiring web developers and programming enthusiasts",
            "Frontend developers",
            "Software engineers and professionals"
        ]
    },//Development
    {
        id: 31,
        type: eventsType.workshop,
        title: "The Ultimate Development Conference",
        day: 15,
        month: "March",
        time: "14:00 - 16:00",
        speaker: curators["Brooklyn Simmons"],
        branch: branch.development,
        stages: [
            {
                title: "Introduction to Web Development",
                description: "Dive into the world of web development and learn the basics of HTML, CSS, and JavaScript. Understand how these technologies work together to create interactive web pages."
            },
            {
                title: "Backend Development with Node.js",
                description: "Explore server-side development using Node.js. Learn how to build RESTful APIs, handle data storage and retrieval, and implement user authentication and authorization."
            },
            {
                title: "Frontend Development with React",
                description: "Discover the power of React for building responsive and dynamic user interfaces. Learn about component-based architecture, state management, and integrating APIs to create interactive web applications."
            },
            {
                title: "Database Integration and Deployment",
                description: "Learn how to integrate databases into web applications using MongoDB. Explore database design, querying, and data manipulation. Understand the deployment process and best practices for launching web applications."
            }
        ],
        forWhom: [
            "Aspiring web developers and programming enthusiasts",
            "Frontend developers",
            "Software engineers and professionals"
        ]
    },//Development
    {
        id: 32,
        type: eventsType.masterClass,
        title: "InnovateX: Exploring Cutting-Edge Development Techniques",
        day: 12,
        month: "June",
        time: "17:00 - 19:00",
        speaker: curators["Brooklyn Simmons"],
        branch: branch.development,
        stages: [
            {
                title: "Introduction to Web Development",
                description: "Dive into the world of web development and learn the basics of HTML, CSS, and JavaScript. Understand how these technologies work together to create interactive web pages."
            },
            {
                title: "Backend Development with Node.js",
                description: "Explore server-side development using Node.js. Learn how to build RESTful APIs, handle data storage and retrieval, and implement user authentication and authorization."
            },
            {
                title: "Frontend Development with React",
                description: "Discover the power of React for building responsive and dynamic user interfaces. Learn about component-based architecture, state management, and integrating APIs to create interactive web applications."
            },
            {
                title: "Database Integration and Deployment",
                description: "Learn how to integrate databases into web applications using MongoDB. Explore database design, querying, and data manipulation. Understand the deployment process and best practices for launching web applications."
            }
        ],
        forWhom: [
            "Aspiring web developers and programming enthusiasts",
            "Frontend developers",
            "Software engineers and professionals"
        ]
    },//Development
    {
        id: 33,
        type: eventsType.lecture,
        title: "Connecting Developers for Growth and Learning",
        day: 23,
        month: "October",
        time: "12:00 - 14:00",
        speaker: curators["Brooklyn Simmons"],
        branch: branch.development,
        stages: [
            {
                title: "Introduction to Web Development",
                description: "Dive into the world of web development and learn the basics of HTML, CSS, and JavaScript. Understand how these technologies work together to create interactive web pages."
            },
            {
                title: "Backend Development with Node.js",
                description: "Explore server-side development using Node.js. Learn how to build RESTful APIs, handle data storage and retrieval, and implement user authentication and authorization."
            },
            {
                title: "Frontend Development with React",
                description: "Discover the power of React for building responsive and dynamic user interfaces. Learn about component-based architecture, state management, and integrating APIs to create interactive web applications."
            },
            {
                title: "Database Integration and Deployment",
                description: "Learn how to integrate databases into web applications using MongoDB. Explore database design, querying, and data manipulation. Understand the deployment process and best practices for launching web applications."
            }
        ],
        forWhom: [
            "Aspiring web developers and programming enthusiasts",
            "Frontend developers",
            "Software engineers and professionals"
        ]
    },//Development
    {
        id: 34,
        type: eventsType.masterClass,
        title: "Building the Future through Development",
        day: 5,
        month: "September",
        time: "20:00 - 22:00",
        speaker: curators["Brooklyn Simmons"],
        branch: branch.development,
        stages: [
            {
                title: "Introduction to Web Development",
                description: "Dive into the world of web development and learn the basics of HTML, CSS, and JavaScript. Understand how these technologies work together to create interactive web pages."
            },
            {
                title: "Backend Development with Node.js",
                description: "Explore server-side development using Node.js. Learn how to build RESTful APIs, handle data storage and retrieval, and implement user authentication and authorization."
            },
            {
                title: "Frontend Development with React",
                description: "Discover the power of React for building responsive and dynamic user interfaces. Learn about component-based architecture, state management, and integrating APIs to create interactive web applications."
            },
            {
                title: "Database Integration and Deployment",
                description: "Learn how to integrate databases into web applications using MongoDB. Explore database design, querying, and data manipulation. Understand the deployment process and best practices for launching web applications."
            }
        ],
        forWhom: [
            "Aspiring web developers and programming enthusiasts",
            "Frontend developers",
            "Software engineers and professionals"
        ]
    },//Development
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