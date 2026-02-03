function SectionHolder(){
    const navHolder = document.querySelector('.nav-holder');
    navHolder.innerHTML = `
    <nav>
        <div class="nav-container">
            <h2 class="logo">
                <a href="index.html"><img src="public/images/userImage/logo for web-01.png" alt="Jihadul Islam Shumon"></a>
            </h2>
            <ul class="nav-items">
                <li class="nav-items"><a href="#HERO-SECTION">Home</a></li>
                <li class="nav-items"><a href="#hero-about">About</a></li>
                <li class="nav-items"><a href="#Brand-Section">Experience</a></li>
                <li class="nav-items"><a href="#Skill-Abilities">Skills</a></li>
                <li class="nav-items"><a href="#Class-Video-Section">Work</a></li>
                <li class="nav-items"><a href="#Contact-Us">Contact Us</a></li>
            </ul>
        </div>
    </nav>
    `
    const footerHolder = document.querySelector('.footer-holder')
    footerHolder.innerHTML = `
    <footer>
    <ul class="footer-container">
        <li class="footer-item">
            <h2>SHUMON'S Portfolio</h2>
            <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
            <p>Keep Rising 🚀. Connect with me over live chat!</p>
        </li>
        <li class="footer-item">
            <h2>Quick Links</h2>
            <ul class="footer-icons footer-quick-links">
                <li class="nav-items"><i class="fa-solid fa-circle-chevron-right"></i> <a href="#HERO-SECTION">Home</a></li>
            <li class="nav-items"><i class="fa-solid fa-circle-chevron-right"></i> <a href="#hero-about">About</a></li>
            <li class="nav-items"><i class="fa-solid fa-circle-chevron-right"></i> <a href="#Experience-Section">Experience</a></li>
            <li class="nav-items"><i class="fa-solid fa-circle-chevron-right"></i> <a href="#Skill-Abilities">Skills</a></li>
            <li class="nav-items"><i class="fa-solid fa-circle-chevron-right"></i> <a href="#education">Education</a></li>
            <li class="nav-items"><i class="fa-solid fa-circle-chevron-right"></i> <a href="#Projects-Section">Projects</a></li>
            </ul>
        </li>
        <li class="footer-item">
            <h2>Contact Info</h2>
            <ul class="footer-icons footer-contact-info">
                <li><i class="fa-solid fa-envelope"></i> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jihadulislams@gmail.com&su=Website Inquiry&body=Hello Sumon" target="_blank">jihadulislams@gmail.com</a></li>
                <li><i class="fa-solid fa-envelope"></i> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jihadulislam12@outlook.com&su=Website Inquiry&body=Hello Sumon" target="_blank">jihadulislam12@outlook.com</a></li>
                <li><i class="fa-brands fa-whatsapp"></i> <a href="https://wa.me/8801648589777" target="_blank">+8801648589777</a></li>
                <li><i class="fa-solid fa-map-location"></i> <a href="https://maps.app.goo.gl/U9HMLX8FgbY6oxzq9" target="_blank">Feni, Bangladesh</a></li>
                <li class="footer-social">
                    <a href="https://www.facebook.com/shumon99/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/in/md-jihadul-islam-680643140" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/shumon_99/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://t.me/+8801648589777"><i class="fa-solid fa-paper-plane"></i></a>
                </li>
            </ul>
        </li>
    </ul>
    <!-- <div class="footer-copyright">
        <p>&copy; 2024 Jihadul Islam Shumon. All rights reserved.</p>
    </div> -->
    
  <div class="legal-details">
    <p>@ Copyright 2025 - 2027 | MD. Jihadul Islam | All Rights Reserved | Powered by Github</p>
    <div class="creator">
      <div class="creator-hover">
        <img src="public/images/userImage/Shakib-sult-1-removebg-preview.png" alt="Creator:- Abdur Rahman Shakib">
        <b>Abdur Rahman Shakib</b>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <div class="creator-popup-container">
        <div class="creator-popup">
          <div class="creator-info">
            <img src="public/images/userImage/Shakib-sult-1-removebg-preview.png" alt="Abdur Rahman Shakib">
            <h1>Creator:- Abdur Rahman Shakib</h1>
            <p>I’m a passionate web developer focused on creating responsive, user-friendly websites using modern web technologies. I enjoy turning ideas into functional designs, learning new tools, and solving real-world problems through code. My goal is to build clean, efficient, and impactful digital experiences.</p>
            <b>You can connect me with by this links <i class="fa-solid fa-arrow-right"></i></b>
          </div>
          <ul class="creator-link">
            <li><a href="https://www.facebook.com/shakibars999"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://bd.linkedin.com/in/shakibars999"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="https://www.instagram.com/shakibars999"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://x.com/shakibars999"><i class="fa-brands fa-x-twitter"></i></a></li>
            <li><a href="https://wa.me/8801955916209"><i class="fa-brands fa-whatsapp"></i></a></li>
            <li><a href="https://t.me/shakibars999"><i class="fa-brands fa-telegram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
</footer>
    `
}

function AOSFunction(){
    AOS.init({
        disableMutationObserver: true,
        duration: 2000,
        mirror: true
    })
}

function VanillaTiltFunction(){
    const dataTilt = document.querySelectorAll('[data-tilt]')
    VanillaTilt.init(dataTilt, {
        max: 20,
        speed: 100,
        scale: 1.05,
        glare: true,
        "max-glare": 0.3,
    })
}

function backToTop(){
    const backToTopButton = document.getElementById("backToTop");
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // backToTopButton.style.display = "block";
            backToTopButton.classList.remove("go-up");
            backToTopButton.classList.add("come-down");
        } else {
            backToTopButton.classList.remove("come-down");
            backToTopButton.classList.add("go-up");
            // backToTopButton.style.display = "none";
        }
    };
    backToTopButton.addEventListener("click", function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}

function navIndicator(){
    // Select all sections and nav links
    const sections = document.querySelectorAll(".section-name");
    const navLinks = document.querySelectorAll(".nav-items");
    console.log(sections);
    

    window.addEventListener("scroll", () => {
        // Get current scroll position
        const currentScroll = window.pageYOffset; // <-- explicitly defined

        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Check if section is in view
            if (currentScroll >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    });
}

function disableRightClick(){
    document.addEventListener("contextmenu", e => e.preventDefault());
}

function YoutubeVideoPlay(){
    const allClassVideo = document.querySelectorAll('.class-video')
    if(allClassVideo){
        allClassVideo.forEach((classVideo)=>{
            classVideo.addEventListener('click', ()=>{
                if (classVideo.querySelector('iframe')) return;
                const link2 = getComputedStyle(classVideo).getPropertyValue('--link').trim()
                const videoLink = link2.split('/vi/')[1].split('/')[0]
                // const link = classVideo.dataset.link
                classVideo.innerHTML = `
                    <iframe
                    src="https://www.youtube.com/embed/${videoLink}?autoplay=1"
                    title="YouTube video player"
                    frameborder="0"
                    loading="lazy"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                    </iframe>
                `;
            })
        })
    }
}

function InitialSwiperJS(){
    new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 2000,            // 3 seconds
        disableOnInteraction: false, // keep autoplay after swipe
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    });
}



document.addEventListener("DOMContentLoaded", AOSFunction);
document.addEventListener("DOMContentLoaded", VanillaTiltFunction);
document.addEventListener("DOMContentLoaded", backToTop);
document.addEventListener("DOMContentLoaded", navIndicator);
disableRightClick();
SectionHolder();
YoutubeVideoPlay();
InitialSwiperJS();