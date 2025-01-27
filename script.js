// Data
const profile = {
    name: "Samayun Miah Chowdhury",
    image: "https://avatars.githubusercontent.com/u/31636535",
    about: "Backend Developer | DevOps Practitioner",
    address: "Dhaka",
    dob: '12 April 2000',
    email: "samayun.m.chowdhury@gmail.com",
    phone: "+8801798037068",
    website: "https://samayun.github.io/samayun",
    resume:
        "https://drive.google.com/file/d/17GVxhIJIHt9RfVPKK7BIXFWEPZbioRfI/view",
    linkedin: "https://linkedin.com/in/samayun",
    github: "https://github.com/samayun",
    meduim: "https://medium.com/@samayun",
    hackerrank: "https://hackerrank.com/samayunmc",
    leetcode: "https://leetcode.com/samayun",
    stackoverflow: 'https://stackoverflow.com/users/12932846/samayun-miah-chowdhury',
    resumeDownloadLink: `https://drive.google.com/u/0/uc?id=17GVxhIJIHt9RfVPKK7BIXFWEPZbioRfI&export=download`,
    bio: `Samayun is a Bangladeshi web application developer who loves to explore modern technologies`,
    intro: `Learning and exploring trendy technology is a great fun to me and I feel a strong passion at these things.
    Web Development is that type of work where I can meet my thirst of achieving new skills in different tools, frameworks. So that I am looking for a career oriented and challenging Web Developer position in an organization, that has opportunities for professional growth.
    
    My personal strengths are hard work, honesty, flexibility, sincerity, quick adaptability to new technologies & able to perform duties under pressure and meet deadlines with accuracy as well as having good communication skills.`,
};

