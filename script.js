document.addEventListener('DOMContentLoaded', () => {
    // Handle animations on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Handle auth overlays
    const signInBtn = document.getElementById('sign-in-btn');
    const signUpBtn = document.getElementById('sign-up-btn');
    const showSignUpBtn = document.getElementById('show-sign-up-btn');
    const signInOverlay = document.getElementById('signin-overlay');
    const signUpOverlay = document.getElementById('signup-overlay');
    const closeBtns = document.querySelectorAll('.close-btn');
    const newHerePanel = document.getElementById('new-here-panel');

    const toggleOverlay = (overlay) => {
        overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
    };

    signInBtn.addEventListener('click', () => toggleOverlay(signInOverlay));
    signUpBtn.addEventListener('click', () => toggleOverlay(signUpOverlay));
    showSignUpBtn.addEventListener('click', () => {
        newHerePanel.style.display = 'none';
        toggleOverlay(signUpOverlay);
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const overlay = btn.closest('.auth-overlay');
            if (overlay) {
                toggleOverlay(overlay);
            } else if (btn.id === 'close-new-here') {
                newHerePanel.style.display = 'none';
            }
        });
    });

    // Close overlay when clicking outside the auth container
    [signInOverlay, signUpOverlay].forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                toggleOverlay(overlay);
            }
        });
    });

    // Handle mobile navigation
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('change', () => {
        if (navToggle.checked) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // Helper function to check if an element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});