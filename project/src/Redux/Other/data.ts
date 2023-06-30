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
                "title": "Lesson 1: Introduction to Google Ads",
                "description": "In this lesson, you'll get an overview of Google Ads and learn about its benefits for businesses. We'll explore the different types of Google Ads campaigns and their objectives. You'll also learn how to set up your Google Ads account and navigate the interface."
            },
            {
                "title": "Lesson 2: Keyword Research and Planning",
                "description": "In this lesson, we'll dive into keyword research and planning for your Google Ads campaigns. You'll learn how to use keyword research tools, identify relevant keywords for your business, and build effective keyword lists. We'll also discuss keyword match types and negative keywords."
            },
            {
                "title": "Lesson 3: Creating Compelling Ad Copy",
                "description": "In this lesson, you'll discover the art of creating compelling ad copy that grabs attention and drives clicks. We'll discuss best practices for writing compelling headlines, crafting engaging ad descriptions, and utilizing ad extensions. You'll also learn how to align your ad copy with your target audience."
            },
            {
                "title": "Lesson 4: Campaign and Ad Group Structure",
                "description": "In this lesson, we'll explore the importance of a well-structured Google Ads campaign. You'll learn how to organize your campaigns and ad groups effectively, set appropriate budgets, and optimize your campaign settings. We'll also discuss ad scheduling and geotargeting strategies."
            },
            {
                "title": "Lesson 5: Bidding and Budget Optimization",
                "description": "In this lesson, we'll delve into bidding and budget optimization techniques. You'll learn about different bidding strategies and how to choose the right one for your goals. We'll also discuss budget allocation, bid adjustments, and conversion tracking to maximize your return on investment."
            },
            {
                "title": "Lesson 6: Ad Extensions and Ad Formats",
                "description": "In this lesson, we'll explore the power of ad extensions and various ad formats in Google Ads. You'll learn how to leverage extensions like sitelinks, callouts, and structured snippets to enhance your ads. We'll also discuss responsive search ads, display ads, and video ads."
            },
            {
                "title": "Lesson 7: Monitoring and Optimization",
                "description": "In this lesson, we'll cover the key aspects of monitoring and optimizing your Google Ads campaigns. You'll learn how to track the performance of your ads, analyze important metrics, and make data-driven optimizations. We'll discuss A/B testing, ad rotation, and campaign experiments."
            },
            {
                "title": "Lesson 8: Remarketing and Advanced Strategies",
                "description": "In this final lesson, we'll explore advanced strategies in Google Ads, including remarketing, audience targeting, and advanced campaign settings. You'll learn how to reach and engage your audience across different channels and devices. We'll also discuss campaign automation and the future of Google Ads."
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
                "title": "Lesson 1: Introduction to Product Management",
                "description": "In this lesson, you'll be introduced to the role of a product manager and the key responsibilities involved. We'll explore the product management lifecycle and the importance of understanding customer needs. You'll also learn about the skills and qualities required to excel in product management."
            },
            {
                "title": "Lesson 2: Market Research and Analysis",
                "description": "In this lesson, we'll dive into market research and analysis for effective product management. You'll learn how to conduct market research to identify customer pain points, analyze competitors, and uncover market opportunities. We'll also discuss techniques for gathering customer feedback and conducting user research."
            },
            {
                "title": "Lesson 3: Defining Product Strategy and Roadmapping",
                "description": "In this lesson, we'll focus on defining a product strategy and creating a product roadmap. You'll learn how to align business goals with customer needs, prioritize features, and develop a strategic roadmap. We'll also discuss the importance of setting clear product goals and tracking progress."
            },
            {
                "title": "Lesson 4: User-Centric Design and Prototyping",
                "description": "In this lesson, we'll explore the principles of user-centric design and the importance of prototyping. You'll learn how to conduct user research, create user personas, and develop user stories. We'll also discuss techniques for prototyping and usability testing to iterate and refine your product ideas."
            },
            {
                "title": "Lesson 5: Agile Development and Scrum",
                "description": "In this lesson, we'll delve into agile development methodologies, particularly Scrum, and their relevance to product management. You'll learn about sprint planning, backlog management, and effective collaboration with development teams. We'll also discuss the role of the product manager in an agile environment."
            },
            {
                "title": "Lesson 6: Product Launch and Go-to-Market Strategy",
                "description": "In this lesson, we'll focus on the product launch phase and developing a go-to-market strategy. You'll learn how to plan and execute a successful product launch, define target markets, and create marketing and sales strategies. We'll discuss product positioning, pricing, and distribution channels."
            },
            {
                "title": "Lesson 7: Product Metrics and Performance Tracking",
                "description": "In this lesson, we'll cover the importance of product metrics and performance tracking in product management. You'll learn how to define and track key performance indicators (KPIs), measure product success, and make data-driven decisions. We'll discuss tools and techniques for analyzing product performance."
            },
            {
                "title": "Lesson 8: Product Iteration and Continuous Improvement",
                "description": "In this final lesson, we'll explore the concept of product iteration and continuous improvement. You'll learn how to gather and prioritize feedback, plan product enhancements, and manage product updates. We'll discuss the importance of maintaining a feedback loop with customers and stakeholders."
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
                "title": "Lesson 1: Introduction to Selection and Recruitment",
                "description": "In this lesson, you'll be introduced to the importance of effective selection and recruitment processes in human resources. We'll discuss the role of HR in talent acquisition and the impact of recruitment on organizational success. You'll also learn about legal and ethical considerations in the selection process."
            },
            {
                "title": "Lesson 2: Job Analysis and Job Descriptions",
                "description": "In this lesson, we'll explore the process of job analysis and its role in recruitment. You'll learn how to conduct job analysis, define job descriptions and specifications, and identify key competencies for different positions. We'll discuss the importance of aligning job requirements with organizational goals."
            },
            {
                "title": "Lesson 3: Sourcing and Attracting Candidates",
                "description": "In this lesson, we'll focus on sourcing and attracting candidates for job vacancies. You'll learn about different sourcing channels, such as job boards, social media, and professional networks. We'll discuss strategies for creating compelling job advertisements and employer branding to attract top talent."
            },
            {
                "title": "Lesson 4: Screening and Shortlisting Candidates",
                "description": "In this lesson, we'll delve into the screening and shortlisting process in recruitment. You'll learn how to review resumes, conduct initial assessments, and use screening techniques like phone interviews or pre-employment tests. We'll discuss best practices for evaluating candidates and creating shortlists for further evaluation."
            },
            {
                "title": "Lesson 5: Selection Interviews",
                "description": "In this lesson, we'll explore the different types of selection interviews and their effectiveness in assessing candidates. You'll learn how to structure and conduct behavioral, situational, and competency-based interviews. We'll discuss techniques for evaluating candidate responses and making informed hiring decisions."
            },
            {
                "title": "Lesson 6: Assessments and Testing",
                "description": "In this lesson, we'll focus on assessments and testing methods in the selection process. You'll learn about different types of assessments, such as cognitive ability tests, personality assessments, and skills tests. We'll discuss the benefits of using assessments for predicting job performance and minimizing bias."
            },
            {
                "title": "Lesson 7: Reference Checks and Background Screening",
                "description": "In this lesson, we'll cover the importance of reference checks and background screening in the selection process. You'll learn how to conduct effective reference checks, verify employment history, and perform background checks in compliance with legal requirements. We'll discuss techniques for validating candidate credentials and ensuring reliability."
            },
            {
                "title": "Lesson 8: Making the Job Offer and Onboarding",
                "description": "In this final lesson, we'll focus on making job offers and the onboarding process. You'll learn how to prepare and present job offers, negotiate compensation packages, and handle candidate acceptance or rejection. We'll discuss the importance of a comprehensive onboarding program to facilitate new employee integration."
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
                "title": "Lesson 1: Introduction to User Experience (UX)",
                "description": "In this lesson, you'll be introduced to the concept of User Experience (UX) and its importance in product design. We'll discuss the role of human-centered design in creating meaningful and usable products. You'll also learn about the key principles and elements of a good user experience."
            },
            {
                "title": "Lesson 2: User Research and Understanding User Needs",
                "description": "In this lesson, we'll explore the process of user research and understanding user needs. You'll learn how to conduct user interviews, surveys, and usability testing to gather valuable insights. We'll discuss techniques for creating user personas and empathy maps to empathize with users and design for their needs."
            },
            {
                "title": "Lesson 3: Information Architecture and User Flows",
                "description": "In this lesson, we'll delve into information architecture and designing user flows. You'll learn how to organize information effectively, create intuitive navigation systems, and design user flows that guide users through the product. We'll discuss techniques for creating wireframes and prototypes to visualize the user experience."
            },
            {
                "title": "Lesson 4: Interaction Design and Usability",
                "description": "In this lesson, we'll focus on interaction design and usability principles. You'll learn how to design intuitive and responsive user interfaces, define clear interactions, and provide feedback to users. We'll discuss usability testing methods to evaluate the effectiveness of the design and make improvements."
            },
            {
                "title": "Lesson 5: Visual Design and Branding",
                "description": "In this lesson, we'll explore the role of visual design and branding in user experience. You'll learn how to create visually appealing interfaces, use color and typography effectively, and align the design with the brand identity. We'll discuss the impact of visual design on user perception and emotional engagement."
            },
            {
                "title": "Lesson 6: Accessibility and Inclusive Design",
                "description": "In this lesson, we'll delve into accessibility and inclusive design principles. You'll learn how to design products that are accessible to users with disabilities, follow web accessibility guidelines, and ensure equal access to information. We'll discuss the importance of inclusive design for a diverse user base."
            },
            {
                "title": "Lesson 7: Usability Testing and User Feedback",
                "description": "In this lesson, we'll cover usability testing techniques and gathering user feedback. You'll learn how to plan and conduct usability tests, analyze test results, and iterate on the design based on user feedback. We'll discuss the importance of iterative design and continuous improvement in user experience."
            },
            {
                "title": "Lesson 8: UX Evaluation and Iteration",
                "description": "In this final lesson, we'll focus on UX evaluation and iteration. You'll learn how to measure the success of your design through UX metrics and conduct heuristic evaluations. We'll discuss techniques for incorporating user feedback, making informed design decisions, and continuously iterating to improve the user experience."
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
                "title": "Lesson 1: Introduction to HR Management and Analytics",
                "description": "In this lesson, you'll be introduced to the field of HR management and the growing importance of analytics in HR decision-making. We'll discuss the role of HR in organizational success and the value of data-driven HR strategies. You'll also learn about the key concepts and frameworks in HR analytics."
            },
            {
                "title": "Lesson 2: HR Metrics and Data Collection",
                "description": "In this lesson, we'll explore the different types of HR metrics and the process of data collection. You'll learn how to identify and measure relevant HR metrics, such as employee turnover, recruitment effectiveness, and employee engagement. We'll discuss techniques for collecting and organizing HR data."
            },
            {
                "title": "Lesson 3: HR Data Analysis and Visualization",
                "description": "In this lesson, we'll focus on HR data analysis and visualization techniques. You'll learn how to analyze HR data to uncover insights, identify trends, and make informed decisions. We'll discuss data visualization tools and techniques for effectively communicating HR analytics findings to stakeholders."
            },
            {
                "title": "Lesson 4: Predictive Analytics in HR",
                "description": "In this lesson, we'll delve into predictive analytics in HR and its application in workforce planning and talent management. You'll learn how to use historical HR data to predict future trends, anticipate talent needs, and make proactive HR decisions. We'll discuss predictive modeling techniques and their limitations."
            },
            {
                "title": "Lesson 5: HR Analytics for Recruitment and Selection",
                "description": "In this lesson, we'll explore the use of HR analytics in recruitment and selection processes. You'll learn how to analyze recruitment data to evaluate the effectiveness of sourcing channels, assess candidate quality, and improve the selection process. We'll discuss the role of analytics in creating a diverse and inclusive workforce."
            },
            {
                "title": "Lesson 6: HR Analytics for Performance Management",
                "description": "In this lesson, we'll focus on the application of HR analytics in performance management. You'll learn how to measure and analyze performance metrics, identify top performers, and uncover factors that contribute to high performance. We'll discuss the use of analytics in performance evaluations and feedback processes."
            },
            {
                "title": "Lesson 7: HR Analytics for Employee Engagement and Retention",
                "description": "In this lesson, we'll cover the use of HR analytics in measuring employee engagement and retention. You'll learn how to analyze employee survey data, identify drivers of engagement, and develop strategies to improve employee retention. We'll discuss the role of analytics in creating a positive and inclusive work environment."
            },
            {
                "title": "Lesson 8: Ethical Considerations and Future Trends in HR Analytics",
                "description": "In this final lesson, we'll explore ethical considerations in HR analytics and emerging trends in the field. You'll learn about the importance of data privacy, security, and compliance in HR analytics. We'll discuss the future of HR analytics, including the use of artificial intelligence and machine learning in HR decision-making."
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
                "title": "Lesson 1: Introduction to Brand Management",
                "description": "In this lesson, you'll be introduced to the concept of brand management and its importance in building a strong brand identity. We'll discuss the role of brand management in creating brand equity and fostering customer loyalty. You'll also learn about the key components of a brand and brand positioning strategies."
            },
            {
                "title": "Lesson 2: Brand Strategy and Development",
                "description": "In this lesson, we'll explore the process of developing a brand strategy. You'll learn how to define brand goals, identify target markets, and differentiate your brand from competitors. We'll discuss techniques for brand personality development, brand architecture, and brand extension strategies."
            },
            {
                "title": "Lesson 3: Brand Identity and Visual Communication",
                "description": "In this lesson, we'll focus on brand identity and visual communication. You'll learn how to create a compelling brand identity, including logo design, color palette selection, and typography choices. We'll discuss the importance of consistency in visual branding and how it contributes to brand recognition."
            },
            {
                "title": "Lesson 4: Brand Messaging and Storytelling",
                "description": "In this lesson, we'll delve into brand messaging and storytelling. You'll learn how to craft a brand narrative that resonates with your target audience and effectively communicates your brand values. We'll discuss storytelling techniques, brand voice, and messaging across different communication channels."
            },
            {
                "title": "Lesson 5: Public Relations (PR) Fundamentals",
                "description": "In this lesson, we'll explore the fundamentals of public relations (PR) and its role in brand management. You'll learn about the importance of PR in building brand reputation, managing crises, and fostering positive relationships with the media and stakeholders. We'll discuss key PR strategies and tactics."
            },
            {
                "title": "Lesson 6: Media Relations and Press Release Writing",
                "description": "In this lesson, we'll focus on media relations and the art of writing effective press releases. You'll learn how to build relationships with journalists, pitch stories, and navigate media interviews. We'll discuss the structure and elements of a press release and best practices for writing compelling news stories."
            },
            {
                "title": "Lesson 7: Digital PR and Online Reputation Management",
                "description": "In this lesson, we'll cover digital PR strategies and online reputation management. You'll learn how to leverage digital platforms, such as social media and online influencers, to enhance brand visibility and engagement. We'll discuss techniques for monitoring online reputation, handling negative feedback, and managing brand crises."
            },
            {
                "title": "Lesson 8: Brand Measurement and Evaluation",
                "description": "In this final lesson, we'll explore brand measurement and evaluation techniques. You'll learn how to assess brand performance, measure brand awareness, and track brand sentiment. We'll discuss the use of key performance indicators (KPIs) and brand audits to evaluate the effectiveness of brand management strategies."
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
                "title": "Lesson 1: Introduction to High Load Software Architecture",
                "description": "In this lesson, you'll be introduced to the concept of high load software architecture and its importance in designing scalable and efficient systems. We'll discuss the challenges of handling high traffic and large data volumes. You'll also learn about the key principles and considerations in high load software architecture."
            },
            {
                "title": "Lesson 2: Scalability and Performance Optimization",
                "description": "In this lesson, we'll explore scalability and performance optimization techniques. You'll learn how to design systems that can handle increased load and traffic. We'll discuss strategies for horizontal and vertical scaling, caching mechanisms, and optimizing database performance. You'll also learn about load balancing and content delivery networks (CDNs)."
            },
            {
                "title": "Lesson 3: Distributed Systems and Microservices",
                "description": "In this lesson, we'll focus on distributed systems and microservices architecture. You'll learn how to design and manage a distributed system that can handle high load. We'll discuss the benefits of microservices, service discovery, communication protocols, and fault tolerance in distributed environments."
            },
            {
                "title": "Lesson 4: Data Storage and Database Design",
                "description": "In this lesson, we'll delve into data storage and database design for high load systems. You'll learn about different types of databases, such as relational, NoSQL, and NewSQL. We'll discuss techniques for database partitioning, sharding, replication, and ensuring data consistency and integrity in distributed environments."
            },
            {
                "title": "Lesson 5: Caching and In-Memory Data Stores",
                "description": "In this lesson, we'll explore caching and in-memory data stores. You'll learn how to implement caching strategies to improve system performance and reduce database load. We'll discuss popular caching mechanisms like Redis and Memcached, and their integration with high load systems."
            },
            {
                "title": "Lesson 6: Message Brokers and Event-driven Architectures",
                "description": "In this lesson, we'll focus on message brokers and event-driven architectures. You'll learn how to implement asynchronous communication patterns to handle high load scenarios. We'll discuss message queues, publish-subscribe systems, and event sourcing. You'll also learn about the benefits of decoupling components using messaging systems."
            },
            {
                "title": "Lesson 7: Fault Tolerance and Resilience",
                "description": "In this lesson, we'll cover fault tolerance and resilience strategies in high load software architecture. You'll learn how to design systems that can recover from failures and continue operating smoothly. We'll discuss techniques such as redundancy, failover mechanisms, circuit breakers, and handling partial failures."
            },
            {
                "title": "Lesson 8: Monitoring and Performance Testing",
                "description": "In this final lesson, we'll explore monitoring and performance testing in high load systems. You'll learn how to monitor system health, collect metrics, and identify performance bottlenecks. We'll discuss performance testing techniques, load testing tools, and capacity planning to ensure system reliability and optimal performance."
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
                "title": "Lesson 1: Introduction to Graphic Design",
                "description": "In this lesson, you'll be introduced to the world of graphic design. We'll discuss the role of graphic design in visual communication and its applications across various industries. You'll learn about the key principles of design, including typography, color theory, layout, and composition."
            },
            {
                "title": "Lesson 2: Typography and Text Design",
                "description": "In this lesson, we'll focus on typography and text design. You'll learn about different types of fonts, font combinations, and their impact on visual communication. We'll discuss techniques for creating hierarchy, legibility, and emphasis through typography. You'll also learn about kerning, leading, and other typographic adjustments."
            },
            {
                "title": "Lesson 3: Color Theory and Color Harmony",
                "description": "In this lesson, we'll delve into color theory and its importance in graphic design. You'll learn about color models, color psychology, and the use of color to evoke emotions and convey messages. We'll discuss color harmony, color schemes, and how to select and combine colors effectively in your designs."
            },
            {
                "title": "Lesson 4: Layout and Composition",
                "description": "In this lesson, we'll explore layout and composition principles. You'll learn how to create visually balanced and aesthetically pleasing designs. We'll discuss concepts such as the rule of thirds, grid systems, visual hierarchy, and the use of white space. You'll also learn about the importance of alignment and proximity in design."
            },
            {
                "title": "Lesson 5: Visual Elements and Graphic Design Tools",
                "description": "In this lesson, we'll focus on visual elements in graphic design. You'll learn how to use shapes, lines, icons, and images to enhance your designs. We'll discuss the principles of visual consistency and how to create cohesive visual identities. You'll also be introduced to popular graphic design tools and software."
            },
            {
                "title": "Lesson 6: Image Editing and Photo Manipulation",
                "description": "In this lesson, we'll cover image editing and photo manipulation techniques. You'll learn how to use graphic design software to enhance and modify images. We'll discuss cropping, resizing, retouching, and applying filters and effects to achieve desired visual outcomes. You'll also learn about file formats and optimization for web and print."
            },
            {
                "title": "Lesson 7: Designing for Print and Digital Media",
                "description": "In this lesson, we'll explore the different considerations for designing for print and digital media. You'll learn about print design principles, including color modes, resolution, and print file preparation. We'll discuss the requirements and best practices for designing graphics for websites, social media, and other digital platforms."
            },
            {
                "title": "Lesson 8: Creative Brief and Design Process",
                "description": "In this final lesson, we'll focus on the creative brief and the design process. You'll learn how to understand client requirements, conduct research, and develop design concepts. We'll discuss the importance of iteration, feedback, and collaboration in the design process. You'll also learn how to present and deliver your final designs effectively."
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
                "title": "Lesson 1: Introduction to Business Development",
                "description": "In this lesson, you'll be introduced to the field of business development and its role in organizational growth and success. We'll discuss the key functions and responsibilities of business development professionals. You'll also learn about the importance of strategic planning and market analysis in business development."
            },
            {
                "title": "Lesson 2: Market Research and Analysis",
                "description": "In this lesson, we'll focus on market research and analysis techniques. You'll learn how to identify target markets, analyze customer needs, and assess market trends and competition. We'll discuss primary and secondary research methods, data collection and analysis techniques, and tools for market research."
            },
            {
                "title": "Lesson 3: Developing Business Strategies",
                "description": "In this lesson, we'll delve into the process of developing business strategies. You'll learn how to define business objectives, evaluate strategic options, and develop action plans. We'll discuss different business models, competitive positioning, and strategic decision-making frameworks."
            },
            {
                "title": "Lesson 4: Sales and Partnership Development",
                "description": "In this lesson, we'll explore sales and partnership development strategies. You'll learn how to identify and approach potential customers and partners, build relationships, and negotiate deals. We'll discuss techniques for sales forecasting, pipeline management, and establishing strategic partnerships."
            },
            {
                "title": "Lesson 5: Lead Generation and Conversion",
                "description": "In this lesson, we'll focus on lead generation and conversion techniques. You'll learn how to identify and qualify leads, develop effective lead generation campaigns, and optimize the lead conversion process. We'll discuss lead nurturing, customer relationship management (CRM) systems, and sales funnel optimization."
            },
            {
                "title": "Lesson 6: Business Networking and Relationship Building",
                "description": "In this lesson, we'll cover the importance of business networking and relationship building in business development. You'll learn how to effectively network, build professional relationships, and leverage your network for business opportunities. We'll discuss networking events, online networking platforms, and relationship management strategies."
            },
            {
                "title": "Lesson 7: Business Proposal and Pitching",
                "description": "In this lesson, we'll explore the art of creating persuasive business proposals and delivering effective pitches. You'll learn how to structure and present your business proposals to potential clients and investors. We'll discuss key components of a business proposal, storytelling techniques, and effective presentation skills."
            },
            {
                "title": "Lesson 8: Measuring and Evaluating Business Development Efforts",
                "description": "In this final lesson, we'll focus on measuring and evaluating business development efforts. You'll learn how to set key performance indicators (KPIs), track progress, and evaluate the success of business development initiatives. We'll discuss data-driven decision-making, performance metrics, and continuous improvement strategies."
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
                "title": "Lesson 1: Introduction to Digital Design Studio",
                "description": "In this lesson, you'll be introduced to the concept of a digital design studio and its role in transforming ideas into engaging websites. We'll discuss the key elements of a successful website design process and the importance of user-centered design. You'll also learn about the tools and technologies used in digital design studios."
            },
            {
                "title": "Lesson 2: User Experience (UX) Design Principles",
                "description": "In this lesson, we'll focus on user experience (UX) design principles. You'll learn how to create intuitive and user-friendly website interfaces. We'll discuss user research, information architecture, wireframing, and prototyping techniques. You'll also learn about usability testing and user feedback in the design process."
            },
            {
                "title": "Lesson 3: Visual Design and Branding",
                "description": "In this lesson, we'll delve into visual design and branding for websites. You'll learn how to create visually appealing and cohesive website designs that align with a brand's identity. We'll discuss color theory, typography, layout, and the use of imagery and graphics in web design. You'll also learn about responsive design principles."
            },
            {
                "title": "Lesson 4: Front-End Web Development",
                "description": "In this lesson, we'll explore front-end web development techniques. You'll learn how to translate design concepts into HTML, CSS, and JavaScript code. We'll discuss responsive web design, cross-browser compatibility, and best practices for writing clean and maintainable code. You'll also be introduced to popular front-end development frameworks and libraries."
            },
            {
                "title": "Lesson 5: Web Animation and Interaction Design",
                "description": "In this lesson, we'll focus on web animation and interaction design. You'll learn how to add engaging animations and interactive elements to websites. We'll discuss CSS animations, JavaScript libraries for animation, and techniques for creating smooth and visually appealing transitions. You'll also learn about microinteractions and user engagement."
            },
            {
                "title": "Lesson 6: Content Creation and Management",
                "description": "In this lesson, we'll cover content creation and management for websites. You'll learn how to create compelling and engaging website content, including text, images, and multimedia elements. We'll discuss content strategy, content management systems (CMS), and best practices for organizing and structuring website content."
            },
            {
                "title": "Lesson 7: Website Testing and Optimization",
                "description": "In this lesson, we'll explore website testing and optimization techniques. You'll learn how to conduct usability testing, analyze user behavior, and make data-driven design decisions. We'll discuss techniques for website performance optimization, search engine optimization (SEO), and accessibility considerations. You'll also learn about website analytics and tracking."
            },
            {
                "title": "Lesson 8: Launching and Maintaining Websites",
                "description": "In this final lesson, we'll focus on launching and maintaining websites. You'll learn how to deploy websites to a web server and ensure a smooth launch. We'll discuss website maintenance tasks, including updates, security, and backups. You'll also learn about ongoing website optimization and the importance of user feedback and iteration."
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
                "title": "Lesson 1: Introduction to Coding and Programming",
                "description": "In this lesson, you'll be introduced to the world of coding and programming. We'll discuss the importance of programming in the digital age and its applications across various industries. You'll learn about different programming languages, development environments, and the basic building blocks of code."
            },
            {
                "title": "Lesson 2: Fundamentals of Programming Logic",
                "description": "In this lesson, we'll focus on the fundamentals of programming logic. You'll learn how to think like a programmer and understand concepts such as variables, data types, conditionals, loops, and functions. We'll discuss algorithmic thinking and problem-solving strategies in programming."
            },
            {
                "title": "Lesson 3: Introduction to Web Development",
                "description": "In this lesson, we'll delve into web development and its fundamental technologies. You'll learn HTML, CSS, and JavaScript—the core languages for building websites. We'll discuss the structure and styling of web pages, as well as how to add interactivity and functionality using JavaScript."
            },
            {
                "title": "Lesson 4: Object-Oriented Programming (OOP) Concepts",
                "description": "In this lesson, we'll explore the concepts of object-oriented programming (OOP). You'll learn about classes, objects, inheritance, polymorphism, and encapsulation. We'll discuss how OOP promotes code reusability, modularity, and maintainability. You'll also learn about OOP principles and design patterns."
            },
            {
                "title": "Lesson 5: Database Fundamentals and SQL",
                "description": "In this lesson, we'll focus on database fundamentals and SQL (Structured Query Language). You'll learn how to design and interact with databases using SQL queries. We'll discuss concepts such as tables, relationships, data manipulation, and basic database management. You'll also be introduced to relational database management systems (RDBMS)."
            },
            {
                "title": "Lesson 6: Introduction to Back-End Development",
                "description": "In this lesson, we'll cover the basics of back-end development. You'll learn about server-side programming languages, such as Python or Node.js, and frameworks like Flask or Express.js. We'll discuss concepts like routing, handling requests and responses, and interacting with databases. You'll also learn about RESTful APIs."
            },
            {
                "title": "Lesson 7: Introduction to Mobile App Development",
                "description": "In this lesson, we'll explore the world of mobile app development. You'll learn about developing native or hybrid mobile apps using frameworks like React Native or Flutter. We'll discuss mobile app architecture, UI components, navigation, and integrating with device features. You'll also learn about publishing apps to app stores."
            },
            {
                "title": "Lesson 8: Software Development Lifecycle and Best Practices",
                "description": "In this final lesson, we'll focus on the software development lifecycle (SDLC) and best practices in coding. You'll learn about the different phases of the SDLC, including requirements gathering, design, development, testing, and deployment. We'll discuss version control, code documentation, testing methodologies, and the importance of collaboration and continuous learning."
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
                "title": "Lesson 1: Introduction to Data-Driven Marketing",
                "description": "In this lesson, you'll be introduced to the concept of data-driven marketing and its significance in today's digital landscape. We'll discuss the role of data in marketing decision-making and the benefits of leveraging data for targeted and personalized marketing campaigns. You'll also learn about the key technologies and tools used in data-driven marketing."
            },
            {
                "title": "Lesson 2: Collecting and Analyzing Customer Data",
                "description": "In this lesson, we'll focus on collecting and analyzing customer data. You'll learn about different data collection methods, including website analytics, customer surveys, and social media monitoring. We'll discuss data segmentation, profiling, and data visualization techniques for better understanding customer behavior and preferences."
            },
            {
                "title": "Lesson 3: Customer Relationship Management (CRM) Systems",
                "description": "In this lesson, we'll delve into customer relationship management (CRM) systems and their role in data-driven marketing. You'll learn how to effectively manage customer data, track customer interactions, and create personalized marketing experiences. We'll discuss CRM implementation, data integration, and automation in CRM processes."
            },
            {
                "title": "Lesson 4: Marketing Automation and Campaign Management",
                "description": "In this lesson, we'll explore marketing automation and campaign management solutions. You'll learn how to automate marketing processes, including email marketing, lead nurturing, and campaign tracking. We'll discuss marketing automation platforms, segmentation strategies, and measuring the effectiveness of marketing campaigns."
            },
            {
                "title": "Lesson 5: Data Visualization and Reporting",
                "description": "In this lesson, we'll focus on data visualization and reporting in data-driven marketing. You'll learn how to create visually appealing and informative dashboards and reports to communicate marketing insights. We'll discuss data visualization tools, storytelling with data, and presenting data-driven marketing results to stakeholders."
            },
            {
                "title": "Lesson 6: Predictive Analytics and Machine Learning in Marketing",
                "description": "In this lesson, we'll cover the use of predictive analytics and machine learning in marketing. You'll learn how to leverage data and algorithms to make predictions, identify trends, and personalize marketing strategies. We'll discuss techniques such as customer segmentation, churn prediction, and recommendation systems."
            },
            {
                "title": "Lesson 7: Data Privacy and Ethics in Marketing",
                "description": "In this lesson, we'll explore the importance of data privacy and ethics in data-driven marketing. You'll learn about data protection regulations, such as GDPR and CCPA, and their implications for marketing practices. We'll discuss ethical considerations in data collection, usage, and customer consent."
            },
            {
                "title": "Lesson 8: Driving Marketing Success with Data and IT Solutions",
                "description": "In this final lesson, we'll focus on driving marketing success through data and IT solutions. You'll learn how to develop data-driven marketing strategies, measure marketing ROI, and optimize marketing campaigns based on data insights. We'll discuss the evolving role of technology in marketing and emerging trends in data-driven marketing."
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
                "title": "Lesson 1: Introduction to Tech-Driven Business Management",
                "description": "In this lesson, you'll be introduced to the concept of tech-driven business management and its importance in today's digital economy. We'll discuss how technology can drive business growth and efficiency. You'll also learn about the key technologies and IT solutions that can be leveraged for strategic business management."
            },
            {
                "title": "Lesson 2: Digital Transformation and Business Strategy",
                "description": "In this lesson, we'll focus on digital transformation and its impact on business strategy. You'll learn how to align technology initiatives with overall business goals. We'll discuss the process of developing a digital transformation strategy, assessing technology needs, and managing change within the organization."
            },
            {
                "title": "Lesson 3: IT Infrastructure and Systems Integration",
                "description": "In this lesson, we'll delve into IT infrastructure and systems integration for effective business management. You'll learn about different components of IT infrastructure, such as networks, servers, and cloud computing. We'll discuss the importance of systems integration for seamless data flow and communication across the organization."
            },
            {
                "title": "Lesson 4: Data Management and Analytics",
                "description": "In this lesson, we'll explore data management and analytics in the context of business management. You'll learn how to collect, store, and analyze data to gain valuable insights for decision-making. We'll discuss data governance, data quality, and the use of business intelligence tools for data visualization and reporting."
            },
            {
                "title": "Lesson 5: Project Management with IT Solutions",
                "description": "In this lesson, we'll focus on project management and how IT solutions can streamline project execution and collaboration. You'll learn about project management methodologies, tools, and techniques for effective planning, tracking, and communication. We'll discuss project management software, agile methodologies, and virtual collaboration platforms."
            },
            {
                "title": "Lesson 6: E-commerce and Online Business Models",
                "description": "In this lesson, we'll cover e-commerce and online business models. You'll learn how technology has revolutionized the way businesses operate and sell products or services online. We'll discuss different e-commerce platforms, payment gateways, and strategies for building and managing successful online businesses."
            },
            {
                "title": "Lesson 7: Cybersecurity and Risk Management",
                "description": "In this lesson, we'll explore the importance of cybersecurity and risk management in tech-driven business management. You'll learn about common cyber threats, best practices for securing data and IT systems, and risk assessment methodologies. We'll discuss the role of employee awareness and training in maintaining a secure business environment."
            },
            {
                "title": "Lesson 8: Innovation and Emerging Technologies",
                "description": "In this final lesson, we'll focus on innovation and emerging technologies that can drive business growth. You'll learn about disruptive technologies, such as artificial intelligence, blockchain, and Internet of Things (IoT), and their potential applications in business management. We'll discuss fostering an innovation culture and leveraging emerging technologies for competitive advantage."
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
                "title": "Lesson 1: Introduction to IT Solutions in HR",
                "description": "In this lesson, you'll be introduced to the concept of IT solutions in HR and their significance in streamlining HR processes. We'll discuss the role of technology in automating administrative tasks, improving communication, and enhancing employee experience. You'll also learn about the key IT solutions used in HR management."
            },
            {
                "title": "Lesson 2: HR Information Systems (HRIS)",
                "description": "In this lesson, we'll focus on HR information systems (HRIS) and their role in managing employee data and HR processes. You'll learn how HRIS can centralize employee information, automate workflows, and support strategic decision-making. We'll discuss HRIS implementation, data security, and integration with other HR tools."
            },
            {
                "title": "Lesson 3: Recruitment and Applicant Tracking Systems (ATS)",
                "description": "In this lesson, we'll delve into recruitment and applicant tracking systems (ATS) for effective hiring processes. You'll learn how ATS can streamline job postings, applicant screening, and interview scheduling. We'll discuss features like resume parsing, candidate management, and analytics for optimizing recruitment efforts."
            },
            {
                "title": "Lesson 4: Performance Management and Employee Feedback",
                "description": "In this lesson, we'll explore IT solutions for performance management and employee feedback. You'll learn how technology can facilitate goal setting, performance reviews, and feedback collection. We'll discuss performance management software, 360-degree feedback tools, and real-time performance tracking."
            },
            {
                "title": "Lesson 5: Learning Management Systems (LMS)",
                "description": "In this lesson, we'll focus on learning management systems (LMS) for employee training and development. You'll learn how LMS can deliver online courses, track employee progress, and provide a centralized platform for learning resources. We'll discuss LMS features, content creation, and integration with HR systems."
            },
            {
                "title": "Lesson 6: Employee Self-Service Portals",
                "description": "In this lesson, we'll cover employee self-service portals and their benefits for HR management. You'll learn how self-service portals empower employees to access and update their personal information, request time off, and access HR policies and resources. We'll discuss portal design, security considerations, and self-service adoption strategies."
            },
            {
                "title": "Lesson 7: Data Analytics and HR Metrics",
                "description": "In this lesson, we'll explore the use of data analytics and HR metrics for evidence-based HR decision-making. You'll learn how to collect, analyze, and interpret HR data to gain insights into employee engagement, turnover, and workforce planning. We'll discuss HR analytics tools, data visualization, and key HR metrics."
            },
            {
                "title": "Lesson 8: Emerging Trends in HR Technology",
                "description": "In this final lesson, we'll focus on emerging trends in HR technology and their impact on HR practices. You'll learn about advancements such as artificial intelligence (AI), machine learning, and chatbots in HR processes. We'll discuss the future of HR technology and strategies for staying up-to-date with the latest trends."
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
                "title": "Lesson 1: Introduction to Tech Marketing",
                "description": "In this lesson, you'll be introduced to the concept of tech marketing and its significance in the digital age. We'll discuss the role of technology in transforming marketing strategies and the opportunities it brings for building a strong digital brand. You'll also learn about the key technologies and IT tools used in tech marketing."
            },
            {
                "title": "Lesson 2: Creating a Digital Marketing Strategy",
                "description": "In this lesson, we'll focus on creating a digital marketing strategy. You'll learn how to identify target audiences, set marketing objectives, and develop a comprehensive digital marketing plan. We'll discuss digital channels, content marketing, social media strategies, and SEO techniques for effective online brand building."
            },
            {
                "title": "Lesson 3: Website Design and User Experience (UX)",
                "description": "In this lesson, we'll delve into website design and user experience (UX) for effective brand representation. You'll learn how to create visually appealing and user-friendly websites that align with your brand identity. We'll discuss responsive design, navigation, content organization, and the role of UX in driving conversions."
            },
            {
                "title": "Lesson 4: Search Engine Optimization (SEO)",
                "description": "In this lesson, we'll explore search engine optimization (SEO) techniques for improving online visibility and organic traffic. You'll learn how to optimize website content, meta tags, and backlink profiles to rank higher in search engine results. We'll discuss keyword research, on-page optimization, and SEO analytics tools."
            },
            {
                "title": "Lesson 5: Pay-Per-Click Advertising (PPC)",
                "description": "In this lesson, we'll focus on pay-per-click advertising (PPC) and its role in driving targeted traffic to your digital brand. You'll learn how to create effective PPC campaigns using platforms like Google Ads or social media advertising. We'll discuss ad targeting, keyword bidding, ad copywriting, and conversion tracking."
            },
            {
                "title": "Lesson 6: Content Marketing and Social Media Strategies",
                "description": "In this lesson, we'll cover content marketing and social media strategies for building a strong digital brand presence. You'll learn how to develop compelling content that resonates with your target audience and drives engagement. We'll discuss social media platforms, content distribution strategies, influencer marketing, and measuring social media ROI."
            },
            {
                "title": "Lesson 7: Email Marketing and Marketing Automation",
                "description": "In this lesson, we'll explore the power of email marketing and marketing automation in nurturing leads and building customer relationships. You'll learn how to create effective email campaigns, segment your audience, and automate email workflows. We'll discuss email marketing platforms, personalization techniques, and email performance metrics."
            },
            {
                "title": "Lesson 8: Analytics and Data-Driven Marketing",
                "description": "In this final lesson, we'll focus on analytics and data-driven marketing. You'll learn how to track and analyze marketing metrics to gain insights into campaign performance, customer behavior, and ROI. We'll discuss web analytics tools, data visualization, A/B testing, and the role of data in making informed marketing decisions."
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
                "title": "Lesson 1: Introduction to Managing Human Capital in the Digital Age",
                "description": "In this lesson, you'll be introduced to the concept of managing human capital in the digital age and the evolving role of technology. We'll discuss the challenges and opportunities presented by digital transformation in the workplace. You'll also learn about the key technologies and IT solutions that support effective human capital management."
            },
            {
                "title": "Lesson 2: Technology and Talent Acquisition",
                "description": "In this lesson, we'll focus on the role of technology in talent acquisition. You'll learn how technology has transformed recruitment processes, including sourcing candidates, applicant tracking, and candidate assessment. We'll discuss the use of applicant tracking systems (ATS), AI-powered resume screening, and leveraging data for informed hiring decisions."
            },
            {
                "title": "Lesson 3: Digital Onboarding and Employee Experience",
                "description": "In this lesson, we'll delve into digital onboarding and employee experience in the digital age. You'll learn how technology can enhance the onboarding process, improve employee engagement, and foster a positive work environment. We'll discuss onboarding platforms, virtual training, and digital communication tools for effective employee onboarding and retention."
            },
            {
                "title": "Lesson 4: Performance Management and Feedback Systems",
                "description": "In this lesson, we'll explore the use of technology in performance management and feedback systems. You'll learn how digital tools can streamline performance evaluations, goal setting, and continuous feedback. We'll discuss performance management software, real-time feedback platforms, and the integration of performance data with talent development strategies."
            },
            {
                "title": "Lesson 5: Learning and Development in the Digital Era",
                "description": "In this lesson, we'll focus on learning and development in the digital era. You'll learn how technology has revolutionized training and skill development, including online learning platforms, microlearning, and virtual training environments. We'll discuss the role of learning management systems (LMS), personalized learning paths, and continuous learning initiatives."
            },
            {
                "title": "Lesson 6: Remote Work and Collaboration Tools",
                "description": "In this lesson, we'll cover remote work and collaboration tools that facilitate effective teamwork and productivity in the digital age. You'll learn about communication and collaboration platforms, project management software, and virtual meeting tools. We'll discuss best practices for managing remote teams and fostering a collaborative work culture."
            },
            {
                "title": "Lesson 7: Data-Driven HR Analytics",
                "description": "In this lesson, we'll explore the use of data and analytics in human capital management. You'll learn how HR analytics can provide insights into employee performance, engagement, and retention. We'll discuss data collection, analysis techniques, and the ethical use of HR data for making informed decisions and shaping HR strategies."
            },
            {
                "title": "Lesson 8: Future Trends in Human Capital Management",
                "description": "In this final lesson, we'll focus on future trends in human capital management and the role of IT. You'll learn about emerging technologies, such as artificial intelligence, machine learning, and augmented reality, and their potential impact on HR practices. We'll discuss the evolving role of HR professionals in leveraging technology for strategic talent management."
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
                "title": "Lesson 1: Introduction to Strategic IT Management",
                "description": "In this lesson, you'll be introduced to the concept of strategic IT management and its significance in the digital landscape. We'll discuss the role of IT in driving business value, innovation, and competitive advantage. You'll also learn about the key components of strategic IT management and how they align with organizational goals."
            },
            {
                "title": "Lesson 2: IT Governance and Alignment",
                "description": "In this lesson, we'll focus on IT governance and alignment with business objectives. You'll learn how to establish effective governance structures, decision-making processes, and IT strategy alignment frameworks. We'll discuss the role of IT steering committees, performance measurement, and the integration of IT with overall organizational governance."
            },
            {
                "title": "Lesson 3: IT Portfolio Management",
                "description": "In this lesson, we'll delve into IT portfolio management and its role in optimizing IT investments. You'll learn how to assess, prioritize, and manage IT projects and initiatives. We'll discuss portfolio management frameworks, risk assessment, resource allocation, and the evaluation of project success and business value."
            },
            {
                "title": "Lesson 4: Digital Transformation Strategies",
                "description": "In this lesson, we'll explore digital transformation strategies and their impact on organizational success. You'll learn how to develop and implement digital transformation initiatives that leverage emerging technologies and align with business objectives. We'll discuss the challenges and best practices for driving successful digital transformation journeys."
            },
            {
                "title": "Lesson 5: IT Infrastructure and Cloud Computing",
                "description": "In this lesson, we'll focus on IT infrastructure management and the role of cloud computing in the digital landscape. You'll learn about infrastructure components, including networks, servers, and storage, and how to design scalable and secure IT infrastructure. We'll discuss cloud computing models, deployment options, and the benefits and considerations of cloud adoption."
            },
            {
                "title": "Lesson 6: Cybersecurity and Risk Management",
                "description": "In this lesson, we'll cover cybersecurity and risk management in the digital age. You'll learn how to assess and mitigate IT risks, protect against cyber threats, and ensure data privacy and compliance. We'll discuss cybersecurity frameworks, incident response planning, employee awareness, and the role of IT in maintaining a secure digital environment."
            },
            {
                "title": "Lesson 7: IT Project Management and Agile Methodologies",
                "description": "In this lesson, we'll explore IT project management and the adoption of agile methodologies in delivering successful IT projects. You'll learn about project management principles, agile frameworks, and the role of project managers in overseeing IT initiatives. We'll discuss agile practices, scrum, kanban, and effective collaboration in agile project teams."
            },
            {
                "title": "Lesson 8: Emerging Technologies and IT Leadership",
                "description": "In this final lesson, we'll focus on emerging technologies and the role of IT leadership in driving innovation. You'll learn about trends such as artificial intelligence, Internet of Things (IoT), and blockchain, and their potential impact on businesses. We'll discuss the leadership qualities required to embrace emerging technologies and lead successful digital initiatives."
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

export enum eventsType {
    masterClass = "Online master class",
    workshop = "Online workshop",
    lecture = "Online lecture",
    all = "all"
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