const author = {
    image: "https://miro.medium.com/fit/c/56/56/1*SSYUQ8TIIDqoE4sKrcTCXw.jpeg",
    name: "Samayun Miah Chowdhury",
};
const blogData = [

    {
        id: 3,
        title: "রেডিস কথন ১",
        description: `Redis এর পুর্নরুপ REmote DIstributed Server. এটি একটি ওপেন সোর্স In memory key-value data store. একটি ইতালিয়ান স্টার্টআপ রিয়েল টাইম ওয়েব লগ এনালাইজার বানাতে স্কেলেবিলিটি ইম্প্রভমেন্টের জন্য স্টার্টআপ রিয়েল টাইম ওয়েব লগ এনালাইজার বানাতে স্কেলেবিলিটি ইম্প্রভমেন্টের জন্য এটি ডেভলপ করেছিলো।..`,
        image:
            "https://miro.medium.com/v2/resize:fit:720/format:webp/1*wYDmyu0eBSxLQBVr8YwF8Q.png",
        tags: ["Redis"],
        link: "https://samayun.medium.com/3da03a6e94db",
        author,
        createdAt: "17 May 2023",
    },
    {
        id: 3,
        title: "রেডিস কথন ২",
        description: `
      এপ্লিকেশনে অনেক ডাটা খুব কমই আপডেট করতে হয় যেমন: কোম্পানির নাম, লোগো, ক্যাটাগরি সমুহ, এবাউট পেজের ডাটা,পোস্ট, একটা প্রোডাক্টের মুল ইনফরমেশন ইত্যাদি ইত্যাদি ।
  
      খুব আপডেট হয় কিন্তু অনেক রিড করতে হয় এমন ডাটা ক্যাশ করলে ফাস্টার রেস্পন্স পাওয়া যায় । ধরেন এই পোস্ট/ব্লগ ই আমি এখন লিখছি, বানান ঠিক করতে ধরেই নিলাম কয়েকবার আপডেট করতে হলো ।
  
      কিন্তু এরপর আর কখনো আপডেট করবো বলে মনে হয় না। রিড কিন্তু ৫/১০ টা করে একবছর পরেও ২/৩ টা ভিজিট হতেই পারে ৷
  
      একটা ই-কমার্সের প্রডাক্ট এর মুল ইনফরমেশন নাম, সাইজ, কালার,ডিটেলস, ইমেজগুলোর লিংক, ইত্যাদি কিন্তু ডাটাবেজে একবার ক্রিয়েট হয়ে গেলে আর প্রতিদিন আপডেট করতে হয় না ।
  
      ডিস্ক বেজড স্টোরেজে ডাটা রিড/রাইট করতে তুলনামূলকভাবে মেমরি থেকে বেশি সময় লাগে ।
  
      অতএব পরবর্তীতে ইউজার ওই ডাটা দেখতে চাইলে মেমরি থেকে দেখালেই ফাস্টার রেস্পন্স হলো
  
      প্রায় ডাটাবেজ থেকেই রেডিসের লেটেন্সি অনেক কম |
  
      এছাড়া চাইলেই, ফুল পেজও ক্যাশিং করা যায় ৷
  
      রেডিস হচ্ছে ক্যাশিং জগতের জন উইক।
  
      নাম চিনলেই সবাই চেনে এবং বড় ভাই হিসেবে সালাম দেয় ( নো র‍্যাগিং) |`,
        image:
            "https://miro.medium.com/v2/resize:fit:640/format:webp/0*rSHJEL3uXqufqUPD",
        tags: ["Redis"],
        link: "https://samayun.medium.com/66d0f6cb862b",
        author,
        createdAt: "18 May 2023",
    },
    {
        id: 3,
        title: "রেডিস কথন ৩",
        description: `ফেইসবুক, ইউটিউবে প্রতিনিয়ত ফাইল আপলোড করা খুবই কমন কাজ । ধরেন অনেক ইউজার কে ই-মেইল পাঠানোর api, বড় ফাইল আপলোড, বিভিন্ন ডাটা সোর্স থেকে ডাটা মাইগ্রেশন ইত্যাদি বিভিন্ন ভারী কাজের api ইমিডিয়েট রেস্পন্স পাঠানোর দরকার নেই, কয়েক সেকেন্ড, মিনিট দেরি হলেও সমস্যা নেই বরং কাজ হয়ে গেলেই হলো ৷ এসব কাজ Queue তে রেখে দিলে ভালো পারফর্ম্যান্স পাওয়া যায় ।
  
      ধরেন একটা ব্লগ পোস্টের কত ভিউ হইছে, সেটা কি এখনই রেস্পন্স দেয়া খুবই জরুরি?
      
      ৫ মিনিটে ২০ হাজার ভিউ হইছে এই স্কেলের কথা চিন্তা করেন।
      
      একই ব্লগ পোস্টের জন্য ৫ মিনিটে ডাটাবেজে ২০ হাজার সেপারেট আপডেট অপারেশন কি ভালো হবে নাকি কিউ থেকে মার্জ হয়ে একটা বাল্ক রাইট অপারেশন ডাটাবেজের performance এর জন্য ভালো হবে???
      
      ৫ মিনিট পর পর বাল্ক অপারেশন করলেই তো হলো? তাই-না.
      
      কয়েক হাজার ইমেইল পাঠানোর জন্য কত সেকেন্ড সময় লাগতে পারে?? এত সময় কি ফ্রন্টেন্ডের রেস্পন্স পাঠানোর জন্য ব্যয় করা খুবই জরুরি??
      
      একটা ১ জিবির ফাইল আপলোড ব্যাকগ্রাউন্ডে প্রসেস করা ভালো নাহ??
      
      Job Queue. Scheduler Queue, Message Queue কিওয়ার্ড সার্চ দিলেও অনেক তথ্য পেয়ে যাবেন।
      
      Bull নামে একটা নোড ( npm/yarn) প্যাকেজ আছে। একটু ঘেটে দেখতে পারেন।`,
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*gknNMBeyOY9LxzmY.jpeg",
        tags: ["Redis"],
        link: "https://samayun.medium.com/b733cb4bd3f0",
        author,
        createdAt: "31 May 2023",
    },
    {
        id: 3,
        title: "রেডিস কথন ৪ - Endgame Blog of the series",
        description: `Kahoot নামে একটা ওয়েবসাইট আছে কুইজ গেম খেলা যায়, যেকোনো মাল্টি প্লেয়ার গেমেই টপ স্কোরার লিস্ট থাকে ।
      
      আপনার এপ্লিকেশনে ৫০ টি গেম আছে, ৫০ টি গেমের ই লিডারবোর্ড শো করাবেন ইউজারকে ।
      
      ডাটাবেজ থেকে কুয়েরী করলে কী ঘটবে এখন বুঝতেছেন ??
      
      সকেট দিয়ে কানেক্ট করে এত্তোগুলো কুয়েরী করতে থাকবেন….?
      
      নাকি টাইম সিরিজ ফিচার ইউজ করবেন??
      
      যে মেথড ই ফলো করেন Constant Complexity আছে তো?
      
      রেডিসের রয়েছে নিজস্ব বিল্ট ইন সর্টেড সেট নামক ডাটা টাইপ ।
      
      স্কোরিং কিংবা ভ্যালু দিয়েও সর্ট করা যায়।
      
      কি-ভ্যালু ফরম্যাটে ডাটা থাকায় ৫০ গেম কে ৫০ টা কন্সটেন্ট কম্পলেক্সিটি ওয়ালা কুয়েরীতেই ফেচ করা যাবে |
      
      আর গেম এর স্কোর গুলা স্কোরিং কর‍তে থাকবে। এখানে পাব-সাব প্যাটার্ন ফলো করতে পারেন |
      
      সেট মানেই তোহ ইউনিক ডাটার সমাহার।`,
        image:
            "https://miro.medium.com/v2/resize:fit:720/format:webp/0*aWZS9yQww03mouup.png",
        tags: ["Redis"],
        link: "https://samayun.medium.com/594c4c4d2725",
        author,
        createdAt: "07 June 2023",
    },
    {
        id: 2,
        title: "Setup CI/CD for typescript based npm package publishing",
        description:
            "Re-setup each packages's scripting, linting, testing, publishing to npm registry is so boring & time greedy.. so we need a time saving thanos like solutions... 😂",
        image:
            "https://debojitroy.com/blogs/releasing-typescript-package-to-npm.png",
        tags: ["CI/CD", "NPM Package", "TypeScript"],
        link: "https://samayun.medium.com/setup-ci-cd-for-typescript-based-npm-package-3f3c6354b143",
        author,
        createdAt: "08 Oct 2022",
    },
    {
        title: "How I fell in love with JavaScript!",
        description:
            "Today we are going to discuss10 most important things about javascript string.",
        image: "https://miro.medium.com/max/1920/1*1IvfMBgfGs1gCPz8Q3UAQw.png",
        tags: ["Javascript"],
        link: "https://samayun.medium.com/how-to-make-relationship-with-javascript-e3e7c134dfe0",
        author,
        createdAt: "05 May 2021",
    },
    {
        title: "React js:All you need to Know 💪",
        description: `In this blog I gave guideline all topics to know about react.js .`,
        image: "https://miro.medium.com/max/700/1*YePVzjkjsadOqzQ03wl5kA.png",
        tags: ["React.js", "React-guideline"],
        link: "https://samayunmc.medium.com/%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A7%87%E0%A6%95%E0%A7%8D%E0%A6%9F-%E0%A6%9C%E0%A7%87%E0%A6%8F%E0%A6%B8-%E0%A6%95%E0%A7%8B%E0%A6%A1-%E0%A6%B8%E0%A7%8D%E0%A6%AA%E0%A6%B2%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%82-%E0%A6%93-%E0%A6%B2%E0%A7%87%E0%A6%9C%E0%A6%BF-%E0%A6%B2%E0%A7%8B%E0%A6%A1%E0%A6%BF%E0%A6%82-%E0%A6%95%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A7%8B%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%9F-60bb9ec13c21",

        author,
        createdAt: "May 7 2021",
    },

    {
        title: "রিয়েক্ট জেএস কোড স্পলিটিং ও লেজি লোডিং কম্পোন্যান্ট",
        description: `কোরিয়ার থ্রিলার মুভি দেখেন,মানি হেইস্ট,গট দেখছেন?
      যদি দেখে থাকেন,
      সাসপেন্সের টেলায় ঘুম আসে না তাই-না?
      আজকে আমি রিয়েক্টের সাসপেন্স নিয়ে কথা বলবো ৷
      কিন্তু আমরা তোহ প্রোগ্রামার। অলস মস্তিষ্ক তাই কোড বার বার লিখতে ভাল্লাগে না 🙄
      রিফেক্টর,ফাংশন, রিইউজেবল কম্পোনেন্ট বানাতে অভ্যস্ত হয়ে পড়েছি আর দিন দিন অলস(লেজি) হচ্ছি ।
      আমি কথা বলছি লেজি লোডিং নিয়ে৷ `,
        link: "https://samayun.medium.com/60bb9ec13c21",
        author,
        image: "https://miro.medium.com/v2/resize:fit:1400/1*TA2lHoX2pQymeq7lf9Fg3g.png",
        createdAt: "08 May 2021",
    },
    {
        title: "Install Avro Keyboard in Linux Mint",
        description: `On Ubuntu, and on Debian's testing and unstable releases, Avro phonetic is distributed through the ibus-avro package. To install it, simply do:
  
      sudo apt-get install ibus-avro
      On other Linux distros you can install the dependencies and build/install using the source code in this repository....`,
        image: `https://i.ytimg.com/vi/xwsDdrf5CY4/maxresdefault.jpg`,
        tags: ["Avro Keyboard", "Avro In Linux Mint"],
        link: `https://samayun.medium.com/install-avro-keyboard-in-linux-mint-c88be1239d85`,
        author,
        createdAt: "11 June 2021",
    },
    {
        title: "JavaScript The Tricky Parts: Part-1 💪",
        description: `Here I am covering 10 tricky topics of basic javascript ....`,
        image:
            "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_3.0,g_center,w_300/v1/academind.com/content/courses/javascript-tricky-parts/javascript-course-the-tricky-parts",
        tags: ["JavaScript", "JS Tricky Parts"],
        link: "https://samayun.medium.com/javascript-the-tricky-parts-part-1-1a7c0521fb79",
        author,
        createdAt: "May 6 2021",
    },
    {
        title: "JavaScript The Tricky Parts🙄: Part-2",
        description: `Hey , I am Samayun Chowdhury speaking here to make your coding life easier, smarter & comfortable. I will talk about most critical parts of javascript in this series . So don't waste time . Take a glass of coffee & read my blog . Here I am covering 10 tricky topics of javascript `,
        image: "https://miro.medium.com/max/678/1*1MRoBnT388OcTWy--FDEKQ.jpeg",
        tags: ["JavaScript", "JS Tricky Parts"],
        link: "https://samayun.medium.com/javascript-the-tricky-parts-part-2-1cf32a8dd825",
        author,
        createdAt: "May 8 2021",
    }
];

