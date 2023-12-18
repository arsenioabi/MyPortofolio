import portfolioImg01 from "../images/portfolio-01.JPG";
import portfolioImg02 from "../images/portfolio-02.JPG";
import portfolioImg03 from "../images/portfolio-03.jpeg";
import portfolioImg04 from "../images/portfolio-04.jpeg";
import portfolioImg05 from "../images/portfolio-05.jpeg";
import portfolioImg06 from "../images/portfolio-06.jpeg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Data Science",
    title: "Sentiment Analysis on Movie Review",
    description:
      "A machine learning model that uses Logistic Regression as a classification method, Information Gain as feature selection, TF-IDF as feature extraction with the purpose of analyzing a movie review from the Rotten Tomatoes web. The f1-score result obtained from the analysis is 76.50%.",
    technologies: ["Python", "Google Colab Platform", "nltk", "Matplotlib", "Sklearn"],
    siteUrl: "https://drive.google.com/file/d/1uLek9_ZfWVCZqbH7VIYqEGrnlxBovhCK/view?usp=sharing",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Web Design",
    title: "G&B News Website",
    description:
      "The G&B News prototype is a news portal website. The focus of this project is to prototype the G&B News portal interface. It is requested to make it as attractive as possible and the functionality works well. This prototype is made first from wireframes using Figma tools.",
    technologies: ["React", "Node.js", "HTML", "CSS", "Figma"],
    siteUrl: "https://front-end-gn-b-news.vercel.app/",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Central Admin Website (Front End)",
    description:
      "Central Admin is a web for company admins that has features such as Shortlink Management, Send Certificates for audiences who take part in webinar activities, display portfolios regarding posted material, create webinar events, and others.",
    technologies: ["Flask", "Python", "HTML", "CSS", "Figma", "Postman API"],
    siteUrl: "https://github.com/arsenioabi/Front-End_CentralAdmin",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Central Admin Website (Back End)",
    description:
      "Central Admin is a web for company admins that has features such as Shortlink Management, Send Certificates for audiences who take part in webinar activities, display portfolios regarding posted material, create webinar events, and others.",
    technologies: ["Flask", "Python", "HTML", "CSS", "Figma", "Postman API"],
    siteUrl: "https://github.com/arsenioabi/Back-End_CentralAdmin",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Project Profitability (Front End)",
    description:
      "Project Profitability is a website for company HRD which can find out the company's profit in the form of income from clients and also expenses for employees who work on projects from clients in the form of salaries calculated every hour.",
    technologies: ["Flask", "Python", "HTML", "CSS", "Figma", "Postman API"],
    siteUrl: "https://www.figma.com/file/vDCNHhyOFRj5bYEGU6Y0qr/Profitability-Report?node-id=0%3A1",
  },
  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Web Design",
    title: "Project Profitability (UI Wireframe)",
    description:
      "Project Profitability is a website for company HRD which can find out the company's profit in the form of income from clients and also expenses for employees who work on projects from clients in the form of salaries calculated every hour.",
    technologies: ["Wireframe", "Figma", "Canva", "Remix Icon", "Vector Graphics"],
    siteUrl: "https://wireframe.cc/9Qw9UO",
  },
  {
    id: "07",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Central Admin Website (Front End)",
    description:
      "Central Admin is a web for company admins that has features such as Shortlink Management, Send Certificates for audiences who take part in webinar activities, display portfolios regarding posted material, create webinar events, and others.",
    technologies: ["Flask", "Python", "HTML", "CSS", "Figma", "Postman API"],
    siteUrl: "https://github.com/arsenioabi/Front-End_CentralAdmin",
  },
  {
    id: "08",
    imgUrl: portfolioImg02,
    category: "Web Design",
    title: "G&B News Website",
    description:
      "The G&B News prototype is a news portal website. The focus of this project is to prototype the G&B News portal interface. It is requested to make it as attractive as possible and the functionality works well. This prototype is made first from wireframes using Figma tools.",
    technologies: ["React", "Node.js", "HTML", "CSS", "Figma"],
    siteUrl: "https://front-end-gn-b-news.vercel.app/",
  },
  {
    id: "09",
    imgUrl: portfolioImg01,
    category: "Data Science",
    title: "Sentiment Analysis on Movie Review",
    description:
      "A machine learning model that uses Logistic Regression as a classification method, Information Gain as feature selection, TF-IDF as feature extraction with the purpose of analyzing a movie review from the Rotten Tomatoes web. The f1-score result obtained from the analysis is 76.50%.",
    technologies: ["Python", "Google Colab Platform", "nltk", "Matplotlib", "Sklearn"],
    siteUrl: "https://drive.google.com/file/d/1uLek9_ZfWVCZqbH7VIYqEGrnlxBovhCK/view?usp=sharing",
  },
  {
    id: "10",
    imgUrl: portfolioImg06,
    category: "Web Design",
    title: "Project Profitability (UI Wireframe)",
    description:
      "Project Profitability is a website for company HRD which can find out the company's profit in the form of income from clients and also expenses for employees who work on projects from clients in the form of salaries calculated every hour.",
    technologies: ["Wireframe", "Figma", "Canva", "Remix Icon", "Vector Graphics"],
    siteUrl: "https://wireframe.cc/9Qw9UO",
  },
  {
    id: "11",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Project Profitability (Front End)",
    description:
      "Project Profitability is a website for company HRD which can find out the company's profit in the form of income from clients and also expenses for employees who work on projects from clients in the form of salaries calculated every hour.",
    technologies: ["Flask", "Python", "HTML", "CSS", "Figma", "Postman API"],
    siteUrl: "https://www.figma.com/file/vDCNHhyOFRj5bYEGU6Y0qr/Profitability-Report?node-id=0%3A1",
  },
  {
    id: "12",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Central Admin Website (Back End)",
    description:
      "Central Admin is a web for company admins that has features such as Shortlink Management, Send Certificates for audiences who take part in webinar activities, display portfolios regarding posted material, create webinar events, and others.",
    technologies: ["Flask", "Python", "HTML", "CSS", "Figma", "Postman API"],
    siteUrl: "https://github.com/arsenioabi/Back-End_CentralAdmin",
  },
];

export default portfolios;
