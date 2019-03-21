import emailIcon from '../../img/emailIcon.png';
import headerLogo from '../../img/logo-small-dark.png';

const currentYear = new Date().getFullYear();

const staticData ={
	blognameName: "Blog Name",
	currentYear: currentYear,
	website: "https://www.cuppathink.com",
	websiteClean: "www.cuppathink.com",
	emailText: "Email:",
	emailIcon: emailIcon,
	headerLogo: headerLogo,
	email: "info@cuppathink.com",
	footer:{
		legalJargon1: "Copyright © 2018-",
		legalJargon2: " CuppaThink",
		dev1:"Website created by: ",
		dev2:"Jak-Jak",
		dev3:"https://jakgrueneberg.com"
	},
	channels:[
		{
			id: "associated-press",
			name: "Associated Press",
		},
		{
			id: "bbc-news",
			name: "BBC News"
		},
		{
			id: "bloomberg",
			name: "Bloomberg"
		},
		{
			id: "breitbart-news",
			name: "Breitbart News"
		},
		{
			id: "business-insider",
			name: "Business Insider",
		},
		{ 
			id: "cnn",
			name: "CNN"
		},
		{
			id: "independent",
			name: "The independent"
		},
		{
			id: "nbc-news",
			name: "NBC News"
		},
		{
			id: "reuters",
			name: "Reuters"
		},
		{
			id: "the-economist",
			name: "The Economist"
		},
		{
			id: "the-guardian-uk",
			name: "The Guardian UK"
		},
		{ 
			id: "the-hill",
			name: "The Hill"
		},
		{
			id: "the-new-york-times",
			name: "The New York Times"
		},
		{ 
			id: "the-telegraph",
			name: "the Telegraph"
		},
		{ 
			id: "the-wall-street-journal",
			name: "The Wall Street Journal"
		}
	],
	api:{
		storyblockBase : 'https://api.storyblok.com/v1/cdn/',
		storyblockToken : 'token=H53htl1bNakVjrr58Lmgfwtt',
		newsBase : 'https://newsapi.org/v2/top-headlines',
		newsAPIToken : '?apiKey=c7a417aaaa7f4428a11094471d51576b'
	}
}


export default staticData;