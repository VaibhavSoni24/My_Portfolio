document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.profile-section, .education-section, .fun-facts-section, .education-card, .fact-card');

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

    const factCards = document.querySelectorAll('.fact-card');
    
    factCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.toggle('touch-active');
            
            factCards.forEach(otherCard => {
                if(otherCard !== this) {
                    otherCard.classList.remove('touch-active');
                }
            });
        });
    });
});