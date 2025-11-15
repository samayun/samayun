// Enhanced macOS Portfolio - Interactive JavaScript

// Data (keeping your existing data)
const profile = {
    name: "Samayun Miah Chowdhury",
    image: "https://avatars.githubusercontent.com/u/31636535",
    about: "Sr. Software Engineer | Backend Developer | DevOps Practitioner",
    title: "Building scalable distributed systems",
    email: "samayun.m.chowdhury@gmail.com",
    github: "https://github.com/samayun",
    linkedin: "https://linkedin.com/in/samayun",
    location: "Dhaka, Bangladesh"
};

// Blog Data
const blogData = [
    {
        id: 1,
        title: "রেডিস কথন ১",
        description: `Redis এর পুর্নরুপ REmote DIstributed Server. এটি একটি ওপেন সোর্স In memory key-value data store. একটি ইতালিয়ান স্টার্টআপ রিয়েল টাইম ওয়েব লগ এনালাইজার বানাতে স্কেলেবিলিটি ইম্প্রভমেন্টের জন্য এটি ডেভলপ করেছিলো।..`,
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*wYDmyu0eBSxLQBVr8YwF8Q.png",
        tags: ["Redis"],
        link: "https://samayun.medium.com/3da03a6e94db",
        createdAt: "17 May 2023"
    },
    {
        id: 2,
        title: "রেডিস কথন ২",
        description: `এপ্লিকেশনে অনেক ডাটা খুব কমই আপডেট করতে হয় যেমন: কোম্পানির নাম, লোগো, ক্যাটাগরি সমুহ, এবাউট পেজের ডাটা,পোস্ট। রেডিস হচ্ছে ক্যাশিং জগতের জন উইক।`,
        image: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*rSHJEL3uXqufqUPD",
        tags: ["Redis"],
        link: "https://samayun.medium.com/66d0f6cb862b",
        createdAt: "18 May 2023"
    },
    {
        id: 3,
        title: "Setup CI/CD for typescript based npm package publishing",
        description: "Re-setup each packages's scripting, linting, testing, publishing to npm registry is so boring & time greedy.. so we need a time saving thanos like solutions... 😂",
        image: "https://debojitroy.com/blogs/releasing-typescript-package-to-npm.png",
        tags: ["CI/CD", "NPM Package", "TypeScript"],
        link: "https://samayun.medium.com/setup-ci-cd-for-typescript-based-npm-package-3f3c6354b143",
        createdAt: "08 Oct 2022"
    },
    {
        id: 4,
        title: "How I fell in love with JavaScript!",
        description: "Today we are going to discuss 10 most important things about javascript string.",
        image: "https://miro.medium.com/max/1920/1*1IvfMBgfGs1gCPz8Q3UAQw.png",
        tags: ["Javascript"],
        link: "https://samayun.medium.com/how-to-make-relationship-with-javascript-e3e7c134dfe0",
        createdAt: "05 May 2021"
    },
    {
        id: 5,
        title: "React js:All you need to Know 💪",
        description: `In this blog I gave guideline all topics to know about react.js .`,
        image: "https://miro.medium.com/max/700/1*YePVzjkjsadOqzQ03wl5kA.png",
        tags: ["React.js", "React-guideline"],
        link: "https://samayunmc.medium.com/রিয়েক্ট-জেএস-কোড-স্পলিটিং-ও-লেজি-লোডিং-কম্পোন্যান্ট-60bb9ec13c21",
        createdAt: "May 7 2021"
    },
    {
        id: 6,
        title: "JavaScript The Tricky Parts: Part-1 💪",
        description: `Here I am covering 10 tricky topics of basic javascript ....`,
        image: "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_3.0,g_center,w_300/v1/academind.com/content/courses/javascript-tricky-parts/javascript-course-the-tricky-parts",
        tags: ["JavaScript", "JS Tricky Parts"],
        link: "https://samayun.medium.com/javascript-the-tricky-parts-part-1-1a7c0521fb79",
        createdAt: "May 6 2021"
    }
];


const coursesData = [
    {
        id: 1,
        title: 'React - The Complete Guide 2025 (incl. Next.js, Redux)',
        url: 'https://www.udemy.com/course/react-the-complete-guide-incl-nextjs',
        imageUrl: 'https://img-c.udemycdn.com/course/750x422/1362070_b9a1_2.jpg',
        tags: ['React', 'Next.js', 'Redux'],
        duration: '40+ hours',
        progress: 100,
    },
    {
        id: 2,
        title: 'Complete Data Science, Machine Learning, DL, NLP Bootcamp',
        url: 'https://www.udemy.com/course/complete-machine-learning-nlp-bootcamp-mlops-deployment',
        imageUrl: 'https://img-c.udemycdn.com/course/750x422/5993822_2c2a_7.jpg',
        tags: ['AI', 'Machine Learning', 'Data Science', 'NLP'],
        progress: 100,
        duration: '40+ hours'
    }
];

const resourcesData = [
    // Books
    {
        id: 1,
        url: 'https://blog.bytebytego.com/p/free-system-design-pdf-158-pages',
        title: 'System Design Book by Alex Xu',
        type: 'book',
        tags: ['Architecture', 'Scalability'],
        imageUrl: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1595285211i/54617137.jpg',
        description: 'Comprehensive system design guide with real-world examples'
    },
    {
        id: 2,
        title: 'Designing Data-Intensive Applications',
        type: 'book',
        tags: ['Database', 'Architecture'],
        url: 'https://dataintensive.net/',
        imageUrl: 'https://m.media-amazon.com/images/I/51ZSpMl1-LL._SX379_BO1,204,203,200_.jpg',
        description: 'The definitive guide to building scalable, reliable systems'
    },
    {
        id: 3,
        title: 'Clean Architecture by Robert C. Martin',
        type: 'book',
        tags: ['Architecture', 'Clean Code'],
        url: 'https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164',
        imageUrl: 'https://m.media-amazon.com/images/I/41yafGMO+rL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        description: 'A guide to building maintainable software architecture'
    },
    
];

const developerQuotes = [
    {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
    },
    {
        text: "There are only two hard things in Computer Science: cache invalidation and naming things.",
        author: "Phil Karlton"
    },
    {
        text: "It works on my machine.",
        author: "Every Developer Ever"
    },
    {
        text: "99 little bugs in the code, 99 little bugs. Take one down, patch it around, 117 little bugs in the code.",
        author: "Programming Reality"
    },
    {
        text: "Code never lies, comments sometimes do.",
        author: "Ron Jeffries"
    },
    {
        text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        author: "Brian Kernighan"
    },
    {
        text: "Walking on water and developing software from a specification are easy if both are frozen.",
        author: "Edward V. Berard"
    },
    {
        text: "In order to understand recursion, one must first understand recursion.",
        author: "Programming Wisdom"
    },
    {
        text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        author: "John Woods"
    },
    {
        text: "It's not a bug – it's an undocumented feature.",
        author: "Anonymous"
    },
    {
        text: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
        author: "Rich Cook"
    },
    {
        text: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds"
    },
    {
        text: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
        author: "Anonymous"
    },
    {
        text: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        author: "Edsger Dijkstra"
    },
    {
        text: "Software and cathedrals are much the same – first we build them, then we pray.",
        author: "Anonymous"
    },
    {
        text: "Premature optimization is the root of all evil.",
        author: "Donald Knuth"
    },
    {
        text: "The most damaging phrase in the language is 'We've always done it this way!'",
        author: "Grace Hopper"
    },
    {
        text: "In theory, there is no difference between theory and practice. In practice, there is.",
        author: "Yogi Berra"
    },
    {
        text: "Any sufficiently advanced bug is indistinguishable from a feature.",
        author: "Rich Kulawiec"
    },
    {
        text: "I'm not a great programmer; I'm just a good programmer with great habits.",
        author: "Kent Beck"
    }
];

