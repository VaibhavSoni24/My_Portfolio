document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            skillCards.forEach(card => {
                card.style.animation = 'none';
                card.offsetHeight; 
                
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hidden');
                    
                    const index = Array.from(card.parentNode.children).indexOf(card);
                    const delay = (index % 3) * 0.2;
                    card.style.animation = `fadeInUp 0.8s ease-out ${delay}s forwards`;
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
    
    const skillCardInners = document.querySelectorAll('.skill-card');
    
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        skillCardInners.forEach(card => {
            card.addEventListener('touchstart', function(e) {
                e.preventDefault();
                
                this.classList.toggle('touch-active');
                
                skillCardInners.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove('touch-active');
                    }
                });
            });
        });
    }

    const fadeElements = document.querySelectorAll('.proficiency-legend');
    
    const fadeInOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const fadeInOnScroll = new IntersectionObserver(function(entries, fadeInOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('fade-in');
                fadeInOnScroll.unobserve(entry.target);
            }
        });
    }, fadeInOptions);
    
    fadeElements.forEach(element => {
        fadeInOnScroll.observe(element);
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });
    
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});