const skills = [
    {
        name: "TinyBird",
        icon: "https://avatars.githubusercontent.com/u/53208553"
    },
    {
        name: "Sequin",
        icon: "https://avatars.githubusercontent.com/u/172663419"
    },
    {
        "name": "Elastic Search",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGWjWs6SAj5eH77doethfAafmC_cVoGQ_Rg&s"
    },
    {
        "name": "Kafka",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Apache_kafka-icon.svg/1200px-Apache_kafka-icon.svg.png"
    },
    {
        name: "NginX",
        icon: "https://www.svgrepo.com/show/373924/nginx.svg"
    },
    {
        name: "Redis",
        icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redis/redis.png",
    },
    {
        name: "Docker",
        icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png",
    },
    { name: "Nest JS", icon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDlYKWwiHIBw0AwCCpREi9UdXkn0JlZkyCw&` },
    {
        name: "Rabbit MQ",
        icon: "https://www.rabbitmq.com/img/rabbitmq-logo-with-name.svg",
    },
    { name: "AWS S3", icon: "https://user-images.githubusercontent.com/2277182/75613896-f24f5800-5b32-11ea-966e-4ed4b41f873a.png" },
    { name: "MongoDB", icon: "https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png" },
    { name: "Cloudflare Stream", icon: 'https://cdn-1.webcatalog.io/catalog/cloudflare-stream/cloudflare-stream-icon-filled-256.png?v=1675613678839' },

    {
        name: "Laravel",
        icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/laravel/laravel.png",
    },
    {
        name: "PostgreSQL",
        icon: "https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png",
    },
    {
        name: "TypeScript",
        icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
    },
    {
        name: "Kubernetes",
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png'
    },
    {
        name: "Pandas",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZd37oUzVXPHOsl-Ygg5hzYpZs7Djvk-vSw&s"
    },
    {
        name: "NumPy",
        icon: "https://cdn.worldvectorlogo.com/logos/numpy-1.svg"
    },
    {
        name: "Scikit Learn",
        icon: "https://thedatascientist.com/wp-content/uploads/2023/05/scikit-learn-1024x551.png"
    }
];

const workExperiences = [
    {
        id: 2,
        position: 'Sr. Software Engineer',
        company: 'RedQ',
        start: '23 September 2024',
        end: 'Present',
        website: 'https://redq.io',
        responsibility: [
            `Exploring Elastic Search,Kafka architectures....`,
            `TinyBird: Realtime Analytics`,
            `Sequin: Change Data Capture`,
            `Elastic Search: Search Engine`,
        ],
    },
    {
        id: 1,
        position: 'Backend Developer',
        company: 'Sayburgh Solutions Ltd.',
        start: '26 June 2021',
        end: '31 July 2023',
        website: 'https://sayburgh.com',
        responsibility: [
            `Refactored & optimized some expensive db queries for SomoyNews API`,
            `Developed a Video On Demand (VOD) applicatio. Estimating at least 100K+ requests per day`,
            `Developed a Human Resource Management Saas product`,
            `Built an special plugin to optimize read operations performance & reduced complex join queries`,
            `Built internal tools, wrote scripts which were helpful for faster communication on teams`,
            `Implemented optimization to reduced complex join queries by ~ 35 % on the backend`,
            `Tools & Concepts I am used to there: Nest.js, MongoDB,Redis,Docker,TypeScript, Cloudflare Services
            (Serverless functions,Stream), Domain Driven Design, GitHook`
        ],
    },
];


const projects = [
    {
        id: 1,
        title: "Somoy News",
        category: "backend",
        image: "https://samayun.vercel.app/assets/image/work/somoyNews.jpg",
        description:
            "Somoy Television is a Bangladeshi Bengali-language satellite and cable news 24-hour Bengali television channel, headquartered at 89, Bir Uttam CR Dutta Road, Banglamotor, Dhaka. Multiple fact-checking organizations list Somoy TV as the top source in Bangladesh publishing authentic news",
        technologies: [
            {
                key: "Redis",
                icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redis/redis.png",
            },
            { key: "Express JS", icon: "https://user-images.githubusercontent.com/46530103/149555472-2e2ed369-9011-496e-9fe5-69facdf534e8.png" },
            {
                key: "Docker",
                icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png",
            },
            {
                key: "Nuxt JS",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nuxt_logo_%282021%29.svg/2560px-Nuxt_logo_%282021%29.svg.png",
            },
            {
                key: "MongoDB",
                icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png",
            },
        ],
        live_url: "https://www.somoynews.tv",
        features: [
            "Optimized a caching system for API requests, leading to a 20% reduction in response times",
            "Clean code and maintainable architecture",
            "Fixed some issues according to knowledge sharing session with official MongoDB team",
            "Optimized expensive queries as possible",
            "Application has almost 1 million request per week",
        ],
        scrollTime: 5,
    },

    {
        id: 2,
        category: "plugin",
        title: "MongoCat",
        description:
            "MongoCat is a denormalization plugin built upon mongoose to optimize read heavy queries & reducing join operations in mongodb",
        features: [
            `Easy to use, configuration based Denormalization mongoose plugin for read heavy applications. Mongocat
          reduces write complexity too`,
            `Distributed Denormalization is goal of this project`,
            `Declarative approach .Write configurations which,where how to keep redundant`,
            `Terraformation (Terraform Module) is kept in mind.`,
        ],
        source_code: "https://github.com/samayun/mongocat",
        live_url: "https://www.npmjs.com/package/mongocat",
        image: "https://samayun.vercel.app/assets/image/work/mongocat.jpg",
        technologies: [
            {
                key: "Mongoose",
                icon: "https://avatars.githubusercontent.com/u/7552965?s=280&v=4",
            },
            {
                key: "JavaScript",
                icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
            }
        ],
        scrollTime: 7,
    },
    {
        id: 3,
        category: "backend",
        title: "সময়ের স্কুল",
        description: "Somoy School is an Edu Tech Platform",
        features: [
            `MongoDB Aggregation Framework`,
            `Cloudflare Stream`,
            `Cloud Function for media access authorization on the fly`,
        ],
        technologies: [
            {
                key: "Redis",
                icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redis/redis.png",
            },
            {
                key: "Docker",
                icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png",
            },
            { key: "Nest JS", icon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDlYKWwiHIBw0AwCCpREi9UdXkn0JlZkyCw&s` },
            { key: "MongoDB", icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" },
            {
                key: "Cloudflare Stream",
                icon: "https://cdn-1.webcatalog.io/catalog/cloudflare-stream/cloudflare-stream-icon-filled-256.png?v=1675613678839",
            },
        ],
        live_url: "https://somoy.school",
        image: "https://samayun.vercel.app/assets/image/work/somoySchool.jpg",
        scrollTime: 5,
    },
];

