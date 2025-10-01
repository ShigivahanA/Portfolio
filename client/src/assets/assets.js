import logo from './logo.png';
import my_image from './my_image.webp';
import download_icon from './download-icon.png';
import reactIcon from "./react.svg";
import nextIcon from './next.svg';
import nodeIcon from "./node.svg";
import expressIcon from "./express.svg";
import mongoIcon from './mongo.svg'
import sqlIcon from "./sql.svg";
import pythonIcon from "./python.svg";
import tensorflowIcon from './tensorflow.svg'
import powerbiIcon from './powerbi.svg'
import figmaIcon from './figma.svg'
import tailwindIcon from "./tailwind.svg";
import gitIcon from "./git.svg";



//projects
import portfolio from './portfolio.png'
import mahal from './mahal.webp'
import mahal2 from './mahal2.webp'
import mahal3 from './mahal3.webp'
import hecademy from './hecademy.webp'
import hecademy1 from './hecademy1.webp'
import hecademy2 from './hecademy2.webp'
import hecademy3 from './hecademy3.webp'
import hecademy4 from './hecademy4.webp'
import hecademy5 from './hecademy5.webp'
import hecademy6 from './hecademy6.webp'
import hecademy7 from './hecademy7.webp'
import hecademy8 from './hecademy8.webp'
import dva from './dva.png'
import dva1 from './dva1.png'
import dva2 from './dva2.png'
import dva3 from './dva3.png'
import dva4 from './dva4.png'
import flav11 from './flav11.png'
import flav1 from './flav1.png'
import flav2 from './flav2.png'
import flav3 from './flav3.png'
import glio from './glio.webp'
import glio1 from './glio1.webp'
import glio2 from './glio2.webp'
import glio3 from './glio3.webp'
import glio4 from './glio4.webp'


//certificates
import canva from './canva.webp'
import dataviz from './dataviz.webp'
import keras from './keras.webp'
import streamlit from './streamlit.webp'
import datapaper from './datapaper.jpg'
import flav from './flav.webp'
import glioma from './glioma.webp'
import aimp from './aimp.webp'
import daworkshop from './daworkshop.webp'
import db from './db.webp'
import dynamicweb from './dynamicweb.webp'
import GenAI from './GenAI.jpg'
import GUVIpy from './GUVIpy.png'
import htmlcss from './htmlcss.webp'
import learnpython from './learnpython.webp'
import progfounpy from './progfounpy.webp'
import pythonproblem from './pythonproblem.webp'
import responsive from './responsive.webp'
import VRMP from './VRMP.png'
import statics from './statics.webp'
import oci from './oci.webp'
import studio from './studio.webp'
import dlpyt from './dlpyt.webp'







export const assets = {
    logo,
    my_image,
    download_icon,
}

