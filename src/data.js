import { images } from './constants';

const data = {
    skills: [
        {
            name: 'HTML5',
            img: `${images.html5}`
        },
        {
            name: 'CSS3',
            img: `${images.css3}`
        },
        {
            name: 'JAVASCRIPT',
            img: `${images.javascript}`
        },
        {
            name: 'REACT JS',
            img: `${images.react}`
        },
        {
            name: 'PHP',
            img: `${images.php}`
        },
        {
            name: 'NODE JS',
            img: `${images.node}`
        },
        {
            name: 'TAILWIND CSS',
            img: `${images.tailwind_css}`
        },
        {
            name: 'MONGODB',
            img: `${images.mongodb}`
        },
        {
            name: 'MYQSL',
            img: `${images.mysql}`
        },
        {
            name: 'SANITY',
            img: `${images.sanity}`
        },
        {
            name: 'SASS',
            img: `${images.sass}`
        },
        {
            name: 'FIREBASE',
            img: `${images.firebase}`
        },
        {
            name: 'PYTHON',
            img: `${images.python}`
        },
        {
            name: 'GRAPHQL',
            img: `${images.qraphQL}`
        },
    ],

    tools: [
        {
            name: 'VSCODE',
            img: `${images.vscode}`
        },
        {
            name: 'PHOTOSHOP',
            img: `${images.photoshop}`
        },
        {
            name: 'ADOBE XD',
            img: `${images.adobe_xd}`
        },
        {
            name: 'COMMAND LINE',
            img: `${images.command}`
        },
        {
            name: 'GIT',
            img: `${images.git}`
        },
        {
            name: 'ILLUSTRATOR',
            img: `${images.illustrator}`
        },
        {
            name: 'NPM',
            img: `${images.npm}`
        },
        {
            name: 'AUDITION',
            img: `${images.audition}`
        },
    ],
    
    works: [
        {
            title: "Construction Landing Page",
            desc: `Is a landing page that gives detailed information about the company. This application is also e-commerce oriented because it serves as a sales platform where users and customers can also purchase building items.`,
            stacks: ['HTML5', 'CSS3', 'Javascript', 'GSAP'],
            demoLink: "https://micdev123.github.io/construction_website_1.0/",
            gitHubLink: "https://github.com/micdev123/construction_website_1.0",
            img: `${images.construction}`,
        },
        {
            title: "E-commerce",
            desc: `Is a full-stack web-based application. This online e-commerce platform provides users with a list of products allowing them to make orders, view their order history, or delete their orders. 
            This application also has an admin panel through which the admin can create more products, edit or delete a product, view orders and mark them deliver after being paid for and delivered to the user.`,
            stacks: ['React', 'CSS3', 'Express', 'MongoDB', 'Material UI', 'Firebase'],
            demoLink: "https://e-commerce--mern.vercel.app/",
            gitHubLink: "https://github.com/micdev123/e-commerce_project",
            img: `${images.e_commerce}`,
        },
        {
            title: "HooBank Landing Page",
            desc: `Is the next-generation payment method. A landing page that gives detailed information about the application.`,
            stacks: ['HTML5', 'Tailwind CSS', 'Javascript'],
            demoLink: "https://micdev123.github.io/hooBank_project/",
            gitHubLink: "https://github.com/micdev123/hooBank_project",
            img: `${images.hoobank}`,
        },

        {
            title: "Blogging",
            desc: `Is a full-stack web-based application where users can read, like, and comment on a post, write, edit, or delete their own post. Its functionality is similar to other blogging platforms like Hashnode, Medium, and DEV, but simple in design and easy to navigate.`,
            stacks: ['React', 'CSS3', 'Express', 'MongoDB', 'Material UI', 'Firebase'],
            demoLink: "https://blogging-mern.vercel.app/",
            gitHubLink: "https://github.com/micdev123/blogging_project",
            img: `${images.blogging}`,
        },
    ],
    

    challenges: [
        {
            title: "Expenses Chart",
            demoLink: "https://micdev123.github.io/expenses-chart-component/",
            gitHubLink: "https://github.com/micdev123/expenses-chart-component",
            img: `${images.expenses_chart}`,
        },
        {
            title: "Interactive Card Details Form",
            demoLink: "https://micdev123.github.io/interactive-card-details-form/",
            gitHubLink: "https://github.com/micdev123/interactive-card-details-form",
            img: `${images.interactive_card_details}`,
        },
        {
            title: "Interactive Comments Section",
            demoLink: "https://micdev123.github.io/interactive-comments-section/",
            gitHubLink: "https://github.com/micdev123/interactive-comments-section",
            img: `${images.interactive_comments}`,
        },
        {
            title: "Bookmark Landing Page",
            demoLink: "https://micdev123.github.io/bookmark-landing-page/",
            gitHubLink: "https://github.com/micdev123/bookmark-landing-page",
            img: `${images.bookmark_landing}`,
        },
        
    ]
}

export default data;