const education = [
    {
        degree: 'Bachelor of Science (B.Sc.)',
        subject: 'Computer Science Engineering',
        institute: 'Green University of Bangladesh, Dhaka',
        start: '2022',
        currentCgpa: '3.09',
        outOf: '4.00',
    },
    {
        degree: 'Diploma In Engineering',
        subject: 'Computer Technology',
        institute: 'Moulvibazar Polytechnic Institute , Moulvibazar',
        start: '2016',
        passed: '2020',
        cgpa: '3.83',
        outOf: '4.00',
    },
    {
        degree: 'SSC',
        subject: 'Science',
        institute: 'Nabigonj JK Model High School, Nabigonj, Habiganj',
        start: '2014',
        passed: '2016',
        cgpa: '3.89',
        outOf: '5.00',
    },
    {
        degree: 'JSC',
        subject: 'Science',
        institute: 'Nabigonj JK Model High School, Nabigonj, Habiganj',
        start: '2014',
        passed: '2014',
        cgpa: '4.94',
        outOf: '5.00',
    },
];

// Add to top of script.js
const developerQuotes = [
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "Make it work, make it right, make it fast. – Kent Beck",
    "The only way to learn a new programming language is by writing programs in it. – Dennis Ritchie",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. – Brian Kernighan"
];

function displayTerminalContent(content) {
    const terminal = document.getElementById('terminal-output');
    terminal.innerHTML = '';

    if (typeof content === 'string') {
        terminal.innerHTML = content;
    } else if (Array.isArray(content)) {
        terminal.innerHTML = content.join('\n');
    }

    anime({
        targets: terminal,
        opacity: [0, 1],
        duration: 500
    });
}

function homeCommand() {
    const homeContent = [
        `<div class="profile-container">
            <img src="${profile.image}" alt="Samayun Chowdhury" class="profile-image">
            <div class="profile-info">
                <div class="profile-line">Samayun Miah Chowdhury - Profile</div>
                <div class="profile-line">Name: ${profile.name}</div>
                <div class="profile-line">About: ${profile.about}</div>
                <div class="profile-line">Email: ${profile.email}</div>
                <div class="profile-line">GitHub: ${profile.github}</div>
                <div class="profile-line">Resume: <a href="${profile.resumeDownloadLink}" target="_blank" class="resume-link">Download Resume</a></div>
      
            </div>
        </div>`
    ];
    displayTerminalContent(homeContent);
}

function educationCommand() {
    const eduContent = education.map((edu, index) => `
        <div class="edu-timeline-card">
            <div class="edu-icon">${index === 0 ? '🎓' : index === 1 ? '📚' : '🏫'}</div>
            <div class="edu-content">
                <h3>${edu.degree}</h3>
                <div class="edu-meta">
                    <span class="edu-subject">${edu.subject}</span>
                    <span class="edu-duration">${edu.start} - ${edu.passed || 'Present'}</span>
                    <span class="edu-cgpa">${edu.cgpa || edu.currentCgpa}/${edu.outOf}</span>
                </div>
                <p class="edu-institute">${edu.institute}</p>
            </div>
            ${index < education.length - 1 ? '<div class="timeline-connector"></div>' : ''}
        </div>
    `).join('');
    displayTerminalContent(`<div class="edu-timeline">${eduContent}</div>`);
}

function projectsCommand() {
    const projectsHTML = `
        <div class="projects-grid">
            ${projects.map((project, index) => `
                <div class="project-card" style="animation-delay: ${index * 0.1}s">
                    <div class="project-image-container">
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        
                        ${project.technologies.length > 0 ? `
                            <div class="tech-stack">
                                ${project.technologies.map(tech => `
                                    <div class="tech-item">
                                        <img src="${tech.icon}" alt="${tech.key}" width="20" height="20">
                                        <span>${tech.key}</span>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                        
                        <div class="project-actions">
                            ${project.live_url ? `
                                <a href="${project.live_url}" 
                                   class="project-link"
                                   target="_blank"
                                   aria-label="View ${project.title} live demo">
                                    <span>🌐</span>
                                    <span>Live Demo</span>
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    displayTerminalContent(projectsHTML);
    addProjectInteractions();
}

function addProjectInteractions() {
    // Hover effect for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Click animation
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            anime({
                targets: card,
                scale: [0.98, 1],
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });
}

// Dock Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initial load
    homeCommand();

    // Dock interactions
    document.getElementById('home-dock').addEventListener('click', () => {
        anime({
            targets: '#home-dock',
            scale: [1, 1.2, 1],
            duration: 500,
            easing: 'easeOutExpo'
        });
        homeCommand();
    });

    document.getElementById('blog-dock').addEventListener('click', () => {
        anime({
            targets: '#blog-dock',
            scale: [1, 1.2, 1],
            duration: 500,
            easing: 'easeOutExpo'
        });
        blogCommand();
    });

    // New dock items
    const docks = {
        'skills-dock': skillsCommand,
        'education-dock': educationCommand,
        'projects-dock': projectsCommand
    };

    Object.entries(docks).forEach(([id, handler]) => {
        document.getElementById(id).addEventListener('click', () => {
            anime({
                targets: `#${id}`,
                scale: [1, 1.2, 1],
                duration: 500,
                easing: 'easeOutExpo'
            });
            handler();
        });
    });
});


