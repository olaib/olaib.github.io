import game from "./assets/images/game.png";
import img3 from "./assets/images/TheKing.png";
import img4 from "./assets/images/autocomplete.png";
import img5 from "./assets/images/bombTheEnemy.jpg";
import image6 from "./assets/images/image2.jpg";
import BADGE_IMG from "./assets/images/Badges_Excellenteam.png";
import CERTIFICATION_IMG from "./assets/images/certification.jpeg";

export const SCROLL_OFFSET = 50, HOME_LINK = "home",
    EXCELLENT_BADGE = BADGE_IMG, CERTIFICATION = CERTIFICATION_IMG,
    GITHUB_ICON = 'fab fa-github',
    YOUTUBE_ICON = 'fab fa-youtube',
    SOCIAL_LINKS = {
        'linkedin': {
            'name': 'LinkedIn',
            'link': 'https://www.linkedin.com/in/ola-ibrahim-757504223/',
            'icon': 'fab fa-linkedin-in fa-2x'
        },
        'github': {
            'name': 'Github',
            'link': 'https://github.com/olaib',
            'icon': `${GITHUB_ICON} fa-2x`
        }
    },
    NAV_ITEMS = {
        'home': {
            'name': 'Home',
            'link': '/#home',
            'icon': 'fas fa-home',
            'activeLink': 'home'
        },
        'about': {
            'name': 'About',
            'link': '/#about',
            'icon': 'fas fa-user',
            'activeLink': 'about'
        },
        'skills':
            {
                'name':
                    'Skills',
                'link':
                    '/#skills',
                'icon':
                    'fas fa-code',
                'activeLink':
                    'skills'
            }
        ,
        'projects':
            {
                'name':
                    'Projects',
                'link':
                    '/#projects',
                'icon':
                    'fas fa-project-diagram',
                'activeLink':
                    'projects'
            }
        ,
    },
    NAV_ICONS_COLOR = '#AB78B7FF',
    JOB_DESCRIPTIONS = [
        'Software',
        'Python',
        'C++',
        'Frontend',
        'Backend',
        'Fullstack',
    ],
    STYLE = {
        textShadow: '0 0 10px #41165b, 0 0 20px #772673, 0 0 40px #b118bb, 0 0 80px #b68dce, 0 0 120px #8dcebc, 0 0 160px #8dcebc;'
    },
    INFO = {
        'email': 'olaib76@gmail.com',
        'phone': '+972 50 670 5664',
        'domainPhone': '972506705664',
    }, TYPING_DELAY = 130,
    PROJECTS = [
        {
            title: "Gpt Explainer",
            description: "Powerpoints explainer using GPT-3.5 model",
            imgUrl: 'https://creatingfutureus.org/wp-content/uploads/2020/09/Untitled-design-47-1080x675.png',
            githubLink: 'https://github.com/Scaleup-Excellenteam/final-exercise-olaib',
            youtubeLink: '',
            About: "Flask web application that explains a content of powerpoint presentation using GPT-3.5 model"
        },
        {
            title: "Google Auto-Complete",
            description: "Google Auto-Complete using Trie data structure",
            // auto complete engine picture
            imgUrl: img4,
            githubLink: 'https://github.com/Scaleup-Excellenteam/google-google_autocomplete_team_1',
            youtubeLink: '',
            About: "Google Auto-Complete is a Console Application using Trie data structure and algorithms"
        },
        {
            title: "Student-Management-System",
            description: "Checkpoint project for Student Management System using Application in C++",
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Check_Point_logo_2022.svg',
            githubLink: 'https://github.com/Scaleup-Excellenteam/checkpoint-olaib',
            youtubeLink: '',
            About: "Student Management System is a Console Application in C++, and using profiling tools to debug and properly handle memory, while also implementing a basic firewall on Linux."
        },
        {
            title: "Bomb The Enemy Game",
            description: "Unity RTS Game in C#",
            imgUrl: img5,
            githubLink: 'https://github.com/olaib/Unity-Bomb-the-Enemy-Maze-RTS-Game/tree/main/BombTheEnemy-Game',
            youtubeLink: 'https://www.youtube.com/watch?app=desktop&v=y5gzi-VMkeU',
            About: "Bomb The Enemy is a 3D Game in Unity, a maze RTS game in which you must use bombs to destroy the enemy's and get to the exit successfully, In addition, in this game there is a mini games - Tic Tac Toe and another simple arcade game."
        },
        {
            title: "The Brothers",
            description: "A a puzzle-platform game in Box2D and SFML",
            imgUrl: game,
            githubLink: 'https://github.com/olaib/BOX2D_OOP2_FINAL_PROJECT',
            youtubeLink: 'https://www.youtube.com/embed/uGGU00LBSfI',
            About: "Game in Box2D A a puzzle-platformed game in which you must control the three characters of different sizes and make them all reach the exit successfully."
        },
        {
            title: "Circle-The-Cat-Game-BFS-algorithm",
            description: "object oriented simple BFS algorithm",
            imgUrl: 'https://trap-thecat.com/data/image/circle-the-cat.jpg1.JPG',
            githubLink: 'https://github.com/olaib/Circle-The-Cat-Game-BFS-algorithm',
            youtubeLink: '',
            About: "Circle the Cat is a puzzle game where you draw circles around a cat in an attempt to trap it, the cat can be quite tricky by using BFS-algorithm."
        },
        {
            title: "Save The King Game",
            description: "SFML Game",
            imgUrl: img3,
            githubLink: 'https://github.com/olaib/oop1_final_project_save_the_king_game',
            youtubeLink: '',
            About: "Save The King Game is A final project in object oriented programming at semester A using SFML graphic/audio library"
        },
    ],
    EXCELLENTEAM_LINK = 'https://www.credly.com/badges/0bcf6727-4934-47b1-836c-32bb02d186c4/linked_in?t=s139f7',
    CV_LINK = 'https://drive.google.com/file/d/18QICDDClwL7My1toQQiUkzLOAYAqD0QU/view?usp=drive_link',
    SKILLS = {
        'programmingLanguages': [
            {
                'name': 'Python',
                'icon': 'fab fa-python'
            },
            {
                'name': 'C++',
            },
            {
                'name': 'C',
            },
            {
                'name': 'C#',
            },
            {
                'name': 'JavaScript',
                'icon': 'fab fa-js-square'
            },
            {
                'name': 'Java',
                'icon': 'fab fa-java'
            },
            {
                'name': 'HTML',
                'icon': 'fab fa-html5'
            },
            {
                'name': 'SQL',
                'icon': 'fas fa-database'
            },
            {
                'name': 'React',
                'icon': 'fab fa-react'
            },
            {
                'name': 'Node.js',
                'icon': 'fab fa-node-js'
            },
            {
                'name': 'Express.js',
                'icon': 'fas fa-server'
            },
        ],
        'toolsAndFrameworks': [
            {
                'name': 'Git',
                'icon': 'fab fa-git-alt'
            },
            {
                'name': 'GitHub',
                'icon': 'fab fa-github'
            },
            {
                'name': 'Flask (Python web framework)',
                'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png'
            },
            {
                'name': 'Spring',
                'icon': 'fas fa-seedling'
            },
            {
                'name': 'bootstrap',
                'icon': 'fab fa-bootstrap'
            },
            {
                'name': 'linux',
                'icon': 'fab fa-linux'
            }],
        'other': [
            {
                'name': 'MongoDB',
                'icon': 'fas fa-database'
            },
            {
                'name': 'Image Processing',
                'icon': 'fas fa-image'
            },
            {
                'name': 'Dockers',
                'icon': 'fab fa-docker'
            },
            {
                'name': 'Automation Testing QA',
                'icon': 'fas fa-robot'
            },
            {
                'name': 'TypeScript',
                'icon': 'fab fa-js-square'
            }
        ]
    },
    CONTACT_INFO = [
        {
            icon: 'fas fa-envelope fa-lg',
            link: `mailto:${INFO.email}`,
            text: INFO.email,
            color: '#f52424'
        },
        {
            icon: 'fas fa-phone-alt fa-lg',
            link: `tel:${INFO.phone}`,
            text: INFO.phone,
            color: '#ffffff'
        },
        {
            icon: 'fab fa-whatsapp fa-lg',
            link: `https://api.whatsapp.com/send?phone=${INFO.domainPhone}`,
            text: INFO.phone,
            color: '#25D366'
        },
        {
            icon: 'fab fa-linkedin-in fa-lg',
            link: SOCIAL_LINKS.linkedin.link,
            text: SOCIAL_LINKS.linkedin.name,
        },
        {
            icon: 'fab fa-github fa-lg',
            link: SOCIAL_LINKS.github.link,
            text: SOCIAL_LINKS.github.name,
            color: '#ffffff'
        },
    ],
    IMAGE_6 = image6