export const projects = [
    {
    id: "hecademy",
    title: "Hecademy Personalized LMS",
    description: "Full-stack MERN application with authentication & payments",
    details:
      "Engineered an advanced Learning Management System using the MERN stack, featuring Clerk-based authentication, Stripe payment gateways, and a personalized recommendation engine leveraging user preferences and course tags. Implemented a dynamic video player with real-time progress tracking, automated certificate generation, and role-based educator/admin dashboards for scalable course and user management.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Clerk", "Stripe"],
    image: hecademy,
    gallery: [
      hecademy1,hecademy2,hecademy3,hecademy4,hecademy5,hecademy6,hecademy7,hecademy8
    ],
    color: "from-[#000000] to-[#fca311]",
    github: "https://github.com/ShigivahanA/testing-hecademy",
    demo: "https://hecademy.vercel.app/",
  },
  {
    id: "glioma-grading",
    title: "Glioma Grading with Ensemble Deep Learning on MRI Scans",
    description: "An ensemble learning framework for brain tumor classification using ResNet50 and EfficientNet variants.",
    details:
      "This project addresses the challenge of accurate glioma grading, critical for brain tumor treatment planning, where manual MRI interpretation is slow and subjective. Ensemble learning was chosen by combining ResNet50 and EfficientNet variants to capture complementary tumor features and enhance classification accuracy. The approach leverages feature fusion and machine learning classifiers (XGBoost, SVM, Random Forest, Logistic Regression) to improve robustness. Advantages include higher precision, reduced diagnostic variability, and an intuitive Streamlit interface for clinical usability. Results achieved up to 98% accuracy in distinguishing low-grade (LGG) and high-grade gliomas (HGG), outperforming single-model baselines and demonstrating strong potential as a clinical decision-support tool.",
    tech: ["Deep Learning", "ResNet50", "EfficientNet", "XGBoost", "Streamlit"],
    image:glio ,
    gallery: [
      glio1,glio2,glio3,glio4
    ],
    color: "from-[#14213d] to-[#fca311]",
    github: "https://github.com/ShigivahanA/Gliomagrading",
    demo: null,
  },
  {
    id: "flavorforecast",
    title: "Flavor Forecast: Optimizing Potato Chips Production with Machine Learning",
    description: "A predictive analytics system for demand forecasting in the snack industry.",
    details:
      "This project tackles the problem of demand uncertainty in potato chips production, where overproduction leads to waste and underproduction causes stockouts. Machine learning models, including SARIMAX and Random Forest, were chosen to capture seasonality, event effects, and non-linear demand patterns. The advantages include accurate short- and long-term forecasts, event-based demand insights, and reduced food wastage through better production planning. Implemented as a Streamlit web application, the system achieved 91.47% accuracy and provided interactive visualizations, enabling sustainable inventory management and improved supply chain efficiency.",
    tech: ["Machine Learning", "SARIMAX", "Random Forest", "Streamlit"],
    image: flav11 ,
    gallery: [
      flav1,flav2,flav3
    ],
    color: "from-[#14213d] to-[#fca311]",
    github: "https://github.com/JaiAnandaKrishnaa/Flavour_Forecast",
    demo: null,
  },
  {
    id: "price-elasticity",
    title: "Price Elasticity on Commodities Using Machine Learning Techniques",
    description: "A data-driven project applying machine learning techniques to forecast and analyze commodity price elasticity.",
    details:
      "This project addresses the problem of optimizing commodity pricing for vendors using historical sales data. Machine learning techniques, particularly Ordinary Least Squares regression, were applied to forecast price elasticity and identify the correlation between price changes and demand. The approach enables businesses to choose optimal pricing strategies, reducing losses from arbitrary price hikes. Advantages include actionable insights through data visualization (scatter plots, heatmaps, trend charts), improved decision-making, and balancing customer retention with profit growth. The results demonstrated accurate predictions of demand fluctuations, helping vendors maximize revenue while maintaining customer satisfaction.",
    tech: ["Machine Learning", "OLS Regression", "Data Visualization", "Python"],
    image: dva,
    gallery: [
      dva1,dva2,dva3,dva4
    ],
    color: "from-[#fca311] to-[#000000]",
    github: null,
    demo: null,
  },
  {
    id: "mahal",
    title: "Marraige Mahal Website",
    description: "A responsive single-page website built with Next.js and Tailwind CSS",
    details:
      "Developed a modern, responsive website for Sri Iyyappan Thirumana Mandapam to showcase its facilities, gallery, and contact details. Implemented smooth animations with Framer Motion, multilingual support (English & Tamil), and dark mode. Deployed on Vercel with SEO optimizations and Google Maps integration.",
    tech: ["Next.js", "React", "Tailwind", "Motion", "Vercel"],
    image: mahal,
    gallery: [
      mahal2,mahal3
    ],
    color: "from-[#fca311] to-[#14213d]",
    github: null,
    demo: "https://iyyappanthirumanamandapam.vercel.app/",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "A personal website built with React + Vite + Tailwind CSS",
    details:
      "This portfolio was built with React and Vite, styled with TailwindCSS. It features animations using Framer Motion and a fully responsive layout. Deployed on Vercel for blazing performance.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    image: portfolio,
    gallery: [
      portfolio,portfolio,
    ],
    color: "from-[#14213d] to-[#000000]",
    github: "https://github.com/yourname/portfolio",
    demo: "https://yourportfolio.com",
  },
];

