// Button menu
const BTN_MENU = document.getElementById("btn-menu");
// Menu
const MENU = document.getElementById("menu");
// Nav items
const NAV_ITEMS = document.getElementsByClassName("nav-item");

var menuOpen = false;

// Button menu behaviour
function toggleMenu() {
    if (MENU.classList.contains("hide")) {
        // Remove hide class
        MENU.classList.replace("hide", "show");
        setTimeoutRotate(0, -60, 200);
        setTimeoutRotate(1, -30, 300);
        setTimeoutRotate(3, 30, 400);
        setTimeoutRotate(4, 60, 500);
        menuOpen = true;
    } else {
        setTimeoutRotate(0, 0, 200);
        setTimeoutRotate(1, 0, 300);
        setTimeoutRotate(3, 0, 400);
        setTimeoutRotate(4, 0, 500);
        // Remove hide class
        setTimeout(() => {
            MENU.classList.replace("show", "hide");
        }, 600);
        menuOpen = false;
    }
}

function setTimeoutRotate(index, deg, ms) {
    setTimeout(() => {
        NAV_ITEMS[index].style.transform = "rotate(" + deg + "deg)";
    }, ms);
}