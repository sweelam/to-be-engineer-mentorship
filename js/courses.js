// List of Udemy courses to display
const courses = [
  {
    title: 'Node.js Microservices: Breaking Down the Monolith',
    image: 'https://img-c.udemycdn.com/course/240x135/12345678_a1b2.jpg',
    url: 'https://www.udemy.com/course/microservices-nodejs/'
  },
  {
    title: 'Mastering Data Structures in JavaScript',
    image: 'https://img-c.udemycdn.com/course/240x135/87654321_b2a1.jpg',
    url: 'https://www.udemy.com/course/data-structures-javascript/'
  }
];

function renderCourses() {
  const container = document.getElementById('udemy-courses');
  if (!container) return;

  courses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';

    const img = document.createElement('img');
    img.src = course.image;
    img.alt = course.title;

    const title = document.createElement('h3');
    const link = document.createElement('a');
    link.href = course.url;
    link.target = '_blank';
    link.textContent = course.title;
    title.appendChild(link);

    card.appendChild(img);
    card.appendChild(title);
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderCourses);

