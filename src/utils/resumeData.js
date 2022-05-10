import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import SRMS from "./SRMS.PNG";
import JQMS from "./JQMS.PNG";
import YCW from "./YCW.png";
import PT from "./PT.PNG";
import SPS from "./SPS.PNG";

export default{
	name: 'Ajay Pediredla',
	title: 'Full Stack Developer',
	birthday: '27 April 2001',
	college: 'Jawaharlal Nehru University (New Delhi)',
	email: 'pedire41_soe@jnu.ac.in',
	phone: '8143232797',
	address: '533408 Kakinada,Andhra Pradesh',
	about: 'I am Currently Graduating in Electronics and Communication engineering from JNU Delhi. I spend my whole day, practically everyday, experimenting with huge lines of code. I am always energetic and eager to learn new skills and always highly enthused about my work and tasks ahead besides these I have experience working as part of a team and Individually.',
	socials:{
		Insta: {
			link: 'https://www.instagram.com/_ajay_pediredla__/',
			text: 'MyInsta',
			icon: <InstagramIcon />,
		},
		Twitter:{
			link: 'https://twitter.com/Ajaypediredla1',
			text: 'MyTwitter',
			icon: <TwitterIcon />,
		},
		LinkedIn:{
			link: 'https://www.linkedin.com/in/ajay-pediredla-125887191',
			text: 'MyLinkedIn',
			icon: <LinkedInIcon />,
		},
		GitHub:{
			link: 'https://github.com/jay-498',
			text: 'MyGithub',
			icon: <GitHubIcon />,
		},
	},
	experiences: [
		{
			title:'Research Intern at MIDAS IIITD',
			date: '03/2022-present',
			description: 'I am selected as Reactjs Developer as a part of contributing to the frontend development of Kyron application a kind of test management system.',
		},
		{
			title:'Web Development Intern',
			date: '08/2021-09/2021',
			description: 'In this Intern I Completed three Web Development Tasks from Beginner to Advance level using HTML , CSS , JS , Reactjs , APIs | Backend: Nodejs , PHP ,MySQL .      Contact:akesarwani2202@gmail.com',
		},
		{
			title:'Frontend Web Development and Designing Intern',
			date: '05/2021-08/2021',
			description: ' Web Design, Modelling & Frontend Development .   Contact:+91-9319412223---therisingarjun@gmail.com',
		},
	],
	education: [
		{
			title:'Dual Degree Program (B.Tech+M.Tech)',
			date: '2019-present',
			description: 'Jawaharlal Nehru University(one of the top 3 Universities in India) Electronics and Communicaton Engineering . CGPA:-7.5/9.0',
		},
		{
			title:'Higher Secondary Education',
			date: '2017-2019',
			description: 'Narayana Junior College (Andhra Pradesh - India) . CGPA:-9.94/10',
		},
		{
			title:'Secondary Education',
			date: '2007-2017',
			description: 'Harvard School  (Andhra Pradesh - India)     . CGPA:-9.8/10 ',
		},
	],
	services: [
	{
		title:'Web Development',
		// description: 'I have been a web Developer from 2 years',
		icon: <WebOutlinedIcon />,
	},
	{
		title:'Python Automations',
		// description: ' we will make yo brand',
		icon: <AssignmentOutlinedIcon />,
	},
	{
		title:'Machine Learning',
		// description: '...Loading',
		icon: <WebOutlinedIcon />,
	},
	],
	skills: [
	{
		title: "FRONT-END",
		description: [
			'HTML-CSS',
			'UI/UX',
			'ReactJS',
			'VueJS',
			'jQuery',
			'Bootstrap',
		],
	},
	{
		title: 'BACK-END',
		description: [ 'Python Django', 'PHP(Begineer)' ,'NodeJS' ,'PostgreSQL', 'MySQL' ],
	},
	{
		title: 'TECH & SRC CTRL',
		description: [ 'Selenium','Web Scraping','Github','Figma/Invision'],
	},
	{
		title: 'LANGUAGES',
		description: ['C++','Python', 'Javascript' , 'DS & Algo(c)'],
	},
	],
	projects: [
	{
		tag: "Web Development",
		image: SRMS,
		title: "Students Result Management System",
		description: "Developed a Full Stack Web Application which Automates and Generates the students Marksheet and Results using HTML , CSS , Bootstrap , JS | Backend - PHP , MySQL",
		links:[
			{link: "https://www.youtube.com/watch?v=T8n7lXXP_Ag&t=31s",icon: <YouTubeIcon />},
			{link: "https://github.com/jay-498/LGMVIP-WebDev/tree/task-3",icon: <GitHubIcon />},
			{link: "https://www.google.com",icon: <LanguageIcon />},
		],
	},
	{
		tag: "Web Development",
		image: SPS,
		title: "Smart Circle - Web Application using Reactjs",
		description: "React Application which shows the Product details from all the Available E-Commerce Websites based on the User Search Query.",
		links:[
			{link: "https://www.youtube.com/watch?v=T8n7lXXP_Ag&t=31s",icon: <YouTubeIcon />},
			{link: "https://github.com/jay-498/Smart_circle/tree/master",icon: <GitHubIcon />},
			{link: "https://www.google.com",icon: <LanguageIcon />},
		],
	},
	{
		tag: "Python",
		image: JQMS,
		title: "Job Queue Management System",
		description: "Basically it works as an Email bot which Automatically sends all Emails added to the Queue by showing the status of each mail .  Python , Tkinter module (Python GUI Library) , Sqlite3 , Smptlib module(Handles sending e-mail and routing emails) .",
		links:[
			{link: "https://www.google.com",icon: <YouTubeIcon />},
			{link: "https://github.com/jay-498/Job-Queue-Management-System",icon: <GitHubIcon />},
			{link: "https://www.google.com",icon: <LanguageIcon />},
		],
	},
	{
		tag: "Web Development",
		image: YCW,
		title: "Designed and Developed a website on You Tube channel",
		description: "Developed using HTML-CSS,Javascript , Bootstrap , jQuery , MDB Animations ",
		links:[
			{link: "https://www.google.com",icon: <YouTubeIcon />},
			{link: "https://github.com/jay-498/Futurein-website/tree/master",icon: <GitHubIcon />},
			{link: "https://jay-498.github.io/Futurein-website/",icon: <LanguageIcon />},
		],
	},
	{
		tag: "Python",
		image: PT,
		title: "Smart Deal",
		description: "Python App which scraps and compares the product details from various E-commerce websites and stores the data in the Json Format - Python, BeautifulSoup ,Selenium , Tkinter , Requests , Tinydb , Json",
		links:[
			{link: "https://www.google.com",icon: <YouTubeIcon />},
			{link: "https://www.google.com",icon: <GitHubIcon />},
			{link: "https://www.google.com",icon: <LanguageIcon />},
		],
	},
	], 
};