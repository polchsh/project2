document.addEventListener('DOMContentLoaded', function() {
    // Property filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const propertyCards = document.querySelectorAll('.property-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter properties
            propertyCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Intersection Observer for stats animation
    const statsSection = document.querySelector('.about-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    function validateForm() {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value.replace(/\D/g, '');

        const nameRegex = /^[A-Za-z\s]+$/;
        const phoneRegex = /^[0-9]+$/;

        if (!nameRegex.test(name)) {
            alert("Name must contain only Latin letters and spaces.");
            return false;
        }

        if (!phoneRegex.test(phone)) {
            alert("Phone number must contain only digits.");
            return false;
        }

        return true;
    }

    const animatedItems = document.querySelectorAll('.property-card, .blurred-box');
    animatedItems.forEach(item => {
    item.classList.add('animate__animated', 'animate__fadeInUp');
    });

});