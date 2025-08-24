// Courses data
const courses = [
    {
        title: "Modern Backend Development",
        description: "Learn the latest practices in building scalable backend systems.",
        image: "./img/mentoship-home-page.png"
    },
    {
        title: "Clean Code Mastery",
        description: "Write maintainable and readable code with proven principles.",
        image: "./img/registration-is-open.png"
    }
];

function createCourseCard(course) {
    return `
        <div class="course-card">
            <img src="${course.image}" alt="${course.title}">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
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
        text: "With great pride and pleasure, I announce my commencement in a special mentorship program with Engineer Mohamed Sweelam. I am committed to giving my best effort and working diligently to achieve continuous development and success ❤️"
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
        text: "بخص الشكر البشمهندس العظيم محمد سويلم انه قبلنى معاه فى المينتورشيب واللي بيساعدنى فيها اتعلم كل ما يخص التيكنولوجى وحرصه المستمر على اختصار الطريق عليا واهتمامه لنقل خبرات وتجارب سنين ❤️"
    },
    {
        name: "Danny Khreet",
        role: "Team Leader",
        image: "./img/danny-khreet.jpg",
        text: "I just wrapped up an amazing training on modern backend development, and I have to give a huge shoutout to Mohamed Sweelam who led the session. Mohamed has a way of breaking down complex topics into simple, actionable insights that really stick. It wasn’t just about learning new tools and techniques—it was about understanding how to build better systems and think like a true developer. But what made the day even better? The people. Learning alongside such curious, driven individuals reminded me how powerful collaboration can be."
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
        text: "Having a mentor is like having a compass in the wilderness.” I'm immensely grateful to have Eng. Mohamed Sweelam as my Mentor, his willingness to share his expertise and invest his time in mentoring me has made a profound impact on both my career and personal development, I am truly grateful for the opportunity ❤️."
    },
    {
        name: "Ahmed Adel",
        role: "Software Engineer",
        image: "./img/ahmed-adel-photo.jpg",
        text: "I'm excited to announce that I've started a mentorship program with Engineer Mohamed Sweelam. I am dedicated to giving my best effort to achieve continuous growth and success ❤️"
    },{
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

// Function to create testimonial cards
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

// Render testimonials
document.addEventListener('DOMContentLoaded', () => {
    const coursesContainer = document.getElementById('courses-container');
    if (coursesContainer) {
        coursesContainer.innerHTML = courses.map(createCourseCard).join('');
    }

    const testimonialContainer = document.getElementById('testimonials-container');
    testimonialContainer.innerHTML = testimonials.map(createTestimonialCard).join('');

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const dropdown = button.parentElement;
        dropdown.classList.toggle('open');
    });
});
