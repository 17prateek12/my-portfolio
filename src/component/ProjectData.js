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
        link:""
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
        title: 'STOCK PREDICTION DASHBOARD',
        tech: 'React.JS, Tailwind CSS, FinHub API, Flask, Neural Network, LSTM, SVR, Scikit-learn',
        point2: [
            'Developed a stock price prediction dashboard using LSTM and SVR on different datasets (5 and 10 years).',
            'Displayed opening price graphs for various timeframes (e.g., 1 day, 1 month), company information and expected stock price predictions.',
            'Integrated third-party APIs (FinHub API) to extract up to 3 years of data for the graph created by React for designing the frontend of the application and Tailwind CSS for styling the application.',
            'Deployed LSTM model on the Flask API, predicting next day opening price with 97% and setup the frontend for relay prediction and dark mode.',
        ],
        git:"https://github.com/17prateek12/Stock_prediction",
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

    {
        id: 5,
        title: 'AUTONOMOUS SMART CAR',
        tech: 'Raspberry Pi, Neural Networks, Image Processing, Sensors, Google Map API, JavaScript',
        point2: [
            'Designed a self-driving car demonstrating capabilities in lane detection, curve-based turning, obstacle avoidance, and real-time location of the car using a GPS sensor (Neo 6M).',
            'Compared two algorithms for lane detection using Raspberry Pi, camera, and OpenCV library, achieving CNN accuracy of approximately 77%.',
        ],
        git: "https://github.com/17prateek12/autonomous-smart-car",
        link:""
    },
];

export {ProjectData};
