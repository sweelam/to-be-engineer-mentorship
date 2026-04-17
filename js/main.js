// Courses data
const courses = [
    {
        title: 'Event Driven Architecture "Advanced Patterns and Practices"',
        description: "Learn how to build Event-Centric Scalable Systems?",
        image: "./img/eda.jpeg",
        link: "https://www.udemy.com/course/eda-advanced-patterns-and-practices/?referralCode=4B1A85E1F31238EF7679"
    },
    {
        title: "Building Scalable Systems using Spring Boot",
        description: "Master the art of designing and implementing scalable systems with Spring Boot.",
        image: "./img/scalable-systems.png",
        link: "https://www.udemy.com/course/building-scalable-systems-using-spring-boot/?referralCode=CB05AE2070DF263B6393"
    },
    {
        title: "The Utimate Guide to Backend Development",
        description: "Become a proficient backend developer with this comprehensive course covering all essential concepts and technologies.",
        image: "./img/modern-backend.png",
        link: "https://www.udemy.com/course/ultimate-backend/?referralCode=3570134DDB42A4CD38A9"
    },
    {
        title: "API Design and Management",
        description: "Learn how to design, build, and manage robust APIs for modern applications.",
        image: "./img/api-design.png",
        link: "https://www.youtube.com/playlist?list=PLgAqrVq84PDcOryFRPZmhXR_FwGauGtyv"
    }
];

function createCourseCard(course) {
    return `
        <a class="course-card" href="${course.link}" target="_blank" rel="noopener noreferrer">
            <div class="course-card__image">
                <img src="${course.image}" alt="${course.title}">
                <span class="course-card__badge">Course</span>
            </div>
            <div class="course-card__body">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-card__footer">
                    View course
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
            </div>
        </a>
    `;
}

// Books data
const books = [
    {
        title: 'The Highway Path to Scalable Systems',
        author: 'Mohamed Sweelam & Jasser Mahmoud',
        description: 'A Comprehensive Guide to Architectural Decisions, Principles, and Real-World Case Studies',
        downloadUrl: 'https://leanpub.com/thehighwaypathtoscalablesystems',
    }
];

function createBookCard(book) {
    return `
        <a class="book-card" href="${book.downloadUrl}" target="_blank" rel="noopener noreferrer">
            <div class="book-card__cover">
                <img src="./img/book-cover.png" alt="${book.title} cover">
            </div>
            <div class="book-card__body">
                <h3>${book.title}</h3>
                <p class="book-card__author">by ${book.author}</p>
                <p class="book-card__desc">${book.description}</p>
                <div class="book-card__cta">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download Book
                </div>
            </div>
        </a>
    `;
}

// ========================================================
// NEWS & ANNOUNCEMENTS
// To add a new announcement, just add an object to this array.
// Types: "announcement", "release", "event", "update"
// ========================================================
const news = [
    {
        type: "announcement",
        date: "2025-04-15",
        title: "Launching msweelam.dev",
        description: "Excited to announce the launch of my new personal website! A central hub for my services, courses, blog, and everything I'm working on.",
        link: null,
        linkText: null,
    },
    {
        type: "release",
        date: "2025-03-01",
        title: "New Course: Event Driven Architecture",
        description: "My latest Udemy course on advanced EDA patterns and practices is now live. Learn how to build event-centric scalable systems.",
        link: "https://www.udemy.com/course/eda-advanced-patterns-and-practices/?referralCode=4B1A85E1F31238EF7679",
        linkText: "Enroll Now",
    },
    {
        type: "event",
        date: "2025-02-10",
        title: "Mentorship Program — New Cohort Open",
        description: "Registration is now open for the next mentorship cohort. Limited spots available for engineers looking to level up their backend and system design skills.",
        link: "mailto:md.sweelam@gmail.com",
        linkText: "Apply via Email",
    },
];

