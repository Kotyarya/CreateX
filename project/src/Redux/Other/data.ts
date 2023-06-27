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
        description: "Jerome Bell is the curator of the marketing course, bringing a wealth of experience and a passion for innovation. With expertise in digital marketing and strategic planning, he equips students with essential skills and tools for a successful career in today's business landscape. Focusing on fostering creativity and analytical thinking, Jerome offers a unique approach that combines theory with hands-on practice, enabling students to achieve outstanding results.",
        rate: 3.8,
        numberCourses: 2,
        students: 690,
        img: JeromeBell
    },
    "Marvin McKinney": {
        title: "Marvin McKinney",
        subtitle: "Chief Executive Officer and Chief Financial Officer",
        description: "Marvin McKinney - a seasoned curator of the management course, with a wealth of knowledge and a knack for effective leadership. With extensive experience in the field of management, Marvin empowers students with essential skills and strategies to excel in the ever-evolving business world. His dynamic teaching style combines real-world examples with practical exercises, allowing students to develop strong managerial acumen and problem-solving abilities. With Marvin as their guide, students embark on a transformative journey towards becoming effective managers and leaders.",
        rate: 4.8,
        numberCourses: 2,
        students: 540,
        img: MarvinMcKinney
    },
    "Leslie Alexander Li": {
        title: "Leslie Alexander Li",
        subtitle: "HR Specialist and HR Department Head",
        description: "Leslie Alexander Li - a dedicated curator of the HR course, passionate about unlocking the potential of individuals and organizations. With a deep understanding of human resources principles and practices, Leslie equips students with the knowledge and skills needed to navigate the dynamic landscape of HR management. Through engaging lectures, case studies, and interactive discussions, Leslie fosters a collaborative learning environment where students develop expertise in talent acquisition, employee engagement, and organizational development. With Leslie's guidance, students gain the confidence to tackle HR challenges and drive positive change within their future workplaces.",
        rate: 4.3,
        numberCourses: 2,
        students: 210,
        img: LeslieAlexanderLi
    },
    "Kristin Watson": {
        title: "Kristin Watson",
        subtitle: "Marketing Specialist and Digital Marketing Specialist",
        description: "Kristin Watson - a visionary curator of the marketing course, fueled by a passion for innovation and strategic thinking. With a comprehensive understanding of the ever-evolving marketing landscape, Kristin empowers students to harness the power of digital marketing, consumer behavior, and brand management. Through immersive learning experiences, industry insights, and hands-on projects, Kristin cultivates a dynamic and creative environment where students develop their marketing prowess. With Kristin's guidance, students gain the skills to create impactful marketing strategies, leverage emerging trends, and propel businesses to new heights in today's competitive marketplace.",
        rate: 4.7,
        numberCourses: 2,
        students: 580,
        img: KristinWatson
    },
    "Guy Hawkins": {
        title: "Guy Hawkins",
        subtitle: "Senior UX designer in IT Product Company",
        description: "Guy Hawkins - a visionary curator of the design course, driven by a deep passion for creativity and aesthetics. With a wealth of experience in the design industry, Guy guides students on a transformative journey to unleash their artistic potential and develop a comprehensive understanding of design principles. Through engaging lectures, hands-on projects, and critiques, Guy nurtures a collaborative and experimental learning environment where students can explore various design disciplines, such as graphic design, product design, and user experience design. With Guy's mentorship, students cultivate their unique design style, hone their technical skills, and become adept at translating ideas into visually stunning creations.",
        rate: 3.1,
        numberCourses: 1,
        students: 150,
        img: GuyHawkins
    },
    "Dianne Russell": {
        title: "Dianne Russell",
        subtitle: "Chief Executive Officer and Chief Financial Officer",
        description: "Dianne Russell - a seasoned curator of the management course, passionate about fostering effective leadership and organizational success. With extensive experience in the field of management, Dianne empowers students to develop essential skills and strategies to navigate the complexities of the business world. Through interactive lectures, case studies, and practical exercises, Dianne creates a dynamic learning environment where students gain insights into various management disciplines, including strategic planning, team dynamics, and decision-making. Dianne's guidance helps students cultivate strong leadership qualities, enhance their problem-solving abilities, and effectively drive change within organizations. With Dianne as their mentor, students embark on a transformative journey to become effective managers and leaders.",
        rate: 4.3,
        numberCourses: 2,
        students: 370,
        img: DianneRussell
    },
    "Brooklyn Simmons": {
        title: "Brooklyn Simmons",
        subtitle: "Senior Full-stack Developer",
        description: "Brooklyn Simmons - a dedicated curator of the programming course, driven by a passion for coding and technology. With a deep understanding of programming languages and development methodologies, Brooklyn guides students on a transformative journey to master the art of programming. Through hands-on projects, practical exercises, and real-world examples, Brooklyn fosters a supportive learning environment where students gain proficiency in coding languages like Python, Java, and JavaScript. With Brooklyn's mentorship, students develop problem-solving skills, learn best practices in software development, and become equipped to tackle complex programming challenges. Prepare to unleash your coding potential under Brooklyn's expert guidance and embark on a rewarding journey in the world of programming.",
        rate: 5,
        numberCourses: 2,
        students: 780,
        img: BrooklynSimmons
    },
    "Kathryn Murphy": {
        title: "Kathryn Murphy",
        subtitle: "HR Specialist and HR Department Head",
        description: "Kathryn Murphy - a dedicated curator of the HR course, passionate about fostering a positive and inclusive work environment. With extensive knowledge and experience in human resources management, Kathryn guides students on a transformative journey to become effective HR professionals. Through interactive lectures, case studies, and practical exercises, Kathryn equips students with the necessary skills to handle various HR functions, including talent acquisition, employee relations, and performance management. Kathryn's emphasis on empathy, diversity, and ethical practices ensures that students develop a well-rounded understanding of HR principles and are prepared to navigate the challenges of the modern workplace. Under Kathryn's mentorship, students gain the confidence and expertise to contribute to the success and well-being of organizations and their employees.",
        rate: 4.1,
        numberCourses: 2,
        students: 290,
        img: KathrynMurphy
    },
    "Cody Fisher": {
        title: "Cody Fisher",
        subtitle: "Senior UX designer in IT Product Company",
        description: "Cody Fisher - a visionary curator of the design course, driven by a passion for creativity and innovation. With a wealth of experience in the design industry, Cody guides students on a transformative journey to unleash their artistic potential and develop a comprehensive understanding of design principles. Through hands-on projects, industry insights, and critical feedback, Cody fosters a collaborative and experimental learning environment where students can explore various design disciplines, such as graphic design, web design, and user experience design. With Cody's mentorship, students learn to think critically, solve design problems, and create visually compelling and impactful designs. Prepare to elevate your design skills under Cody's expert guidance and become a proficient and versatile designer.",
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
    curator: ICurator
    photo: string,
    description: string,
    forWhom: string[],
    date: string,
    lessons: ILessons[],
    willLearn: string[]
}