export const skillIcons = [
  { name: "React", icon: reactIcon },
  { name: "Next.js", icon: nextIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "SQL", icon: sqlIcon },
  { name: "Python", icon: pythonIcon },
  { name: "TensorFlow", icon: tensorflowIcon },
  { name: "Power BI", icon: powerbiIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Git", icon: gitIcon },
  { name: "Figma", icon: figmaIcon },
];



export const certificates = [
    {
    id: "Keras-cert",
    title: "Creating Multi Task Models with Keras",
    issuer: "Coursera",
    date:'2025-09-28',
    displaydate: "Sep 2025",
    expiry: null,
    image: keras,
    details:
      "This certification demonstrates proficiency in building advanced multi-task and multi-output neural networks using Keras and TensorFlow. The guided project focuses on designing models with shared layers and ResNet-style skip connections through Keras’ Functional API. Learners apply these techniques to train models capable of producing multiple predictions from a single input, bridging theoretical knowledge of CNNs and optimization with practical, real-world deep learning applications.",
    skills: ["Artifical Neural Networks", "Deep Learning", "Tensorflow", "Keras", "Computer Vision", "Machine Learning"],
    link: "https://coursera.org/verify/7958L3895XNL",
  },
  {
  id: "oci-foundations",
  title: "Oracle Cloud Infrastructure (OCI) - Foundations",
  issuer: "Oracle",
  date:'2023-12-27',
  displaydate: "Dec 2023",
  expiry: "Dec 2025",
  image: oci,
  details:
    "This certificate was awarded for achieving the Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate credential, demonstrating foundational knowledge of cloud computing concepts and Oracle Cloud Infrastructure (OCI).",
  skills: [
    "Cloud Computing Fundamentals",
    "Oracle Cloud Infrastructure Basics",
    "Networking & Storage in OCI",
    "Cloud Security Principles",
    "Identity & Access Management",
    'AI/ML and Data Services in OCI'
  ],
  link: null
},
{
  id: "gliomagrading",
  title: "Ensemble Learning for Glioma Grading",
  issuer: "6th International Conference of Emerging Technology (INCET 2025)",
  date:'2025-05-24',
  displaydate: "May 2025",
  expiry: null,
  image: glioma,
  details:
    "Presented the paper 'Ensemble Learning for Glioma Grading: Multi-Modal Feature Fusion Using ResNet50 and EfficientNet Variants on MRI Scans' at the 6th International Conference of Emerging Technology (INCET 2025), organized by Jain College of Engineering, Belagavi, India.",
  skills: [
    "Deep Learning",
    "Medical Image Analysis",
    "ResNet50",
    "EfficientNet",
    "Ensemble Learning",
    "MRI Scan Analysis"
  ],
  link: "https://ieeexplore.ieee.org/document/11140897"
},
{
  id: "flavourforecast",
  title: "Production through Demand Forecasting using Machine Learning",
  issuer: "International Conference on Research and Development in Information, Communication and Computing Technologies (ICRDICCT 2025)",
  date:'2025-04-05',
  displaydate: "Apr 2025",
  expiry: null,
  image: flav,
  details:
    "This certificate was awarded for presenting the paper 'Production through Demand Forecasting using Machine Learning Techniques' at the International Conference on Research and Development in Information, Communication and Computing Technologies (ICRDICCT 2025), held on April 4–5, 2025, organized by E.G.S. Pillay Engineering College, Nagapattinam, and NTL Technology.",
  skills: [
    "Cloud Computing Fundamentals",
    "Oracle Cloud Infrastructure Basics",
    "Networking & Storage in OCI",
    "Cloud Security Principles",
    "Identity & Access Management",
    'AI/ML and Data Services in OCI'
  ],
  link: null
},
  {
    id: "Streamlit-cert",
    title: "Built a Data Science WebApp with Streamlit",
    issuer: "Coursera",
    date:'2023-10-04',
    displaydate: "Oct 2023",
    expiry: null,
    image: streamlit,
    details:
      "This certification demonstrates proficiency in building interactive data science web applications using Streamlit and Python. The project-based course covers loading, exploring, and visualizing datasets with Pandas, and creating dashboards in under 100 lines of code. It highlights the ability to design and deploy user-friendly web apps without prior web development experience, bridging the gap between data analysis and real-world application.",
    skills: ["Python", "Pandas", "Streamlit", "Data Visualization", "Web Apps", "Dashboards"],
    link: "https://coursera.org/verify/9XBXPPGBDXYS",
  },
  {
    id: "dataviz-cert",
    title: "Data Vizualization using Plotly",
    issuer: "Coursera",
    date:'2023-10-18',
    displaydate: "Oct 2023",
    expiry: null,
    image: dataviz,
    details:
      "This certification demonstrates proficiency in creating interactive and publication-quality data visualizations using Plotly in Python. The project covers building a variety of visualizations with Plotly constructs, enabling learners to transform raw data into clear, insightful, and engaging graphical representations. It highlights the ability to apply Plotly for both exploratory data analysis and professional presentation of results, a valuable skill for data science and analytics workflows.",
    skills: ["Exploratory Data Analysis", "Plotly", "Data Visualization", "Python "],
    link: "https://coursera.org/verify/J8FKDYCDLW28",
  },
  {
    id: "canva-cert",
    title: "Design a pitch deck with Canva",
    issuer: "Coursera",
    date:'2024-04-04',
    displaydate: "Apr 2024",
    expiry: null,
    image: canva,
    details:
      "This certification demonstrates proficiency in using Canva to design professional and visually compelling pitch decks. The guided project covers creating investor-ready presentations, applying effective design principles, and tailoring visuals to engage a target audience. It highlights the ability to craft attractive and credible marketing materials that communicate ideas clearly and persuasively.",
    skills: ["Sales Presentations", "Product Demonstration", "Entrepreneurship", "Graphic Design"],
    link: "https://coursera.org/verify/Z7NUMGLN748E",
  },
  {
    id: "google-studio",
    title: "Google Data Studio",
    issuer: "Coursera",
    date:'2025-09-30',
    displaydate: "Sep 2025",
    expiry: null,
    image: studio,
    details:
      "This guided project demonstrates proficiency in using Google Data Studio, Google’s free data visualization platform. The course covers connecting datasets to Data Studio, designing high-quality interactive reports, and sharing insights with collaborators. Learners work with data from a fictional e-commerce platform, applying visualization techniques to create dashboards that communicate business performance effectively and support data-driven decision-making.",
    skills: ["Data Analysis", "Interactive Data Visualization", "Data Modeling", "Data Presentation"],
    link: "https://coursera.org/verify/VQMAK9PD945H",
  },
  {
    id: "deep-learning-pytorch",
    title: "Deep Learning with PyTorch : Generative Adversarial Network",
    issuer: "Coursera",
    date:'2025-09-30',
    displaydate: "Sep 2024",
    expiry: null,
    image: dlpyt,
    details:
      "This project showcases hands-on experience in implementing a Deep Convolutional Generative Adversarial Network (DCGAN) using PyTorch to generate handwritten digit images. It covers building and training a generator to create realistic samples and a discriminator to distinguish real from synthetic data. The guided course emphasizes practical implementation over theory, highlighting the ability to apply convolutional neural networks and optimization techniques such as Adam to solve real-world generative modeling tasks.",
    skills: ["Deep Learning", "PyTorch", "Generative Model Architectures", "Image Analysis"],
    link: "https://coursera.org/verify/QXF5I76PZEMP",
  },
  {
  id: "icdsaai-2023",
  title: "International Conference on Data Science, Agents and Artificial Intelligence (ICDSAAI 2023)",
  issuer: "Chennai Institute of Technology",
  date:'2023-12-23',
  displaydate: "Dec 2023",
  expiry: null,
  image: datapaper,
  details:
    "This certificate was awarded for presenting the paper 'Data Visualisation and Analytics for Price Elasticity on Commodities Using Machine Learning' at the International Conference on Data Science, Agents and Artificial Intelligence (ICDSAAI 2023), organized by the Center for Artificial Intelligence and Research at Chennai Institute of Technology.",
  skills: [
    "Data Visualization",
    "Machine Learning",
    "Analytics",
    "Research Presentation",
    "Artificial Intelligence"
  ],
  link: "https://ieeexplore.ieee.org/document/10452435"
},
{
  id: "database",
  title: "Introduction to Databases",
  issuer: "NxtWave",
  date:'2023-10-09',
  displaydate: "Oct 2023",
  expiry: null,
  image: db,
  details:
    "This certificate was awarded for successfully completing the course Introduction to Databases, which provided a comprehensive understanding of SQL and relational database concepts, designed by top alumni from leading institutions and companies including IITs, Google, Amazon, and Microsoft.",
  skills: [
    "SQL",
    "Data Querying & Manipulation",
  ],
  link: null
},
{
  id: "dynamic-web",
  title: "Build Your Own Dynamic Web Application",
  issuer: "NxtWave",
  date:'2023-08-31',
  displaydate: "Aug 2023",
  expiry: null,
  image: dynamicweb,
  details:
    "This certificate was awarded for successfully completing the course Build Your Own Dynamic Web Application, which focused on hands-on learning of JavaScript to design and develop interactive, real-time web applications, guided by program modules created by top alumni from IITs and global tech leaders.",
  skills: [
    "JavaScript",
    "DOM Manipulation & Event Handling",
    "Dynamic Web Page Development",
    "REST API",
    "Asynchronous Programming"
  ],
  link: null
},
{
  id: "genai",
  title: "Generative AI Mega Workshop",
  issuer: "NxtWave",
  date:'2023-08-08',
  displaydate: "Aug 2023",
  expiry: null,
  image: GenAI,
  details:
    "This certificate was awarded for successfully building a Generative AI Application during the Generative AI Mega Workshop, conducted exclusively for CCBP 4.0 Academy students and hosted by Mr. Rahul Attuluri, CEO of NxtWave.",
  skills: [
    "Generative AI",
    "Prompt Engineering",
    "API Integration for AI Models",
    "Practical AI/ML Application Development",
  ],
  link: null
},
{
  id: "guvi-python",
  title: "Python Programming",
  issuer: "GUVI",
  date:'2023-08-05',
  displaydate: "Aug 2023",
  expiry: null,
  image: GUVIpy,
  details:
    "This certificate was awarded for successfully completing the Python Programming course offered by GUVI (an IIT-Madras incubated company and Google for Education Partner), demonstrating strong problem-solving and coding skills.",
  skills: [
    "Python Programming Fundamentals",
    "Control Structures",
    "Functions and Modules",
    "File Handling",
    "Data Types, Variables, and Operators"
  ],
  link: "www.guvi.in/certificate?id=9639311Gxv7Kg1L899"
},
{
  id: "html-css",
  title: "Learn HTML / CSS",
  issuer: "CodeChef",
  date:'2023-09-06',
  displaydate: "Sep 2023",
  expiry: null,
  image: htmlcss,
  details:
    "This certificate was awarded for completing all lessons of the Learn HTML/CSS course on CodeChef, focusing on building structured, styled, and responsive web pages.",
  skills: [
    "HTML5 Elements & Structure",
    "CSS Styling & Selectors",
    "Page Layouts",
    "Responsive Web Design",
    "Forms & Input Handling"
  ],
  link: "www.codechef.com/certificates/verify?certificate_id=6cba63f&username=shigivahan_a"
},
{
  id: "learn-python",
  title: "Learn Python Programming",
  issuer: "CodeChef",
  date:'2023-08-06',
  displaydate: "Aug 2023",
  expiry: null,
  image: learnpython,
  details:
    "This certificate was awarded for completing all lessons of the Learn Python course on CodeChef, gaining foundational knowledge in Python programming and coding practices.",
  skills: [
    "Python Basics & Syntax",
    "Conditional Statements & Loops",
    "Functions & Scope",
    "Lists, Dictionaries, and Tuples",
    "String Manipulation"
  ],
  link: 'www.codechef.com/certificates/verify?certificate_id=e45b2e9&username=shigivahan_a'
},
{
  id: "prog-foun-py",
  title: "Programming Foundations with Python",
  issuer: "NxtWave",
  date:'2023-08-09',
  displaydate: "Aug 2023",
  expiry: null,
  image: progfounpy,
  details:
    "This certificate was awarded for successfully completing the course Programming Foundations with Python at NxtWave CCBP 4.0 Academy, covering core programming concepts and Python fundamentals.",
  skills: [
    "Python Syntax & Semantics",
    "Variables, Data Types, Operators",
    "Control Flow",
    "Functions & Modular Programming",
    "Problem-Solving Techniques"
  ],
  link: null
},{
  id: "python-problem",
  title: "Python for Problem Solving",
  issuer: "CodeChef",
  date:'2023-09-06',
  displaydate: "Sep 2023",
  expiry: null,
  image: pythonproblem,
  details:
    "This certificate was awarded for completing all lessons of the Python for Problem Solving – 1 course on CodeChef, focusing on applying Python to solve computational problems.",
  skills: [
    "Problem-Solving using Python",
    "Loops & Conditional Statements",
    "Functions & Recursion",
    "Working with Strings & Lists",
    "Basic Algorithmic Thinking"
  ],
  link: 'www.codechef.com/certificates/verify?certificate_id=e14f654&username=shigivahan_a'
},{
  id: "responsive-web",
  title: "Build Your Own Responsive Website",
  issuer: "NxtWave",
  date:'2023-06-25',
  displaydate: "Jun 2023",
  expiry: null,
  image: responsive,
  details:
    "This certificate was awarded for successfully completing the course Build Your Own Responsive Website at NxtWave CCBP 4.0 Academy, emphasizing Bootstrap and Flexbox for adaptive layouts.",
  skills: [
    "HTML5 & CSS3",
    "Responsive Web Design",
    "Bootstrap Components",
    "Flexbox Layouts",
    "Cross-Device Compatibility"
  ],
  link: null
},{
  id: "static",
  title: "Build Your Own Static Website",
  issuer: "NxtWave",
  date:'2022-09-18',
  displaydate: "Sep 2022",
  expiry: null,
  image: statics,
  details:
    "This certificate was awarded for successfully completing the course Build Your Own Static Website at NxtWave CCBP 4.0 Academy, focusing on HTML, CSS, and Bootstrap basics.",
  skills: [
    "HTML5 Fundamentals",
    "CSS Styling & Selectors",
    "Bootstrap for Styling",
    "Static Page Development",
    "Web Design Principles"
  ],
  link: null
},{
  id: "vrmp",
  title: "Virtual Reality 101: Mini Project",
  issuer: "NxtWave",
  date:'2022-10-31',
  displaydate: "Oct 2022",
  expiry: null,
  image: VRMP,
  details:
    "This certificate was awarded for successfully completing Virtual Reality 101: Mini Project at NxtWave CCBP 4.0 Academy, by creating a virtual world using webXR tools.",
  skills: [
    "Virtual Reality Basics",
    "WebXR Development",
    "Immersive UI/UX Concepts"
  ],
  link: null
},{
  id: "daworkshop",
  title: "Data Analytics Mega Workshop",
  issuer: "NxtWave",
  date:'2024-01-31', 
  displaydate: "Jan 2024",
  expiry: null,
  image: daworkshop,
  details:
    "This certificate was awarded for successfully attending the Data Analytics Mega Workshop and building an interactive dashboard using Power BI, Excel, and Kaggle.",
  skills: [
    "Data Analytics Fundamentals",
    "Power BI for Dashboard Creation",
    "Data Visualization Techniques",
    "Exploratory Data Analysis (EDA) using Kaggle",
    "Excel for Data Cleaning & Reporting"
  ],
  link: null
},{
  id: "AIMP",
  title: "AI Art Mini Project",
  issuer: "NxtWave",
  date:'2023-02-13',
  displaydate: "Feb 2023",
  expiry: null,
  image: aimp,
  details:
    "This certificate was awarded for successfully completing the AI Art Mini Project under the CCBP 4.0 Academy program, by applying AI/ML tools to generate creative outputs.",
  skills: [
    "Artificial Intelligence",
    "Machine Learning Concepts",
    "Generative AI for Art Creation",
    "Creativity with Data-Driven Models",
  ],
  link: null
}
];

