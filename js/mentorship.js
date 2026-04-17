/* mentorship.js — data + rendering for the mentorship page */

// ── Courses ───────────────────────────────────────────────
const courses = [
    {
        title: 'Event Driven Architecture "Advanced Patterns and Practices"',
        description: 'Learn how to build Event-Centric Scalable Systems — CQRS, Saga, Outbox, and more.',
        image: '/img/eda.jpeg',
        link: 'https://www.udemy.com/course/eda-advanced-patterns-and-practices/?referralCode=4B1A85E1F31238EF7679'
    },
    {
        title: 'Building Scalable Systems using Spring Boot',
        description: 'Master the art of designing and implementing scalable systems with Spring Boot.',
        image: '/img/scalable-systems.png',
        link: 'https://www.udemy.com/course/building-scalable-systems-using-spring-boot/?referralCode=CB05AE2070DF263B6393'
    },
    {
        title: 'The Ultimate Guide to Backend Development',
        description: 'Become a proficient backend developer with this comprehensive course covering all essential concepts.',
        image: '/img/modern-backend.png',
        link: 'https://www.udemy.com/course/ultimate-backend/?referralCode=3570134DDB42A4CD38A9'
    },
    {
        title: 'API Design and Management',
        description: 'Learn how to design, build, and manage robust APIs for modern applications.',
        image: '/img/api-design.png',
        link: 'https://www.youtube.com/playlist?list=PLgAqrVq84PDcOryFRPZmhXR_FwGauGtyv'
    }
];

function createCourseCard(course) {
    return `
        <a class="course-card" href="${course.link}" target="_blank" rel="noopener noreferrer">
            <div class="course-card__image">
                <img src="${course.image}" alt="${course.title}" loading="lazy">
                <span class="course-card__badge">Course</span>
            </div>
            <div class="course-card__body">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-card__footer">
                    View course
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
            </div>
        </a>`;
}

// ── Books ─────────────────────────────────────────────────
const books = [
    {
        title: 'The Highway Path to Scalable Systems',
        author: 'Mohamed Sweelam & Jasser Mahmoud',
        description: 'A Comprehensive Guide to Architectural Decisions, Principles, and Real-World Case Studies.',
        downloadUrl: 'https://leanpub.com/thehighwaypathtoscalablesystems',
    }
];

function createBookCard(book) {
    return `
        <a class="book-card" href="${book.downloadUrl}" target="_blank" rel="noopener noreferrer">
            <div class="book-card__cover">
                <img src="/img/book-cover.png" alt="${book.title} cover" loading="lazy">
            </div>
            <div class="book-card__body">
                <h3>${book.title}</h3>
                <p class="book-card__author">by ${book.author}</p>
                <p class="book-card__desc">${book.description}</p>
                <div class="book-card__cta">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Get the Book
                </div>
            </div>
        </a>`;
}