function blogCommand() {
    const blogHTML = `
        <div class="carousel-container">
            <div class="carousel-track" id="blog-carousel">
                ${blogData.map(blog => `
                    <div class="carousel-slide">
                        <div class="blog-card">
                            <div class="blog-image-container">
                                <img src="${blog.image}" alt="${blog.title}" class="blog-image">
                                <div class="blog-gradient"></div>
                            </div>
                            <div class="blog-card-content">
                                <h3 class="blog-title">${blog.title}</h3>
                                <div class="blog-meta">
                                    <span class="blog-date">${blog.createdAt}</span>
                                    <div class="blog-tags">
                                        ${blog.tags?.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                                    </div>
                                </div>
                                <p class="blog-description">
                                    ${blog.description.replace(/\n\s+/g, ' ').substring(0, 350).trim()}...
                                </p>
                                <a href="${blog.link}" target="_blank" class="blog-read-more">
                                    <span>Continue Reading</span>
                                    <svg class="arrow-icon" viewBox="0 0 24 24" width="16" height="16">
                                        <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="carousel-controls">
                <div class="carousel-nav">
                    <button class="carousel-arrow prev" onclick="moveSlide(-1, 'blog')">‹</button>
                    <button class="carousel-arrow next" onclick="moveSlide(1, 'blog')">›</button>
                </div>
                <div class="carousel-dots" id="blog-dots"></div>
            </div>
        </div>
    `;
    displayTerminalContent(blogHTML);
    initCarousel('blog', blogData.length);
}

function skillsCommand() {
    const skillsHTML = `
        <div class="skills-scroller">
            ${skills.map(skill => `
                <div class="skill-card">
                    <img src="${skill.icon}" alt="${skill.name}" class="skill-icon">
                    <span class="skill-name">${skill.name}</span>
                </div>
            `).join('')}
        </div>
    `;
    displayTerminalContent(skillsHTML);
}


// Add these new functions
let currentSlide = {
    blog: 0,
    project: 0
};

function initCarousel(type, totalSlides) {
    const dotsContainer = document.getElementById(`${type}-dots`);
    dotsContainer.innerHTML = Array.from({length: totalSlides}, (_, i) => 
        `<span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}">${i + 1}</span>`
    ).join('');
    
    // Add click handlers to dots
    document.querySelectorAll(`#${type}-dots .dot`).forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            goToSlide(index, type);
        });
    });
}

function moveSlide(direction, type) {
    const totalSlides = type === 'blog' ? blogData.length : projects.length;
    currentSlide[type] = (currentSlide[type] + direction + totalSlides) % totalSlides;
    updateSlidePosition(type);
}

function goToSlide(index, type) {
    currentSlide[type] = index;
    updateSlidePosition(type);
}

function updateSlidePosition(type) {
    const carousel = document.getElementById(`${type}-carousel`);
    const slideWidth = carousel.offsetWidth; // Get full width of visible area
    
    carousel.style.transform = `translateX(-${currentSlide[type] * slideWidth}px)`;
    
    // Update dot indicators
    document.querySelectorAll(`#${type}-dots .dot`).forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide[type]);
    });
}

// Add proper event listeners for arrows
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('carousel-arrow')) {
        const type = e.target.classList.contains('prev') ? 
            e.target.nextElementSibling.id.replace('-dots', '') : 
            e.target.previousElementSibling.id.replace('-dots', '');
        const direction = e.target.classList.contains('prev') ? -1 : 1;
        moveSlide(direction, type);
    }
});

// Add click handler for image scaling
document.addEventListener('click', (e) => {
    const img = e.target.closest('.slide-image');
    if (img) {
        img.classList.toggle('zoomed');
        document.body.style.overflow = img.classList.contains('zoomed') ? 'hidden' : '';
    }
});

// Close zoom on click outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('zoomed')) {
        e.target.classList.remove('zoomed');
        document.body.style.overflow = '';
    }
});

// Update minimize button handler
document.querySelector('.terminal-controls span:nth-child(2)').addEventListener('click', function() {
    showRandomQuote();
    setTimeout(minimizeWindow, 1000); // Minimize after 1 second
});

function showRandomQuote() {
    const randomQuote = developerQuotes[Math.floor(Math.random() * developerQuotes.length)];
    const quoteElement = document.createElement('div');
    quoteElement.className = 'quote-floating';
    quoteElement.innerHTML = `
        <div class="quote-bubble">
            <p class="quote-text">${randomQuote}</p>
        </div>
    `;
    
    document.body.appendChild(quoteElement);
    
    // Animation for floating quote
    anime({
        targets: quoteElement,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 500,
        easing: 'easeOutQuad'
    });
    
    // Remove quote after animation
    setTimeout(() => {
        anime({
            targets: quoteElement,
            opacity: 0,
            translateY: -50,
            duration: 300,
            easing: 'easeInQuad',
            complete: () => quoteElement.remove()
        });
    }, 2000);
}

function minimizeWindow() {
    const terminal = document.querySelector('.terminal-window');
    const dock = document.querySelector('.dock');
    
    // Get positions
    const terminalRect = terminal.getBoundingClientRect();
    const dockRect = dock.getBoundingClientRect();
    
    // Calculate animation values
    const scaleFactor = 0.2;
    const targetX = dockRect.left + (dockRect.width / 2) - (terminalRect.width * scaleFactor / 2);
    const targetY = dockRect.top - (terminalRect.height * scaleFactor);
    
    anime({
        targets: terminal,
        scale: scaleFactor,
        translateX: targetX - terminalRect.left,
        translateY: targetY - terminalRect.top,
        duration: 600,
        easing: 'easeInOutQuad',
        complete: () => {
            terminal.style.transform = 'none';
            terminal.style.display = 'none';
            addMinimizedThumbnail();
        }
    });
}

function addMinimizedThumbnail() {
    const dock = document.querySelector('.dock');
    const thumbnail = document.createElement('div');
    thumbnail.className = 'dock-item minimized-window';
    thumbnail.innerHTML = '📁';
    
    thumbnail.addEventListener('click', () => {
        restoreWindow();
        thumbnail.remove();
    });
    
    dock.appendChild(thumbnail);
}

