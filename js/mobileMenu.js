document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuVariant3Icon');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!menuBtn || !mobileMenu) {
        console.log('Mobile menu elements not found');
        return;
    }

    // Toggle menu when hamburger is clicked
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.style.display = 'none';
        }
    });

    // Handle menu item clicks
    const menuItems = mobileMenu.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
        item.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
            switch(item.textContent.trim()) {
                case 'Home':
                    window.location.href = './home.html';
                    break;
                case 'Project':
                    window.location.href = './projects.html';
                    break;
                case 'About':
                    window.location.href = './about.html';
                    break;
                case 'Contact':
                    window.location.href = './contact.html';
                    break;
                case 'Certificate':
                    window.location.href = './certificates.html';
                    break;
            }
        });
    });
});