// ── Testimonials ──────────────────────────────────────────
const testimonials = [
    {
        name: 'Mahmoud Hossam',
        role: 'Senior Software Engineer',
        image: '/img/mahmoud-photo.jpg',
        text: 'والله الواحد في قمة سعادته ان حضرتك المنتور بتاعه ... شكرا جدا ليك يا باش مهندس محمد سويلم.'
    },
    {
        name: 'Mahmoud Hossam',
        role: 'Senior Software Engineer',
        image: '/img/mahmoud-photo.jpg',
        text: 'سلام عليكم يبشمهندس .... انا بكلم حضرتك عشان اقولك ان التيم ليدر بتاعى خلانى اعمل architecture لبروجكت هيتعمل والحمدلله عملت كل حاجه زى ما هو طلب وكمان عملت HLD وورتهوله وابتدينا فيه وكان مبسوط جدا — فانا حابب اشكر حضرتك عشان حضرتك اللى علمتنى كده.'
    },
    {
        name: 'Abdelrahman Abdelnasser',
        role: 'ACPC Finalist',
        image: '/img/abdelrhman-abdelnasser-photo.jpg',
        text: 'With great pride and pleasure, I announce my commencement in a special mentorship program with Engineer Mohamed Sweelam. I am committed to giving my best effort and working diligently to achieve continuous development and success.'
    },
    {
        name: 'Hossam Hamdy',
        role: 'Software Engineer',
        image: '/img/hossam-hamdy-photo.jpg',
        text: 'بخص الشكر البشمهندس العظيم محمد سويلم انه قبلنى معاه فى المينتورشيب واللي بيساعدنى فيها اتعلم كل ما يخص التيكنولوجى وحرصه المستمر على اختصار الطريق عليا واهتمامه لنقل خبرات وتجارب سنين.'
    },
    {
        name: 'Danny Khreet',
        role: 'Team Leader',
        image: '/img/danny-khreet.jpg',
        text: 'I just wrapped up an amazing training on modern backend development. Mohamed has a way of breaking down complex topics into simple, actionable insights that really stick. It wasn\'t just about learning new tools — it was about understanding how to build better systems and think like a true developer.'
    },
    {
        name: 'Ibrahim Megahed',
        role: 'Senior Software Engineer',
        image: '/img/ibrahim-megahed.jpg',
        text: 'كنت واحد من اللي حضروا التدريب واتبسطت بالمحتوى وفعلا كان في حاجات اول مرة اسمع عنها في ال Distributed Systems وفتحتلى افاق. جزاك الله خيرا على وقتك وترتيبك للمحتوى وصبرك.'
    },
    {
        name: 'Taher Mahmoud',
        role: 'Software Engineer',
        image: '/img/taher-mahmoud.jpg',
        text: 'I recently attended the Modern Backend Development Training, and it was an absolutely exceptional experience! Mohamed Sweelam has a remarkable ability to break down complex and challenging concepts into simple, digestible explanations.'
    },
    {
        name: 'Mohamed Warda',
        role: 'Software Engineer',
        image: '/img/warda-photo.jpg',
        text: '"Having a mentor is like having a compass in the wilderness." I\'m immensely grateful to have Eng. Mohamed Sweelam as my Mentor — his willingness to share his expertise and invest his time has made a profound impact on both my career and personal development.'
    },
    {
        name: 'Ahmed Adel',
        role: 'Software Engineer',
        image: '/img/ahmed-adel-photo.jpg',
        text: 'I\'m excited to announce that I\'ve started a mentorship program with Engineer Mohamed Sweelam. I am dedicated to giving my best effort to achieve continuous growth and success.'
    },
    {
        name: 'Mohamed Essam',
        role: 'Java Developer',
        image: '/img/mohamed-essam-photo.jpg',
        text: 'I\'m thrilled to announce that I\'ve started a mentorship program with Eng. Mohamed Sweelam. I hope I get the most out of this program — it will be a great milestone in my career.'
    },
    {
        name: 'Abdulaziz Al Hariri',
        role: 'Software Engineer',
        image: '/img/abdulaziz-alhariri.jpg',
        text: 'يشرفني أن أتقدم بخالص شكري وامتناني للأستاذ Mohamed Sweelam على الاستشارة الرائعة. الأستاذ محمد له باع طويل في المجال وصاحب جهود مباركة في نشر العلم ومشاركة خبراته على يوتيوب.'
    }
];

function createTestimonialCard(t) {
    return `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <img src="${t.image}" alt="${t.name}" class="testimonial-image" loading="lazy">
                <div class="testimonial-info">
                    <h3>${t.name}</h3>
                    <p>${t.role}</p>
                </div>
            </div>
            <p class="testimonial-text">${t.text}</p>
            <div class="testimonial-rating" aria-label="5 stars">★★★★★</div>
        </div>`;
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Books
    const booksContainer = document.getElementById('books-container');
    if (booksContainer) {
        booksContainer.innerHTML = books.map(createBookCard).join('');
    }

    // Courses carousel
    const coursesTrack = document.getElementById('courses-container');
    if (coursesTrack) {
        coursesTrack.innerHTML = courses.map(createCourseCard).join('');
        initCarousel({
            track:        coursesTrack,
            items:        courses,
            dotsEl:       document.getElementById('courses-dots'),
            prevBtn:      document.getElementById('courses-prev'),
            nextBtn:      document.getElementById('courses-next'),
            cardSelector: '.course-card',
            interval:     10000,
        });
    }

    // Testimonials carousel
    const testimonialsTrack = document.getElementById('testimonials-container');
    if (testimonialsTrack) {
        testimonialsTrack.innerHTML = [...testimonials, ...testimonials].map(createTestimonialCard).join('');
        initCarousel({
            track:        testimonialsTrack,
            items:        testimonials,
            dotsEl:       document.getElementById('carousel-dots'),
            prevBtn:      document.getElementById('carousel-prev'),
            nextBtn:      document.getElementById('carousel-next'),
            cardSelector: '.testimonial-card',
        });
    }
});
