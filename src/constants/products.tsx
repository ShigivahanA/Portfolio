import edu from "public/images/edu.png";
import navi from "public/images/navi.png";
import gate from "public/images/gate.png";
import levy2 from "public/images/levy2.jpg";
import levy3 from "public/images/levy3.jpg";
import levy4 from "public/images/levy4.jpg";
import m1 from "public/images/m1.png";
import m2 from "public/images/m2.png";
import m3 from "public/images/m3.png";
import Scrap from "public/images/Scrap.png";
import Medium from "public/images/Medium.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://tvaedunavigate.streamlit.app/",
    title: "TVA Edunavigate",
    description:
      "A Personalised Learning Recommendation Website for E learning.",
    thumbnail: edu,
    images: [edu, navi, gate],
    stack: ["Python", "Streamlit"],
    slug: "TVAEdunavigate",
    content: (
      <div>
        <p>
        A sophisticated Python and Streamlit application has been developed 
        to deliver personalized learning recommendations.
        The platform incorporates a robust user profile system, 
        allowing for tailored suggestions based on individual learning preferences, progress, and goals. 
        A comprehensive admin dashboard provides efficient content management, 
        ensuring a rich and up-to-date learning ecosystem.{" "}
        </p>
        <p>
        By leveraging Python&apos;s data manipulation capabilities and Streamlit&apos;s rapid 
        development framework, the application offers an intuitive and engaging user experience.
        The system&apos;s architecture emphasizes data security and privacy, safeguarding user 
        information. Advanced algorithms analyze user data to provide relevant and actionable 
        recommendations, optimizing the learning journey.{" "}
        </p>
        <p>
        This project showcases a successful integration of web development, data management, 
        and user experience design. The result is a powerful tool that empowers learners to
         discover new knowledge and skills while providing administrators with the means to 
         curate and manage educational content effectively.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://levyloom.shigivahan.xyz/",
    title: "LEVYLOOM - Tax Calculator",
    description:
      "A Beginner Friendly Tax Calculator Mobile/Web Application",
    thumbnail: levy2,
    images: [levy2, levy3,levy4],
    stack: ["Dart", "Kotlin"],
    slug: "LEVYLOOM",
    content: (
      <div>
        <p>
        LevyLoom is a rapidly developed tax calculation tool accessible across Android, iOS, and web platforms.
        Crafted within a 36-hour timeframe, this innovative application streamlines the complex 
        process of tax calculation. By integrating ChatGPT, LevyLoom provides users with real-time 
        tax-related assistance, transforming the app into a comprehensive tax solution. The consistent 
        user experience across devices, achieved through Flutter&apos;s cross-platform capabilities, 
        ensures effortless tax calculations on the go.{" "}
        </p>
        <p>
        Leveraging the power of Dart and Kotlin, LevyLoom&apos;s backend efficiently handles tax calculations 
        and API interactions. Flutter&apos;s hot reload feature accelerated development, enabling rapid 
        iterations and improvements. This agile development approach resulted in a feature-rich tax calculator 
        that meets the needs of users with varying levels of tax expertise.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://Scrapper.shigivahan.xyz/",
    title: "Medium Scrapper",
    description:
      "Your gateway to curated Medium articles at your fingertips.",
    thumbnail: Scrap,
    images: [Scrap, Medium],
    stack: ["React.js","Puppeteer", "Node.js"],
    slug: "MediumScrapper",
    content: (
      <div>
        <p>
        This project entails creating a web application that efficiently scrapes 
        articles from Medium based on user-specified topics.
        The application comprises a backend developed using Node.js and Express 
        to handle web scraping and API interactions, and a frontend built with React to 
        provide a user-friendly interface.{" "}
        </p>
        <p>
        The backend utilizes Puppeteer to extract article data such as title,
        author, publication date, and URL. The scraped data is then served through API 
        endpoints that allow the frontend to fetch and display the articles. The frontend
         is responsible for creating a form where users can input their desired topics, and 
         then displaying the scraped articles in a clear and organized manner.{" "}
        </p>
        <p>
        To enhance user experience, the application incorporates responsive design, 
        form validation, loading indicators, and error handling. Once the application is thoroughly
         tested and debugged. 
         Comprehensive documentation is essential to guide users in setting up and using the application 
         effectively.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://mmm.shigivahan.xyz/",
    title: "MovieMutt Madness",
    description:
      "React Movie Search App",
    thumbnail: m3,
    images: [m3, m2, m1],
    stack: ["React.js", "Node.js","API"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
        This project involves building a React-based application designed to help users discover movies.
        The core functionality revolves around a search bar where users can input movie titles. 
        Once a query is submitted, the app fetches relevant movie data from the Open Library Search API. 
        To enhance user experience, the retrieved movie information is presented in visually appealing cards.{" "}
        </p>
        <p>
        To add an interesting twist,
        each movie card is paired with a random dog image fetched from another API. 
        This unexpected element not only adds a playful touch but also demonstrates the ability 
        to integrate multiple data sources into a single application.{" "}
        </p>
        <p>
        Beyond the core features, the assignment emphasizes the importance of user experience. 
        By incorporating elements like input validation, loading states, and error handling, 
        the app aims to provide a smooth and reliable user interaction. Successful completion of this 
        project will solidify your understanding of React development, API integration, and user-centered 
        design principles.
        </p>{" "}
      </div>
    ),
  },
  // {
  //   href: "https://tailwindmasterkit.com",
  //   title: "MovieMutt Madness",
  //   description:
  //     "React Movie Search App",
  //   thumbnail: m3,
  //   images: [m3, m2, m1],
  //   stack: ["React.js", "Node.js","API"],
  //   slug: "tailwindmasterkit",
  //   content: (
  //     <div>
  //       <p>
  //       This project involves building a React-based application designed to help users discover movies.
  //       The core functionality revolves around a search bar where users can input movie titles. 
  //       Once a query is submitted, the app fetches relevant movie data from the Open Library Search API. 
  //       To enhance user experience, the retrieved movie information is presented in visually appealing cards.{" "}
  //       </p>
  //       <p>
  //       To add an interesting twist,
  //       each movie card is paired with a random dog image fetched from another API. 
  //       This unexpected element not only adds a playful touch but also demonstrates the ability 
  //       to integrate multiple data sources into a single application.{" "}
  //       </p>
  //       <p>
  //       Beyond the core features, the assignment emphasizes the importance of user experience. 
  //       By incorporating elements like input validation, loading states, and error handling, 
  //       the app aims to provide a smooth and reliable user interaction. Successful completion of this 
  //       project will solidify your understanding of React development, API integration, and user-centered 
  //       design principles.
  //       </p>{" "}
  //     </div>
  //   ),
  // },
];
