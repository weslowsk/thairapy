var isNavOpen = false;
function toggleHamburgerSlide() {
    if (isNavOpen) {
        // remove
        document.getElementById("body").classList.remove("touch");
        document.getElementById("body").classList.remove("nav-open");
    }
    else {
        // add
        document.getElementById("body").classList.add("touch");
        document.getElementById("body").classList.add("nav-open");
    }
    isNavOpen = !isNavOpen;
}