function restoreWindow() {
    const terminal = document.querySelector('.terminal-window');
    terminal.style.display = 'block';
    
    anime({
        targets: terminal,
        scale: [0.2, 1],
        translateY: [200, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutElastic(1, .5)'
    });
}

// Add to top of script.js
let isTerminalClosed = false;

// Red close button handler
document.querySelector('.terminal-controls span:nth-child(1)').addEventListener('click', showLockScreen);

function showLockScreen() {
    if (isTerminalClosed) return;
    
    const terminal = document.querySelector('.terminal-window');
    terminal.style.opacity = '0';

    // Create Sequoia-style lock screen
    const lockScreen = document.createElement('div');
    lockScreen.className = 'lock-screen';
    lockScreen.innerHTML = `
        <div class="sequoia-lock-content">
            <div class="profile-container">
                <div class="profile-image-wrapper">
                    <img src="${profile.image}" class="profile-image" alt="${profile.name}">
                </div>
                <div class="profile-name">${profile.name}</div>
            </div>
            
            <div class="time-container">
                <div class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                <div class="date">${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</div>
            </div>
            
            <div class="unlock-instruction">
                <div class="unlock-arrow">⌵</div>
                <div class="unlock-text">Click to unlock</div>
            </div>
        </div>
    `;

    // Add click handler to restore
    lockScreen.addEventListener('click', () => {
        anime({
            targets: lockScreen,
            opacity: 0,
            duration: 500,
            complete: () => {
                lockScreen.remove();
                terminal.style.opacity = '1';
                isTerminalClosed = false;
            }
        });
    });

    document.body.appendChild(lockScreen);
    isTerminalClosed = true;
    
    // Animate lock screen entrance
    anime({
        targets: lockScreen,
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuad'
    });
}

// Complete Window Management System
let windows = [];
let activeWindow = null;
let dragType = null;
const MIN_WIDTH = 300;
const MIN_HEIGHT = 200;

// Event Listeners
document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);

function handleMouseDown(e) {
    const header = e.target.closest('.terminal-header');
    const border = e.target.closest('.window-border');
    
    if (header) {
        dragType = 'header';
        activeWindow = header.closest('.terminal-window');
        dragState = {
            offsetX: e.clientX - activeWindow.offsetLeft,
            offsetY: e.clientY - activeWindow.offsetTop
        };
        bringToFront(activeWindow);
    }
    
    if (border) {
        dragType = 'border';
        activeWindow = border.closest('.terminal-window');
        dragState = {
            startX: e.clientX,
            startY: e.clientY,
            startWidth: activeWindow.offsetWidth,
            startHeight: activeWindow.offsetHeight,
            direction: border.dataset.direction
        };
        bringToFront(activeWindow);
    }
}

function handleMouseMove(e) {
    if (!activeWindow) return;
    
    if (dragType === 'header') {
        activeWindow.style.left = `${e.clientX - dragState.offsetX}px`;
        activeWindow.style.top = `${e.clientY - dragState.offsetY}px`;
    }
    
    if (dragType === 'border') {
        const deltaX = e.clientX - dragState.startX;
        const deltaY = e.clientY - dragState.startY;
        
        switch(dragState.direction) {
            case 'e':
                activeWindow.style.width = `${Math.max(MIN_WIDTH, dragState.startWidth + deltaX)}px`;
                break;
            case 's':
                activeWindow.style.height = `${Math.max(MIN_HEIGHT, dragState.startHeight + deltaY)}px`;
                break;
            case 'se':
                activeWindow.style.width = `${Math.max(MIN_WIDTH, dragState.startWidth + deltaX)}px`;
                activeWindow.style.height = `${Math.max(MIN_HEIGHT, dragState.startHeight + deltaY)}px`;
                break;
        }
    }
}

function handleMouseUp() {
    dragType = null;
    activeWindow = null;
}

// Enhanced Minimize
function minimizeWindow(terminal) {
    const clone = terminal.cloneNode(true);
    clone.classList.add('minimizing');
    
    const windowState = {
        element: clone,
        position: { 
            x: terminal.offsetLeft, 
            y: terminal.offsetTop,
            width: terminal.offsetWidth,
            height: terminal.offsetHeight
        }
    };
    
    windows.push(windowState);
    
    anime({
        targets: clone,
        scale: 0.2,
        translateY: 100,
        opacity: 0,
        duration: 300,
        easing: 'easeInQuad',
        complete: () => {
            document.body.removeChild(clone);
            addToDock(windowState);
        }
    });
}

// Enhanced Maximize
function toggleMaximize(terminal) {
    const windowState = windows.find(w => w.element === terminal);
    if (!windowState) return;
    
    if (windowState.isMaximized) {
        // Restore to initial size/position
        terminal.style.width = `${windowState.position.width}px`;
        terminal.style.height = `${windowState.position.height}px`;
        terminal.style.left = `${windowState.position.x}px`;
        terminal.style.top = `${windowState.position.y}px`;
        terminal.style.transform = 'none';
    } else {
        // Maximize to full screen
        windowState.position = {
            x: terminal.offsetLeft,
            y: terminal.offsetTop,
            width: terminal.offsetWidth,
            height: terminal.offsetHeight
        };
        
        terminal.style.width = '100vw';
        terminal.style.height = '100vh';
        terminal.style.left = '0';
        terminal.style.top = '0';
        terminal.style.transform = 'none';
    }
    
    windowState.isMaximized = !windowState.isMaximized;
    terminal.classList.toggle('maximized', windowState.isMaximized);
}

// Add window initialization logic
function createTerminalWindow() {
    const terminal = document.createElement('div');
    terminal.className = 'terminal-window';
    
    // Set initial size and position
    terminal.style.width = '800px';
    terminal.style.height = '500px';
    terminal.style.left = '50%';
    terminal.style.top = '50%';
    terminal.style.transform = 'translate(-50%, -50%)';
    
    // Store window state
    windows.push({
        element: terminal,
        position: {
            x: window.innerWidth/2 - 400, // 800px width / 2
            y: window.innerHeight/2 - 250, // 500px height / 2
            width: 800,
            height: 500
        },
        isMaximized: false
    });
    
    document.body.appendChild(terminal);
    initWindow(terminal);
}

// Window state management
let windowStates = new Map();
let minimizedWindows = [];
let currentMaximizeState = 'none'; // none, full, left, right

function toggleMaximize(event) {
    const terminal = document.querySelector('.terminal-window');
    const currentState = windowStates.get(terminal) || {
        width: terminal.style.width,
        height: terminal.style.height,
        left: terminal.style.left,
        top: terminal.style.top
    };

    // Detect double click vs single click
    if (event.detail === 2) {
        // Double click - toggle full screen
        handleFullScreenMaximize(terminal, currentState);
    } else {
        // Single click - cycle through states
        handleSingleClickMaximize(terminal, currentState);
    }
}

