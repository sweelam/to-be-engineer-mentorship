/* testimonials.js — data + renderer shared by the homepage carousel.
   To add a testimonial: append a new object to the array below.        */

const testimonials = [
    {
        name:  'Mahmoud Hossam',
        role:  'Senior Software Engineer',
        image: 'img/mahmoud-photo.jpg',
        text:  'والله الواحد في قمة سعادته ان حضرتك المنتور بتاعه ... شكرا جدا ليك يا باش مهندس محمد سويلم.'
    },
    {
        name:  'Mahmoud Hossam',
        role:  'Senior Software Engineer',
        image: 'img/mahmoud-photo.jpg',
        text:  'سلام عليكم يبشمهندس .... انا بكلم حضرتك عشان اقولك ان التيم ليدر بتاعى خلانى اعمل architecture لبروجكت هيتعمل والحمدلله عملت كل حاجه زى ما هو طلب وكمان عملت HLD وورتهوله وابتدينا فيه وكان مبسوط جدا — فانا حابب اشكر حضرتك عشان حضرتك اللى علمتنى كده.'
    },
    {
        name:  'Abdelrahman Abdelnasser',
        role:  'ACPC Finalist',
        image: 'img/abdelrhman-abdelnasser-photo.jpg',
        text:  'With great pride and pleasure, I announce my commencement in a special mentorship program with Engineer Mohamed Sweelam. I am committed to giving my best effort and working diligently to achieve continuous development and success.'
    },
    {
        name:  'Hossam Hamdy',
        role:  'Software Engineer',
        image: 'img/hossam-hamdy-photo.jpg',
        text:  'بخص الشكر البشمهندس العظيم محمد سويلم انه قبلنى معاه فى المينتورشيب واللي بيساعدنى فيها اتعلم كل ما يخص التيكنولوجى وحرصه المستمر على اختصار الطريق عليا واهتمامه لنقل خبرات وتجارب سنين.'
    },
    {
        name:  'Danny Khreet',
        role:  'Team Leader',
        image: 'img/danny-khreet.jpg',
        text:  'I just wrapped up an amazing training on modern backend development. Mohamed has a way of breaking down complex topics into simple, actionable insights that really stick. It wasn\'t just about learning new tools — it was about understanding how to build better systems and think like a true developer.'
    },
    {
        name:  'Ibrahim Megahed',
        role:  'Senior Software Engineer',
        image: 'img/ibrahim-megahed.jpg',
        text:  'كنت واحد من اللي حضروا التدريب واتبسطت بالمحتوى وفعلا كان في حاجات اول مرة اسمع عنها في ال Distributed Systems وفتحتلى افاق. جزاك الله خيرا على وقتك وترتيبك للمحتوى وصبرك.'
    },
    {
        name:  'Taher Mahmoud',
        role:  'Software Engineer',
        image: 'img/taher-mahmoud.jpg',
        text:  'I recently attended the Modern Backend Development Training, and it was an absolutely exceptional experience! Mohamed Sweelam has a remarkable ability to break down complex and challenging concepts into simple, digestible explanations.'
    },
    {
        name:  'Mohamed Warda',
        role:  'Software Engineer',
        image: 'img/warda-photo.jpg',
        text:  '"Having a mentor is like having a compass in the wilderness." I\'m immensely grateful to have Eng. Mohamed Sweelam as my Mentor — his willingness to share his expertise and invest his time has made a profound impact on both my career and personal development.'
    },
    {
        name:  'Ahmed Adel',
        role:  'Software Engineer',
        image: 'img/ahmed-adel-photo.jpg',
        text:  'I\'m excited to announce that I\'ve started a mentorship program with Engineer Mohamed Sweelam. I am dedicated to giving my best effort to achieve continuous growth and success.'
    },
    {
        name:  'Mohamed Essam',
        role:  'Java Developer',
        image: 'img/mohamed-essam-photo.jpg',
        text:  'I\'m thrilled to announce that I\'ve started a mentorship program with Eng. Mohamed Sweelam. I hope I get the most out of this program — it will be a great milestone in my career.'
    },
    {
        name:  'Abdulaziz Al Hariri',
        role:  'Software Engineer',
        image: 'img/abdulaziz-alhariri.jpg',
        text:  'يشرفني أن أتقدم بخالص شكري وامتناني للأستاذ Mohamed Sweelam على الاستشارة الرائعة. الأستاذ محمد له باع طويل في المجال وصاحب جهود مباركة في نشر العلم ومشاركة خبراته على يوتيوب.'
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
