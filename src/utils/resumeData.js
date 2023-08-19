import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LanguageIcon from "@material-ui/icons/Language";
import WebOutlinedIcon from "@material-ui/icons/WebOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import SRMS from "./SRMS.PNG";
import JQMS from "./JQMS.PNG";
import YCW from "./YCW.png";
import PT from "./PT.PNG";
import SPS from "./SPS.PNG";

const resumeData = {
  name: "Ajay Pediredla",
  title: "Software Developer",
  birthday: "27 April 2001",
  college: "Jawaharlal Nehru University (New Delhi)",
  email: "pedire41_soe@jnu.ac.in",
  phone: "8143232797",
  address: "533408 Kakinada,Andhra Pradesh",
  about: 
  [ "Hey, I've got around 1.5 years of hands-on experience in the cool world of product development and diving into the nitty-gritty of the MERN stack. Right now, I'm donning the hat of an SDE - Frontend at Kyron (MIDAS LAB IIITD), all while chasing my B.Tech + M.Tech in Computer Science Engineering from Jawaharlal Nehru University (2019-2024).",
    "You'll often find me crafting Frontend wizardry, plugging and creating APIs, chasing pesky bugs, doing the optimization tango, and putting together those slick reusable components using the Tailwind CSS flair.",
    "Now, speaking of some tech tales, my stint at Kyron had me cooking up REST APIs, exploring webRTC and webSockets for some slick peer-to-peer streaming action and I spearheaded the creation of the One-on-One Interview Panel—an awesome feature that turns video chats, audio convos, screen sharing, and real-time coding into a walk in the park. It's like having a super versatile toolset for tackling all sorts of questions, from coding challenges to those head-scratching SQL puzzles."    
],
  socials: {
    Insta: {
      link: "https://www.instagram.com/_ajay_pediredla__/",
      text: "MyInsta",
      icon: <InstagramIcon />,
    },
    Twitter: {
      link: "https://twitter.com/Ajaypediredla1",
      text: "MyTwitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/ajay-pediredla-125887191",
      text: "MyLinkedIn",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/jay-498",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
  },
  experiences: [
    {
      title: "SDE - 1 (Frontend) @ MIDAS IIITD",
      start_date: "03/2022-present",
      description: [
        "Kyron is a cutting-edge platform incorporating both AI and human proctoring capabilities.Many FAANG companies have already utilized this platform for hiring candidates.It has Conducted 88+ tests for 15000+ students in 350+ institutes.",
        "Individually conceived and executed a pivotal feature – the One-on-One Interview Panel, enabling seamless video conferencing, audio communication, screen sharing, and real-time coding. This panel accommodates diverse question formats,spanning coding quandaries and SQL complexities.",
        "Increased the application performance by decreasing the repeated API calls and unnecessary rendering.",
      ],
    },
    {
      title: "Web Development Intern @ LetsGrowMore",
      date: "08/2021-09/2021",
      description: [
        "Spearheaded the creation of a highly efficient Web App for a Students Result Management System, leveraging PhpMyAdmin (XAMPP), PHP, and Python; reduced manual errors by 90% and generated accurate mark sheets and results in seconds."
      ],
    },
    {
      title: "Frontend Web Development and Designing Intern",
      date: "05/2021-08/2021",
      description: [
        " Web Design, Modelling & Frontend Development .",
      ],
    },
  ],
  education: [
    {
      title: "B.Tech+M.Tech Dual Degree",
      date: "2019-2024",
      cgpa: "7.8/9.0",
      description:
        "Jawaharlal Nehru University(one of the top 2 Universities in India) Electronics and Computer Science Engineering .",
    },
    {
      title: "Higher Secondary Education",
      date: "2017-2019",
      cgpa: "7.8/9.0",
      description:
        "Narayana Junior College (Andhra Pradesh - India) .",
    },
    {
      title: "Secondary Education",
      date: "2007-2017",
      cgpa: "7.8/9.0",
      description:
        "Harvard School  (Andhra Pradesh - India)     .",
    },
  ],
  services: [
    {
      title: "Web Development",
      // description: 'I have been a web Developer from 2 years',
      icon: <WebOutlinedIcon />,
    },
    {
      title: "Python Automations",
      // description: ' we will make yo brand',
      icon: <AssignmentOutlinedIcon />,
    },
    {
      title: "Machine Learning",
      // description: '...Loading',
      icon: <WebOutlinedIcon />,
    },
  ],
  skills: [
    {
      title: "FRONT-END",
      description: ["HTML-CSS", "UI/UX", "ReactJS", "jQuery", "Bootstrap"],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "PostgreSQL", "MySQL"],
    },
    {
      title: "TECH & SRC CTRL",
      description: ["Selenium", "Web Scraping", "Github", "Figma/Invision"],
    },
    {
      title: "LANGUAGES",
      description: ["C", "Python", "Javascript", "DS & Algo(c++)"],
    },
  ],
  projects: [
    {
      tag: "Web Development",
      image: SRMS,
      title: "Students Result Management System",
      description:
        "Developed a Full Stack Web Application which Automates and Generates the students Marksheet and Results using HTML , CSS , Bootstrap , JS | Backend - PHP , MySQL",
      links: [
        {
          link: "https://www.youtube.com/watch?v=T8n7lXXP_Ag&t=31s",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://github.com/jay-498/LGMVIP-WebDev/tree/task-3",
          icon: <GitHubIcon />,
        },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "Web Development",
      image: SPS,
      title: "Smart Circle - Web Application using Reactjs",
      description:
        "React Application which shows the Product details from all the Available E-Commerce Websites based on the User Search Query.",
      links: [
        {
          link: "https://www.youtube.com/watch?v=T8n7lXXP_Ag&t=31s",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://github.com/jay-498/Smart_circle/tree/master",
          icon: <GitHubIcon />,
        },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "Python",
      image: JQMS,
      title: "Job Queue Management System",
      description:
        "Basically it works as an Email bot which Automatically sends all Emails added to the Queue by showing the status of each mail .  Python , Tkinter module (Python GUI Library) , Sqlite3 , Smptlib module(Handles sending e-mail and routing emails) .",
      links: [
        { link: "https://www.google.com", icon: <YouTubeIcon /> },
        {
          link: "https://github.com/jay-498/Job-Queue-Management-System",
          icon: <GitHubIcon />,
        },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "Web Development",
      image: YCW,
      title: "Designed and Developed a website on You Tube channel",
      description:
        "Developed using HTML-CSS,Javascript , Bootstrap , jQuery , MDB Animations ",
      links: [
        { link: "https://www.google.com", icon: <YouTubeIcon /> },
        {
          link: "https://github.com/jay-498/Futurein-website/tree/master",
          icon: <GitHubIcon />,
        },
        {
          link: "https://jay-498.github.io/Futurein-website/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Python",
      image: PT,
      title: "Smart Deal",
      description:
        "Python App which scraps and compares the product details from various E-commerce websites and stores the data in the Json Format - Python, BeautifulSoup ,Selenium , Tkinter , Requests , Tinydb , Json",
      links: [
        { link: "https://www.google.com", icon: <YouTubeIcon /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },
  ],
};

export default resumeData;
