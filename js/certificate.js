document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuVariant3Icon');
    const closeButton = document.querySelector('.menuvariant2-icon');
    const popupMenu = document.getElementById('frameContainer');
    const menuItems = document.querySelectorAll('.frame-1variant3');

    // Open menu
    menuButton.addEventListener('click', function() {
        popupMenu.style.display = 'flex';
    });

    // Close menu
    closeButton.addEventListener('click', function() {
        popupMenu.style.display = 'none';
    });

    // Close menu when clicking menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            popupMenu.style.display = 'none';
        });
    });
});
