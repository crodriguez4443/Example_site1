const navbar = document.querySelector(".navbar");
const navtoggle = document.querySelector(".mobile-nav-toggle");

navtoggle.addEventListener("click", () => {
    // Get the current state of the 'data-visible' attribute and convert it to a boolean.
    const visibility = navbar.getAttribute("data-visible") === "true";
    
    // Get the current state of the 'aria-expanded' attribute and convert it to a boolean.
    const isExpanded = navtoggle.getAttribute("aria-expanded") === "true";
    
    // Toggle the 'data-visible' attribute on the navbar element.
    navbar.setAttribute("data-visible", !visibility);
    
    // Toggle the 'aria-expanded' attribute on the navtoggle button.
    navtoggle.setAttribute("aria-expanded", !isExpanded);
});