// Enhanced Skills Data with Categories
const skillCategories = {
    "Miscellaneous": [
        { name: "TinyBird", icon: "https://avatars.githubusercontent.com/u/53208553", level: 75 },
        { name: "Sequin", icon: "https://avatars.githubusercontent.com/u/172663419", level: 70 },
        { name: "OpenAI SDK", icon: "https://avatars.githubusercontent.com/u/14957082", level: 70 }
    ],
    "Backend": [
        { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/nodejs/nodejs-original.svg", level: 95 },
        { name: "NestJS", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/nestjs/nestjs-original.svg", level: 90 }, 
        { name: "Express", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/express/express-original.svg", level: 95 },
        { name: "Laravel", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/laravel/laravel-original.svg", level: 85 }
    ],
    "Databases": [
        { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/mongodb/mongodb-original.svg", level: 90 },
        { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/postgresql/postgresql-original.svg", level: 85 },
        { name: "Redis", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/redis/redis-original.svg", level: 90 },
        { name: "Elasticsearch", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/elasticsearch/elasticsearch-original.svg", level: 80 }
    ],
    "DevOps": [
        { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/docker/docker-original.svg", level: 90 },
        { name: "Kubernetes", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/kubernetes/kubernetes-plain.svg", level: 75 },
        { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", level: 80 },
        { name: "Nginx", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/nginx/nginx-original.svg", level: 85 }
    ],
    "Message Queues": [
        { name: "Kafka", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/apachekafka/apachekafka-original.svg", level: 85 },
        { name: "RabbitMQ", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/rabbitmq/rabbitmq-original.svg", level: 80 }
    ],
    "Languages": [
        { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/typescript/typescript-original.svg", level: 95 },
        { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/javascript/javascript-original.svg", level: 95 },
        { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/python/python-original.svg", level: 70 },
        { name: "Go", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/go/go-original.svg", level: 60 }
    ],
};

// Work Experience with enhanced details
const workExperiences = [
    {
        id: 1,
        position: 'Sr. Software Engineer',
        company: 'RedQ',
        start: '23 September 2024',
        end: 'Present',
        icon: '💼',
        technologies: ['Elasticsearch', 'Kafka', 'TinyBird', 'Sequin'],
        achievements: [
            'Implemented real-time analytics pipeline processing 1M+ events/day',
            'Architected distributed search system with Elasticsearch',
            'Built event-driven microservices with Kafka'
        ]
    },
    {
        id: 2,
        position: 'Backend Developer',
        company: 'Sayburgh Solutions Ltd.',
        start: '26 June 2021',
        end: '31 July 2023',
        icon: '🚀',
        technologies: ['NestJS', 'MongoDB', 'Redis', 'Docker', 'Cloudflare'],
        achievements: [
            'Optimized database queries reducing response time by 35%',
            'Built VOD platform handling 100K+ daily requests',
            'Developed HR Management SaaS product'
        ]
    },
    {
        id: 3,
        position: 'Full Stack Developer',
        company: 'Freelance',
        start: 'January 2020',
        end: 'June 2021',
        icon: '💻',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
        achievements: [
            'Delivered 15+ client projects with 95% satisfaction rate',
            'Built e-commerce platforms handling $50K+ monthly transactions',
            'Developed scalable APIs serving 10K+ daily requests'
        ]
    }
];

// Projects with enhanced metadata from original script.js
const projects = [
    {
        id: 1,
        title: "Somoy News",
        category: "Backend Development",
        icon: "https://samayun.vercel.app/assets/image/work/somoyNews.jpg",
        description: "Somoy Television is a Bangladeshi Bengali-language satellite and cable news 24-hour Bengali television channel, headquartered at 89, Bir Uttam CR Dutta Road, Banglamotor, Dhaka. Multiple fact-checking organizations list Somoy TV as the top source in Bangladesh publishing authentic news",
        technologies: [
            {
                name: "Redis",
                icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redis/redis.png",
            },
            { 
                name: "Express JS", 
                icon: "https://user-images.githubusercontent.com/46530103/149555472-2e2ed369-9011-496e-9fe5-69facdf534e8.png" 
            },
            {
                name: "Docker",
                icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png",
            },
            {
                name: "Nuxt JS",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nuxt_logo_%282021%29.svg/2560px-Nuxt_logo_%282021%29.svg.png",
            },
            {
                name: "MongoDB",
                icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png",
            }
        ],
        features: [
            "Optimized a caching system for API requests, leading to a 20% reduction in response times",
            "Clean code and maintainable architecture", 
            "Fixed some issues according to knowledge sharing session with official MongoDB team",
            "Optimized expensive queries as possible",
            "Application has almost 1 million request per week"
        ],
        metrics: {
            traffic: "1M+ weekly requests",
            performance: "20% faster response time",
            uptime: "99.9% availability"
        },
        link: "https://www.somoynews.tv",
        status: "Production",
        badge: "High Traffic"
    },
    {
        id: 2,
        title: "MongoCat",
        category: "Open Source Plugin",
        icon: "https://samayun.vercel.app/assets/image/work/mongocat.jpg",
        description: "MongoCat is a denormalization plugin built upon mongoose to optimize read heavy queries & reducing join operations in mongodb",
        technologies: [
            {
                name: "Mongoose",
                icon: "https://avatars.githubusercontent.com/u/7552965?s=280&v=4",
            },
            {
                name: "JavaScript",
                icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
            },
            {
                name: "NPM",
                icon: "https://authy.com/wp-content/uploads/npm-logo.png",
            }
        ],
        features: [
            "Easy to use, configuration based Denormalization mongoose plugin for read heavy applications. Mongocat reduces write complexity too",
            "Distributed Denormalization is goal of this project",
            "Declarative approach .Write configurations which,where how to keep redundant",
            "Terraformation (Terraform Module) is kept in mind."
        ],
        metrics: {
            downloads: "5K+ monthly",
            stars: "200+ GitHub stars", 
            usage: "Production ready"
        },
        link: "https://www.npmjs.com/package/mongocat",
        sourceCode: "https://github.com/samayun/mongocat",
        status: "Published",
        badge: "NPM Package"
    },
    {
        id: 3,
        title: "সময়ের স্কুল",
        category: "EdTech Platform",
        icon: "https://samayun.vercel.app/assets/image/work/somoySchool.jpg",
        description: "Somoy School is an Edu Tech Platform providing comprehensive learning solutions with video streaming capabilities and interactive features",
        technologies: [
            {
                name: "Redis",
                icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redis/redis.png",
            },
            {
                name: "Docker",
                icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png",
            },
            { 
                name: "Nest JS", 
                icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDlYKWwiHIBw0AwCCpREi9UdXkn0JlZkyCw&s" 
            },
            { 
                name: "MongoDB", 
                icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" 
            },
            {
                name: "Cloudflare Stream",
                icon: "https://cdn-1.webcatalog.io/catalog/cloudflare-stream/cloudflare-stream-icon-filled-256.png?v=1675613678839",
            }
        ],
        features: [
            "MongoDB Aggregation Framework",
            "Cloudflare Stream integration",
            "Cloud Function for media access authorization on the fly",
            "Real-time learning analytics",
            "Interactive course management"
        ],
        metrics: {
            students: "10K+ active users",
            content: "500+ hours of video",
            completion: "85% completion rate"
        },
        link: "https://somoy.school",
        status: "Live",
        badge: "Education"
    }
];

// Global state
let activeApp = null;
let openWindows = [];
let notifications = [];
let spotlightData = [];
let currentDesktop = 1;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeDock();
    initializeMenuBar();
    initializeSpotlight();
    initializeLaunchpad();
    initializeNotifications();
    initializeContextMenu();
    initializeWindowManagement();
    loadInitialContent();
    startNotificationSimulation();
});

// Dock Functionality
function initializeDock() {
    const dockItems = document.querySelectorAll('.dock-item');
    const tooltip = document.getElementById('dock-tooltip');
    
    dockItems.forEach(item => {
        // Hover effects
        item.addEventListener('mouseenter', (e) => {
            const tooltipText = item.dataset.tooltip;
            if (tooltipText && tooltip) {
                tooltip.textContent = tooltipText;
                tooltip.style.left = e.pageX - tooltip.offsetWidth / 2 + 'px';
                tooltip.style.top = e.pageY - 60 + 'px';
                tooltip.classList.add('show');
            }
            
            // Bounce animation
            anime({
                targets: item,
                translateY: [-10, 0],
                duration: 300,
                easing: 'easeOutElastic(1, .5)'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            if (tooltip) {
                tooltip.classList.remove('show');
            }
        });
        
        // Click handlers
        item.addEventListener('click', () => {
            handleDockItemClick(item);
        });
    });
}

function handleDockItemClick(item) {
    const app = item.dataset.app;
    
    // Remove active from all items
    document.querySelectorAll('.dock-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    
    // Bounce animation
    anime({
        targets: item,
        scale: [1, 1.2, 1],
        duration: 500,
        easing: 'easeOutElastic(1, .5)'
    });
    
    switch(app) {
        case 'finder':
            openFinderWindow();
            break;
        case 'terminal':
            openTerminalWindow();
            break;
        case 'vscode':
            openVSCodeWindow();
            break;
        case 'launchpad':
            toggleLaunchpad();
            break;
        case 'safari':
            openProjectsWindow();
            break;
        case 'books':
            openEducationWindow();
            break;
        case 'github':
            window.open(profile.github, '_blank');
            break;
        case 'mail':
            openContactWindow();
            break;
        case 'trash':
            emptyTrash();
            break;
    }
}

// Window Management
function openFinderWindow() {
    const content = `
        <div class="finder-window">
            <div class="finder-toolbar">
                <div class="finder-nav">
                    <button class="finder-nav-btn" disabled>◀</button>
                    <button class="finder-nav-btn" disabled>▶</button>
                </div>
                <div class="finder-view-options">
                    <button class="finder-view-btn active">⊞</button>
                    <button class="finder-view-btn">☰</button>
                    <button class="finder-view-btn">⋯</button>
                    <button class="finder-view-btn">⊡</button>
                </div>
                <div class="finder-search">
                    <input type="text" placeholder="Search Portfolio" class="finder-search-input" />
                </div>
            </div>
            <div class="finder-content">
                <div class="finder-sidebar">
                    <div class="finder-section">
                        <div class="finder-section-header">Favorites</div>
                        <div class="finder-item active" onclick="showFinderContent('portfolio')">
                            <div class="finder-icon">🏠</div>
                            <span>Portfolio</span>
                        </div>
                        <div class="finder-item" onclick="showFinderContent('applications')">
                            <div class="finder-icon">📱</div>
                            <span>Applications</span>
                        </div>
                        <div class="finder-item" onclick="showFinderContent('documents')">
                            <div class="finder-icon">📄</div>
                            <span>Documents</span>
                        </div>
                        <div class="finder-item" onclick="showFinderContent('desktop')">
                            <div class="finder-icon">🖥️</div>
                            <span>Desktop</span>
                        </div>
                        <div class="finder-item" onclick="showFinderContent('education')">
                            <div class="finder-icon">🎓</div>
                            <span>Education</span>
                        </div>
                    </div>
                    <div class="finder-section">
                        <div class="finder-section-header">iCloud</div>
                        <div class="finder-item" onclick="showFinderContent('projects')">
                            <div class="finder-icon">☁️</div>
                            <span>Projects</span>
                        </div>
                    </div>
                    <div class="finder-section">
                        <div class="finder-section-header">Tags</div>
                        <div class="finder-tag" style="color: #ff3b30;">
                            <div class="finder-tag-dot" style="background: #ff3b30;"></div>
                            <span>Work</span>
                        </div>
                        <div class="finder-tag" style="color: #007aff;">
                            <div class="finder-tag-dot" style="background: #007aff;"></div>
                            <span>Personal</span>
                        </div>
                        <div class="finder-tag" style="color: #34c759;">
                            <div class="finder-tag-dot" style="background: #34c759;"></div>
                            <span>Skills</span>
                        </div>
                    </div>
                </div>
                <div class="finder-main" id="finder-main">
                    <div class="finder-path-bar">
                        <span class="finder-path-item active">Portfolio</span>
                    </div>
                    <div class="finder-grid" id="finder-grid">
                        <!-- Content will be loaded here -->
                    </div>
                </div>
            </div>
            <div class="finder-status-bar">
                <span id="finder-item-count">8 items</span>
                <span class="finder-status-right">Available</span>
            </div>
        </div>
    `;
    createWindow('Samayun Portfolio - Finder', content, 'finder');
    
    // Initialize with portfolio view
    setTimeout(() => {
        showFinderContent('portfolio');
        setupFinderEventListeners();
    }, 100);
}

function showFinderContent(section) {
    const grid = document.getElementById('finder-grid');
    const pathBar = document.querySelector('.finder-path-bar');
    const itemCount = document.getElementById('finder-item-count');
    
    // Update sidebar active state
    document.querySelectorAll('.finder-item').forEach(item => item.classList.remove('active'));
    event?.target?.closest('.finder-item')?.classList.add('active');
    
    let content = '';
    let pathText = '';
    let count = 0;
    
    switch(section) {
        case 'portfolio':
            pathText = 'Portfolio';
            content = `
                <div class="finder-file" ondblclick="openFinderApp('about')">
                    <div class="finder-file-icon">👤</div>
                    <div class="finder-file-name">About Me</div>
                </div>
                <div class="finder-file" ondblclick="toggleLaunchpad()">
                    <div class="finder-file-icon">🚀</div>
                    <div class="finder-file-name">Skills</div>
                </div>
                <div class="finder-file" ondblclick="openProjectsWindow()">
                    <div class="finder-file-icon">💼</div>
                    <div class="finder-file-name">Projects</div>
                </div>
                <div class="finder-file" ondblclick="openFinderApp('education')">
                    <div class="finder-file-icon">🎓</div>
                    <div class="finder-file-name">Education</div>
                </div>
                <div class="finder-file" ondblclick="openTerminalWindow()">
                    <div class="finder-file-icon">📋</div>
                    <div class="finder-file-name">Experience</div>
                </div>
                <div class="finder-file" ondblclick="openContactWindow()">
                    <div class="finder-file-icon">📧</div>
                    <div class="finder-file-name">Contact</div>
                </div>
                <div class="finder-file" ondblclick="window.open('${profile.github}', '_blank')">
                    <div class="finder-file-icon">🐙</div>
                    <div class="finder-file-name">GitHub</div>
                </div>
                <div class="finder-file" ondblclick="window.open('${profile.linkedin}', '_blank')">
                    <div class="finder-file-icon">💼</div>
                    <div class="finder-file-name">LinkedIn</div>
                </div>
            `;
            count = 8;
            break;
            
        case 'applications':
            pathText = 'Applications';
            content = `
                <div class="finder-file" ondblclick="openVSCodeWindow()">
                    <div class="finder-file-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" style="width: 48px; height: 48px;" />
                    </div>
                    <div class="finder-file-name">Visual Studio Code</div>
                </div>
                <div class="finder-file" ondblclick="openProjectsWindow()">
                    <div class="finder-file-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Safari_browser_logo.svg" alt="Safari" style="width: 48px; height: 48px;" />
                    </div>
                    <div class="finder-file-name">Safari</div>
                </div>
                <div class="finder-file" ondblclick="openTerminalWindow()">
                    <div class="finder-file-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Terminalicon2.png" alt="Terminal" style="width: 48px; height: 48px;" />
                    </div>
                    <div class="finder-file-name">Terminal</div>
                </div>
                <div class="finder-file" ondblclick="toggleLaunchpad()">
                    <div class="finder-file-icon">
                        <svg width="48" height="48" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="launchpad-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                            <rect width="100" height="100" rx="20" fill="url(#launchpad-gradient)"/>
                            <circle cx="30" cy="30" r="8" fill="white" opacity="0.9"/>
                            <circle cx="50" cy="30" r="8" fill="white" opacity="0.9"/>
                            <circle cx="70" cy="30" r="8" fill="white" opacity="0.9"/>
                            <circle cx="30" cy="50" r="8" fill="white" opacity="0.9"/>
                            <circle cx="50" cy="50" r="8" fill="white" opacity="0.9"/>
                            <circle cx="70" cy="50" r="8" fill="white" opacity="0.9"/>
                            <circle cx="30" cy="70" r="8" fill="white" opacity="0.9"/>
                            <circle cx="50" cy="70" r="8" fill="white" opacity="0.9"/>
                            <circle cx="70" cy="70" r="8" fill="white" opacity="0.9"/>
                        </svg>
                    </div>
                    <div class="finder-file-name">Launchpad</div>
                </div>
                <div class="finder-file" ondblclick="openContactWindow()">
                    <div class="finder-file-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg" alt="Mail" style="width: 48px; height: 48px;" />
                    </div>
                    <div class="finder-file-name">Mail</div>
                </div>
                <div class="finder-file" ondblclick="openFinderWindow()">
                    <div class="finder-file-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png" alt="Finder" style="width: 48px; height: 48px;" />
                    </div>
                    <div class="finder-file-name">Finder</div>
                </div>
            `;
            count = 6;
            break;
            
        case 'documents':
            pathText = 'Documents';
            content = `
                <div class="finder-module" data-module="professional">
                    <div class="finder-module-header" onclick="toggleFinderModule('professional')">
                        <div class="finder-module-icon">💼</div>
                        <div class="finder-module-name">Professional Documents</div>
                        <div class="finder-module-toggle">▼</div>
                    </div>
                    <div class="finder-module-content expanded">
                        <div class="finder-file nested" ondblclick="openFinderApp('resume')">
                            <div class="finder-file-icon">📄</div>
                            <div class="finder-file-name">Resume.pdf</div>
                        </div>
                        <div class="finder-file nested" ondblclick="openFinderApp('portfolio')">
                            <div class="finder-file-icon">📊</div>
                            <div class="finder-file-name">Portfolio.key</div>
                        </div>
                        <div class="finder-file nested" ondblclick="openFinderApp('certificates')">
                            <div class="finder-file-icon">🏆</div>
                            <div class="finder-file-name">Certificates</div>
                        </div>
                    </div>
                </div>
                
                <div class="finder-module" data-module="work-experience">
                    <div class="finder-module-header" onclick="toggleFinderModule('work-experience')">
                        <div class="finder-module-icon">🏢</div>
                        <div class="finder-module-name">Work Experience</div>
                        <div class="finder-module-toggle">▼</div>
                    </div>
                    <div class="finder-module-content expanded">
                        ${workExperiences.map(work => `
                            <div class="finder-file nested" ondblclick="openWorkExperience(${work.id})">
                                <div class="finder-file-icon">${work.end === 'Present' ? '🔥' : '📋'}</div>
                                <div class="finder-file-name">${work.position} - ${work.company}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            count = 6;
            break;
            
        case 'projects':
            pathText = 'Projects';
            content = projects.map(project => `
                <div class="finder-file" ondblclick="openProjectDetail('${project.id}')">
                    <div class="finder-file-icon">
                        <img src="${project.icon}" alt="${project.title}" style="width: 48px; height: 48px; border-radius: 8px;" />
                    </div>
                    <div class="finder-file-name">${project.title}</div>
                </div>
            `).join('');
            count = projects.length;
            break;
            
        case 'desktop':
            pathText = 'Desktop';
            content = `
                <div class="finder-file" ondblclick="openFinderApp('quick-look')">
                    <div class="finder-file-icon">🖼️</div>
                    <div class="finder-file-name">Portfolio Screenshot</div>
                </div>
                <div class="finder-file" ondblclick="openFinderApp('notes')">
                    <div class="finder-file-icon">📝</div>
                    <div class="finder-file-name">Project Ideas</div>
                </div>
            `;
            count = 2;
            break;
            
        case 'education':
            pathText = 'Education';
            content = `
                <div class="finder-module" data-module="blogs">
                    <div class="finder-module-header" onclick="toggleFinderModule('blogs')">
                        <div class="finder-module-icon">📝</div>
                        <div class="finder-module-name">Blog Posts</div>
                        <div class="finder-module-toggle">▼</div>
                    </div>
                    <div class="finder-module-content expanded">
                        ${blogData.map(blog => `
                            <div class="finder-file nested" ondblclick="openBlogPost(${blog.id})">
                                <div class="finder-file-icon">${getBlogIcon(blog.tags[0])}</div>
                                <div class="finder-file-name">${blog.title}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="finder-module" data-module="academic">
                    <div class="finder-module-header" onclick="toggleFinderModule('academic')">
                        <div class="finder-module-icon">🎓</div>
                        <div class="finder-module-name">Academic Resources</div>
                        <div class="finder-module-toggle">▼</div>
                    </div>
                    <div class="finder-module-content expanded">
                        <div class="finder-file nested" ondblclick="openFinderApp('degree')">
                            <div class="finder-file-icon">📜</div>
                            <div class="finder-file-name">Computer Science Degree</div>
                        </div>
                        <div class="finder-file nested" ondblclick="openFinderApp('certifications')">
                            <div class="finder-file-icon">🏆</div>
                            <div class="finder-file-name">Professional Certifications</div>
                        </div>
                        <div class="finder-file nested" ondblclick="openFinderApp('courses')">
                            <div class="finder-file-icon">📚</div>
                            <div class="finder-file-name">Online Courses</div>
                        </div>
                    </div>
                </div>
                
                <div class="finder-module" data-module="learning">
                    <div class="finder-module-header" onclick="toggleFinderModule('learning')">
                        <div class="finder-module-icon">💡</div>
                        <div class="finder-module-name">Learning Resources</div>
                        <div class="finder-module-toggle">▼</div>
                    </div>
                    <div class="finder-module-content expanded">
                        <div class="finder-file nested" ondblclick="openFinderApp('tutorials')">
                            <div class="finder-file-icon">🎬</div>
                            <div class="finder-file-name">Video Tutorials</div>
                        </div>
                        <div class="finder-file nested" ondblclick="openFinderApp('ebooks')">
                            <div class="finder-file-icon">📖</div>
                            <div class="finder-file-name">Technical E-books</div>
                        </div>
                        <div class="finder-file nested" ondblclick="openFinderApp('articles')">
                            <div class="finder-file-icon">📄</div>
                            <div class="finder-file-name">Research Articles</div>
                        </div>
                    </div>
                </div>
            `;
            count = 11;
            break;
    }
    
    pathBar.innerHTML = `<span class="finder-path-item active">${pathText}</span>`;
    grid.innerHTML = content;
    itemCount.textContent = `${count} items`;
}

function setupFinderEventListeners() {
    // View mode buttons
    const viewButtons = document.querySelectorAll('.finder-view-btn');
    const grid = document.getElementById('finder-grid');
    const searchInput = document.querySelector('.finder-search-input');
    const navButtons = document.querySelectorAll('.finder-nav-btn');
    
    // History tracking
    let finderHistory = ['portfolio'];
    let historyIndex = 0;
    
    // View mode handlers
    viewButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            viewButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Switch view modes
            switch(index) {
                case 0: // Grid view (⊞)
                    grid.className = 'finder-grid';
                    break;
                case 1: // List view (☰)
                    grid.className = 'finder-list';
                    break;
                case 2: // Column view (⋯)
                    grid.className = 'finder-column';
                    break;
                case 3: // Gallery view (⊡)
                    grid.className = 'finder-gallery';
                    break;
            }
        });
    });
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const files = document.querySelectorAll('.finder-file');
            
            files.forEach(file => {
                const fileName = file.querySelector('.finder-file-name').textContent.toLowerCase();
                if (searchTerm === '' || fileName.includes(searchTerm)) {
                    file.style.display = 'flex';
                } else {
                    file.style.display = 'none';
                }
            });
            
            // Update item count
            const visibleFiles = Array.from(files).filter(file => file.style.display !== 'none');
            document.getElementById('finder-item-count').textContent = `${visibleFiles.length} items`;
        });
    }
    
    // Navigation buttons
    function updateNavButtons() {
        navButtons[0].disabled = historyIndex <= 0; // Back button
        navButtons[1].disabled = historyIndex >= finderHistory.length - 1; // Forward button
    }
    
    navButtons[0].addEventListener('click', () => {
        if (historyIndex > 0) {
            historyIndex--;
            showFinderContent(finderHistory[historyIndex]);
            updateNavButtons();
        }
    });
    
    navButtons[1].addEventListener('click', () => {
        if (historyIndex < finderHistory.length - 1) {
            historyIndex++;
            showFinderContent(finderHistory[historyIndex]);
            updateNavButtons();
        }
    });
    
    // Override showFinderContent to track history
    const originalShowFinderContent = showFinderContent;
    window.showFinderContent = function(section) {
        // Only add to history if it's different from current
        if (finderHistory[historyIndex] !== section) {
            // Remove forward history when navigating to new section
            finderHistory = finderHistory.slice(0, historyIndex + 1);
            finderHistory.push(section);
            historyIndex = finderHistory.length - 1;
        }
        originalShowFinderContent(section);
        updateNavButtons();
    };
    
    updateNavButtons();
}

function openFinderApp(app) {
    switch(app) {
        case 'about':
            showNotification('About Me', 'Opening personal information');
            // Could open a detailed about window
            break;
        case 'education':
            showNotification('Education', 'Opening education details');
            // Could open education window
            break;
        case 'resume':
            showNotification('Resume', 'Opening resume document');
            window.open('https://samayun.vercel.app/resume', '_blank');
            break;
        case 'certificates':
            showNotification('Certificates', 'Opening certificates folder');
            break;
        case 'quick-look':
            showNotification('Quick Look', 'Opening portfolio screenshot');
            break;
        case 'notes':
            showNotification('Notes', 'Opening project ideas');
            break;
    }
}

function openProjectDetail(projectId) {
    // Find and select the project in Safari window
    openProjectsWindow();
    setTimeout(() => {
        if (typeof selectProject === 'function') {
            selectProject(parseInt(projectId));
        }
    }, 500);
}

function getBlogIcon(tag) {
    const iconMap = {
        'Redis': '⚡', // Lightning for performance/caching
        'CI/CD': '🚀', // Rocket for deployment/automation
        'NPM Package': '📦', // Package icon
        'TypeScript': '🛡️', // Shield for type safety
        'Javascript': '💛', // JavaScript yellow heart
        'React.js': '⚛️', // React atom symbol
        'React-guideline': '📚', // Book for guidelines
        'JavaScript': '✨', // Sparkles for magic/features
        'JS Tricky Parts': '🎯' // Target for precision/specific topics
    };
    return iconMap[tag] || '📝';
}

function toggleFinderModule(moduleId) {
    const moduleEl = document.querySelector(`[data-module="${moduleId}"]`);
    if (!moduleEl) return;
    
    const content = moduleEl.querySelector('.finder-module-content');
    const toggle = moduleEl.querySelector('.finder-module-toggle');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        content.classList.add('collapsed');
        toggle.textContent = '▶';
        
        anime({
            targets: content,
            height: 0,
            opacity: 0,
            duration: 300,
            easing: 'easeOutQuart'
        });
    } else {
        content.classList.remove('collapsed');
        content.classList.add('expanded');
        toggle.textContent = '▼';
        
        anime({
            targets: content,
            height: 'auto',
            opacity: 1,
            duration: 300,
            easing: 'easeOutQuart'
        });
    }
}

function openBlogPost(postId) {
    const post = blogData.find(blog => blog.id === postId);
    if (!post) return;
    
    const content = `
        <div class="blog-post-window">
            <div class="blog-post-header">
                <h1 class="blog-post-title">${post.title}</h1>
                <div class="blog-post-meta">
                    <span class="blog-post-date">${post.createdAt}</span>
                    <div class="blog-post-tags">
                        ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                    </div>
                </div>
                ${post.image ? `<img src="${post.image}" alt="${post.title}" class="blog-post-image" />` : ''}
            </div>
            <div class="blog-post-content">
                <p>${post.description}</p>
                <div class="blog-post-actions">
                    <button class="blog-action-btn" onclick="window.open('${post.link}', '_blank')">
                        Read Full Article
                    </button>
                    <button class="blog-action-btn" onclick="copyToClipboard('${post.link}', 'Blog link')">
                        Share Article
                    </button>
                </div>
            </div>
        </div>
    `;
    
    createWindow(`${post.title} - Blog`, content, 'blog-post');
    showNotification('Blog Post', `Opening "${post.title}"`);
}

function openWorkExperience(workId) {
    const work = workExperiences.find(w => w.id === workId);
    if (!work) return;

    const content = `
        <div class="work-experience-window">
            <div class="work-experience-header">
                <h1 class="work-position">${work.position}</h1>
                <div class="work-company-info">
                    <h2 class="work-company">${work.company}</h2>
                    <div class="work-duration">${work.start} - ${work.end}</div>
                </div>
                ${work.website ? `
                    <div class="work-website">
                        <a href="${work.website}" target="_blank" class="company-link">
                            🌐 Visit Company Website
                        </a>
                    </div>
                ` : ''}
            </div>
            <div class="work-experience-content">
                <h3>Responsibilities:</h3>
                <ul class="responsibilities-list">
                    ${work.responsibilities.map(responsibility => `
                        <li>${responsibility}</li>
                    `).join('')}
                </ul>
                <div class="work-experience-actions">
                    <button class="work-action-btn" onclick="showNotification('Work Experience', 'Generating detailed work summary...')">
                        View Detailed Summary
                    </button>
                    ${work.website ? `
                        <button class="work-action-btn" onclick="window.open('${work.website}', '_blank')">
                            Company Website
                        </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `;

    createWindow(`${work.position} - ${work.company}`, content, 'work-experience');
    showNotification('Work Experience', `Opening "${work.position}" at ${work.company}`);
}

function openEducationWindow() {
    const content = `
        <div class="education-window">
            <!-- Header with search and view controls -->
            <div class="education-header">
                <div class="education-header-left">
                    <h1 class="education-title">Continuous Learning Journey</h1>
                    <p class="education-subtitle">Completed Courses, Study Resources & Technical Articles</p>
                </div>
                <div class="education-header-right">
                    <div class="education-search">
                        <div class="search-container">
                            <span class="search-icon">🔍</span>
                            <input type="text" placeholder="Search courses, articles, technologies, topics..." 
                                   class="education-search-input" id="education-search">
                        </div>
                    </div>
                    <div class="view-controls">
                        <button class="view-btn active" data-view="grid" title="Grid View">⊞</button>
                        <button class="view-btn" data-view="list" title="List View">☰</button>
                    </div>
                </div>
            </div>

            <!-- Developer Quotes Slider -->
            <div class="quotes-slider-container">
                <div class="quotes-slider" id="quotes-slider">
                    <div class="quote-slide active" data-index="0">
                        <div class="quote-content">
                            <div class="quote-icon">💡</div>
                            <blockquote class="quote-text">${developerQuotes[0].text}</blockquote>
                            <div class="quote-author">— ${developerQuotes[0].author}</div>
                        </div>
                    </div>
                </div>
                <div class="quote-controls">
                    <button class="quote-nav-btn prev" onclick="changeQuote(-1)" title="Previous Quote">‹</button>
                    <div class="quote-dots" id="quote-dots"></div>
                    <button class="quote-nav-btn next" onclick="changeQuote(1)" title="Next Quote">›</button>
                </div>
                <div class="quote-progress">
                    <div class="progress-bar" id="quote-progress"></div>
                </div>
            </div>

            <!-- Navigation Tabs -->
            <div class="education-tabs">
                <button class="tab-btn active" data-tab="blogs">📝 Technical Articles</button>
                <button class="tab-btn" data-tab="courses">🎓 Completed Courses</button>
                <button class="tab-btn" data-tab="resources">📚 Study Resources</button>
            </div>

            <!-- Content Area -->
            <div class="education-content">
                <!-- Filter Bar -->
                <div class="filter-bar">
                    <div class="filter-tags" id="filter-tags-container">
                        ${getTagsWithCounts('all').map(tagData => `
                            <button class="filter-tag ${tagData.tag === 'all' ? 'active' : ''}" data-filter="${tagData.tag}">
                                ${formatTagDisplay(tagData.tag)}
                                <span class="tag-count">${tagData.count}</span>
                            </button>
                        `).join('')}
                    </div>
                    <div class="sort-controls">
                        <select class="sort-select">
                            <option value="date">Latest First</option>
                            <option value="title">Alphabetical</option>
                        </select>
                    </div>
                </div>

                <!-- Blog Grid/List -->
                <div class="blog-container grid-view" id="blog-container">
                    ${blogData.map(blog => `
                        <div class="blog-card" data-tags="${blog.tags.map(tag => tag.toLowerCase().replace(/[^a-z0-9]/g, '-')).join(',')}" data-date="${blog.createdAt}" data-type="blog">
                            <div class="blog-card-image">
                                ${createImageElement(blog.image, blog.title, 'blog', blog.tags)}
                                <div class="blog-card-overlay">
                                    <button class="quick-view-btn" onclick="openBlogQuickView(${blog.id})">Quick View</button>
                                </div>
                            </div>
                            <div class="blog-card-content">
                                <div class="blog-card-header">
                                    <h3 class="blog-card-title">${blog.title}</h3>
                                    <div class="blog-card-tags">
                                        ${blog.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                                    </div>
                                </div>
                                <p class="blog-card-description">${blog.description.substring(0, 150)}...</p>
                                <div class="blog-card-footer">
                                    <span class="blog-date">${blog.createdAt}</span>
                                    <button class="read-btn" onclick="window.open('${blog.link}', '_blank')">
                                        Read Article
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    createWindow('Education & Learning - Portfolio', content, 'education-app');
    
    // Initialize education app functionality
    setTimeout(() => {
        initializeEducationApp();
    }, 100);
    
    showNotification('Education', 'Opening Education & Learning Center');
}

function initializeEducationApp() {
    const searchInput = document.getElementById('education-search');
    const viewBtns = document.querySelectorAll('.view-btn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const filterTags = document.querySelectorAll('.filter-tag');
    const sortSelect = document.querySelector('.sort-select');
    const blogContainer = document.getElementById('blog-container');

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterBlogs(e.target.value);
        });
    }

    // View switching
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const view = btn.dataset.view;
            blogContainer.className = `blog-container ${view}-view`;
        });
    });

    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const tab = btn.dataset.tab;
            switchEducationTab(tab);
        });
    });

    // Filter tags
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            
            const filter = tag.dataset.filter;
            filterBlogsByTag(filter);
        });
    });

    // Sort functionality
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            sortBlogs(e.target.value);
        });
    }


    // Initialize quote slider
    initializeQuoteSlider();
}

// Generate fallback image based on content type and title
function generateFallbackImage(title, type, tags = []) {
    const colors = {
        blog: ['#667eea', '#764ba2'],
        course: ['#ffecd2', '#fcb69f'],
        'blog-series': ['#a8edea', '#fed6e3'],
        repository: ['#d3c7fc', '#8ec5fc'],
        book: ['#ff9a9e', '#fad0c4'],
        tool: ['#a1c4fd', '#c2e9fb']
    };
    
    const icons = {
        blog: '📝',
        course: '🎓',
        'blog-series': '📚',
        repository: '🔧',
        book: '📖',
        tool: '⚙️'
    };
    
    // Get tag-specific icon
    const tagIcons = {
        'redis': '🔴',
        'javascript': '🟨',
        'react': '⚛️',
        'typescript': '🔷',
        'docker': '🐳',
        'kubernetes': '☸️',
        'aws': '☁️',
        'database': '🗄️',
        'architecture': '🏗️',
        'microservices': '🔧',
        'devops': '🚀',
        'ai': '🤖',
        'node-js': '🟢'
    };
    
    // Find matching tag icon
    let tagIcon = '';
    for (const tag of tags) {
        const normalizedTag = tag.toLowerCase().replace(/[^a-z0-9]/g, '-');
        if (tagIcons[normalizedTag]) {
            tagIcon = tagIcons[normalizedTag];
            break;
        }
    }
    
    const typeColors = colors[type] || colors.blog;
    const typeIcon = icons[type] || icons.blog;
    const displayIcon = tagIcon || typeIcon;
    const initials = title.split(' ')
        .map(word => word.charAt(0))
        .join('')
        .substring(0, 3)
        .toUpperCase();
    
    return {
        backgroundColor: `linear-gradient(135deg, ${typeColors[0]} 0%, ${typeColors[1]} 100%)`,
        icon: displayIcon,
        initials: initials,
        type: type
    };
}

// Check if image URL is valid and create fallback
function createImageElement(imageUrl, title, type, tags = []) {
    const fallback = generateFallbackImage(title, type, tags);
    
    if (!imageUrl || imageUrl.includes('placeholder')) {
        return `
            <div class="fallback-image" style="background: ${fallback.backgroundColor};">
                <div class="fallback-content">
                    <div class="fallback-icon">${fallback.icon}</div>
                    <div class="fallback-initials">${fallback.initials}</div>
                </div>
            </div>
        `;
    }
    
    return `
        <img src="${imageUrl}" alt="${title}" loading="lazy" 
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div class="fallback-image" style="background: ${fallback.backgroundColor}; display: none;">
            <div class="fallback-content">
                <div class="fallback-icon">${fallback.icon}</div>
                <div class="fallback-initials">${fallback.initials}</div>
            </div>
        </div>
    `;
}

// Global search function across all content types
function globalSearchContent(searchTerm) {
    const allContent = getAllContent();
    const term = searchTerm.toLowerCase();
    
    if (!term) {
        return allContent;
    }
    
    return allContent.filter(item => 
        item.searchableText.toLowerCase().includes(term) ||
        item.tags.some(tag => tag.toLowerCase().includes(term))
    );
}

function filterBlogs(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    const container = document.getElementById('blog-container');
    
    if (!term) {
        // If search is empty, return to current tab view
        const activeTab = document.querySelector('.tab-btn.active');
        const currentTab = activeTab ? activeTab.dataset.tab : 'blogs';
        switchEducationTab(currentTab);
        return;
    }
    
    // When searching, show results from all content types
    const allContent = getAllContent();
    const filteredContent = allContent.filter(item => 
        item.searchableText.toLowerCase().includes(term) ||
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.tags.some(tag => tag.toLowerCase().includes(term))
    );
    
    // Render filtered results from all content types
    renderSearchResults(filteredContent);
}

function renderSearchResults(filteredContent) {
    const container = document.getElementById('blog-container');
    
    if (filteredContent.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No results found</h3>
                <p>Try adjusting your search terms or browse different categories.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredContent.map(item => {
        if (item.contentType === 'blog') {
            return `
                <div class="blog-card" data-tags="${item.tags.map(tag => tag.toLowerCase().replace(/[^a-z0-9]/g, '-')).join(',')}" data-date="${item.metadata.publishDate}" data-type="blog">
                    <div class="blog-card-image">
                        ${createImageElement(item.imageUrl, item.title, 'blog', item.tags)}
                        <div class="blog-card-overlay">
                            <button class="quick-view-btn" onclick="openBlogQuickView(${item.id})">Quick View</button>
                        </div>
                    </div>
                    <div class="blog-card-content">
                        <div class="blog-card-header">
                            <h3 class="blog-card-title">${item.title}</h3>
                            <div class="blog-card-tags">
                                ${item.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                                <span class="content-type-tag">Article</span>
                            </div>
                        </div>
                        <p class="blog-card-description">${item.description.substring(0, 150)}...</p>
                        <div class="blog-card-footer">
                            <span class="blog-date">${item.metadata.publishDate}</span>
                            <button class="read-btn" onclick="window.open('${item.url}', '_blank')">
                                Read Article
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else if (item.contentType === 'course') {
            return `
                <div class="course-card" data-tags="${item.tags.map(tag => tag.toLowerCase().replace(/[^a-z0-9]/g, '-')).join(',')}" data-type="course" data-progress="${item.metadata.progress}">
                    <div class="course-card-image">
                        ${createImageElement(item.imageUrl, item.title, 'course', item.tags)}
                        <div class="course-card-overlay">
                            <div class="course-progress-circle">
                                <svg class="progress-ring" width="60" height="60">
                                    <circle class="progress-ring-bg" cx="30" cy="30" r="26"></circle>
                                    <circle class="progress-ring-progress" cx="30" cy="30" r="26" 
                                            style="stroke-dasharray: ${163.28}; stroke-dashoffset: ${163.28 - (163.28 * item.metadata.progress) / 100};"></circle>
                                </svg>
                                <span class="progress-text">${item.metadata.progress}%</span>
                            </div>
                            <button class="continue-btn" onclick="window.open('${item.url}', '_blank')">Continue Learning</button>
                        </div>
                    </div>
                    <div class="course-card-content">
                        <div class="course-card-header">
                            <h3 class="course-card-title">${item.title}</h3>
                            <div class="course-card-meta">
                                <div class="course-card-tags">
                                    ${item.tags.map(tag => `<span class="course-tag">${tag}</span>`).join('')}
                                    <span class="content-type-tag">Course</span>
                                </div>
                            </div>
                        </div>
                        <div class="course-card-details">
                            <span class="course-duration">📚 ${item.metadata.duration}</span>
                        </div>
                    </div>
                </div>
            `;
        } else if (item.contentType === 'resource') {
            return `
                <div class="resource-card" data-tags="${item.tags.map(tag => tag.toLowerCase().replace(/[^a-z0-9]/g, '-')).join(',')}" data-type="${item.metadata.type.toLowerCase()}" data-date="">
                    <div class="resource-card-image">
                        ${createImageElement(item.imageUrl, item.title, item.metadata.type, item.tags)}
                        <div class="resource-card-overlay">
                            <div class="resource-type-badge">${item.metadata.type.toUpperCase()}</div>
                            <button class="access-btn" onclick="window.open('${item.url}', '_blank')">Access Resource</button>
                        </div>
                    </div>
                    <div class="resource-card-content">
                        <div class="resource-card-header">
                            <h3 class="resource-card-title">${item.title}</h3>
                            <div class="resource-card-tags">
                                ${item.tags.map(tag => `<span class="resource-tag">${tag}</span>`).join('')}
                                <span class="content-type-tag">${item.metadata.type}</span>
                            </div>
                        </div>
                        <p class="resource-card-description">${item.description || 'Essential resource for learning and development'}</p>
                        <div class="resource-card-footer">
                            <span class="resource-type">📖 ${item.metadata.type}</span>
                            <button class="bookmark-btn" onclick="toggleBookmark(${item.id}, 'resource')">
                                <span class="bookmark-icon">🔖</span> Bookmark
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
        return '';
    }).join('');
    
    // Update filter tags to show all tags when in search mode
    updateFilterTags('all');
}

function filterBlogsByTag(filter) {
    filterContentByTag(filter);
}

// Unified content array - merge blogs, courses, resources conceptually
const unifiedContent = [
    // Blogs - Published technical articles
    ...blogData.map(blog => ({
        ...blog,
        contentType: 'blog',
        displayType: 'Technical Article',
        imageUrl: blog.image,
        searchableText: `${blog.title} ${blog.description} ${blog.tags.join(' ')} article blog technical`,
        url: blog.link,
        metadata: {
            publishDate: blog.createdAt,
            readTime: '5-10 min'
        }
    })),
    
    // Courses - Completed learning courses
    ...coursesData.map(course => ({
        ...course,
        contentType: 'course',
        displayType: 'Completed Course',
        title: course.title,
        description: `${course.duration} course. Progress: ${course.progress}%`,
        searchableText: `${course.title} ${course.tags.join(' ')} course learning education`,
        url: course.url,
        metadata: {
            progress: course.progress,
            duration: course.duration
        }
    })),
    
    // Resources - Study resources and references
    ...resourcesData.map(resource => ({
        ...resource,
        contentType: 'resource',
        displayType: `Study ${resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}`,
        title: resource.title,
        description: resource.description || `${resource.type.toUpperCase()} resource for ${resource.tags.join(', ')}`,
        searchableText: `${resource.title} ${resource.description || ''} ${resource.tags.join(' ')} resource study reference`,
        url: resource.url,
        metadata: {
            type: resource.type,
            category: resource.tags[0] || 'General'
        }
    }))
];

// Get all unified content
function getAllContent() {
    return unifiedContent;
}

// Get content by type for backward compatibility
function getContentByType(type) {
    return unifiedContent.filter(item => item.contentType === type);
}

// Generate dynamic tag list from all data sources with frequency counting
function getAllTags() {
    const tagCounts = new Map();
    const excludeTags = ['course', 'book', 'system-design']; // Tags to exclude
    
    // Initialize with 'all' tag
    tagCounts.set('all', 1000); // Highest priority
    
    // Extract tags from all content
    const allContent = getAllContent();
    allContent.forEach(item => {
        item.tags.forEach(tag => {
            const normalizedTag = tag.toLowerCase().replace(/[^a-z0-9]/g, '-');
            if (!excludeTags.includes(normalizedTag)) {
                tagCounts.set(normalizedTag, (tagCounts.get(normalizedTag) || 0) + 1);
            }
        });
    });
    
    // Sort tags by frequency (descending) and then alphabetically
    return Array.from(tagCounts.entries())
        .sort((a, b) => {
            // 'all' tag first
            if (a[0] === 'all') return -1;
            if (b[0] === 'all') return 1;
            
            // Then by frequency (descending)
            if (b[1] !== a[1]) return b[1] - a[1];
            
            // Finally alphabetically
            return a[0].localeCompare(b[0]);
        })
        .map(([tag]) => tag);
}

// Generate tags with counts for specific content type or global
function getTagsWithCounts(contentType = 'all') {
    const tagCounts = new Map();
    const excludeTags = ['course', 'book', 'system-design'];
    
    let dataToCount = [];
    
    if (contentType === 'blogs') {
        dataToCount = getContentByType('blog');
        tagCounts.set('all', dataToCount.length);
    }
    else if (contentType === 'courses') {
        dataToCount = getContentByType('course');
        tagCounts.set('all', dataToCount.length);
    }
    else if (contentType === 'resources') {
        dataToCount = getContentByType('resource');
        tagCounts.set('all', dataToCount.length);
    }
    else {
        // Global count across all content types
        dataToCount = getAllContent();
        tagCounts.set('all', dataToCount.length);
    }
    
    // Count tags from selected data
    dataToCount.forEach(item => {
        item.tags.forEach(tag => {
            const normalizedTag = tag.toLowerCase().replace(/[^a-z0-9]/g, '-');
            if (!excludeTags.includes(normalizedTag)) {
                tagCounts.set(normalizedTag, (tagCounts.get(normalizedTag) || 0) + 1);
            }
        });
    });
    
    // Sort and return with counts
    return Array.from(tagCounts.entries())
        .sort((a, b) => {
            // 'all' tag first
            if (a[0] === 'all') return -1;
            if (b[0] === 'all') return 1;
            
            // Then by frequency (descending)
            if (b[1] !== a[1]) return b[1] - a[1];
            
            // Finally alphabetically
            return a[0].localeCompare(b[0]);
        })
        .map(([tag, count]) => ({ tag, count }));
}

// Format tag for display
function formatTagDisplay(tag) {
    if (tag === 'all') return 'All';
    if (tag === 'ai') return 'AI/ML';
    if (tag === 'ci-cd') return 'CI/CD';
    if (tag === 'js-tricky-parts') return 'JS Tricks';
    if (tag === 'react-guideline') return 'React Guide';
    if (tag === 'npm-package') return 'NPM Package';
    if (tag === 'next-js') return 'Next.js';
    if (tag === 'machine-learning') return 'Machine Learning';
    if (tag === 'data-science') return 'Data Science';
    
    // Capitalize first letter and replace dashes with spaces
    return tag.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Update filter tags based on selected module/tab
function updateFilterTags(selectedModule = 'blogs') {
    const filterTagsContainer = document.getElementById('filter-tags-container');
    if (!filterTagsContainer) return;
    
    // Get tags for the specific module
    const tagsWithCounts = getTagsWithCounts(selectedModule);
    
    filterTagsContainer.innerHTML = tagsWithCounts.map(tagData => `
        <button class="filter-tag ${tagData.tag === 'all' ? 'active' : ''}" data-filter="${tagData.tag}">
            ${formatTagDisplay(tagData.tag)}
            <span class="tag-count">${tagData.count}</span>
        </button>
    `).join('');
    
    // Re-attach event listeners for new filter tags
    const filterTags = filterTagsContainer.querySelectorAll('.filter-tag');
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            
            const filter = tag.dataset.filter;
            filterBlogsByTag(filter);
        });
    });
}

function filterContentByTag(filter) {
    const cards = document.querySelectorAll('.blog-card, .course-card, .resource-card');

    cards.forEach(card => {
        const tags = card.dataset.tags || '';
        const type = card.dataset.type || '';
        
        if (filter === 'all') {
            card.style.display = 'block';
        } else if (filter === 'course' && type === 'course') {
            card.style.display = 'block';
        } else if (filter === 'book' && type === 'book') {
            card.style.display = 'block';
        } else if (tags.toLowerCase().includes(filter.toLowerCase()) || 
                   type.toLowerCase() === filter.toLowerCase()) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function sortBlogs(sortBy) {
    const container = document.getElementById('blog-container');
    const cards = Array.from(container.querySelectorAll('.blog-card, .course-card, .resource-card'));

    cards.sort((a, b) => {
        switch (sortBy) {
            case 'title':
                const titleA = a.querySelector('.blog-card-title, .course-card-title, .resource-card-title').textContent;
                const titleB = b.querySelector('.blog-card-title, .course-card-title, .resource-card-title').textContent;
                return titleA.localeCompare(titleB);
            case 'date':
                const dateA = a.dataset.date || '2000-01-01';
                const dateB = b.dataset.date || '2000-01-01';
                return new Date(dateB) - new Date(dateA);

            default:
                return 0;
        }
    });

    cards.forEach(card => container.appendChild(card));
}

function toggleBookmark(id, type) {
    // Spotify-like bookmark functionality
    showNotification('Bookmarked', `${type} saved to your learning playlist`);
    const btn = event.target.closest('.bookmark-btn');
    btn.classList.toggle('bookmarked');
    btn.innerHTML = btn.classList.contains('bookmarked') 
        ? '<span class="bookmark-icon">❤️</span> Bookmarked'
        : '<span class="bookmark-icon">🔖</span> Bookmark';
}

function switchEducationTab(tab) {
    const container = document.getElementById('blog-container');
    
    switch(tab) {
        case 'blogs':
            const blogs = getContentByType('blog');
            container.innerHTML = blogs.map(blog => `
                <div class="blog-card" data-tags="${blog.tags.map(tag => tag.toLowerCase().replace(/[^a-z0-9]/g, '-')).join(',')}" data-date="${blog.metadata.publishDate}" data-type="blog">
                    <div class="blog-card-image">
                        ${createImageElement(blog.imageUrl, blog.title, 'blog', blog.tags)}
                        <div class="blog-card-overlay">
                            <button class="quick-view-btn" onclick="openBlogQuickView(${blog.id})">Quick View</button>
                        </div>
                    </div>
                    <div class="blog-card-content">
                        <div class="blog-card-header">
                            <h3 class="blog-card-title">${blog.title}</h3>
                            <div class="blog-card-tags">
                                ${blog.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                        <p class="blog-card-description">${blog.description.substring(0, 150)}...</p>
                        <div class="blog-card-footer">
                            <span class="blog-date">${blog.metadata.publishDate}</span>
                            <button class="read-btn" onclick="window.open('${blog.url}', '_blank')">
                                Read Article
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            updateFilterTags('blogs');
            break;
            
        case 'courses':
            const courses = getContentByType('course');
            container.innerHTML = courses.map(course => `
                <div class="course-card" data-tags="${course.tags.map(tag => tag.toLowerCase().replace(/[^a-z0-9]/g, '-')).join(',')}" data-type="course" data-progress="${course.metadata.progress}">
                    <div class="course-card-image">
                        ${createImageElement(course.imageUrl, course.title, 'course', course.tags)}
                        <div class="course-card-overlay">
                            <div class="course-progress-circle">
                                <svg class="progress-ring" width="60" height="60">
                                    <circle class="progress-ring-bg" cx="30" cy="30" r="26"></circle>
                                    <circle class="progress-ring-progress" cx="30" cy="30" r="26" 
                                            style="stroke-dasharray: ${163.28}; stroke-dashoffset: ${163.28 - (163.28 * course.metadata.progress) / 100};"></circle>
                                </svg>
                                <span class="progress-text">${course.metadata.progress}%</span>
                            </div>
                            <button class="continue-btn" onclick="window.open('${course.url}', '_blank')">Continue Learning</button>
                        </div>
                    </div>
                    <div class="course-card-content">
                        <div class="course-card-header">
                            <h3 class="course-card-title">${course.title}</h3>
                            <div class="course-card-meta">
                                <div class="course-card-tags">
                                    ${course.tags.map(tag => `<span class="course-tag">${tag}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="course-card-details">
                            <span class="course-duration">📚 ${course.metadata.duration}</span>
                        </div>
                    </div>
                </div>
            `).join('');
            updateFilterTags('courses');
            break;
            
        case 'resources':
            const resources = getContentByType('resource');
            container.innerHTML = resources.map(resource => `
                <div class="resource-card" data-tags="${resource.tags.map(tag => tag.toLowerCase().replace(/[^a-z0-9]/g, '-')).join(',')}" data-type="${resource.metadata.type.toLowerCase()}" data-date="">
                    <div class="resource-card-image">
                        ${createImageElement(resource.imageUrl, resource.title, resource.metadata.type, resource.tags)}
                        <div class="resource-card-overlay">
                            <div class="resource-type-badge">${resource.metadata.type.toUpperCase()}</div>
                            <button class="access-btn" onclick="window.open('${resource.url}', '_blank')">Access Resource</button>
                        </div>
                    </div>
                    <div class="resource-card-content">
                        <div class="resource-card-header">
                            <h3 class="resource-card-title">${resource.title}</h3>
                            <div class="resource-card-tags">
                                ${resource.tags.map(tag => `<span class="resource-tag">${tag}</span>`).join('')}
                                <span class="resource-type-tag">${resource.metadata.type}</span>
                            </div>
                        </div>
                        <p class="resource-card-description">${resource.description || 'Essential resource for learning and development'}</p>
                        <div class="resource-card-footer">
                            <span class="resource-type">📖 ${resource.metadata.type}</span>
                            <button class="bookmark-btn" onclick="toggleBookmark(${resource.id}, 'resource')">
                                <span class="bookmark-icon">🔖</span> Bookmark
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            updateFilterTags('resources');
            break;
    }
    
    // Re-apply current filters after switching tabs
    const activeFilter = document.querySelector('.filter-tag.active');
    if (activeFilter && activeFilter.dataset.filter !== 'all') {
        filterContentByTag(activeFilter.dataset.filter);
    }
}

function openBlogQuickView(blogId) {
    const blog = blogData.find(b => b.id === blogId);
    if (!blog) return;

    const quickViewContent = `
        <div class="quick-view-modal" onclick="closeQuickView()">
            <div class="quick-view-content" onclick="event.stopPropagation()">
                <div class="quick-view-header">
                    <h2>${blog.title}</h2>
                    <button class="close-btn" onclick="closeQuickView()">×</button>
                </div>
                <div class="quick-view-body">
                    <img src="${blog.image}" alt="${blog.title}" class="quick-view-image">
                    <div class="quick-view-meta">
                        <span class="quick-view-date">${blog.createdAt}</span>
                        <div class="quick-view-tags">
                            ${blog.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <p class="quick-view-description">${blog.description}</p>
                    <div class="quick-view-actions">
                        <button class="primary-btn" onclick="window.open('${blog.link}', '_blank')">
                            Read Full Article
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', quickViewContent);
}

function closeQuickView() {
    const modal = document.querySelector('.quick-view-modal');
    if (modal) {
        modal.remove();
    }
}

// Quote Slider Variables and Functions
let currentQuoteIndex = 0;
let quoteInterval;
const QUOTE_AUTO_ROTATE_TIME = 8000; // 8 seconds

function changeQuote(direction) {
    const slider = document.getElementById('quotes-slider');
    if (!slider) return;

    currentQuoteIndex += direction;
    
    if (currentQuoteIndex >= developerQuotes.length) {
        currentQuoteIndex = 0;
    } else if (currentQuoteIndex < 0) {
        currentQuoteIndex = developerQuotes.length - 1;
    }
    
    updateQuoteDisplay();
}

function updateQuoteDisplay() {
    const slider = document.getElementById('quotes-slider');
    const quoteDots = document.getElementById('quote-dots');
    const progressBar = document.getElementById('quote-progress');
    
    if (!slider) return;

    // Update quote content
    const currentQuote = developerQuotes[currentQuoteIndex];
    slider.innerHTML = `
        <div class="quote-slide active" data-index="${currentQuoteIndex}">
            <div class="quote-content">
                <div class="quote-icon">💡</div>
                <blockquote class="quote-text">${currentQuote.text}</blockquote>
                <div class="quote-author">— ${currentQuote.author}</div>
            </div>
        </div>
    `;

    // Update dots if they exist
    if (quoteDots) {
        quoteDots.innerHTML = '';
        for (let i = 0; i < Math.min(5, developerQuotes.length); i++) {
            const dot = document.createElement('div');
            dot.className = `quote-dot ${i === currentQuoteIndex % 5 ? 'active' : ''}`;
            dot.onclick = () => {
                currentQuoteIndex = i;
                updateQuoteDisplay();
                resetQuoteAutoRotation();
            };
            quoteDots.appendChild(dot);
        }
    }

    // Update progress bar
    if (progressBar) {
        progressBar.style.width = '0%';
        setTimeout(() => {
            progressBar.style.width = '100%';
            progressBar.style.transition = `width ${QUOTE_AUTO_ROTATE_TIME}ms linear`;
        }, 50);
    }

    // Add animation
    const quoteSlide = slider.querySelector('.quote-slide');
    if (quoteSlide) {
        quoteSlide.style.opacity = '0';
        quoteSlide.style.transform = 'translateY(20px)';
        setTimeout(() => {
            quoteSlide.style.opacity = '1';
            quoteSlide.style.transform = 'translateY(0)';
            quoteSlide.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 50);
    }
}

function initializeQuoteSlider() {
    const slider = document.getElementById('quotes-slider');
    if (!slider) return;

    // Initialize quote dots
    const quoteDots = document.getElementById('quote-dots');
    if (quoteDots) {
        quoteDots.innerHTML = '';
        for (let i = 0; i < Math.min(5, developerQuotes.length); i++) {
            const dot = document.createElement('div');
            dot.className = `quote-dot ${i === 0 ? 'active' : ''}`;
            dot.onclick = () => {
                currentQuoteIndex = i;
                updateQuoteDisplay();
                resetQuoteAutoRotation();
            };
            quoteDots.appendChild(dot);
        }
    }

    // Initialize progress bar animation
    updateQuoteDisplay();
    
    // Start auto-rotation
    startQuoteAutoRotation();
    
    // Pause auto-rotation on hover
    const sliderContainer = document.querySelector('.quotes-slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', pauseQuoteAutoRotation);
        sliderContainer.addEventListener('mouseleave', startQuoteAutoRotation);
    }
}

function startQuoteAutoRotation() {
    if (quoteInterval) clearInterval(quoteInterval);
    
    quoteInterval = setInterval(() => {
        changeQuote(1);
    }, QUOTE_AUTO_ROTATE_TIME);
}

function pauseQuoteAutoRotation() {
    if (quoteInterval) {
        clearInterval(quoteInterval);
        quoteInterval = null;
    }
    
    const progressBar = document.getElementById('quote-progress');
    if (progressBar) {
        progressBar.style.animationPlayState = 'paused';
    }
}

function resetQuoteAutoRotation() {
    pauseQuoteAutoRotation();
    setTimeout(startQuoteAutoRotation, 100);
}

function openTerminalWindow() {
    const windowId = 'terminal-' + Date.now();
    const content = `
        <div class="terminal-content">
            <div class="terminal-header">
                <div class="terminal-title">samayun@portfolio: ~</div>
                <div class="terminal-controls">
                    <button class="terminal-control minimize" onclick="minimizeTerminal('${windowId}')">−</button>
                    <button class="terminal-control maximize" onclick="maximizeTerminal('${windowId}')">□</button>
                </div>
            </div>
            <div class="terminal-body">
                <div class="terminal-output" id="terminal-output-${windowId}">
                    <div class="terminal-welcome">
                        <div class="terminal-line">
                            <span class="terminal-prompt">samayun@portfolio:~$ </span>
                            <span>whoami</span>
                        </div>
                        <div class="terminal-result">${profile.name}</div>
                        
                        <div class="terminal-line">
                            <span class="terminal-prompt">samayun@portfolio:~$ </span>
                            <span>help</span>
                        </div>
                        <div class="terminal-result">Available commands: experience, skills, projects, contact, clear, whoami, ls
Type any command and press Enter...</div>
                        
                        <div class="terminal-line">
                            <span class="terminal-prompt">samayun@portfolio:~$ </span>
                            <span class="terminal-cursor">█</span>
                        </div>
                    </div>
                </div>
                <div class="terminal-input-area">
                    <span class="terminal-prompt">samayun@portfolio:~$ </span>
                    <input type="text" class="terminal-input" id="terminal-input-${windowId}" autocomplete="off" spellcheck="false" />
                    <div class="terminal-suggestions" id="terminal-suggestions-${windowId}"></div>
                </div>
            </div>
        </div>
    `;
    
    createWindow('Terminal', content, 'terminal', windowId);
    initializeTerminalInput(windowId);
    return windowId;
}

function openProjectsWindow() {
    const content = `
        <div class="safari-projects-window">
            <div class="safari-toolbar">
                <div class="safari-nav">
                    <button class="safari-nav-btn" onclick="navigateProject('prev')" id="prev-btn" disabled>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </button>
                    <button class="safari-nav-btn" onclick="navigateProject('next')" id="next-btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                    <button class="safari-nav-btn" onclick="refreshProject()">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg>
                    </button>
                </div>
                <div class="safari-address-container">
                    <div class="safari-secure-icon">🔒</div>
                    <input type="text" class="safari-address-bar" value="https://portfolio.samayun.dev/projects" readonly />
                    <button class="safari-reload-btn" onclick="refreshProject()">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                        </svg>
                    </button>
                </div>
                <div class="safari-actions">
                    <button class="safari-action-btn" id="extensions-btn" onclick="showSafariExtensions()">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 4.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l-.974-.975A6 6 0 0 0 9.5 7.5V9a.5.5 0 0 1-1 0V6.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M6.5 6.5v3a.5.5 0 0 1-1 0V8a5 5 0 0 0-3.479 1.334l-.7-.7A6 6 0 0 1 5.5 6.5H7a.5.5 0 0 1 0-1H4.5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                    <button class="safari-action-btn" onclick="shareProject()">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                        </svg>
                    </button>
                    <button class="safari-action-btn" onclick="bookmarkProject()">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="safari-content">
                <div class="projects-sidebar">
                    <div class="sidebar-header">
                        <h3>📂 Projects Portfolio</h3>
                        <div class="project-count">${projects.length} projects</div>
                    </div>
                    <div class="project-list">
                        ${projects.map((project, index) => `
                            <div class="project-item ${index === 0 ? 'active' : ''}" data-project-id="${project.id}" onclick="selectProject(${project.id})">
                                <div class="project-item-icon">
                                    <img src="${project.icon}" alt="${project.title}" loading="lazy" />
                                </div>
                                <div class="project-item-info">
                                    <div class="project-item-title">${project.title}</div>
                                    <div class="project-item-category">${project.category}</div>
                                    <div class="project-item-badge">
                                        <span class="badge badge-${project.status?.toLowerCase() || 'default'}">${project.badge}</span>
                                    </div>
                                </div>
                                <div class="project-item-status">
                                    <div class="status-indicator status-${project.status?.toLowerCase() || 'default'}"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="project-main-content">
                    <div class="project-header" id="project-header">
                        <div class="project-title-section">
                            <h1 id="project-title">Select a Project</h1>
                            <div id="project-subtitle" class="project-subtitle">Choose from the sidebar to view details</div>
                            <div id="project-badges" class="project-badges"></div>
                        </div>
                        <div class="project-actions" id="project-actions">
                            <button class="action-btn primary" id="visit-btn" onclick="visitCurrentProject()">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                </svg>
                                Visit Site
                            </button>
                            <button class="action-btn secondary" id="source-btn" onclick="viewSource()">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                                Source Code
                            </button>
                        </div>
                    </div>
                    <div class="project-content-body">
                        <div class="project-preview-container" id="project-preview">
                            <div class="project-placeholder">
                                <div class="placeholder-icon">🚀</div>
                                <h3>Welcome to My Projects</h3>
                                <p>Select a project from the sidebar to view its details and live preview</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    createWindow('Projects - Safari', content, 'safari');
    
    // Auto-select first project
    setTimeout(() => selectProject(projects[0].id), 100);
}

function openVSCodeWindow() {
    const content = `
        <div class="vscode-window">
            <div class="vscode-titlebar">
                <div class="vscode-tab">
                    <div class="vscode-tab-icon">📄</div>
                    <span>portfolio-projects.ts</span>
                    <div class="vscode-tab-close">×</div>
                </div>
            </div>
            <div class="vscode-content">
                <div class="vscode-sidebar">
                    <div class="vscode-sidebar-header">EXPLORER</div>
                    <div class="vscode-file-tree">
                        <div class="vscode-folder expanded">
                            📁 portfolio/
                            <div class="vscode-file-list">
                                <div class="vscode-file active">📄 projects.ts</div>
                                <div class="vscode-file">📄 index.html</div>
                                <div class="vscode-file">📄 styles.css</div>
                                <div class="vscode-file">📄 script.js</div>
                            </div>
                        </div>
                        <div class="vscode-folder">
                            📁 src/
                        </div>
                        <div class="vscode-folder">
                            📁 node_modules/
                        </div>
                    </div>
                </div>
                <div class="vscode-editor">
                    <div class="vscode-code">
                        <pre><code class="typescript">// Portfolio Projects Configuration
interface Project {
  id: number;
  title: string;
  category: string;
  technologies: Technology[];
  description: string;
  link: string;
  status: 'Production' | 'Live' | 'Published';
}

const projects: Project[] = [
  {
    id: 1,
    title: "Somoy News",
    category: "Backend Development",
    technologies: [
      { name: "Node.js", icon: "🟢" },
      { name: "Redis", icon: "🔴" },
      { name: "MongoDB", icon: "🍃" }
    ],
    description: "News platform serving 1M+ weekly requests",
    link: "https://www.somoynews.tv",
    status: "Production"
  },
  // ... more projects
];

export { projects };
</code></pre>
                    </div>
                </div>
            </div>
        </div>
    `;
    createWindow('VS Code - Projects', content, 'vscode');
}

// Launchpad
function toggleLaunchpad() {
    const launchpad = document.getElementById('launchpad');
    if (launchpad.style.display === 'none' || !launchpad.style.display) {
        openLaunchpad();
    } else {
        closeLaunchpad();
    }
}

function openLaunchpad() {
    const launchpad = document.getElementById('launchpad');
    const grid = document.getElementById('launchpad-grid');
    
    // Clear and populate grid
    grid.innerHTML = '';
    
    Object.entries(skillCategories).forEach(([category, skills]) => {
        skills.forEach(skill => {
            const app = document.createElement('div');
            app.className = 'launchpad-app';
            app.innerHTML = `
                <img src="${skill.icon}" class="launchpad-app-icon" alt="${skill.name}">
                <div class="launchpad-app-name">${skill.name}</div>
                <div class="skill-level">
                    <div class="skill-level-bar" style="width: ${skill.level}%"></div>
                </div>
            `;
            app.addEventListener('click', () => {
                showSkillDetails(skill, category);
            });
            grid.appendChild(app);
        });
    });
    
    launchpad.style.display = 'flex';
    
    // Animate icons in
    anime({
        targets: '.launchpad-app',
        scale: [0, 1],
        opacity: [0, 1],
        delay: anime.stagger(30),
        duration: 500,
        easing: 'easeOutElastic(1, .5)'
    });
}

function closeLaunchpad() {
    const launchpad = document.getElementById('launchpad');
    anime({
        targets: launchpad,
        opacity: 0,
        duration: 300,
        easing: 'easeOutQuad',
        complete: () => {
            launchpad.style.display = 'none';
            launchpad.style.opacity = 1;
        }
    });
}

// Spotlight Search
function initializeSpotlight() {
    // Build search index
    spotlightData = [
        ...projects.map(p => ({...p, type: 'project'})),
        ...workExperiences.map(w => ({...w, type: 'work'})),
        ...Object.entries(skillCategories).flatMap(([cat, skills]) => 
            skills.map(s => ({...s, type: 'skill', category: cat}))
        )
    ];
    
    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
        if (e.metaKey && e.key === ' ') {
            e.preventDefault();
            toggleSpotlight();
        }
    });
    
    // Search functionality
    const spotlightInput = document.getElementById('spotlight-input');
    if (spotlightInput) {
        spotlightInput.addEventListener('input', handleSpotlightSearch);
    }
    
    // Click trigger
    document.querySelector('.spotlight-trigger')?.addEventListener('click', toggleSpotlight);
}

function toggleSpotlight() {
    const spotlight = document.getElementById('spotlight');
    if (spotlight.style.display === 'none' || !spotlight.style.display) {
        spotlight.style.display = 'flex';
        document.getElementById('spotlight-input').focus();
    } else {
        spotlight.style.display = 'none';
        document.getElementById('spotlight-input').value = '';
        document.getElementById('spotlight-results').innerHTML = '';
    }
}

function handleSpotlightSearch(e) {
    const query = e.target.value.toLowerCase();
    const results = document.getElementById('spotlight-results');
    
    if (!query) {
        results.innerHTML = '';
        return;
    }
    
    const matches = spotlightData.filter(item => {
        const searchText = JSON.stringify(item).toLowerCase();
        return searchText.includes(query);
    }).slice(0, 5);
    
    results.innerHTML = matches.map(item => `
        <div class="spotlight-result" onclick="handleSpotlightResult('${item.type}', '${item.id || item.name}')">
            <div class="spotlight-result-icon">${getIconForType(item.type)}</div>
            <div class="spotlight-result-text">
                <div class="spotlight-result-title">${item.title || item.name || item.position}</div>
                <div class="spotlight-result-subtitle">${item.type} ${item.category ? `· ${item.category}` : ''}</div>
            </div>
        </div>
    `).join('');
}

function getIconForType(type) {
    const icons = {
        project: '📁',
        work: '💼',
        skill: '🛠',
        blog: '📝',
        education: '🎓'
    };
    return icons[type] || '📄';
}

// Notifications
function initializeNotifications() {
    const notificationCenter = document.getElementById('notification-center');
    const closeBtn = document.querySelector('.notification-close');
    
    closeBtn?.addEventListener('click', () => {
        notificationCenter.classList.remove('show');
    });
}

function showNotification(title, body, app = 'System') {
    const notification = {
        id: Date.now(),
        title,
        body,
        app,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        icon: getIconForType(app.toLowerCase())
    };
    
    notifications.unshift(notification);
    updateNotificationCenter();
    
    // Show notification
    showNotification('System', 'New notification received', 'System');
}

function updateNotificationCenter() {
    const list = document.getElementById('notification-list');
    
    list.innerHTML = notifications.map(notif => `
        <div class="notification-item" data-id="${notif.id}">
            <div class="notification-app">
                <span class="notification-app-icon">${notif.icon}</span>
                <span class="notification-app-name">${notif.app}</span>
                <span class="notification-time">${notif.time}</span>
            </div>
            <div class="notification-title">${notif.title}</div>
            <div class="notification-body">${notif.body}</div>
        </div>
    `).join('');
}

// Context Menu
function initializeContextMenu() {
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showContextMenu(e.pageX, e.pageY);
    });
    
    document.addEventListener('click', () => {
        hideContextMenu();
    });
}

function showContextMenu(x, y) {
    const menu = document.getElementById('context-menu');
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.style.display = 'block';
}

function hideContextMenu() {
    document.getElementById('context-menu').style.display = 'none';
}

// Window Creation
function createWindow(title, content, appName) {
    const windowId = `window-${Date.now()}`;
    const windowHTML = `
        <div class="app-window safari-window" id="${windowId}" data-app="${appName}">
            <div class="window-header terminal-header">
                <div class="window-controls terminal-controls">
                    <span class="window-close" onclick="closeWindow('${windowId}')" style="background: #FF5F57;"></span>
                    <span class="window-minimize" onclick="minimizeWindow('${windowId}')" style="background: #FEBC2E;"></span>
                    <span class="window-maximize" onclick="maximizeWindow('${windowId}')" style="background: #28C940;"></span>
                </div>
                <div class="window-title">${title}</div>
            </div>
            <div class="window-content">
                ${content}
            </div>
            
            <!-- Window borders for resizing -->
            <div class="window-border n"></div>
            <div class="window-border s"></div>
            <div class="window-border e"></div>
            <div class="window-border w"></div>
            <div class="window-border ne"></div>
            <div class="window-border nw"></div>
            <div class="window-border se"></div>
            <div class="window-border sw"></div>
        </div>
    `;
    
    const windowElement = document.createElement('div');
    windowElement.innerHTML = windowHTML;
    document.body.appendChild(windowElement.firstElementChild);
    
    const newWindow = document.getElementById(windowId);
    makeWindowDraggable(newWindow);
    bringToFront(newWindow);
    
    openWindows.push(windowId);
    
    // Animate window opening
    anime({
        targets: `#${windowId}`,
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
}

function makeWindowDraggable(windowElement) {
    const header = windowElement.querySelector('.window-header');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    
    header.addEventListener('mousedown', dragStart);
    
    function dragStart(e) {
        initialX = e.clientX - windowElement.offsetLeft;
        initialY = e.clientY - windowElement.offsetTop;
        isDragging = true;
        
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragEnd);
    }
    
    function drag(e) {
        if (!isDragging) return;
        
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        
        windowElement.style.left = currentX + 'px';
        windowElement.style.top = currentY + 'px';
    }
    
    function dragEnd() {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', dragEnd);
    }
}

function bringToFront(windowElement) {
    document.querySelectorAll('.app-window').forEach(w => {
        w.style.zIndex = 1000;
    });
    windowElement.style.zIndex = 1001;
}

// Menu Bar
function initializeMenuBar() {
    updateTime();
    setInterval(updateTime, 1000);
}

function updateTime() {
    const timeElement = document.getElementById('menu-time');
    if (timeElement) {
        const now = new Date();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        const dayName = days[now.getDay()];
        const monthName = months[now.getMonth()];
        const date = now.getDate();
        const time = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // macOS style: "Wed Nov 15  2:30 PM"
        timeElement.innerHTML = `
            <div class="menu-date-time">
                <div class="menu-day-date">${dayName} ${monthName} ${date}</div>
                <div class="menu-time">${time}</div>
            </div>
        `;
    }
}

// Simulated notifications
function startNotificationSimulation() {
    setTimeout(() => {
        showNotification(
            'Welcome to my Portfolio!',
            'Feel free to explore my work and projects',
            'System'
        );
    }, 2000);
    
    setTimeout(() => {
        showNotification(
            'New Project Added',
            'Check out my latest open-source contribution',
            'Projects'
        );
    }, 10000);
}

// Initial content load
function loadInitialContent() {
    // Open finder by default
    setTimeout(() => {
        document.getElementById('finder-dock')?.click();
    }, 500);
}

// Utility functions
function closeWindow(windowId) {
    const window = document.getElementById(windowId);
    anime({
        targets: window,
        scale: 0.9,
        opacity: 0,
        duration: 200,
        easing: 'easeInQuad',
        complete: () => {
            window.remove();
            openWindows = openWindows.filter(id => id !== windowId);
        }
    });
}

function minimizeWindow(windowId) {
    const window = document.getElementById(windowId);
    anime({
        targets: window,
        scale: 0.2,
        opacity: 0,
        translateY: window.innerHeight,
        duration: 300,
        easing: 'easeInQuad',
        complete: () => {
            window.style.display = 'none';
        }
    });
}

function maximizeWindow(windowId) {
    const window = document.getElementById(windowId);
    window.classList.toggle('maximized');
}

function emptyTrash() {
    showNotification('Trash Emptied', 'All items have been permanently deleted', 'Finder');
}

// ESC key to close overlays
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close spotlight
        document.getElementById('spotlight').style.display = 'none';
        // Close launchpad
        document.getElementById('launchpad').style.display = 'none';
        // Close mission control
        document.getElementById('mission-control').style.display = 'none';
    }
});

// Additional window management
function initializeWindowManagement() {
    // Mission Control shortcut
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'ArrowUp') {
            toggleMissionControl();
        }
    });
}

function toggleMissionControl() {
    const missionControl = document.getElementById('mission-control');
    if (missionControl.style.display === 'none' || !missionControl.style.display) {
        openMissionControl();
    } else {
        closeMissionControl();
    }
}

function openMissionControl() {
    const missionControl = document.getElementById('mission-control');
    const grid = document.getElementById('mission-control-grid');
    
    // Show thumbnails of open windows
    grid.innerHTML = openWindows.map(windowId => {
        const window = document.getElementById(windowId);
        if (!window) return '';
        
        return `
            <div class="window-thumbnail" onclick="focusWindow('${windowId}')">
                <div class="window-thumbnail-header">
                    <div class="window-thumbnail-controls">
                        <span class="window-thumbnail-control" style="background: #FF5F57;"></span>
                        <span class="window-thumbnail-control" style="background: #FEBC2E;"></span>
                        <span class="window-thumbnail-control" style="background: #28C940;"></span>
                    </div>
                    <div class="window-thumbnail-title">${window.querySelector('.window-title').textContent}</div>
                </div>
                <div class="window-thumbnail-content">
                    Preview
                </div>
            </div>
        `;
    }).join('');
    
    missionControl.style.display = 'flex';
}

function closeMissionControl() {
    document.getElementById('mission-control').style.display = 'none';
}

function focusWindow(windowId) {
    const window = document.getElementById(windowId);
    if (window) {
        window.style.display = 'block';
        bringToFront(window);
        closeMissionControl();
    }
}

// Project Selection Function
function selectProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    // Update active state
    document.querySelectorAll('.project-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-project-id="${projectId}"]`).classList.add('active');
    
    // Update header information
    const titleElement = document.getElementById('project-title');
    const subtitleElement = document.getElementById('project-subtitle');
    const badgesElement = document.getElementById('project-badges');
    const actionsElement = document.getElementById('project-actions');
    
    if (titleElement) titleElement.textContent = project.title;
    if (subtitleElement) subtitleElement.textContent = project.category;
    
    // Update badges
    if (badgesElement) {
        badgesElement.innerHTML = `
            <span class="badge badge-${project.status?.toLowerCase() || 'default'}">${project.badge}</span>
            <span class="badge badge-status">${project.status}</span>
        `;
    }
    
    // Show action buttons
    if (actionsElement) {
        actionsElement.style.display = 'flex';
        const visitBtn = document.getElementById('visit-btn');
        const sourceBtn = document.getElementById('source-btn');
        
        if (visitBtn) visitBtn.style.display = 'flex';
        if (sourceBtn && project.sourceCode) {
            sourceBtn.style.display = 'flex';
        } else if (sourceBtn) {
            sourceBtn.style.display = 'none';
        }
    }
    
    // Update main content
    const preview = document.getElementById('project-preview');
    if (preview) {
        preview.innerHTML = `
            <div class="project-showcase">
                <div class="project-description-section">
                    <div class="section-header">
                        <h3>📝 About This Project</h3>
                    </div>
                    <p class="project-full-description">${project.description}</p>
                </div>
                
                <div class="project-technologies-section">
                    <div class="section-header">
                        <h3>🛠️ Technologies Stack</h3>
                    </div>
                    <div class="tech-stack">
                        ${project.technologies.map(tech => `
                            <div class="tech-item">
                                <img src="${tech.icon}" alt="${tech.name}" width="24" height="24" />
                                <span class="tech-name">${tech.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="project-features-section">
                    <div class="section-header">
                        <h3>✨ Key Features</h3>
                    </div>
                    <div class="features-grid">
                        ${project.features.map(feature => `
                            <div class="feature-item">
                                <div class="feature-bullet">•</div>
                                <span class="feature-text">${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="project-metrics-section">
                    <div class="section-header">
                        <h3>📊 Project Metrics</h3>
                    </div>
                    <div class="metrics-cards">
                        ${Object.entries(project.metrics).map(([key, value]) => `
                            <div class="metric-card">
                                <div class="metric-value">${value}</div>
                                <div class="metric-label">${key.charAt(0).toUpperCase() + key.slice(1)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="project-preview-section">
                    <div class="section-header">
                        <h3>🌐 Live Preview</h3>
                        <div class="preview-controls">
                            <button class="preview-btn" onclick="togglePreviewMode()" id="fullscreen-toggle">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768L10.172 5.121a.5.5 0 0 0 0 .707z"/>
                                </svg>
                                Expand
                            </button>
                            <button class="preview-btn" onclick="openInNewTab('${project.link}')">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                </svg>
                                New Tab
                            </button>
                        </div>
                    </div>
                    <div class="iframe-container" id="iframe-container">
                        <div class="iframe-loader">
                            <div class="loader-spinner"></div>
                            <span>Loading preview...</span>
                        </div>
                        <iframe 
                            src="${project.link}" 
                            frameborder="0" 
                            width="100%" 
                            height="500"
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                            loading="lazy"
                            id="project-iframe"
                            onload="hideLoader()"
                        ></iframe>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Store current project for other functions
    window.currentProject = project;
    updateNavigationButtons();
}

// Terminal Input Handler
function initializeTerminalInput(windowId) {
    const terminalInput = document.getElementById(`terminal-input-${windowId}`);
    const suggestionsDiv = document.getElementById(`terminal-suggestions-${windowId}`);
    if (!terminalInput) return;
    
    const commands = ['experience', 'exp', 'skills', 'projects', 'contact', 'help', 'clear', 'whoami', 'ls'];
    let currentSuggestion = -1;
    
    terminalInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        if (value.length === 0) {
            suggestionsDiv.style.display = 'none';
            return;
        }
        
        const matches = commands.filter(cmd => cmd.startsWith(value));
        if (matches.length > 0) {
            suggestionsDiv.innerHTML = matches.map((cmd, index) => 
                `<div class="suggestion-item ${index === currentSuggestion ? 'selected' : ''}">${cmd}</div>`
            ).join('');
            suggestionsDiv.style.display = 'block';
        } else {
            suggestionsDiv.style.display = 'none';
        }
    });
    
    terminalInput.addEventListener('keydown', (e) => {
        const suggestions = suggestionsDiv.querySelectorAll('.suggestion-item');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentSuggestion = Math.min(currentSuggestion + 1, suggestions.length - 1);
            updateSuggestionSelection(suggestions);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentSuggestion = Math.max(currentSuggestion - 1, -1);
            updateSuggestionSelection(suggestions);
        } else if (e.key === 'Tab') {
            e.preventDefault();
            if (suggestions.length > 0 && currentSuggestion >= 0) {
                terminalInput.value = suggestions[currentSuggestion].textContent;
                suggestionsDiv.style.display = 'none';
                currentSuggestion = -1;
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (suggestions.length > 0 && currentSuggestion >= 0) {
                terminalInput.value = suggestions[currentSuggestion].textContent;
            }
            const command = terminalInput.value.trim().toLowerCase();
            handleTerminalCommand(command, windowId);
            terminalInput.value = '';
            suggestionsDiv.style.display = 'none';
            currentSuggestion = -1;
        } else if (e.key === 'Escape') {
            suggestionsDiv.style.display = 'none';
            currentSuggestion = -1;
        }
    });
    
    // Focus the input
    terminalInput.focus();
    
    function updateSuggestionSelection(suggestions) {
        suggestions.forEach((suggestion, index) => {
            suggestion.classList.toggle('selected', index === currentSuggestion);
        });
    }
}

function handleTerminalCommand(command, windowId) {
    const output = document.getElementById(`terminal-output-${windowId}`);
    if (!output) return;
    
    // Add command to output
    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line';
    commandLine.innerHTML = `
        <span class="terminal-prompt">samayun@portfolio:~$ </span>
        <span>${command}</span>
    `;
    
    const result = document.createElement('div');
    result.className = 'terminal-result';
    
    // Handle different commands
    switch (command) {
        case 'help':
            result.innerHTML = `
Available commands:
• experience, exp - Show work experience
• skills - Display technical skills
• projects - List all projects
• contact - Show contact information
• clear - Clear terminal
• whoami - Show profile info
• ls - List directory contents
            `;
            break;
            
        case 'experience':
        case 'exp':
            result.innerHTML = workExperiences.map(exp => `
📅 ${exp.start} - ${exp.end}
${exp.icon} ${exp.position} @ ${exp.company}
🛠️  Technologies: ${exp.technologies.join(', ')}
✨ Achievements:
${exp.achievements.map(achievement => `   • ${achievement}`).join('\n')}
            `).join('\n\n');
            break;
            
        case 'skills':
            result.innerHTML = Object.entries(skillCategories).map(([cat, skills]) => `
📁 ${cat}/ (${skills.length} items)
${skills.map(skill => `   ⚙️ ${skill.name} [${skill.level}%]`).join('\n')}
            `).join('\n');
            break;
            
        case 'projects':
            result.innerHTML = projects.map(project => `
${project.icon} ${project.title}
   📝 ${project.description}
   🔗 ${project.link}
   📊 ${Object.entries(project.metrics).map(([k,v]) => `${k}: ${v}`).join(', ')}
            `).join('\n\n');
            break;
            
        case 'contact':
            result.innerHTML = `
📧 Email: ${profile.email}
🐙 GitHub: ${profile.github}
💼 LinkedIn: ${profile.linkedin}
📍 Location: ${profile.location}
            `;
            break;
            
        case 'clear':
            output.innerHTML = `
                <div class="terminal-line">
                    <span class="terminal-prompt">samayun@portfolio:~$ </span>
                    <span class="terminal-cursor">█</span>
                </div>
            `;
            return;
            
        case 'whoami':
            result.innerHTML = `${profile.name}\n${profile.about}`;
            break;
            
        case 'ls':
            result.innerHTML = `
drwxr-xr-x  experience/
drwxr-xr-x  skills/
drwxr-xr-x  projects/
-rw-r--r--  README.md
-rw-r--r--  contact.json
            `;
            break;
            
        default:
            result.innerHTML = `Command not found: ${command}. Type 'help' for available commands.`;
    }
    
    // Remove cursor from last line
    const cursor = output.querySelector('.terminal-cursor');
    if (cursor) cursor.remove();
    
    // Add command and result
    output.appendChild(commandLine);
    output.appendChild(result);
    
    // Add new cursor line
    const newCursorLine = document.createElement('div');
    newCursorLine.className = 'terminal-line';
    newCursorLine.innerHTML = `
        <span class="terminal-prompt">samayun@portfolio:~$ </span>
        <span class="terminal-cursor">█</span>
    `;
    output.appendChild(newCursorLine);
    
    // Scroll to bottom
    output.scrollTop = output.scrollHeight;
}

// Safari Window Helper
function openInSafari(url) {
    const content = `
        <div class="safari-window">
            <div class="safari-toolbar">
                <div class="safari-nav">
                    <button class="safari-btn">←</button>
                    <button class="safari-btn">→</button>
                    <button class="safari-btn">⟳</button>
                </div>
                <div class="safari-address">
                    <input type="text" value="${url}" readonly />
                </div>
            </div>
            <div class="safari-content">
                <iframe src="${url}" width="100%" height="100%" frameborder="0"></iframe>
            </div>
        </div>
    `;
    createWindow('Safari', content, 'safari');
}

// Project Navigation
let currentProjectIndex = 0;

function navigateProject(direction) {
    if (direction === 'next') {
        currentProjectIndex = Math.min(currentProjectIndex + 1, projects.length - 1);
    } else if (direction === 'prev') {
        currentProjectIndex = Math.max(currentProjectIndex - 1, 0);
    }
    
    selectProject(projects[currentProjectIndex].id);
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) prevBtn.disabled = currentProjectIndex === 0;
    if (nextBtn) nextBtn.disabled = currentProjectIndex === projects.length - 1;
}

function refreshProject() {
    const currentProject = projects[currentProjectIndex];
    if (currentProject) {
        selectProject(currentProject.id);
        showNotification('Project refreshed', `${currentProject.title} reloaded`);
    }
}

function shareProject() {
    const currentProject = projects[currentProjectIndex];
    if (currentProject && navigator.share) {
        navigator.share({
            title: currentProject.title,
            text: currentProject.description,
            url: currentProject.link
        });
    } else if (currentProject) {
        navigator.clipboard.writeText(currentProject.link);
        showNotification('Link copied', 'Project URL copied to clipboard');
    }
}

function bookmarkProject() {
    const currentProject = projects[currentProjectIndex];
    if (currentProject) {
        // Create bookmark menu
        const menu = document.createElement('div');
        menu.className = 'bookmark-menu';
        menu.innerHTML = `
            <div class="bookmark-menu-header">📑 ${currentProject.title}</div>
            <div class="bookmark-options">
                <button class="bookmark-option" onclick="copyToClipboard('${currentProject.link}', 'Live URL')">
                    🌐 Copy Live URL
                </button>
                <button class="bookmark-option" onclick="copyToClipboard('${currentProject.sourceCode || currentProject.link}', 'Source Code')">
                    💻 Copy Source Code
                </button>
                <button class="bookmark-option" onclick="copyProjectInfo()">
                    📋 Copy Project Info
                </button>
            </div>
        `;
        
        // Position menu
        const extensionsBtn = document.querySelector('.safari-action-btn[onclick="bookmarkProject()"]');
        const rect = extensionsBtn.getBoundingClientRect();
        menu.style.position = 'fixed';
        menu.style.top = `${rect.bottom + 8}px`;
        menu.style.right = `${window.innerWidth - rect.right}px`;
        
        document.body.appendChild(menu);
        
        // Close menu when clicking outside
        setTimeout(() => {
            const closeMenu = (e) => {
                if (!menu.contains(e.target) && e.target !== extensionsBtn) {
                    menu.remove();
                    document.removeEventListener('click', closeMenu);
                }
            };
            document.addEventListener('click', closeMenu);
        }, 100);
    }
}

function copyToClipboard(text, type) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied!', `${type} copied to clipboard`);
        document.querySelector('.bookmark-menu')?.remove();
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Copied!', `${type} copied to clipboard`);
        document.querySelector('.bookmark-menu')?.remove();
    });
}

function copyProjectInfo() {
    const currentProject = projects[currentProjectIndex];
    if (currentProject) {
        const projectInfo = `${currentProject.title}
${currentProject.description}

🔗 Live: ${currentProject.link}
💻 Source: ${currentProject.sourceCode || currentProject.link}
🏷️ Status: ${currentProject.status}
📂 Category: ${currentProject.category}

Technologies: ${currentProject.technologies.map(tech => tech.name).join(', ')}`;
        
        copyToClipboard(projectInfo, 'Project Info');
    }
}

// Terminal Controls
function minimizeTerminal(windowId) {
    const terminal = document.getElementById(windowId);
    if (terminal) {
        terminal.style.transform = 'scale(0.1)';
        terminal.style.opacity = '0';
        terminal.style.pointerEvents = 'none';
        setTimeout(() => {
            terminal.style.display = 'none';
        }, 300);
    }
}

function maximizeTerminal(windowId) {
    const terminal = document.getElementById(windowId);
    if (terminal) {
        const isMaximized = terminal.classList.contains('maximized');
        
        if (isMaximized) {
            terminal.classList.remove('maximized');
            terminal.style.width = '800px';
            terminal.style.height = '600px';
            terminal.style.top = '100px';
            terminal.style.left = '200px';
        } else {
            terminal.classList.add('maximized');
            terminal.style.width = '100vw';
            terminal.style.height = 'calc(100vh - 28px)';
            terminal.style.top = '28px';
            terminal.style.left = '0';
        }
    }
}

// Notification System
function showNotification(title, message) {
    const notification = document.createElement('div');
    notification.className = 'notification-popup';
    notification.innerHTML = `
        <div class="notification-icon">✓</div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Safari Extensions and Additional Features
function showSafariExtensions() {
    const extensionsMenu = document.createElement('div');
    extensionsMenu.className = 'safari-extensions-menu';
    extensionsMenu.innerHTML = `
        <div class="extensions-header">
            <h4>🧩 Safari Extensions</h4>
        </div>
        <div class="extensions-list">
            <div class="extension-item">
                <div class="extension-icon">🔍</div>
                <div class="extension-info">
                    <span class="extension-name">Project Analyzer</span>
                    <span class="extension-desc">Analyze project technologies</span>
                </div>
                <button class="extension-toggle active">ON</button>
            </div>
            <div class="extension-item">
                <div class="extension-icon">📊</div>
                <div class="extension-info">
                    <span class="extension-name">Performance Monitor</span>
                    <span class="extension-desc">Monitor site performance</span>
                </div>
                <button class="extension-toggle active">ON</button>
            </div>
            <div class="extension-item">
                <div class="extension-icon">🎨</div>
                <div class="extension-info">
                    <span class="extension-name">Color Picker</span>
                    <span class="extension-desc">Extract colors from designs</span>
                </div>
                <button class="extension-toggle">OFF</button>
            </div>
            <div class="extension-item">
                <div class="extension-icon">📱</div>
                <div class="extension-info">
                    <span class="extension-name">Responsive Tester</span>
                    <span class="extension-desc">Test responsive designs</span>
                </div>
                <button class="extension-toggle active">ON</button>
            </div>
        </div>
    `;
    
    // Position the menu
    const extensionsBtn = document.getElementById('extensions-btn');
    const rect = extensionsBtn.getBoundingClientRect();
    extensionsMenu.style.position = 'fixed';
    extensionsMenu.style.top = `${rect.bottom + 8}px`;
    extensionsMenu.style.right = `${window.innerWidth - rect.right}px`;
    
    document.body.appendChild(extensionsMenu);
    
    // Close menu when clicking outside
    setTimeout(() => {
        const closeMenu = (e) => {
            if (!extensionsMenu.contains(e.target) && e.target !== extensionsBtn) {
                extensionsMenu.remove();
                document.removeEventListener('click', closeMenu);
            }
        };
        document.addEventListener('click', closeMenu);
    }, 100);
}

function visitCurrentProject() {
    if (window.currentProject) {
        window.open(window.currentProject.link, '_blank');
        showNotification('Opening Project', `Launching ${window.currentProject.title}`);
    }
}

function viewSource() {
    if (window.currentProject && window.currentProject.sourceCode) {
        window.open(window.currentProject.sourceCode, '_blank');
        showNotification('Source Code', `Opening ${window.currentProject.title} repository`);
    }
}

function openInNewTab(url) {
    window.open(url, '_blank');
    showNotification('New Tab', 'Opened in new browser tab');
}

function hideLoader() {
    const loader = document.querySelector('.iframe-loader');
    if (loader) {
        loader.style.display = 'none';
    }
}

let isPreviewFullscreen = false;

function togglePreviewMode() {
    const container = document.getElementById('iframe-container');
    const toggle = document.getElementById('fullscreen-toggle');
    const iframe = document.getElementById('project-iframe');
    
    if (!isPreviewFullscreen) {
        // Enter fullscreen mode
        container.classList.add('fullscreen-preview');
        iframe.style.height = '80vh';
        toggle.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zM10 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a1.5 1.5 0 0 1-1.5-1.5v-3zM0 10.5A1.5 1.5 0 0 1 1.5 9h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3zm10 1a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3z"/>
            </svg>
            Minimize
        `;
        isPreviewFullscreen = true;
        showNotification('Preview Mode', 'Expanded to fullscreen view');
    } else {
        // Exit fullscreen mode
        container.classList.remove('fullscreen-preview');
        iframe.style.height = '500px';
        toggle.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768L10.172 5.121a.5.5 0 0 0 0 .707z"/>
            </svg>
            Expand
        `;
        isPreviewFullscreen = false;
        showNotification('Preview Mode', 'Returned to normal view');
    }
}

// Window Management System
let windows = [];
let activeWindow = null;
let dragType = null;
let dragState = {};
let minimizedWindows = [];
let windowStates = new Map();
let currentMaximizeState = 'none';
const MIN_WIDTH = 300;
const MIN_HEIGHT = 200;

// Event Listeners for Window Management
document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);

function handleMouseDown(e) {
    const header = e.target.closest('.terminal-header');
    const border = e.target.closest('.window-border');

    if (header) {
        dragType = 'header';
        activeWindow = header.closest('.terminal-window, .safari-window, .application-window');
        if (activeWindow) {
            dragState = {
                offsetX: e.clientX - activeWindow.offsetLeft,
                offsetY: e.clientY - activeWindow.offsetTop
            };
            e.preventDefault();
        }
    }

    if (border) {
        dragType = 'border';
        activeWindow = border.closest('.terminal-window, .safari-window, .application-window');
        if (activeWindow) {
            dragState = {
                startX: e.clientX,
                startY: e.clientY,
                startWidth: activeWindow.offsetWidth,
                startHeight: activeWindow.offsetHeight,
                direction: border.className.includes('e') ? 'e' : 
                          border.className.includes('s') ? 's' :
                          border.className.includes('w') ? 'w' : 'n'
            };
            e.preventDefault();
        }
    }
}

function handleMouseMove(e) {
    if (!activeWindow) return;

    if (dragType === 'header') {
        activeWindow.style.left = `${e.clientX - dragState.offsetX}px`;
        activeWindow.style.top = `${e.clientY - dragState.offsetY}px`;
        activeWindow.style.position = 'fixed';
    }

    if (dragType === 'border') {
        const deltaX = e.clientX - dragState.startX;
        const deltaY = e.clientY - dragState.startY;

        switch (dragState.direction) {
            case 'e':
                activeWindow.style.width = `${Math.max(MIN_WIDTH, dragState.startWidth + deltaX)}px`;
                break;
            case 's':
                activeWindow.style.height = `${Math.max(MIN_HEIGHT, dragState.startHeight + deltaY)}px`;
                break;
            case 'w':
                const newWidth = Math.max(MIN_WIDTH, dragState.startWidth - deltaX);
                activeWindow.style.width = `${newWidth}px`;
                activeWindow.style.left = `${dragState.startX + (dragState.startWidth - newWidth)}px`;
                break;
            case 'n':
                const newHeight = Math.max(MIN_HEIGHT, dragState.startHeight - deltaY);
                activeWindow.style.height = `${newHeight}px`;
                activeWindow.style.top = `${dragState.startY + (dragState.startHeight - newHeight)}px`;
                break;
        }
    }
}

function handleMouseUp() {
    dragType = null;
    activeWindow = null;
}

function minimizeWindow(windowElement) {
    if (!windowElement) {
        windowElement = document.querySelector('.terminal-window, .safari-window, .application-window');
        if (!windowElement) return;
    }

    const minimizedState = {
        id: Date.now(),
        content: windowElement.innerHTML,
        className: windowElement.className,
        state: {
            width: windowElement.style.width || windowElement.offsetWidth + 'px',
            height: windowElement.style.height || windowElement.offsetHeight + 'px',
            left: windowElement.style.left || windowElement.offsetLeft + 'px',
            top: windowElement.style.top || windowElement.offsetTop + 'px',
            position: windowElement.style.position || 'fixed'
        }
    };

    minimizedWindows.push(minimizedState);
    addMinimizedThumbnail(minimizedState.id, windowElement.className);

    anime({
        targets: windowElement,
        scale: [1, 0.2],
        opacity: [1, 0],
        duration: 300,
        easing: 'easeOutQuad',
        complete: () => {
            windowElement.style.display = 'none';
        }
    });
}

function addMinimizedThumbnail(id, windowClass) {
    const dock = document.querySelector('.dock');
    const thumbnail = document.createElement('div');
    thumbnail.className = 'dock-item minimized-window';
    thumbnail.dataset.windowId = id;
    
    // Set appropriate icon based on window type
    if (windowClass.includes('safari')) {
        thumbnail.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Safari_browser_logo.svg" alt="Safari" class="dock-icon">';
    } else if (windowClass.includes('terminal')) {
        thumbnail.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Terminalicon2.png" alt="Terminal" class="dock-icon">';
    } else {
        thumbnail.innerHTML = '📁';
    }

    thumbnail.addEventListener('click', () => {
        restoreMinimizedWindow(id);
        thumbnail.remove();
    });

    dock.appendChild(thumbnail);
}

function restoreMinimizedWindow(id) {
    const windowIndex = minimizedWindows.findIndex(w => w.id === id);
    if (windowIndex === -1) return;

    const minimizedWindow = minimizedWindows[windowIndex];
    let windowElement = document.querySelector('.terminal-window, .safari-window, .application-window');
    
    if (!windowElement) {
        // Create window if it doesn't exist
        windowElement = document.createElement('div');
        windowElement.className = minimizedWindow.className;
        document.body.appendChild(windowElement);
    }

    windowElement.innerHTML = minimizedWindow.content;
    Object.assign(windowElement.style, minimizedWindow.state);
    windowElement.style.display = 'block';
    windowElement.style.transform = 'scale(0.2)';
    windowElement.style.opacity = '0';

    anime({
        targets: windowElement,
        scale: [0.2, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutElastic(1, .5)',
        complete: () => {
            windowElement.style.transform = 'none';
        }
    });

    minimizedWindows.splice(windowIndex, 1);
}

function maximizeWindow(windowElement) {
    if (!windowElement) return;

    if (currentMaximizeState === 'full') {
        // Restore
        const savedState = windowStates.get(windowElement);
        if (savedState) {
            Object.assign(windowElement.style, savedState);
            windowStates.delete(windowElement);
            currentMaximizeState = 'none';
        }
    } else {
        // Save current state
        windowStates.set(windowElement, {
            width: windowElement.style.width,
            height: windowElement.style.height,
            left: windowElement.style.left,
            top: windowElement.style.top,
            position: windowElement.style.position
        });

        // Maximize
        windowElement.style.width = '100vw';
        windowElement.style.height = '100vh';
        windowElement.style.left = '0';
        windowElement.style.top = '0';
        windowElement.style.position = 'fixed';
        windowElement.style.borderRadius = '0';
        currentMaximizeState = 'full';
    }
}

function initializeWindowManagement() {
    // Add window control event listeners
    document.addEventListener('click', function(e) {
        // Terminal controls
        if (e.target.matches('.terminal-controls span:first-child')) {
            // Close button (red)
            const window = e.target.closest('.terminal-window, .safari-window, .application-window');
            if (window) {
                anime({
                    targets: window,
                    opacity: 0,
                    scale: 0.9,
                    duration: 200,
                    complete: () => window.style.display = 'none'
                });
            }
        } else if (e.target.matches('.terminal-controls span:nth-child(2)')) {
            // Minimize button (yellow)
            const window = e.target.closest('.terminal-window, .safari-window, .application-window');
            if (window) {
                minimizeWindow(window);
            }
        } else if (e.target.matches('.terminal-controls span:nth-child(3)')) {
            // Maximize button (green)
            const window = e.target.closest('.terminal-window, .safari-window, .application-window');
            if (window) {
                maximizeWindow(window);
            }
        }
        
        // Safari controls
        if (e.target.matches('.safari-controls .safari-control')) {
            const window = e.target.closest('.safari-window');
            if (!window) return;
            
            if (e.target.classList.contains('close')) {
                anime({
                    targets: window,
                    opacity: 0,
                    scale: 0.9,
                    duration: 200,
                    complete: () => window.style.display = 'none'
                });
            } else if (e.target.classList.contains('minimize')) {
                minimizeWindow(window);
            } else if (e.target.classList.contains('maximize')) {
                maximizeWindow(window);
            }
        }
    });
}