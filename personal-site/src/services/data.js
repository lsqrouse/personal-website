export const data = {
	firstName: "Quinn",
	lastName: "Rouse",
	headline: "Current Junior in Computer Science at Purdue University",
	profilePic: "profilepic.png",
	website: "http://www.google.com",
	github: "http://github.com/lsqrouse",
	linkedin: "https://www.linkedin.com/in/quinn-rouse-839969168/",
};

const githubRepos = {
	stockSent: "https://github.com/lsqrouse/StockScraper",
	multiboard: "https://github.com/CS-307-Group-22/multiboar",
	trackativity: "https://github.com/Nova41/PiazzaMon",
	sync: "https://github.com/lsqrouse/MCWS-dropbox",
	chatbot: "https://github.com/sylviapap/chatbot",
	cli: "https://github.com/sylviapap/ruby-cli-app",
	python: "https://github.com/sylviapap/python-project",
};

const liveSiteURLs = {
	stockSent: "https://stock-scraper-test.herokuapp.com/",
	multiboard: "https://multiboar.herokuapp.com/",
	talkr: "https://translation-chat-app.herokuapp.com/",
	subscription: "https://subscribr.netlify.app/",
	whack: "https://sylviapap.github.io/whack-a-virus/",
	chatbot: "https://sylviapap.github.io/chatbot/",
};

const blogURLs = {
	personalSite:
		"https://dev.to/sylviapap/how-to-make-your-own-no-template-personal-website-with-react-material-ui-and-netlify-pij",
	bcrypt: "https://dev.to/sylviapap/bcrypt-explained-4k5c",
	chatbot: "https://dev.to/sylviapap/make-a-simple-chatbot-with-javascript-1gc",
	racoon:
		"https://dev.to/sylviapap/check-out-my-coding-bootcamp-final-project-1lc1",
	herokuConfig:
		"https://dev.to/sylviapap/setting-heroku-config-vars-with-google-cloud-json-file-on-rails-4dnf",
	swiftVapor:
		"https://dev.to/sylviapap/learning-swift-ios-and-vapor-in-one-week-2ap7",
	healthcareAI:
		"https://dev.to/sylviapap/beginner-healthcare-ai-tensorflow-js-4ma1",
	mapbox: "https://dev.to/sylviapap/mapbox-and-tool-tips-in-react-30ie",
	whackVirus:
		"https://dev.to/sylviapap/kill-coronavirus-with-this-simple-game-3l5",
	ruby:
		"https://dev.to/sylviapap/the-ruby-enumerable-operator-and-max-vs-maxby-ac6",
};

export const projects = [
	{
		title: "Multiboard",
		imageURL: "multiboard.jpg",
		websiteURL: liveSiteURLs.multiboard,
		description:
			"Web application that allows user to create and play board games online.",
		technology: "Bootstrap • JavaScript • CSS • HTML • NodeJS • PostGresQL",
		source: "School Project",
		githubURL: githubRepos.multiboard,
	},
	{
		title: "Stock Sentiment Analyzer",
		imageURL: "stocksent.jpg",
		websiteURL: liveSiteURLs.stockSent,
		description: "Web Scraping tool to use machine learning on posts from popular stock discussion forums to analyze sentminent of the market",
		technology:
			"Node.JS • HTML/CSS • Python • PostGresQL",
		source: "Pesronal Project",
		githubURL: githubRepos.stockSent,
	},
	{
		title: "Automatic Locator and Namer (ALAN)",
		imageURL: "talkr.png",
		description:
			"Program to automatically detect elements on a webpage to be tested, and write a simple automated test for them",
		source: 'Internship Project',
		technology: "Python • Sellenium • C#.NET",
	},
	{
		title: "Trackativity",
		imageURL: "piazza.jfif",
		description: "Topic Tracking Service that allowed users to get notified when certain topics were posted in their Piazza class forums",
		technology: "Python • Flask • TensorFlow • HTML/CSS",
		source: "Hackathon Project",
		githubURL: githubRepos.trackativity,
	},
	{
		title: "File Synchronizer",
		imageURL: "sync.jpg",
		//websiteURL: liveSiteURLs.whack,
		description: "Program to synchronize large files across multiple devices",
		technology: "Java",
		source: "Personal Projecct",
		githubURL: githubRepos.sync,
	},
	{
		title: "Shell Clone",
		imageURL: "shell.jpg",
		//websiteURL: liveSiteURLs.chatbot,
		description:
			"A custom shell that followed the functionality of bash",
		technology: "C++ • C • Lexx/Yacc",
		source: "School Project",
		//githubURL: githubRepos.chatbot,
		//blogURL: blogURLs.chatbot,
	},
];

export const skills = [
	{
		name: "Python",
		href: '#',//githubRepos.python,
	},
	{
		name: "Java",
		href: '#', //githubRepos.cli,
	},
	{
		name: "JavaScript",
		href: '#', //githubRepos.chatbot,
	},
	{
		name: "C++",
		href: '#', //githubRepos.talkr,
	},
	{
		name: "C",
		href: '#', //githubRepos.racoon.frontend,
	},
	{
		name: "HTML/CSS",
		href: '#', //githubRepos.whack,
	},
	{
		name: "PostGreSQL/SQL",
		href: '#', //githubRepos.twitterClone,
	},
//	{
	// 	name: "Test Driven Development",
	// 	href: githubRepos.racoon.backend,
	// },
	{
		name: "Data Structures & Algorithms",
		href: '#', //data.leetCode,
	},
];

export const contactItems = [
	{
		href: data.linkedin,
		icon: "fa fa-linkedin",
		text: "LinkedIn",
	},
	{
		href: data.github,
		icon: "fa fa-github",
		text: "GitHub",
	},
];

export const blogPosts = [
	// {
	// 	href: blogURLs.personalSite,
	// 	title: "Personal Website with React, Material UI, & Netlify",
	// },
	// {
	// 	href: blogURLs.bcrypt,
	// 	title: "BCrypt Explained",
	// },
	// {
	// 	href: blogURLs.chatbot,
	// 	title: "JavaScript Chatbot",
	// },
	// {
	// 	href: blogURLs.racoon,
	// 	title: "COVID Symptom Checker & Map",
	// },
	// {
	// 	href: blogURLs.herokuConfig,
	// 	title: "Heroku Configuration",
	// },
	// {
	// 	href: blogURLs.swiftVapor,
	// 	title: "Swift, iOS, & Vapor",
	// },
	// {
	// 	href: blogURLs.healthcareAI,
	// 	title: "Healthcare AI & TensorFlow",
	// },
	// {
	// 	href: blogURLs.mapbox,
	// 	title: "Mapbox & Tool Tips in React",
	// },
	// {
	// 	href: blogURLs.whackVirus,
	// 	title: "Whack-a-Mole + Coronavirus",
	// },
	// {
	// 	href: blogURLs.ruby,
	// 	title: "Comparisons in Ruby Using <=>",
	// },
];