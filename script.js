// Data
const profile = {
    name: "Samayun Miah Chowdhury",
    image: "https://avatars.githubusercontent.com/u/31636535?v=4",
    about: "Marathonist | Backend Developer | DevOps Practitioner",
    address: "Dhaka",
    dob: '12 April 2000',
    email: "samayun.m.chowdhury@gmail.com",
    phone: "+8801798037068",
    website: "https://samayun.vercel.app",
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
        description: `Redis এর পুর্নরুপ REmote DIstributed Server. এটি একটি ওপেন সোর্স In memory key-value data store. একটি ইতালিয়ান স্টার্টআপ রিয়েল টাইম ওয়েব লগ এনালাইজার বানাতে স্কেলেবিলিটি ইম্প্রভমেন্টের জন্য স্টার্টআপ রিয়েল টাইম ওয়েব লগ এনালাইজার বানাতে স্কেলেবিলিটি ইম্প্রভমেন্টের জন্য এটি ডেভলপ করেছিলো।..`,
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
      এপ্লিকেশনে অনেক ডাটা খুব কমই আপডেট করতে হয় যেমন: কোম্পানির নাম, লোগো, ক্যাটাগরি সমুহ, এবাউট পেজের ডাটা,পোস্ট, একটা প্রোডাক্টের মুল ইনফরমেশন ইত্যাদি ইত্যাদি ।
  
      খুব আপডেট হয় কিন্তু অনেক রিড করতে হয় এমন ডাটা ক্যাশ করলে ফাস্টার রেস্পন্স পাওয়া যায় । ধরেন এই পোস্ট/ব্লগ ই আমি এখন লিখছি, বানান ঠিক করতে ধরেই নিলাম কয়েকবার আপডেট করতে হলো ।
  
      কিন্তু এরপর আর কখনো আপডেট করবো বলে মনে হয় না। রিড কিন্তু ৫/১০ টা করে একবছর পরেও ২/৩ টা ভিজিট হতেই পারে ৷
  
      একটা ই-কমার্সের প্রডাক্ট এর মুল ইনফরমেশন নাম, সাইজ, কালার,ডিটেলস, ইমেজগুলোর লিংক, ইত্যাদি কিন্তু ডাটাবেজে একবার ক্রিয়েট হয়ে গেলে আর প্রতিদিন আপডেট করতে হয় না ।
  
      ডিস্ক বেজড স্টোরেজে ডাটা রিড/রাইট করতে তুলনামূলকভাবে মেমরি থেকে বেশি সময় লাগে ।
  
      অতএব পরবর্তীতে ইউজার ওই ডাটা দেখতে চাইলে মেমরি থেকে দেখালেই ফাস্টার রেস্পন্স হলো
  
      প্রায় ডাটাবেজ থেকেই রেডিসের লেটেন্সি অনেক কম |
  
      এছাড়া চাইলেই, ফুল পেজও ক্যাশিং করা যায় ৷
  
      রেডিস হচ্ছে ক্যাশিং জগতের জন উইক।
  
      নাম চিনলেই সবাই চেনে এবং বড় ভাই হিসেবে সালাম দেয় ( নো র‍্যাগিং) |`,
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
        description: `ফেইসবুক, ইউটিউবে প্রতিনিয়ত ফাইল আপলোড করা খুবই কমন কাজ । ধরেন অনেক ইউজার কে ই-মেইল পাঠানোর api, বড় ফাইল আপলোড, বিভিন্ন ডাটা সোর্স থেকে ডাটা মাইগ্রেশন ইত্যাদি বিভিন্ন ভারী কাজের api ইমিডিয়েট রেস্পন্স পাঠানোর দরকার নেই, কয়েক সেকেন্ড, মিনিট দেরি হলেও সমস্যা নেই বরং কাজ হয়ে গেলেই হলো ৷ এসব কাজ Queue তে রেখে দিলে ভালো পারফর্ম্যান্স পাওয়া যায় ।
  
      ধরেন একটা ব্লগ পোস্টের কত ভিউ হইছে, সেটা কি এখনই রেস্পন্স দেয়া খুবই জরুরি?
      
      ৫ মিনিটে ২০ হাজার ভিউ হইছে এই স্কেলের কথা চিন্তা করেন।
      
      একই ব্লগ পোস্টের জন্য ৫ মিনিটে ডাটাবেজে ২০ হাজার সেপারেট আপডেট অপারেশন কি ভালো হবে নাকি কিউ থেকে মার্জ হয়ে একটা বাল্ক রাইট অপারেশন ডাটাবেজের performance এর জন্য ভালো হবে???
      
      ৫ মিনিট পর পর বাল্ক অপারেশন করলেই তো হলো? তাই-না.
      
      কয়েক হাজার ইমেইল পাঠানোর জন্য কত সেকেন্ড সময় লাগতে পারে?? এত সময় কি ফ্রন্টেন্ডের রেস্পন্স পাঠানোর জন্য ব্যয় করা খুবই জরুরি??
      
      একটা ১ জিবির ফাইল আপলোড ব্যাকগ্রাউন্ডে প্রসেস করা ভালো নাহ??
      
      Job Queue. Scheduler Queue, Message Queue কিওয়ার্ড সার্চ দিলেও অনেক তথ্য পেয়ে যাবেন।
      
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
        description: `Kahoot নামে একটা ওয়েবসাইট আছে কুইজ গেম খেলা যায়, যেকোনো মাল্টি প্লেয়ার গেমেই টপ স্কোরার লিস্ট থাকে ।
      
      আপনার এপ্লিকেশনে ৫০ টি গেম আছে, ৫০ টি গেমের ই লিডারবোর্ড শো করাবেন ইউজারকে ।
      
      ডাটাবেজ থেকে কুয়েরী করলে কী ঘটবে এখন বুঝতেছেন ??
      
      সকেট দিয়ে কানেক্ট করে এত্তোগুলো কুয়েরী করতে থাকবেন….?
      
      নাকি টাইম সিরিজ ফিচার ইউজ করবেন??
      
      যে মেথড ই ফলো করেন Constant Complexity আছে তো?
      
      রেডিসের রয়েছে নিজস্ব বিল্ট ইন সর্টেড সেট নামক ডাটা টাইপ ।
      
      স্কোরিং কিংবা ভ্যালু দিয়েও সর্ট করা যায়।
      
      কি-ভ্যালু ফরম্যাটে ডাটা থাকায় ৫০ গেম কে ৫০ টা কন্সটেন্ট কম্পলেক্সিটি ওয়ালা কুয়েরীতেই ফেচ করা যাবে |
      
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
        title: "রিয়েক্ট জেএস কোড স্পলিটিং ও লেজি লোডিং কম্পোন্যান্ট",
        description: `কোরিয়ার থ্রিলার মুভি দেখেন,মানি হেইস্ট,গট দেখছেন?
      যদি দেখে থাকেন,
      সাসপেন্সের টেলায় ঘুম আসে না তাই-না?
      আজকে আমি রিয়েক্টের সাসপেন্স নিয়ে কথা বলবো ৷
      কিন্তু আমরা তোহ প্রোগ্রামার। অলস মস্তিষ্ক তাই কোড বার বার লিখতে ভাল্লাগে না 🙄
      রিফেক্টর,ফাংশন, রিইউজেবল কম্পোনেন্ট বানাতে অভ্যস্ত হয়ে পড়েছি আর দিন দিন অলস(লেজি) হচ্ছি ।
      আমি কথা বলছি লেজি লোডিং নিয়ে৷ `,
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
    { name: "Nest JS", icon: `https://nestjs.com/logo-small-gradient.76616405.svg` },
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
    //  {
    //    name: "Vue.js",
    //    icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png",
    //  },
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

const work = [
    {
        position: 'Backend Developer',
        company: 'Sayburgh Solutions Ltd.',
        start: '26 June 2021',
        end: '31 July 2023',
        website: 'https://sayburgh.com',
        responsibility: [
            `Refactored & optimized some expensive db queries for SomoyNews API* Developed a Video On Demand
        (VOD) application similar to HoiChoi, Chorkie .Estimating at least 100K+ requests per day`,
            `Developed a Human Resource Management Saas product`,
            `Built an special plugin to optimize read operations performance & reduced complex join queries`,
            `Built internal tools, wrote scripts which were helpful for faster communication on teams`,
            `Implemented optimization to reduced complex join queries by ~ 35 % on the backend`,
            `Tools & Concepts I am used to there: Nest.js, MongoDB,Redis,Docker,TypeScript, Cloudflare Services
        (Serverless functions,Stream), Domain Driven Design, GitHook`,
            `Redis Lock, Redis Stream, Redis Transaction`,
            `Multi Tenant setup on a hybrid architecture project`,
            `Tools & Concepts I am used to there: Nest.js, MongoDB,Redis,Docker,TypeScript, Cloudflare Services
        (Serverless functions,Stream), Domain Driven Design, GitHook`
        ],
    },
    {
        position: 'Sr. Software Engineer',
        company: 'RedQ',
        start: '23 September 2024',
        end: 'Present',
        website: 'https://redq.io',
        responsibility: [
            `Exploring Elastic Search,Kafka architectures....`,
            `TinyBird Analytics`,
            `Change Data capture using sequin`
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

    // {
    //     id: 2,
    //     category: "backend",
    //     title: "সময়ের স্কুল",
    //     description: "Somoy School is an Edu Tech Platform",
    //     features: [
    //         `MongoDB Aggregation Framework`,
    //         `Cloudflare Stream`,
    //         `Cloud Function for media access authorization on the fly`,
    //     ],
    //     technologies: [
    //         {
    //             key: "Redis",
    //             icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redis/redis.png",
    //         },
    //         {
    //             key: "Docker",
    //             icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png",
    //         },
    //         { key: "Nest JS", icon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDlYKWwiHIBw0AwCCpREi9UdXkn0JlZkyCw&s` },
    //         { key: "MongoDB", icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" },
    //         {
    //             key: "Cloudflare Stream",
    //             icon: "https://cdn-1.webcatalog.io/catalog/cloudflare-stream/cloudflare-stream-icon-filled-256.png?v=1675613678839",
    //         },
    //     ],
    //     live_url: "https://somoy.school",
    //     image: "https://samayun.vercel.app/assets/image/work/somoySchool.jpg",
    //     scrollTime: 5,
    // },
    {
        id: 11,
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
];

const education = [
    {
        degree: 'Bachelor of Science (B.Sc.)',
        subject: 'Computer Science Engineering',
        institute: 'Green University of Bangladesh, Dhaka',
        start: '2021',
    },
    {
        degree: 'Diploma In Engineering',
        subject: 'Computer Technology',
        institute: 'Moulvibazar Polytechnic Institute , Moulvibazar',
        start: '2016',
        passed: '2020',
    },
    {
        degree: 'SSC',
        subject: 'Science',
        institute: 'Nabigonj JK Model High School, Nabigonj, Habiganj',
        start: '2014',
        passed: '2016',
    },
];

// Terminal Functions
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

// Command Functions
function homeCommand() {
    const homeContent = [
        'Samayun Miah Chowdhury - Profile\n',
        `Name:    ${profile.name}`,
        `About:   ${profile.about}`,
        `Email:   ${profile.email}`,
        `GitHub:  ${profile.github}`,
        `Resume:  ${profile.resumeDownloadLink}\n`,
        'Type "help" for available commands'
    ];
    displayTerminalContent(homeContent);
}

function blogCommand() {
    const blogHTML = `
        <div class="blog-grid">
            ${blogData.map(blog => `
                <div class="blog-card">
                    <img src="${blog.image}" alt="${blog.title}">
                    <div class="blog-content">
                        <h3>${blog.title}</h3>
                        <p>${blog.description}</p>
                        <div class="blog-meta">
                            <span>${blog.createdAt}</span>
                            <a href="${blog.link}" target="_blank">Read more →</a>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    displayTerminalContent(blogHTML);
}

// New command functions
function skillsCommand() {
    const skillsHTML = `
        <div class="skills-grid">
            ${skills.map(skill => `
                <div class="skill-card">
                    <img src="${skill.icon}" alt="${skill.name}">
                    <span>${skill.name}</span>
                </div>
            `).join('')}
        </div>
    `;
    displayTerminalContent(skillsHTML);
}

function educationCommand() {
    const eduContent = education.map(edu => `
        <div class="edu-card">
            <h3>${edu.degree}</h3>
            <p>${edu.subject}</p>
            <p>${edu.institute}</p>
            <p>${edu.start} - ${edu.passed || 'Present'}</p>
        </div>
    `).join('');
    displayTerminalContent(`<div class="edu-grid">${eduContent}</div>`);
}

function projectsCommand() {
    const projectsHTML = `
        <div class="projects-grid">
            ${projects.map(project => `
                <div class="project-card">
                    <img src="${project.image}" alt="${project.title}">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${project.technologies.map(tech => `
                            <img src="${tech.icon}" alt="${tech.key}" title="${tech.key}">
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    displayTerminalContent(projectsHTML);
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