function handleFullScreenMaximize(terminal, currentState) {
    if (currentMaximizeState === 'full') {
        // Restore
        restoreWindow(terminal, currentState);
        currentMaximizeState = 'none';
    } else {
        // Full screen maximize
        windowStates.set(terminal, {
            width: terminal.style.width,
            height: terminal.style.height,
            left: terminal.style.left,
            top: terminal.style.top
        });
        
        terminal.style.width = '100vw';
        terminal.style.height = '100vh';
        terminal.style.left = '0';
        terminal.style.top = '0';
        terminal.style.borderRadius = '0';
        currentMaximizeState = 'full';
    }
}

function handleSingleClickMaximize(terminal, currentState) {
    const halfWidth = window.innerWidth / 2;
    
    switch (currentMaximizeState) {
        case 'none':
            // Snap to right
            windowStates.set(terminal, currentState);
            terminal.style.width = `${halfWidth}px`;
            terminal.style.height = '100vh';
            terminal.style.left = `${halfWidth}px`;
            terminal.style.top = '0';
            currentMaximizeState = 'right';
            break;
            
        case 'right':
            // Snap to left
            terminal.style.width = `${halfWidth}px`;
            terminal.style.height = '100vh';
            terminal.style.left = '0';
            terminal.style.top = '0';
            currentMaximizeState = 'left';
            break;
            
        case 'left':
            // Restore
            restoreWindow(terminal, windowStates.get(terminal));
            currentMaximizeState = 'none';
            break;
            
        case 'full':
            // Restore
            restoreWindow(terminal, windowStates.get(terminal));
            currentMaximizeState = 'none';
            break;
    }
}

function restoreWindow(terminal, savedState) {
    Object.assign(terminal.style, savedState);
    windowStates.delete(terminal);
}

function minimizeWindow() {
    const terminal = document.querySelector('.terminal-window');
    const minimizedState = {
        id: Date.now(),
        content: terminal.innerHTML,
        state: windowStates.get(terminal) || {
            width: terminal.style.width,
            height: terminal.style.height,
            left: terminal.style.left,
            top: terminal.style.top
        }
    };
    
    minimizedWindows.push(minimizedState);
    addMinimizedThumbnail(minimizedState.id);
    
    anime({
        targets: terminal,
        scale: [1, 0.2],
        opacity: [1, 0],
        duration: 300,
        easing: 'easeOutQuad',
        complete: () => {
            terminal.style.display = 'none';
        }
    });
}

function addMinimizedThumbnail(id) {
    const dock = document.querySelector('.dock');
    const thumbnail = document.createElement('div');
    thumbnail.className = 'dock-item minimized-window';
    thumbnail.dataset.windowId = id;
    thumbnail.innerHTML = '📁';
    
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
    const terminal = document.querySelector('.terminal-window');
    
    terminal.innerHTML = minimizedWindow.content;
    Object.assign(terminal.style, minimizedWindow.state);
    terminal.style.display = 'block';
    
    anime({
        targets: terminal,
        scale: [0.2, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    minimizedWindows.splice(windowIndex, 1);
}

// Event listeners
document.querySelector('.terminal-header').addEventListener('dblclick', toggleMaximize);
document.querySelector('.terminal-controls span:nth-child(3)').addEventListener('click', toggleMaximize);
document.querySelector('.terminal-controls span:nth-child(2)').addEventListener('click', minimizeWindow);

// Window resize handling with boundary constraints
function initializeWindowResize() {
    const terminal = document.querySelector('.terminal-window');
    
    // Create resize handles if they don't exist
    if (!terminal.querySelector('.resize-handle')) {
        const directions = ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'];
        directions.forEach(dir => {
            const handle = document.createElement('div');
            handle.className = `resize-handle resize-${dir}`;
            terminal.appendChild(handle);
        });
    }

    let isResizing = false;
    let currentDirection = '';
    let startX, startY, startWidth, startHeight, startLeft, startTop;

    const MIN_WIDTH = 400;
    const MIN_HEIGHT = 300;
    const PADDING = 10; // Padding from viewport edges

    function getMaxDimensions() {
        return {
            maxWidth: window.innerWidth - PADDING * 2,
            maxHeight: window.innerHeight - PADDING * 2
        };
    }

    function constrainDimensions(width, height, left, top) {
        const { maxWidth, maxHeight } = getMaxDimensions();
        
        // Constrain size
        width = Math.max(MIN_WIDTH, Math.min(width, maxWidth));
        height = Math.max(MIN_HEIGHT, Math.min(height, maxHeight));
        
        // Constrain position
        left = Math.max(PADDING, Math.min(left, window.innerWidth - width - PADDING));
        top = Math.max(PADDING, Math.min(top, window.innerHeight - height - PADDING));
        
        return { width, height, left, top };
    }

    function startResize(e) {
        if (!e.target.classList.contains('resize-handle')) return;
        
        isResizing = true;
        currentDirection = e.target.className.split('resize-')[1];
        
        const rect = terminal.getBoundingClientRect();
        startX = e.clientX;
        startY = e.clientY;
        startWidth = rect.width;
        startHeight = rect.height;
        startLeft = rect.left;
        startTop = rect.top;
        
        terminal.classList.add('resizing');
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
        e.preventDefault();
    }

    function resize(e) {
        if (!isResizing) return;

        let newWidth = startWidth;
        let newHeight = startHeight;
        let newLeft = startLeft;
        let newTop = startTop;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        // Handle different resize directions
        if (currentDirection.includes('e')) newWidth = startWidth + dx;
        if (currentDirection.includes('w')) {
            newWidth = startWidth - dx;
            newLeft = startLeft + dx;
        }
        if (currentDirection.includes('s')) newHeight = startHeight + dy;
        if (currentDirection.includes('n')) {
            newHeight = startHeight - dy;
            newTop = startTop + dy;
        }

        // Apply constraints
        const constrained = constrainDimensions(newWidth, newHeight, newLeft, newTop);
        
        // Apply new dimensions and position
        terminal.style.width = `${constrained.width}px`;
        terminal.style.height = `${constrained.height}px`;
        terminal.style.left = `${constrained.left}px`;
        terminal.style.top = `${constrained.top}px`;
    }

    function stopResize() {
        if (!isResizing) return;
        
        isResizing = false;
        terminal.classList.remove('resizing');
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
    }

    // Add event listeners
    terminal.addEventListener('mousedown', startResize);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const rect = terminal.getBoundingClientRect();
        const constrained = constrainDimensions(
            rect.width,
            rect.height,
            rect.left,
            rect.top
        );
        
        terminal.style.width = `${constrained.width}px`;
        terminal.style.height = `${constrained.height}px`;
        terminal.style.left = `${constrained.left}px`;
        terminal.style.top = `${constrained.top}px`;
    });
}

// Initialize resize functionality
document.addEventListener('DOMContentLoaded', initializeWindowResize);

// Window management states and theme
let currentTheme = 'light';
let windowState = 'normal';

function initializeWindowControls() {
    const terminal = document.querySelector('.terminal-window');
    const greenButton = document.querySelector('.terminal-controls span:nth-child(3)');
    
    // Create simplified window menu
    const menuTemplate = `
        <div class="window-menu">
            <div class="menu-item" data-action="full-screen">
                <div class="menu-icon">⛶</div>
                <span>Enter Full Screen</span>
            </div>
            <div class="menu-item" data-action="left-half">
                <div class="menu-icon">◧</div>
                <span>Tile Window to Left of Screen</span>
            </div>
            <div class="menu-item" data-action="right-half">
                <div class="menu-icon">◨</div>
                <span>Tile Window to Right of Screen</span>
            </div>
        </div>
    `;
    
    const menu = document.createElement('div');
    menu.innerHTML = menuTemplate;
    menu.className = 'window-menu-container';
    terminal.appendChild(menu);
    
    // Show menu on hover over green button
    greenButton.addEventListener('mouseenter', () => {
        menu.classList.add('show');
    });
    
    menu.addEventListener('mouseleave', () => {
        menu.classList.remove('show');
    });
    
    // Handle menu item clicks
    menu.addEventListener('click', (e) => {
        const menuItem = e.target.closest('.menu-item');
        if (!menuItem) return;
        
        const action = menuItem.dataset.action;
        handleWindowAction(action, terminal);
        menu.classList.remove('show');
    });
}

function handleWindowAction(action, terminal) {
    const { innerWidth: w, innerHeight: h } = window;
    
    const states = {
        'full-screen': {
            width: '100vw',
            height: '100vh',
            left: '0',
            top: '0',
            borderRadius: '0'
        },
        'left-half': {
            width: '50vw',
            height: '100vh',
            left: '0',
            top: '0',
            borderRadius: '0 10px 10px 0'
        },
        'right-half': {
            width: '50vw',
            height: '100vh',
            left: '50vw',
            top: '0',
            borderRadius: '10px 0 0 10px'
        }
    };
    
    const newState = states[action];
    if (!newState) return;
    
    // Save current state before applying new one
    if (!terminal.dataset.previousState) {
        terminal.dataset.previousState = JSON.stringify({
            width: terminal.style.width,
            height: terminal.style.height,
            left: terminal.style.left,
            top: terminal.style.top,
            borderRadius: terminal.style.borderRadius
        });
    }
    
    // Apply new state with animation
    Object.assign(terminal.style, newState);
    terminal.setAttribute('data-state', action);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initializeWindowControls();
    initializeWindowResize();
});

