document.addEventListener("DOMContentLoaded", () => {
    const toggleDark = document.getElementById("toggle-dark");
    const toggleLight = document.getElementById("toggle-light");
    const toggleDarkMobile = document.getElementById("toggle-dark-mobile");
    const toggleLightMobile = document.getElementById("toggle-light-mobile");
    const body = document.body;
    const hamburger = document.getElementById("hamburger");
    const slidePanel = document.getElementById("slide-panel");
    const overlay = document.getElementById("overlay");
    const closePanel = document.getElementById("close-panel");

    // Toggle between dark and light modes in the main navbar
    toggleDark.addEventListener("click", () => {
        body.classList.add("dark-mode");
        toggleDark.style.display = "none";
        toggleLight.style.display = "inline";
    });

    toggleLight.addEventListener("click", () => {
        body.classList.remove("dark-mode");
        toggleDark.style.display = "inline";
        toggleLight.style.display = "none";
    });

    // Toggle between dark and light modes in the sliding panel
    toggleDarkMobile.addEventListener("click", () => {
        body.classList.add("dark-mode");
        toggleDarkMobile.style.display = "none";
        toggleLightMobile.style.display = "inline";
    });

    toggleLightMobile.addEventListener("click", () => {
        body.classList.remove("dark-mode");
        toggleDarkMobile.style.display = "inline";
        toggleLightMobile.style.display = "none";
    });

    // Open sliding panel when hamburger is clicked
    hamburger.addEventListener("click", () => {
        slidePanel.classList.remove("closed"); // Open the panel
        slidePanel.classList.add("open");
        overlay.style.display = "block"; // Show the overlay
    });

    // Close sliding panel when close icon is clicked
    closePanel.addEventListener("click", () => {
        slidePanel.classList.remove("open"); // Close the panel
        slidePanel.classList.add("closed");
        overlay.style.display = "none"; // Hide the overlay
    });

    // Close sliding panel when clicking outside (on the overlay)
    overlay.addEventListener("click", () => {
        slidePanel.classList.remove("open"); // Close the panel
        slidePanel.classList.add("closed");
        overlay.style.display = "none"; // Hide the overlay
    });
});