export interface ILessons {
    title: string,
    description: string
}

export const courses: ICourses[] = [
    {
        id: 1,
        title: "The Ultimate Google Ads Training Course",
        branch: branch.marketing,
        price: 100,
        author: curators["Jerome Bell"].title,
        curator: curators["Jerome Bell"],
        photo: curators["Jerome Bell"].img,
        description: "Course \"The Ultimate Google Ads Training Course\" in the field of marketing will help you become a professional marketer and successfully work on the Google Ads platform. In this course, you will learn how to create creative and effective marketing campaigns using Google Ads, manage them, and analyze the results. You will learn: How to create creative marketing campaigns using Google Ads How to manage marketing campaigns, defining target audiences, setting prices and keywordsHow to analyze campaign results, identifying the most effective keywords and phrases for promoting your product or serviceThis course is designed for marketers who are new to Google Ads or who want to improve their skills in this powerful platform. By the end of the course, you will have the skills and knowledge to create and optimize your own marketing campaigns on Google Ads.",
        forWhom: [
            "Marketers and advertising specialists looking to master the full potential of Google Ads.",
            "Online business owners aiming to enhance the effectiveness of their advertising campaigns.",
            "Students and graduates seeking to develop skills in the field of digital marketing.",
            "Small and medium-sized entrepreneurs in need of foundational knowledge in Google advertising for their businesses."
        ],
        date: "Sept 7 - Nov 2",
        lessons: [
            {
                "title": "Introduction to Google Ads",
                "description": "Get acquainted with the basics of Google Ads, its role in digital marketing, setting up an account, and understanding key performance indicators."
            },
            {
                "title": "Keyword Research and Market Analysis",
                "description": "Learn methods for selecting keywords, using tools to analyze competitors, and identifying potential keyword phrases for effective ad targeting."
            },
            {
                "title": "Creating Compelling Advertisements",
                "description": "Discover how to create engaging and informative ads tailored to your target audience, incorporating best practices for text and visual elements."
            },
            {
                "title": "Targeting Strategies",
                "description": "Understand various targeting methods, including geographic, time-based, demographic, and interest-based targeting, to maximize reaching your intended audience."
            },
            {
                "title": "Bid and Budget Management",
                "description": "Explore strategies for managing bids and budgets, including determining maximum bid amounts, optimizing budgets, and utilizing automated tools."
            },
            {
                "title": "Conversions and Tracking Results",
                "description": "Set up conversion tracking, measure campaign effectiveness, and optimize strategies based on data insights."
            },
            {
                "title": "Ad Extensions and Analytics",
                "description": "Explore different types of ad extensions, their benefits, and how to leverage them to enhance ad quality and improve conversions."
            },
            {
                "title": "Optimization and A/B Testing",
                "description": "Learn techniques for optimizing ad campaigns, analyzing results, and conducting A/B testing to continuously improve the effectiveness of your Google Ads."
            }
        ],
        willLearn: [
            "Fundamentals of Google Ads and its role in digital marketing.",
            "Keyword research techniques and market analysis strategies.",
            "Creating compelling and effective ad campaigns.",
            "Targeting methods to reach the right audience.",
            "Bid and budget management strategies for optimal campaign performance.",
            "Conversion tracking and measuring campaign effectiveness.",
            "Ad extensions utilization and analytics for improved ad performance."
        ]
    },
    {
        id: 2,
        title: "Product Management Fundamentals",
        branch: branch.management,
        price: 480,
        author: curators["Marvin McKinney"].title,
        curator: curators["Marvin McKinney"],
        photo: curators["Marvin McKinney"].img,
        description: "Product Management Fundamentals is a comprehensive course designed to equip aspiring product managers with the essential skills and knowledge to excel in their roles. Learn the principles of product strategy, market research, user experience design, and agile development methodologies. Understand how to identify customer needs, prioritize features, and effectively communicate with cross-functional teams. Gain hands-on experience through real-world case studies and collaborative projects. By the end of the course, you will be equipped with the foundational tools to drive successful product development and launch.",
        forWhom: [
            "Individuals seeking to transition into a career in product management",
            "Current product managers looking to enhance their skills and knowledge",
            "Entrepreneurs aiming to develop and launch their own products",
            "Cross-functional professionals interested in understanding the product development process"
        ],
        date: "May 14 - July 10",
        lessons: [
            {
                "title": "Introduction to Product Management",
                "description": "Explore the role of a product manager and the key responsibilities."
            },
            {
                "title": "Market Research and Competitive Analysis",
                "description": "Learn techniques to gather market insights and analyze competition."
            },
            {
                "title": "User Experience Design and Prototyping",
                "description": "Understand user-centered design principles and create interactive prototypes."
            },
            {
                "title": "Agile Development and Scrum Methodology",
                "description": "Gain an understanding of agile principles and Scrum framework."
            },
            {
                "title": "Product Roadmapping and Prioritization",
                "description": "Learn how to create product roadmaps and prioritize features."
            },
            {
                "title": "Effective Communication and Stakeholder Management",
                "description": "Develop communication skills to collaborate with cross-functional teams and stakeholders."
            },
            {
                "title": "Product Launch and Go-to-Market Strategy",
                "description": "Explore strategies for successfully launching a product in the market."
            }
        ],
        willLearn: [
            "Product strategy development and execution",
            "Market research techniques and competitive analysis",
            "User experience design and prototyping methodologies",
            "Agile development principles and Scrum framework",
            "Product roadmapping and feature prioritization",
            "Effective communication and stakeholder management",
            "Product launch strategies and go-to-market planning"
        ]
    },
    {
        id: 8,
        title: "Human Resources – Selection and Recruitment",
        branch: branch.hr,
        price: 150,
        author: curators["Kathryn Murphy"].title,
        curator: curators["Kathryn Murphy"],
        photo: curators["Kathryn Murphy"].img,
        description: "Human Resources – Selection and Recruitment is a comprehensive course that focuses on the key principles and strategies for effective employee selection and recruitment. Gain insights into the entire recruitment process, from job analysis and candidate sourcing to interviewing techniques and candidate assessment. Learn how to create job descriptions, conduct effective job interviews, and evaluate candidates based on skills, qualifications, and cultural fit. Understand the importance of diversity and inclusion in recruitment practices. By the end of the course, you will have the knowledge and skills to recruit and select top talent for your organization.",
        forWhom: [
            "Human resources professionals involved in the recruitment process",
            "Managers and team leaders responsible for hiring and selection",
            "Entrepreneurs and small business owners needing to build effective recruitment processes",
            "Students and individuals interested in pursuing a career in human resources"
        ],
        date: "Apr 5 - May 28",
        lessons: [
            {
                "title": "Introduction to Selection and Recruitment",
                "description": "Explore the fundamentals of employee selection and recruitment in organizations."
            },
            {
                "title": "Job Analysis and Job Descriptions",
                "description": "Learn how to conduct job analysis and create accurate job descriptions."
            },
            {
                "title": "Candidate Sourcing and Talent Pool Management",
                "description": "Understand effective methods for sourcing candidates and managing talent pools."
            },
            {
                "title": "Interviewing Techniques and Assessment Methods",
                "description": "Develop skills in conducting effective interviews and assessing candidate suitability."
            },
            {
                "title": "Selection Decision-Making and Offer Negotiation",
                "description": "Learn how to make informed selection decisions and negotiate job offers."
            },
            {
                "title": "Diversity and Inclusion in Recruitment",
                "description": "Understand the importance of diversity and inclusion in recruitment practices."
            },
            {
                "title": "Onboarding and Retention Strategies",
                "description": "Explore effective onboarding techniques and strategies for employee retention."
            }
        ],
        willLearn: [
            "The principles and strategies of employee selection and recruitment",
            "Job analysis and creating accurate job descriptions",
            "Candidate sourcing and talent pool management",
            "Effective interviewing techniques and assessment methods",
            "Selection decision-making and offer negotiation",
            "The importance of diversity and inclusion in recruitment",
            "Onboarding and retention strategies"
        ]
    },
    {
        id: 9,
        title: "User Experience. Human-centered Design",
        branch: branch.design,
        price: 240,
        author: curators["Cody Fisher"].title,
        curator: curators["Cody Fisher"],
        photo: curators["Cody Fisher"].img,
        description: "User Experience. Human-centered Design is a comprehensive course that focuses on creating exceptional user experiences through human-centered design principles. Learn how to understand user needs, conduct user research, and develop user personas. Explore techniques for creating intuitive and user-friendly interfaces, wireframing, and prototyping. Understand the importance of usability testing and iterative design. Gain insights into information architecture, interaction design, and visual design principles. By the end of the course, you will have the knowledge and skills to design user-centric digital products and services.",
        forWhom: [
            "User experience designers and professionals",
            "Web and app developers interested in enhancing their UX design skills",
            "Product managers and marketers seeking to understand user-centered design principles",
            "Students and individuals interested in pursuing a career in UX design"
        ],
        date: "May 15 - Jul 10",
        lessons: [
            {
                "title": "Introduction to User Experience Design",
                "description": "Explore the fundamentals of user experience design and its impact on digital products."
            },
            {
                "title": "User Research and Personas",
                "description": "Learn how to conduct user research and develop user personas."
            },
            {
                "title": "Interface Design and Wireframing",
                "description": "Understand the principles of creating intuitive and user-friendly interfaces."
            },
            {
                "title": "Prototyping and Iterative Design",
                "description": "Explore techniques for rapid prototyping and iterative design processes."
            },
            {
                "title": "Usability Testing and User Feedback",
                "description": "Learn how to conduct usability testing and gather user feedback for iterative improvements."
            },
            {
                "title": "Information Architecture and Interaction Design",
                "description": "Understand the principles of organizing information and creating interactive experiences."
            },
            {
                "title": "Visual Design and User Interface (UI) Design",
                "description": "Explore visual design principles and the creation of user interfaces."
            }
        ],
        willLearn: [
            "The principles and techniques of human-centered design",
            "User research and persona development",
            "Interface design and wireframing",
            "Prototyping and iterative design processes",
            "Usability testing and user feedback",
            "Information architecture and interaction design",
            "Visual design and user interface (UI) design"
        ]
    },
    {
        id: 3,
        title: "HR  Management and Analytics",
        branch: branch.hr,
        price: 200,
        author: curators["Leslie Alexander Li"].title,
        curator: curators["Leslie Alexander Li"],
        photo: curators["Leslie Alexander Li"].img,
        description: "HR Management and Analytics is a comprehensive course that covers key aspects of human resource management, including talent acquisition, employee development, performance management, and data-driven decision-making. Gain insights into the strategic role of HR in organizational success and learn how to leverage HR analytics to drive data-driven HR practices. Explore best practices in recruitment, employee engagement, and retention strategies. Develop the skills to analyze HR data, identify trends, and make informed decisions to optimize the workforce. By the end of the course, you will be equipped to effectively manage HR functions and utilize analytics for strategic HR initiatives.",
        forWhom: [
            "HR professionals seeking to enhance their knowledge and skills in HR management and analytics",
            "Managers and team leaders responsible for HR functions within their organizations",
            "Business professionals interested in understanding the strategic role of HR in organizational success",
            "Students and individuals considering a career in HR management or HR analytics"
        ],
        date: "Oct 15 - Dec 10",
        lessons: [
            {
                "title": "Introduction to HR Management",
                "description": "Explore the role of HR in organizations and the key functions of HR management."
            },
            {
                "title": "Talent Acquisition and Recruitment Strategies",
                "description": "Learn best practices in attracting and selecting top talent for organizations."
            },
            {
                "title": "Employee Development and Performance Management",
                "description": "Understand strategies for fostering employee growth and managing performance."
            },
            {
                "title": "HR Analytics and Data-driven Decision Making",
                "description": "Gain insights into HR analytics and how to leverage data for informed decision-making."
            },
            {
                "title": "Employee Engagement and Retention Strategies",
                "description": "Explore techniques to engage and retain employees for long-term success."
            },
            {
                "title": "HR Compliance and Legal Considerations",
                "description": "Understand the legal framework and compliance requirements in HR management."
            },
            {
                "title": "Strategic HR Planning and Organizational Development",
                "description": "Learn how to align HR strategies with organizational goals and drive development initiatives."
            }
        ],
        willLearn: [
            "The strategic role of HR in organizational success",
            "Talent acquisition and recruitment strategies",
            "Employee development and performance management techniques",
            "HR analytics and data-driven decision-making",
            "Employee engagement and retention strategies",
            "HR compliance and legal considerations",
            "Strategic HR planning and organizational development"
        ]
    },
    {
        id: 4,
        title: "Brand Management & PR Communications",
        branch: branch.marketing,
        price: 530,
        author: curators["Kristin Watson"].title,
        curator: curators["Kristin Watson"],
        photo: curators["Kristin Watson"].img,
        description: "Brand Management & PR Communications is a comprehensive course that explores the principles and strategies of effective brand management and public relations. Gain insights into building and maintaining strong brands, crafting brand identities, and managing brand reputation. Learn the essentials of strategic communication, media relations, and crisis management. Develop skills in creating compelling PR campaigns, managing social media presence, and measuring brand performance. By the end of the course, you will have the knowledge and skills to effectively manage brands and execute impactful PR communication strategies.",
        forWhom: [
            "Marketing professionals interested in brand management and PR communication",
            "PR practitioners looking to enhance their skills in brand building and strategic communication",
            "Entrepreneurs and business owners aiming to develop and strengthen their brand presence",
            "Students and individuals considering a career in brand management or PR communications"
        ],
        date: "Nov 5 - Dec 30",
        lessons: [
            {
                "title": "Introduction to Brand Management",
                "description": "Explore the fundamentals of brand management and its importance in business success."
            },
            {
                "title": "Crafting Brand Identity and Positioning",
                "description": "Learn how to create a strong brand identity and position it effectively in the market."
            },
            {
                "title": "Strategic Communication and PR Planning",
                "description": "Understand the principles of strategic communication and develop PR plans."
            },
            {
                "title": "Media Relations and Influencer Marketing",
                "description": "Learn how to build relationships with the media and leverage influencers for brand promotion."
            },
            {
                "title": "Crisis Management and Reputation Protection",
                "description": "Explore strategies for managing crises and protecting brand reputation."
            },
            {
                "title": "Digital PR and Social Media Management",
                "description": "Develop skills in managing PR campaigns and maintaining a strong social media presence."
            },
            {
                "title": "Brand Performance Measurement and Analytics",
                "description": "Learn how to measure brand performance and analyze data for continuous improvement."
            }
        ],
        willLearn: [
            "The principles of effective brand management",
            "Crafting brand identity and positioning",
            "Strategic communication and PR planning",
            "Media relations and influencer marketing strategies",
            "Crisis management and reputation protection",
            "Digital PR and social media management",
            "Brand performance measurement and analytics"
        ]
    },
    {
        id: 7,
        title: "High load Software Architecture",
        branch: branch.development,
        price: 600,
        author: curators["Brooklyn Simmons"].title,
        curator: curators["Brooklyn Simmons"],
        photo: curators["Brooklyn Simmons"].img,
        description: "High Load Software Architecture is an advanced course that delves into the design and implementation of scalable and high-performance software systems. Explore the principles and best practices of building architectures capable of handling high volumes of traffic and data processing. Learn about distributed systems, load balancing, caching, and data partitioning. Gain insights into fault tolerance, resiliency, and performance optimization techniques. Develop skills in selecting appropriate technologies, designing scalable databases, and implementing efficient communication protocols. By the end of the course, you will be equipped to design and architect software systems capable of handling demanding workloads.",
        forWhom: [
            "Software architects and senior developers working on high-performance systems",
            "System administrators and infrastructure engineers responsible for scaling software applications",
            "Technical managers and CTOs interested in understanding high load software architecture",
            "Advanced software engineering students looking to specialize in scalable system design"
        ],
        date: "Mar 20 - May 15",
        lessons: [
            {
                "title": "Introduction to High Load Software Architecture",
                "description": "Explore the challenges and considerations of designing high-performance software systems."
            },
            {
                "title": "Distributed Systems and Scalability",
                "description": "Learn about distributed architectures and techniques for scaling software systems."
            },
            {
                "title": "Load Balancing and Traffic Distribution",
                "description": "Understand load balancing strategies to distribute incoming traffic efficiently."
            },
            {
                "title": "Caching and Performance Optimization",
                "description": "Explore caching techniques and performance optimization strategies."
            },
            {
                "title": "Data Partitioning and Database Scaling",
                "description": "Learn how to partition data and scale databases to handle high loads."
            },
            {
                "title": "Fault Tolerance and Resiliency",
                "description": "Understand how to design fault-tolerant systems and ensure high availability."
            },
            {
                "title": "Communication Protocols and Messaging Systems",
                "description": "Explore efficient communication protocols and messaging systems for distributed architectures."
            }
        ],
        willLearn: [
            "Principles and best practices of high load software architecture",
            "Distributed systems and scalability",
            "Load balancing and traffic distribution",
            "Caching and performance optimization",
            "Data partitioning and database scaling",
            "Fault tolerance and resiliency",
            "Communication protocols and messaging systems"
        ]
    },
    {
        id: 5,
        title: "Graphic Design Basic",
        branch: branch.design,
        price: 500,
        author: curators["Guy Hawkins"].title,
        curator: curators["Guy Hawkins"],
        photo: curators["Guy Hawkins"].img,
        description: "Graphic Design Basic is a comprehensive course designed to introduce you to the fundamentals of graphic design. Learn the principles of composition, color theory, typography, and visual communication. Develop practical skills using industry-standard graphic design software. Explore various design projects, including logo design, layout design, and digital illustrations. Gain an understanding of design principles for print and digital media. By the end of the course, you will have a solid foundation in graphic design and be able to create visually appealing designs for various purposes.",
        forWhom: [
            "Individuals interested in starting a career in graphic design",
            "Students pursuing design-related fields and looking to enhance their skills",
            "Entrepreneurs and small business owners wanting to create their own visual assets",
            "Marketing professionals seeking to improve their understanding of graphic design principles"
        ],
        date: "Jan 10 - Mar 5",
        lessons: [
            {
                "title": "Introduction to Graphic Design",
                "description": "Explore the basics of graphic design and its applications in various industries."
            },
            {
                "title": "Composition and Layout Design",
                "description": "Learn the principles of effective composition and create visually balanced designs."
            },
            {
                "title": "Color Theory and Application",
                "description": "Understand the psychology of color and how to use it effectively in design."
            },
            {
                "title": "Typography and Type Design",
                "description": "Explore different typefaces and learn how to use typography to enhance design."
            },
            {
                "title": "Logo Design and Branding",
                "description": "Learn the process of creating unique logos and developing cohesive brand identities."
            },
            {
                "title": "Digital Illustration and Image Editing",
                "description": "Develop skills in creating digital illustrations and editing images using graphic design software."
            },
            {
                "title": "Print and Digital Media Design",
                "description": "Understand the design principles and considerations for both print and digital media."
            }
        ],
        willLearn: [
            "The fundamentals of graphic design",
            "Composition, color theory, and typography principles",
            "Logo design and branding concepts",
            "Digital illustration and image editing skills",
            "Design principles for print and digital media"
        ]
    },
    {
        id: 6,
        title: "Business Development Management",
        branch: branch.management,
        price: 400,
        author: curators["Dianne Russell"].title,
        curator: curators["Dianne Russell"],
        photo: curators["Dianne Russell"].img,
        description: "Business Development Management is a comprehensive course that equips participants with the skills and knowledge to drive business growth and expansion. Learn the strategies and techniques for identifying new business opportunities, developing strategic partnerships, and penetrating new markets. Understand the importance of market research, competitive analysis, and customer segmentation. Develop skills in negotiation, deal structuring, and contract management. Gain insights into effective sales strategies and relationship building. By the end of the course, you will be equipped with the tools to successfully lead business development initiatives and drive organizational growth.",
        forWhom: [
            "Professionals involved in business development and strategic planning",
            "Entrepreneurs seeking to expand their businesses and enter new markets",
            "Sales and marketing professionals interested in enhancing their business development skills",
            "Executives and managers responsible for driving business growth and expansion"
        ],
        date: "Feb 15 - Apr 12",
        lessons: [
            {
                "title": "Introduction to Business Development",
                "description": "Explore the role of business development in organizational growth and success."
            },
            {
                "title": "Market Research and Opportunity Analysis",
                "description": "Learn how to conduct market research and analyze business opportunities."
            },
            {
                "title": "Strategic Partnerships and Alliances",
                "description": "Understand the process of developing strategic partnerships and alliances."
            },
            {
                "title": "Sales Strategies and Relationship Building",
                "description": "Develop effective sales strategies and techniques for building strong relationships."
            },
            {
                "title": "Negotiation and Deal Structuring",
                "description": "Learn negotiation skills and how to structure profitable deals."
            },
            {
                "title": "Market Entry and Expansion Strategies",
                "description": "Explore strategies for entering new markets and expanding business operations."
            },
            {
                "title": "Risk Management and Contract Negotiation",
                "description": "Understand how to manage risks and negotiate contracts for business development projects."
            }
        ],
        willLearn: [
            "Strategies for identifying new business opportunities",
            "Market research and competitive analysis techniques",
            "Developing strategic partnerships and alliances",
            "Effective sales strategies and relationship building",
            "Negotiation skills and deal structuring",
            "Market entry and expansion strategies",
            "Risk management and contract negotiation"
        ]
    },
    {
        id: 18,
        title: "Digital Design Studio: Transforming Ideas into Engaging Websites",
        branch: branch.design,
        price: 310,
        author: curators["Cody Fisher"].title,
        curator: curators["Cody Fisher"],
        photo: curators["Cody Fisher"].img,
        description: "Digital Design Studio: Transforming Ideas into Engaging Websites is a hands-on course that focuses on the art and science of website design. Learn the principles of user-centered design, visual aesthetics, and interactive experiences. Gain proficiency in industry-standard design tools such as Adobe Photoshop and Adobe XD. Explore the process of creating wireframes, prototypes, and responsive layouts. Understand the importance of content strategy and information architecture. By the end of the course, you will have the skills and knowledge to transform your creative ideas into visually stunning and user-friendly websites.",
        forWhom: [
            "Design students or enthusiasts looking to specialize in web design",
            "Web developers seeking to enhance their design skills",
            "Entrepreneurs or business owners interested in designing their own websites",
            "Marketing professionals involved in website design and optimization"
        ],
        date: "Mar 20 - May 15",
        lessons: [
            {
                "title": "Introduction to Digital Design and User-Centered Design Principles",
                "description": "Explore the basics of digital design and learn about user-centered design principles."
            },
            {
                "title": "Visual Design and Aesthetics in Web Design",
                "description": "Learn how to create visually appealing designs and use color, typography, and imagery effectively."
            },
            {
                "title": "Creating Wireframes and Prototypes",
                "description": "Master the process of creating wireframes and interactive prototypes using industry-standard tools."
            },
            {
                "title": "Responsive Web Design and Mobile Optimization",
                "description": "Understand the importance of responsive design and learn techniques for optimizing websites for mobile devices."
            },
            {
                "title": "Content Strategy and Information Architecture",
                "description": "Explore the role of content strategy and information architecture in effective website design."
            },
            {
                "title": "Designing Engaging User Experiences",
                "description": "Learn how to create interactive and engaging user experiences through animations, microinteractions, and more."
            },
            {
                "title": "Web Design Project: From Concept to Final Website",
                "description": "Apply your skills and knowledge to complete a comprehensive web design project from concept to the final website."
            }
        ],
        willLearn: [
            "The principles of user-centered design and digital design fundamentals",
            "Visual design techniques and aesthetics in web design",
            "The process of creating wireframes and interactive prototypes",
            "Responsive web design and mobile optimization",
            "Content strategy and information architecture",
            "Designing engaging user experiences through animations and interactions",
            "Completing a comprehensive web design project"
        ]
    },
    {
        id: 16,
        title: "Coding in the Digital Age: Harnessing Technology through Programming",
        branch: branch.development,
        price: 640,
        author: curators["Brooklyn Simmons"].title,
        curator: curators["Brooklyn Simmons"],
        photo: curators["Brooklyn Simmons"].img,
        description: "Coding in the Digital Age: Harnessing Technology through Programming is a comprehensive course that introduces the fundamentals of coding and its applications in the digital era. Learn programming languages such as Python, JavaScript, and HTML/CSS to develop interactive websites, web applications, and software solutions. Explore the principles of algorithmic thinking, problem-solving, and debugging. Gain hands-on experience through coding exercises and projects. Understand the role of coding in emerging technologies such as artificial intelligence, data science, and internet of things. By the end of the course, you will have the knowledge and skills to harness technology through programming and embark on a coding journey in the digital age.",
        forWhom: [
            "Beginners with no prior coding experience",
            "Students interested in learning programming for digital applications",
            "Professionals looking to enhance their technical skills",
            "Individuals passionate about technology and coding"
        ],
        date: "Dec 3 - Feb 28",
        lessons: [
            {
                "title": "Introduction to Coding and Programming Concepts",
                "description": "Explore the basics of coding, programming languages, and essential concepts."
            },
            {
                "title": "HTML/CSS: Building Webpages and Web Design",
                "description": "Learn how to create and style webpages using HTML and CSS."
            },
            {
                "title": "Python Programming: From Fundamentals to Applications",
                "description": "Understand the fundamentals of Python programming and its applications in various domains."
            },
            {
                // eslint-disable-next-line no-script-url
                "title": "JavaScript: Interactivity and Front-End Development",
                "description": "Explore the power of JavaScript in adding interactivity and dynamic elements to websites."
            },
            {
                "title": "Algorithmic Thinking and Problem-Solving",
                "description": "Develop algorithmic thinking skills and learn effective problem-solving strategies."
            },
            {
                "title": "Debugging and Troubleshooting in Coding",
                "description": "Learn techniques for identifying and fixing errors in code."
            },
            {
                "title": "Coding in the Digital Age: Emerging Technologies",
                "description": "Explore the role of coding in emerging technologies such as AI, data science, and IoT."
            }
        ],
        willLearn: [
            "The fundamentals of coding and programming languages",
            "Building webpages and web design using HTML/CSS",
            "Python programming and its applications",
            "JavaScript for interactivity and front-end development",
            "Algorithmic thinking and problem-solving skills",
            "Debugging and troubleshooting in coding",
            "The role of coding in emerging technologies"
        ]
    },
    {
        id: 10,
        title: "Data-Driven Marketing: IT Solutions for Success",
        branch: branch.marketing,
        price: 180,
        author: curators["Jerome Bell"].title,
        curator: curators["Jerome Bell"],
        photo: curators["Jerome Bell"].img,
        description: "Data-Driven Marketing: IT Solutions for Success is a comprehensive course that explores the intersection of data analytics and marketing strategies. Learn how to leverage data to make informed marketing decisions and drive business success. Understand the role of IT solutions in collecting, analyzing, and interpreting marketing data. Explore techniques for customer segmentation, targeting, and personalization. Gain insights into marketing automation, campaign management, and performance tracking. Develop skills in using data visualization tools and implementing data-driven marketing strategies. By the end of the course, you will be equipped to harness the power of data for effective marketing campaigns.",
        forWhom: [
            "Marketing professionals interested in leveraging data for strategic decision-making",
            "Data analysts and data scientists seeking to apply their skills in marketing contexts",
            "Entrepreneurs and business owners looking to optimize their marketing efforts",
            "Students and individuals interested in the intersection of data analytics and marketing"
        ],
        date: "Jun 10 - Aug 5",
        lessons: [
            {
                "title": "Introduction to Data-Driven Marketing",
                "description": "Explore the fundamentals of data-driven marketing and its impact on business success."
            },
            {
                "title": "Data Collection and Analysis in Marketing",
                "description": "Learn how to collect and analyze marketing data using IT solutions."
            },
            {
                "title": "Customer Segmentation and Targeting",
                "description": "Understand techniques for segmenting customers and targeting specific audiences."
            },
            {
                "title": "Marketing Automation and Campaign Management",
                "description": "Explore the use of IT solutions for automating marketing processes and managing campaigns."
            },
            {
                "title": "Performance Tracking and ROI Measurement",
                "description": "Learn how to track marketing performance and measure return on investment (ROI)."
            },
            {
                "title": "Data Visualization in Marketing",
                "description": "Develop skills in visualizing marketing data using data visualization tools."
            },
            {
                "title": "Implementing Data-Driven Marketing Strategies",
                "description": "Understand the practical aspects of implementing data-driven marketing strategies."
            }
        ],
        willLearn: [
            "The role of data in marketing decision-making",
            "Data collection and analysis using IT solutions",
            "Customer segmentation and targeting techniques",
            "Marketing automation and campaign management",
            "Performance tracking and ROI measurement",
            "Data visualization in marketing",
            "Implementing data-driven marketing strategies"
        ]
    },
    {
        id: 15,
        title: "Tech-Driven Business Management: Leveraging IT for Growth",
        branch: branch.management,
        price: 460,
        author: curators["Dianne Russell"].title,
        curator: curators["Dianne Russell"],
        photo: curators["Dianne Russell"].img,
        description: "Tech-Driven Business Management: Leveraging IT for Growth is a comprehensive course that explores the strategic integration of technology in business management. Learn how to leverage IT solutions and digital platforms to drive growth and innovation. Understand the role of technology in optimizing business processes, improving decision-making, and enhancing customer experiences. Explore the use of data analytics, cloud computing, and automation in streamlining operations. Gain insights into digital transformation, cybersecurity, and emerging technologies. By the end of the course, you will have the knowledge and skills to effectively utilize technology for driving business growth and success.",
        forWhom: [
            "Business owners and entrepreneurs seeking to leverage technology for business growth",
            "Managers and executives responsible for strategic decision-making",
            "IT professionals working in business management or supporting business functions",
            "Students and individuals interested in the intersection of technology and business"
        ],
        date: "Nov 10 - Jan 5",
        lessons: [
            {
                "title": "Introduction to Tech-Driven Business Management",
                "description": "Explore the fundamentals of tech-driven business management and its benefits."
            },
            {
                "title": "Optimizing Business Processes with IT Solutions",
                "description": "Learn how to streamline business processes and improve efficiency using IT solutions."
            },
            {
                "title": "Data Analytics and Business Intelligence",
                "description": "Understand the use of data analytics and business intelligence for informed decision-making."
            },
            {
                "title": "Cloud Computing and Infrastructure Management",
                "description": "Explore the benefits and best practices of cloud computing and infrastructure management."
            },
            {
                "title": "Digital Transformation and Innovation",
                "description": "Learn about the process of digital transformation and fostering innovation through technology."
            },
            {
                "title": "Cybersecurity and Risk Management",
                "description": "Understand the importance of cybersecurity and risk management in tech-driven business management."
            },
            {
                "title": "Emerging Technologies and Future Trends",
                "description": "Explore the impact of emerging technologies on business management and upcoming trends to watch."
            }
        ],
        willLearn: [
            "The strategic integration of technology in business management",
            "Optimizing business processes with IT solutions",
            "Data analytics and business intelligence for informed decision-making",
            "Cloud computing and infrastructure management",
            "Digital transformation and fostering innovation",
            "Cybersecurity and risk management",
            "Emerging technologies and future trends in business management"
        ]
    },
    {
        id: 12,
        title: "IT Solutions for Effective HR Practices",
        branch: branch.hr,
        price: 290,
        author: curators["Leslie Alexander Li"].title,
        curator: curators["Leslie Alexander Li"],
        photo: curators["Leslie Alexander Li"].img,
        description: "IT Solutions for Effective HR Practices is a comprehensive course that explores the intersection of information technology and human resources management. Learn how to leverage IT solutions to streamline HR processes, enhance employee engagement, and improve organizational effectiveness. Understand the role of HRIS (Human Resource Information Systems) in managing employee data, recruitment, performance management, and talent development. Explore the use of HR analytics for data-driven decision-making. Gain insights into employee self-service portals, learning management systems, and digital HR platforms. By the end of the course, you will have the knowledge and skills to effectively utilize IT solutions for efficient and effective HR practices.",
        forWhom: [
            "HR professionals and practitioners seeking to enhance their IT skills",
            "Managers and supervisors responsible for HR processes and systems",
            "IT professionals working in HR departments or supporting HR functions",
            "Students and individuals interested in the integration of IT and HR"
        ],
        date: "Aug 20 - Oct 15",
        lessons: [
            {
                "title": "Introduction to IT Solutions in HR",
                "description": "Explore the fundamentals of IT solutions in HR practices and their benefits."
            },
            {
                "title": "HRIS and Employee Data Management",
                "description": "Learn how to effectively use HRIS for managing employee data and information."
            },
            {
                "title": "Recruitment and Talent Management Systems",
                "description": "Understand the use of IT solutions for recruitment and talent management processes."
            },
            {
                "title": "Performance Management and Appraisal Systems",
                "description": "Explore the role of IT solutions in performance management and employee appraisals."
            },
            {
                "title": "HR Analytics and Data-Driven Decision-Making",
                "description": "Learn how to leverage HR analytics for data-driven decision-making in HR practices."
            },
            {
                "title": "Employee Self-Service Portals and Digital HR Platforms",
                "description": "Understand the benefits and functionalities of employee self-service portals and digital HR platforms."
            },
            {
                "title": "Learning Management Systems and Employee Development",
                "description": "Explore the use of learning management systems for employee training and development."
            }
        ],
        willLearn: [
            "The integration of IT solutions and HR practices",
            "Effective use of HRIS for employee data management",
            "Utilizing IT solutions for recruitment and talent management",
            "IT systems for performance management and appraisals",
            "HR analytics for data-driven decision-making",
            "Employee self-service portals and digital HR platforms",
            "Learning management systems for employee development"
        ]
    },
    {
        id: 13,
        title: "Tech Marketing Blueprint: Building a Digital Brand with IT",
        branch: branch.marketing,
        price: 610,
        author: curators["Kristin Watson"].title,
        curator: curators["Kristin Watson"],
        photo: curators["Kristin Watson"].img,
        description: "Tech Marketing Blueprint: Building a Digital Brand with IT is a comprehensive course that focuses on the strategic use of technology in marketing and brand building. Learn how to leverage IT tools and platforms to create and promote a strong digital brand presence. Understand the role of digital marketing strategies, social media, and content marketing in building brand awareness and engagement. Explore the use of data analytics and marketing automation for targeted campaigns and personalized customer experiences. Gain insights into search engine optimization (SEO), online advertising, and mobile marketing. By the end of the course, you will have the knowledge and skills to develop an effective tech marketing blueprint for your brand.",
        forWhom: [
            "Marketing professionals interested in leveraging technology for brand building",
            "Entrepreneurs and business owners looking to enhance their digital marketing strategies",
            "IT professionals working in marketing departments or supporting marketing functions",
            "Students and individuals interested in the intersection of technology and marketing"
        ],
        date: "Oct 5 - Dec 1",
        lessons: [
            {
                "title": "Introduction to Tech Marketing and Digital Branding",
                "description": "Explore the fundamentals of tech marketing and the importance of digital branding."
            },
            {
                "title": "Digital Marketing Strategies for Brand Awareness",
                "description": "Learn how to develop and implement digital marketing strategies to build brand awareness."
            },
            {
                "title": "Social Media and Content Marketing",
                "description": "Understand the role of social media and content marketing in digital brand building."
            },
            {
                "title": "Data Analytics and Personalized Marketing",
                "description": "Explore the use of data analytics and marketing automation for personalized customer experiences."
            },
            {
                "title": "Search Engine Optimization (SEO) for Brand Visibility",
                "description": "Learn how to optimize your brand's online visibility through effective SEO strategies."
            },
            {
                "title": "Online Advertising and Mobile Marketing",
                "description": "Understand the use of online advertising and mobile marketing in reaching target audiences."
            },
            {
                "title": "Building a Tech Marketing Blueprint",
                "description": "Gain practical insights into developing a comprehensive tech marketing blueprint for your brand."
            }
        ],
        willLearn: [
            "The strategic use of technology in marketing and brand building",
            "Digital marketing strategies for brand awareness",
            "Social media and content marketing for digital branding",
            "Data analytics and personalized marketing",
            "Search engine optimization (SEO) for brand visibility",
            "Online advertising and mobile marketing",
            "Developing a comprehensive tech marketing blueprint"
        ],
    },
    {
        id: 17,
        title: "Managing Human Capital in the Digital Age: The Role of IT",
        branch: branch.hr,
        price: 210,
        author: curators["Kathryn Murphy"].title,
        curator: curators["Kathryn Murphy"],
        photo: curators["Kathryn Murphy"].img,
        description: "Managing Human Capital in the Digital Age: The Role of IT is a comprehensive course that explores the intersection of human resources management and information technology. Learn how to effectively leverage IT solutions and digital tools to manage and optimize human capital in organizations. Understand the role of HRIS (Human Resource Information Systems), talent management platforms, and workforce analytics in enhancing HR processes. Explore the impact of digital transformation on talent acquisition, performance management, and employee engagement. Gain insights into remote work and virtual collaboration. By the end of the course, you will have the knowledge and skills to navigate the challenges and opportunities of managing human capital in the digital age.",
        forWhom: [
            "HR professionals seeking to enhance their understanding of IT's role in human capital management",
            "Managers and supervisors responsible for HR functions",
            "IT professionals working in HR departments or supporting HR systems",
            "Students and individuals interested in the intersection of HR and technology"
        ],
        date: "Jan 15 - Mar 10",
        lessons: [
            {
                "title": "Introduction to Managing Human Capital in the Digital Age",
                "description": "Explore the fundamentals of managing human capital and the influence of IT."
            },
            {
                "title": "HRIS and Digital Tools for HR Management",
                "description": "Learn how HRIS and digital tools can streamline HR processes and improve efficiency."
            },
            {
                "title": "Talent Acquisition and Recruitment in the Digital Era",
                "description": "Understand the impact of digital transformation on talent acquisition strategies."
            },
            {
                "title": "Performance Management and Employee Development",
                "description": "Explore how technology can support performance management and foster employee development."
            },
            {
                "title": "Workforce Analytics and Data-Driven HR Decision-Making",
                "description": "Learn how to leverage workforce analytics for data-driven HR decision-making."
            },
            {
                "title": "Employee Engagement in the Remote Work Era",
                "description": "Understand the challenges and strategies for promoting employee engagement in remote work settings."
            },
            {
                "title": "Virtual Collaboration and HR Best Practices",
                "description": "Gain insights into virtual collaboration tools and best practices for HR professionals."
            }
        ],
        willLearn: [
            "The intersection of human resources management and information technology",
            "The role of HRIS and digital tools in HR management",
            "Talent acquisition and recruitment strategies in the digital era",
            "Performance management and employee development using technology",
            "Workforce analytics for data-driven HR decision-making",
            "Employee engagement in remote work environments",
            "Virtual collaboration tools and HR best practices"
        ]
    },
    {
        id: 11,
        title: "Strategic IT Management: Navigating the Digital Landscape",
        branch: branch.management,
        price: 520,
        author: curators["Marvin McKinney"].title,
        curator: curators["Marvin McKinney"],
        photo: curators["Marvin McKinney"].img,
        description: "Strategic IT Management: Navigating the Digital Landscape is a comprehensive course that focuses on the strategic management of IT resources in the context of the digital landscape. Gain insights into the role of IT in driving business innovation and competitive advantage. Understand the principles of strategic planning, IT governance, and technology alignment with business objectives. Explore emerging technologies and their impact on organizational strategies. Learn about IT project management, risk management, and cybersecurity. By the end of the course, you will have the knowledge and skills to effectively navigate the digital landscape and leverage IT for strategic success.",
        forWhom: [
            "IT managers and executives responsible for strategic decision-making",
            "Business leaders and managers seeking to understand the strategic role of IT",
            "Technology consultants and advisors working with organizations on digital transformation",
            "Students and individuals interested in the intersection of IT and business strategy"
        ],
        date: "Jul 15 - Sep 10",
        lessons: [
            {
                "title": "Introduction to Strategic IT Management",
                "description": "Explore the fundamentals of strategic IT management and its importance in the digital landscape."
            },
            {
                "title": "Strategic Planning and IT Governance",
                "description": "Learn how to develop strategic IT plans and establish effective IT governance frameworks."
            },
            {
                "title": "Technology Alignment and Digital Transformation",
                "description": "Understand the alignment of technology with business objectives and the process of digital transformation."
            },
            {
                "title": "Emerging Technologies and Strategic Impact",
                "description": "Explore the strategic implications of emerging technologies such as AI, IoT, and blockchain."
            },
            {
                "title": "IT Project Management and Delivery",
                "description": "Learn best practices for managing IT projects and ensuring successful delivery."
            },
            {
                "title": "Risk Management and Cybersecurity",
                "description": "Understand the importance of risk management and cybersecurity in strategic IT management."
            },
            {
                "title": "IT Leadership and Organizational Change",
                "description": "Explore the role of IT leadership in driving organizational change and innovation."
            }
        ],
        willLearn: [
            "The principles and importance of strategic IT management",
            "Strategic planning and IT governance",
            "Technology alignment and digital transformation",
            "Emerging technologies and their strategic impact",
            "IT project management and successful delivery",
            "Risk management and cybersecurity",
            "IT leadership and driving organizational change"
        ]
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