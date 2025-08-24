// Dynamic Udemy courses section
const udemyCourses = [
  {
    title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
    url: 'https://www.udemy.com/course/the-complete-javascript-course/',
    img: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg'
  },
  {
    title: 'Node.js - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    url: 'https://www.udemy.com/course/nodejs-the-complete-guide/',
    img: 'https://img-b.udemycdn.com/course/240x135/922484_52a1_8.jpg'
  },
  {
    title: '2023 Complete Python Bootcamp From Zero to Hero in Python',
    url: 'https://www.udemy.com/course/complete-python-bootcamp/',
    img: 'https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg'
  }
];

function displayUdemyCourses() {
  const container = document.getElementById('courses-container');
  udemyCourses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';

    const img = document.createElement('img');
    img.src = course.img;
    img.alt = course.title;

    const title = document.createElement('h3');
    title.textContent = course.title;

    const link = document.createElement('a');
    link.href = course.url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'View Course';

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(link);
    container.appendChild(card);
  });
}

displayUdemyCourses();
