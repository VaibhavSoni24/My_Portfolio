document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectCategories = document.querySelectorAll('.project-category');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
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
            
            projectCategories.forEach(category => {
                category.style.animation = 'none';
                category.offsetHeight;
                
                if (filterValue === 'all' || category.getAttribute('data-category') === filterValue) {
                    category.classList.remove('hidden');
                    
                    const index = Array.from(category.parentNode.children).indexOf(category);
                    const delay = (index % 4) * 0.2;
                    category.style.animation = `fadeInUp 0.8s ease-out ${delay}s forwards`;
                } else {
                    category.classList.add('hidden');
                }
            });
        });
    });
    
    const projectCardInners = document.querySelectorAll('.project-card');
    
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        projectCardInners.forEach(card => {
            card.addEventListener('touchstart', function(e) {
                e.preventDefault();
                
                this.classList.toggle('touch-active');
                
                projectCardInners.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove('touch-active');
                    }
                });
            });
        });
    }

    const fadeElements = document.querySelectorAll('.project-card, .project-category');
    
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
    
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const tooltip = this.querySelector('.project-tooltip');
            tooltip.style.maxHeight = tooltip.scrollHeight + 'px';
        });
        
        link.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.project-tooltip');
            tooltip.style.maxHeight = '0';
        });
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