const Auth = {
    initGlobalUI: function () {
        const logo = document.querySelector(".logo");
        if (logo) {
            logo.style.cursor = "pointer";
            logo.addEventListener("click", () => {
                const path = window.location.pathname;
                const mainPages = ["index.html", "features.html", "commands.html", "premium.html"];
                const isMainPage = mainPages.some(page => path.includes(page)) || path === "/" || path.endsWith("/");
                if (isMainPage) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                    window.location.href = "index.html";
                }
            });
        }
    },

    initMobileMenu: function () {
        const toggle = document.getElementById('mobile-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (toggle && navLinks) {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                navLinks.classList.toggle('mobile-active');

                // Change icon
                const icon = toggle.querySelector('i');
                if (navLinks.classList.contains('mobile-active')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            });

            // Close menu when clicking a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('mobile-active');
                    toggle.querySelector('i').className = 'fas fa-bars';
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
                    navLinks.classList.remove('mobile-active');
                    toggle.querySelector('i').className = 'fas fa-bars';
                }
            });
        }
    },

    initScrollToTop: function () {
        const btt = document.getElementById('back-to-top');
        if (btt) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 200) {
                    btt.style.display = 'flex';
                } else {
                    btt.style.display = 'none';
                }
            });
            btt.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    },

    initRevealAnimations: function () {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
};

document.addEventListener("DOMContentLoaded", () => {
    Auth.initGlobalUI();
    Auth.initMobileMenu();
    Auth.initScrollToTop();
    Auth.initRevealAnimations();
});
