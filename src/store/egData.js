const data = {
    gradeSchool: [
        {
            name: "grade 9",
            grade: 9,
            subjects: ["english", "mathematics"],
            image: process.env.PUBLIC_URL + 'assets/9.png'
        },
        {
            name: "grade 10",
            subjects: ["english", "mathematics"],
            grade: 10,
            image: process.env.PUBLIC_URL + 'assets/10.png'
        },
        {
            name: "grade 11",
            subjects: ["english", "mathematics"],
            grade: 11,
            image: process.env.PUBLIC_URL + 'assets/11.png'
        },
        {
            name: "grade 12",
            subjects: ["english", "mathematics"],
            grade: 12,
            image: process.env.PUBLIC_URL + 'assets/12.png'
        },
    ],
    webDevelopment: [
        {
            name: "react",
            image: "https://developers.redhat.com/blog/wp-content/uploads/2020/04/React-logo.png"
        },
        {
            name: "html and css",
            image: "https://aplusweb.design/wp-content/uploads/2017/11/html5-and-css3.png"
        },
        {
            name: "laravel",
            level: "basics",
            image: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1568/https://www.techcronus.com/wp-content/uploads/2019/06/Laravel-best-PHP-Framework-1568x1045.jpg"
        },
        {
            name: "angular",
            image: "https://miro.medium.com/max/2560/1*cGDDA2mfYkjiIhGaN8gDoA.png"
        }

    ],
    Programming: [
        {
            name: "javascript",
            image: "https://logodix.com/logo/374976.jpg"
        },
        {
            name: "python",
            image: "https://images.ctfassets.net/3prze68gbwl1/asset-17suaysk1qa1jhl/d276861783e0ab0ffab32afcdc84d597/python-socket-programming.jpg?h=445&w=1024"
        },
        {
            name: "c++",
            image: "https://engineering.fb.com/wp-content/uploads/2015/06/1522635669452_11.jpg"
        },
        {
            name: "c#",
            image: "https://static.techspot.com/images2/news/bigimage/2019/09/2019-09-16-image-24.jpg"
        },
        {
            name: "java",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
        },
    ]
}

export default data;