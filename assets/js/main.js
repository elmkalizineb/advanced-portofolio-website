
/*==================== MENU SHOW & HIDDEN ====================*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== SCROLL ABOUT ANIMATION ====================*/
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".text-gradient").forEach(span => {
    gsap.to(span, {
        backgroundSize: '100% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: span,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
        },
    })
});

/*==================== DARK LIGHT THEME ====================*/

/*==================== MIXITUP FILTER PORTFOLIO ====================*/
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});

/* Active work */
const linkWork = document.querySelectorAll(".work-item");

function activeWork() {
    linkWork.forEach((a) => {
        a.classList.remove('active-work');
    });

    this.classList.add('active-work');
}
linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*==================== EMAIL JS ====================*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactMessage = document.getElementById('contact-message'),
    message = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === ''
        || contactEmail === ''
        || contactMessage === '') {
        message.textContent = 'Write all the input feilds ';

        setTimeout(() => {
            message.textContent = '';
        }, 3000);
    } else {
        emailjs.sendForm('service_52w1gk8',
            'template_my6j50c',
            '#contact-form',
            'AA1X-c0rA6tZDaTSz').then(
                () => {
                    message.textContent = 'Message sent  👌 ';

                    setTimeout(() => {
                        message.textContent = '';
                    }, 5000);
                },
                (error) => {
                    alert('OOPs ! Something went Wrong ... ', error);
                },
            );
        contactName.value='';
        contactEmail.value='';
        contactMessage.value='';

    }
};

contactForm.addEventListener('submit', sendEmail);

/*==================== SCROLL REVEAL ANIMATION ====================*/