function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function createNewsCard(item) {
    const linkHtml = item.link
        ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="news-card__link">
               ${item.linkText || 'Learn more'} <i class="fas fa-arrow-right"></i>
           </a>`
        : '';

    return `
        <div class="news-card">
            <div class="news-card__header">
                <span class="news-card__type news-card__type--${item.type}">${item.type}</span>
                <span class="news-card__date">${formatDate(item.date)}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            ${linkHtml}
        </div>
    `;
}

// Testimonials data
const testimonials = [
    {
        name: "Mahmoud Hossam",
        role: "Senior Software Engineer",
        image: "./img/mahmoud-photo.jpg",
        text: "والله الواحد في قمة سعادته ان حضرتك المنتور بتاعه ... شكرا جدا ليك يا باش مهندس محمد سويلم."
    },
    {
        name: "Mahmoud Hossam",
        role: "Senior Software Engineer",
        image: "./img/mahmoud-photo.jpg",
        text: "سلام عليكم يبشمهندس .... انا بكلم حضرتك عشان اقولك ان التيم ليدر بتاعى خلانى اعمل architecture لبروجكت هيتعمل والحمدلله عملت كل حاجه زى ما هو طلب وكمان عملت HLD وورتهوله وابتدينا فيه وكان مبسوط جدا انى قدرت اعمل حاجه زى كده ... فانا حابب اشكر حضرتك عشان حضرتك اللى علمتنى كده وكمان كتاب design data intensive اللى حضرتك قولتلى اقرأه  فادنى كتير جدا."
    },
    {
        name: "Abdelrahman Abdelnasser",
        role: "ACPC Finalist",
        image: "./img/abdelrhman-abdelnasser-photo.jpg",
        text: "With great pride and pleasure, I announce my commencement in a special mentorship program with Engineer Mohamed Sweelam. I am committed to giving my best effort and working diligently to achieve continuous development and success."
    },
    {
        name: "Abdelrahman Abdelnasser",
        role: "ACPC Finalist",
        image: "./img/abdelrhman-abdelnasser-photo.jpg",
        text: "A huge thank you to Mohamed Sweelam for their incredible support and contributions. In this article, I highlight the transformation we made to enhance code readability, cleanliness, and add new features."
    },
    {
        name: "Hossam Hamdy",
        role: "Software Engineer",
        image: "./img/hossam-hamdy-photo.jpg",
        text: "بخص الشكر البشمهندس العظيم محمد سويلم انه قبلنى معاه فى المينتورشيب واللي بيساعدنى فيها اتعلم كل ما يخص التيكنولوجى وحرصه المستمر على اختصار الطريق عليا واهتمامه لنقل خبرات وتجارب سنين."
    },
    {
        name: "Danny Khreet",
        role: "Team Leader",
        image: "./img/danny-khreet.jpg",
        text: "I just wrapped up an amazing training on modern backend development, and I have to give a huge shoutout to Mohamed Sweelam who led the session. Mohamed has a way of breaking down complex topics into simple, actionable insights that really stick. It wasn't just about learning new tools and techniques—it was about understanding how to build better systems and think like a true developer. But what made the day even better? The people. Learning alongside such curious, driven individuals reminded me how powerful collaboration can be."
    },
    {
        name: "Ibrahim Megahed",
        role: "Senior Software Engineer",
        image: "./img/ibrahim-megahed.jpg",
        text: " من فترة كان أعلن مهندس محمد سويلم عن تدريب لمدة يوم عن ال Modern Backend Development. الحمد لله كنت واحد من اللي حضروا التدريب واتبسطت بالمحتوى وفعلا كان في حاجات اول مرة اسمع عنها في ال Distributed Systems بالذات وفتحتلى افاق عرفت اني محتاج اتعلمها واركز عليها. ومن منطلق من لا يشكر الناس لا يشكر الله ف جزاك الله خيرا على وقتك وترتيبك للمحتوى وصبرك وأتمنى نشوف دورات اكتر وبالتحديد عن ال Solution Architecture وبالعموم عن ال Backend Development."
    },
    {
        name: "Taher Mahmoud",
        role: "Software Engineer",
        image: "./img/taher-mahmoud.jpg",
        text: "I recently attended the Modern Backend Development Training, and it was an absolutely exceptional experience! The course content was incredibly comprehensive, covering both fundamental and advanced topics with precision and clarity. The representer, Mohamed Sweelam, was truly outstanding—he has a remarkable ability to break down complex and challenging concepts into simple, digestible explanations."
    },
    {
        name: "Mohamed Warda",
        role: "Software Engineer",
        image: "./img/warda-photo.jpg",
        text: "Having a mentor is like having a compass in the wilderness. I'm immensely grateful to have Eng. Mohamed Sweelam as my Mentor, his willingness to share his expertise and invest his time in mentoring me has made a profound impact on both my career and personal development, I am truly grateful for the opportunity."
    },
    {
        name: "Ahmed Adel",
        role: "Software Engineer",
        image: "./img/ahmed-adel-photo.jpg",
        text: "I'm excited to announce that I've started a mentorship program with Engineer Mohamed Sweelam. I am dedicated to giving my best effort to achieve continuous growth and success."
    },
    {
        name: "Mohamed Essam",
        role: "Java Developer",
        image: "./img/mohamed-essam-photo.jpg",
        text: "I'm thrilled to announce that I've started a mentorship program with Eng. Mohamed Sweelam. I hope I get the most out of this program which will be a great milestone in my career In sha'a Allah."
    },
    {
        name: "Abdulaziz Al Hariri",
        role: "Software Engineer",
        image: "./img/abdulaziz-alhariri.jpg",
        text: "يشرفني أن أتقدم بخالص شكري وامتناني للأستاذ Mohamed Sweelam على الاستشارة الرائعة والمفيدة التي ساعدتني جدًا في وضع النقاط على الحروف. الأستاذ محمد له باع طويل في المجال وصاحب جهود مباركة في نشر العلم ومشاركة خبراته على منصة يوتيوب، واختياره للمواضيع موفق. كل الشكر والتوفيق للأخ المهندس محمد سويلم."
    }
];

function createTestimonialCard(testimonial) {
    return `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
                <div class="testimonial-info">
                    <h3>${testimonial.name}</h3>
                    <p>${testimonial.role}</p>
                </div>
            </div>
            <p class="testimonial-text">${testimonial.text}</p>
            <div class="testimonial-rating">
                ${Array(5).fill('★').join('')}
            </div>
        </div>
    `;
}

// Render sections + init carousels
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

    // News
    const newsContainer = document.getElementById('news-container');
    if (newsContainer) {
        newsContainer.innerHTML = news.map(createNewsCard).join('');
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

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                document.getElementById('nav-links').classList.remove('open');
            }
        });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }
});

/**
 * Generic seamless-loop horizontal carousel.
 * Items must already be rendered (doubled for looping) inside `track`.
 */
function initCarousel({ track, items, dotsEl, prevBtn, nextBtn, cardSelector, interval = 3000 }) {
    const totalSlides = items.length;
    let currentIndex = 0;
    let autoplayTimer = null;

    // Ensure cards are doubled for seamless looping
    const existingCards = track.querySelectorAll(cardSelector);
    if (existingCards.length === totalSlides) {
        existingCards.forEach(card => track.appendChild(card.cloneNode(true)));
    }

    function getCardWidth() {
        const card = track.querySelector(cardSelector);
        if (!card) return 0;
        const gap = parseFloat(getComputedStyle(track).gap) || 20;
        return card.offsetWidth + gap;
    }

    function goTo(index, animate = true) {
        currentIndex = index;
        track.style.transition = animate ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
        track.style.transform = `translateX(-${getCardWidth() * currentIndex}px)`;
        updateDots();
    }

    function next() {
        const nextIndex = currentIndex + 1;
        goTo(nextIndex);
        if (nextIndex >= totalSlides) {
            setTimeout(() => goTo(0, false), 650);
        }
    }

    function prev() {
        goTo(currentIndex <= 0 ? totalSlides - 1 : currentIndex - 1);
    }

    // Dots
    if (dotsEl) {
        dotsEl.innerHTML = items.map((_, i) =>
            `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`
        ).join('');
        dotsEl.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', () => { goTo(parseInt(dot.dataset.index, 10)); restartAutoplay(); });
        });
    }

    function updateDots() {
        if (!dotsEl) return;
        const norm = currentIndex % totalSlides;
        dotsEl.querySelectorAll('.carousel-dot').forEach((dot, i) =>
            dot.classList.toggle('active', i === norm)
        );
    }

    // Arrows
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });

    // Pause on hover
    const outer = track.closest('.carousel-outer');
    if (outer) {
        outer.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
        outer.addEventListener('mouseleave', startAutoplay);
    }

    // Touch / swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); restartAutoplay(); }
    });

    window.addEventListener('resize', () => goTo(currentIndex, false));

    function startAutoplay() { autoplayTimer = setInterval(next, interval); }
    function restartAutoplay() { clearInterval(autoplayTimer); startAutoplay(); }

    startAutoplay();
}
