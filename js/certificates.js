document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuVariant3Icon");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuItems = document.querySelectorAll(".menu-item");

    // Toggle menu when hamburger icon is clicked
    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
            mobileMenu.classList.remove("active");
        }
    });

    // Close menu when a menu item is clicked
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });

    // Handle responsive layout
    const desktopCertificate = document.getElementById("desktopCertificate");
    const phoneCertificatePortrait = document.querySelector(".phone-certificate-portrait");

    const handleResize = () => {
        if (window.innerWidth <= 780) {
            desktopCertificate.style.display = "none";
            phoneCertificatePortrait.style.display = "block";
        } else {
            desktopCertificate.style.display = "block";
            phoneCertificatePortrait.style.display = "none";
            // Hide mobile menu if visible
            mobileMenu.classList.remove("active");
        }
    };

    // Run on page load and window resize
    handleResize();
    window.addEventListener("resize", handleResize);
});
