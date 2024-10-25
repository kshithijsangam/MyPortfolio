function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    // Toggle the 'open' class for the menu and the icon
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
    // Check if the menu is open and set the zoom level accordingly
    if (menu.classList.contains("open")) {
        document.body.style.zoom = "90%"; // Zoom out when menu is open
    } else {
        document.body.style.zoom = "100%"; // Reset to default zoom when menu is closed
    }
}
