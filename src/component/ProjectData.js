const ProjectData = [
    {
        id: 1,
        title: 'NEWS APP',
        tech: 'MERN STACK, Socket.io, Passport.js, Google OAuth 2.0, Redux, Tailwind CSS, Google news Scraper, Cheerio',
        point2: [
            'Created a user-friendly, feature-rich news app that uses web scraping to showcase news and Google News Scraper to retrieve up to 2000+ items for over 15+ categories.',
            'Incorporate features like pagination, searching over 2000+ articles, user authentication through Google Auth 2.0, adding bookmarks, and dark theme mode.',
            'Integrated an auto-update of all news after every 12 hours and the latest news after 2 hours.'
        ],
        git: "https://github.com/17prateek12/news_app",
        link:"https://news-app-4h7w.onrender.com"
    },
    {
        id: 2,
        title:'WEATHER APP',
        tech: 'React.JS',
        point2: [
            'Developed a Weather Dashboard application using React, providing users with current weather information and a 5-day forecast for specified locations.',
            'Utilized React Context API and Hooks for efficient state management and component interaction.',
            'Integrated OpenWeatherMap API to fetch weather data, and utilized Recharts library for graphical representation of forecast data.',
        ],
        git: "https://github.com/17prateek12/Weather_app",
        link:"https://weather-app-tau-indol.vercel.app/"
    },
    {
        id: 3,
        title: 'STOCK SENTRY ',
        tech: 'MERN STACK, Cheerio, Redux, Tailwind CSS, Material UI, TypeScript, Neural Network, Flask',
        point2: [
            'Developed a stock market dashboard displaying historical opening price graphs over a vast time range of more than 10 years, giving stock details, and displaying top losers and gainers.',
            'Built an LSTM model achieving 94% accuracy in predicting future stock prices on the Flask API and enabled dark mode.',
            'Integrated third-party APIs (FinHub API) to extract up to 3 years of data for the graph created by React for designing the frontend of the application and Tailwind CSS for styling the application.',
            'Build user authentication and give features like creating a watchlist, searching stock, and predicting the next 10 days price',
        ],
        git:"https://github.com/17prateek12/Stock_DashBoard",
        link:""
    },
    {
        id: 4,
        title: 'PHOTO GALLERY',
        tech: 'React.JS, Material-UI, CSS, Django REST, MySQL',
        point2: [
            'Created a Full-stack responsive photo gallery with feature of uploading photo, category creation, descriptions (up to 500 words).',
            'Implemented theme customization and sorting of photos on two options (on the basis of name and time of creation).',
            'Strengthened the application with crud operations on photos (editing, updating, deleting) and added two more advanced features like category-based deletion and filtering.'
        ],
        git: "https://github.com/17prateek12/Photo-gallery",
        link:"",
    },

];

export {ProjectData};