// Add menubar implementation
function initializeMenuBar() {
    const menuBar = document.createElement('div');
    menuBar.className = 'menu-bar';
    menuBar.innerHTML = `
        <div class="menu-bar-left">
            <div class="apple-menu">
                <svg class="apple-logo" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                </svg>
            </div>
            <div class="app-name">Portfolio</div>
        </div>
        <div class="menu-bar-center">
            <div class="menu-item" id="menu-trigger">Menu</div>
        </div>
        <div class="menu-bar-right">
            <div class="theme-switcher">
                <span class="theme-icon light">☀️</span>
                <span class="theme-icon dark">🌙</span>
            </div>
        </div>
    `;
    
    document.body.insertBefore(menuBar, document.body.firstChild);
    
    // Initialize dropdown menu
    const menuTrigger = document.getElementById('menu-trigger');
    const menuDropdown = document.createElement('div');
    menuDropdown.className = 'menu-dropdown';
    menuDropdown.innerHTML = `
        <div class="menu-item" data-shortcut="⌘A">Item A</div>
        <div class="menu-item" data-shortcut="⌘B">Item B</div>
        <div class="menu-item" data-shortcut="⌘C">Item C</div>
        <div class="menu-separator"></div>
        <div class="menu-item submenu">
            Submenu A
            <span class="submenu-arrow">›</span>
        </div>
        <div class="menu-item submenu">
            Submenu B
            <span class="submenu-arrow">›</span>
        </div>
    `;
    menuTrigger.appendChild(menuDropdown);
    
    // Theme switching
    const themeSwitcher = document.querySelector('.theme-switcher');
    themeSwitcher.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // Menu interactions
    menuTrigger.addEventListener('mouseenter', () => {
        menuDropdown.classList.add('show');
    });
    
    menuTrigger.addEventListener('mouseleave', (e) => {
        if (!menuDropdown.contains(e.relatedTarget)) {
            menuDropdown.classList.remove('show');
        }
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initializeMenuBar();
    initializeWindowControls();
});

// Dock animations and functionality
function initializeDock() {
    const dock = document.querySelector('.dock');
    const dockItems = dock.querySelectorAll('.dock-item');
    
    // Add data-name attributes for tooltips
    const names = ['Home', 'Projects', 'Skills', 'Blog', 'Contact'];
    dockItems.forEach((item, index) => {
        item.setAttribute('data-name', names[index]);
    });
    
    // Mouse move animation
    dock.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        
        dockItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemX = rect.left + rect.width / 2;
            const distance = Math.abs(mouseX - itemX);
            const scale = Math.max(1, 1.5 - distance / 100);
            
            item.style.transform = `scale(${scale})`;
            
            // Add vertical movement
            if (scale > 1.2) {
                const lift = Math.min((scale - 1) * 20, 10);
                item.style.transform += ` translateY(-${lift}px)`;
            }
        });
    });
    
    // Reset animations when mouse leaves dock
    dock.addEventListener('mouseleave', () => {
        dockItems.forEach(item => {
            item.style.transform = '';
        });
    });
    
    // Click handling and active states
    dockItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active state from all items
            dockItems.forEach(i => i.classList.remove('active'));
            // Add active state to clicked item
            item.classList.add('active');
            
            // Add bounce animation
            item.style.animation = 'dockBounce 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            item.addEventListener('animationend', () => {
                item.style.animation = '';
            }, { once: true });
        });
    });
}

// Add bounce animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes dockBounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2) translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Initialize dock on load
document.addEventListener('DOMContentLoaded', () => {
    initializeDock();
});

