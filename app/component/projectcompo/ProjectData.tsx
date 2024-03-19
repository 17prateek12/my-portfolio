const ProjectData=[
    {
        id:1,
        title:'STOCK PREDICTION DASHBOARD',
        tech:'React.JS, Tailwind CSS, FinHub API, Flask, Neural Network, LSTM, SVR, Scikit-learn',
        point2:[
            'Developed a stock price prediction dashboard using LSTM and SVR on different datasets (5 and 10 years).',
            'Displayed opening price graphs for various timeframes (e.g., 1 day, 1 month), company information and expected stock price predictions.',
            'Integrated third-party APIs (FinHub API) to extract up to 3 years of data for the graph created by React for designing the frontend of the application and Tailwind CSS for styling the application.',
            'Deployed LSTM model on the Flask API, predicting next day opening price with 97% and setup the frontend for relay prediction and dark mode.',
        ],
        git:<a href ="https://github.com/17prateek12/Stock_prediction"  target="_blank"  style={{textDecoration:'none'}}>GITHUB</a>
    },
    {
        id:2,
        title:'PHOTO GALLERY',
        tech:'React.JS, Material-UI, CSS, Django REST, MySQL',
        point2:[
            'Created a Full-stack responsive photo gallery with feature of uploading photo, category creation, descriptions (up to 500 words).',
            'Implemented theme customization and sorting of photos on two options (on the basis of name and time of creation).',
            'Strengthened the application with crud operations on photos (editing, updating, deleting) and added two more advanced features like category-based deletion and filtering.'
        ],
        git:<a href ="https://github.com/17prateek12/Photo-gallery" target="_blank" style={{textDecoration:'none'}}>GITHUB</a>
   },

   {
   id:4,
    title:'AUTONOMOUS SMART CAR',
    tech:'Raspberry Pi, Neural Networks, Image Processing, Sensors, Google Map API, JavaScript',
    point2:[
        'Designed a self-driving car demonstrating capabilities in lane detection, curve-based turning, obstacle avoidance, and real-time location of the car using a GPS sensor (Neo 6M).',
        'Compared two algorithms for lane detection using Raspberry Pi, camera, and OpenCV library, achieving CNN accuracy of approximately 77%.',
    ],
    git:<a href ="https://github.com/17prateek12/autonomous-smart-car" target="_blank"  style={{textDecoration:'none'}}>GITHUB</a>
},
]

export default ProjectData;
