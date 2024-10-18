import { v4 as uuidv4 } from 'uuid';
import React, { useEffect } from 'react';

export const allCourses = [
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Beginner's Guide to Design",
        author: 'By Ronald Richards',
        rating: '1200',
        content: '155 Lectures. Beginner',
        cost: ' 149.9',
        intro: 'This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.'
        
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Intermediate Design",
        author: 'By Jane Doe',
        rating: '850',
        content: '200 Lectures. Intermediate',
        cost: ' 199.9',
        intro: 'This course focuses on enhancing your design skills through hands-on projects and real-world applications, preparing you for intermediate challenges in design.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Advanced UX UI Design",
        author: 'By John Smith',
        rating: '600',
        content: '250 Lectures. Advanced',
        cost: ' 249.9',
        intro: 'Explore advanced topics in UX/UI design, including user research, prototyping, and usability testing to create highly effective digital products.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Web Development Bootcamp",
        author: 'By Emily Johnson',
        rating: '1400',
        content: '300 Lectures. Beginner to Advanced',
        cost: ' 299.9',
        intro: 'A comprehensive bootcamp that covers front-end and back-end development, enabling you to build and deploy fully functional web applications.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "JavaScript Essentials",
        author: 'By Michael Brown',
        rating: '950',
        content: '150 Lectures. Beginner',
        cost: ' 179.9',
        intro: 'Master the fundamentals of JavaScript, the language of the web, with this introductory course designed for complete beginners.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "React for Beginners",
        author: 'By Sarah Lee',
        rating: '1100',
        content: '180 Lectures. Beginner to Intermediate',
        cost: ' 189.9',
        intro: 'Learn how to build dynamic web applications using React, a powerful library for building user interfaces.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Mastering CSS",
        author: 'By David Williams',
        rating: '700',
        content: '130 Lectures. Intermediate',
        cost: ' 159.9',
        intro: 'Delve into advanced CSS techniques and discover how to create stunning layouts and styles for your web projects.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Python Programming 101",
        author: 'By Laura Kim',
        rating: '1600',
        content: '220 Lectures. Beginner',
        cost: ' 209.9',
        intro: 'An entry-level course designed to introduce you to Python programming and its applications in data analysis and web development.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Full-Stack Developer Course",
        author: 'By Chris Evans',
        rating: '2000',
        content: '350 Lectures. Beginner to Advanced',
        cost: ' 349.9',
        intro: 'Become a full-stack developer by learning both front-end and back-end technologies and frameworks.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Graphic Design Masterclass",
        author: 'By Anna Thompson',
        rating: '800',
        content: '280 Lectures. Advanced',
        cost: ' 259.9',
        intro: 'Master the art of graphic design, from conceptualization to execution, through practical projects and critiques.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Digital Marketing Basics",
        author: 'By Daniel Martinez',
        rating: '1300',
        content: '190 Lectures. Beginner to Intermediate',
        cost: ' 199.9',
        intro: 'Learn the fundamentals of digital marketing, including SEO, social media, and content marketing strategies.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Data Science with Python",
        author: 'By Olivia Adams',
        rating: '1500',
        content: '320 Lectures. Intermediate to Advanced',
        cost: ' 299.9',
        intro: 'Explore the world of data science using Python, and learn to analyze and visualize data effectively.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Introduction to AI and Machine Learning",
        author: 'By Jessica Green',
        rating: '1000',
        content: '200 Lectures. Beginner to Advanced',
        cost: ' 229.9',
        intro: 'Get started with artificial intelligence and machine learning concepts, tools, and real-world applications.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Cloud Computing Essentials",
        author: 'By Robert White',
        rating: '900',
        content: '150 Lectures. Intermediate',
        cost: ' 219.9',
        intro: 'Understand the basics of cloud computing, including different models and services, and their practical uses.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "SEO for Beginners",
        author: 'By Alice Brown',
        rating: '1100',
        content: '100 Lectures. Beginner',
        cost: ' 159.9',
        intro: 'Learn the essentials of search engine optimization to improve your website\'s visibility and rankings.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Introduction to Blockchain Technology",
        author: 'By Charlie Black',
        rating: '750',
        content: '150 Lectures. Beginner',
        cost: ' 199.9',
        intro: 'Discover the fundamentals of blockchain technology and its potential applications across various industries.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Advanced Excel Skills",
        author: 'By Emily Davis',
        rating: '950',
        content: '130 Lectures. Intermediate',
        cost: ' 139.9',
        intro: 'Enhance your Excel skills with advanced techniques including complex formulas, data analysis, and visualization tools.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Data Analysis and Visualization",
        author: 'By Mark Taylor',
        rating: '800',
        content: '160 Lectures. Intermediate',
        cost: ' 179.9',
        intro: 'Learn how to analyze data and create compelling visualizations using tools like Excel and Tableau.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Introduction to Cybersecurity",
        author: 'By Anna Wilson',
        rating: '1200',
        content: '140 Lectures. Beginner',
        cost: ' 199.9',
        intro: 'Gain an understanding of the fundamentals of cybersecurity, including threats, vulnerabilities, and protective measures.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Project Management Essentials",
        author: 'By Paul Johnson',
        rating: '950',
        content: '130 Lectures. Beginner to Intermediate',
        cost: ' 169.9',
        intro: 'Master the basics of project management, including planning, execution, and monitoring of projects using various methodologies.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Introduction to Game Development",
        author: 'By Tim Allen',
        rating: '1100',
        content: '150 Lectures. Beginner',
        cost: ' 229.9',
        intro: 'Discover the basics of game development, from concepts to design, using industry-standard tools and technologies.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Photography Basics",
        author: 'By Rachel Adams',
        rating: '1000',
        content: '120 Lectures. Beginner',
        cost: ' 129.9',
        intro: 'Learn the foundational skills of photography, including composition, lighting, and editing techniques.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Beginner's Guide to Design",
        author: 'By Ronald Richards',
        rating: '1200',
        content: '155 Lectures. Beginner',
        cost: ' 149.9',
        intro: 'This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Intermediate Design",
        author: 'By Jane Doe',
        rating: '850',
        content: '200 Lectures. Intermediate',
        cost: ' 199.9',
        intro: 'This course focuses on enhancing your design skills through hands-on projects and real-world applications, preparing you for intermediate challenges in design.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Advanced UX UI Design",
        author: 'By John Smith',
        rating: '600',
        content: '250 Lectures. Advanced',
        cost: ' 249.9',
        intro: 'Explore advanced topics in UX/UI design, including user research, prototyping, and usability testing to create highly effective digital products.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Beginner's Guide to Design",
        author: 'By Ronald Richards',
        rating: '1200',
        content: '155 Lectures. Beginner',
        cost: '149.9',
        intro: 'This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Intermediate Design",
        author: 'By Jane Doe',
        rating: '850',
        content: '200 Lectures. Intermediate',
        cost: '199.9',
        intro: 'This course focuses on enhancing your design skills through hands-on projects and real-world applications, preparing you for intermediate challenges in design.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Advanced UX UI Design",
        author: 'By John Smith',
        rating: '600',
        content: '250 Lectures. Advanced',
        cost: '249.9',
        intro: 'Explore advanced topics in UX/UI design, including user research, prototyping, and usability testing to create highly effective digital products.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Web Development Bootcamp",
        author: 'By Emily Johnson',
        rating: '1400',
        content: '300 Lectures. Beginner to Advanced',
        cost: '299.9',
        intro: 'A comprehensive bootcamp that covers front-end and back-end development, enabling you to build and deploy fully functional web applications.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "JavaScript Essentials",
        author: 'By Michael Brown',
        rating: '950',
        content: '150 Lectures. Beginner',
        cost: '179.9',
        intro: 'Master the fundamentals of JavaScript, the language of the web, with this introductory course designed for complete beginners.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Python Programming 101",
        author: 'By Laura Kim',
        rating: '1600',
        content: '220 Lectures. Beginner',
        cost: '209.9',
        intro: 'An entry-level course designed to introduce you to Python programming and its applications in data analysis and web development.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Full-Stack Developer Course",
        author: 'By Chris Evans',
        rating: '2000',
        content: '350 Lectures. Beginner to Advanced',
        cost: '349.9',
        intro: 'Become a full-stack developer by learning both front-end and back-end technologies and frameworks.'
    },
    {
        id: uuidv4(),
        imageCourse: '/Courses.png',
        title: "Graphic Design Masterclass",
        author: 'By Anna Thompson',
        rating: '800',
        content: '280 Lectures. Advanced',
        cost: '259.9',
        intro: 'Master the art of graphic design, from conceptualization to execution, through practical projects and critiques.'
    },
];
export default function CourseInitializer() {
    useEffect(() => {
        
        localStorage.setItem('allCourses', JSON.stringify(allCourses));
    }, []);

    return <div>Courses have been initialized and saved to local storage!</div>;
}