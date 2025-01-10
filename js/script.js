// Button menu
const BTN_MENU = document.getElementById("btn-menu");
// Menu
const MENU = document.getElementById("menu");
// Nav items
const NAV_ITEMS = document.getElementsByClassName("nav-item");
// Nav link list
const NAV_LINK_LIST = document.getElementById("nav-link-list");
// Circles
const BIG_CIRCLE = document.getElementById("big-circle");
const CIRCLE = document.getElementById("circle");

// Button menu behaviour
function toggleMenu() {
    if (MENU.classList.contains("hide")) {
        NAV_LINK_LIST.style.transform = "translateX(400px)";
        // Remove hide class
        MENU.classList.replace("hide", "show");
        setTimeoutRotate(0, -60, 300);
        setTimeoutRotate(1, -30, 400);
        setTimeoutRotate(3, 30, 500);
        setTimeoutRotate(4, 60, 600);
    } else {
        setTimeoutRotate(0, 0, 200);
        setTimeoutRotate(1, 0, 300);
        setTimeoutRotate(3, 0, 400);
        setTimeoutRotate(4, 0, 500);
        // Remove hide class
        setTimeout(() => {
            MENU.classList.replace("show", "hide");
            NAV_LINK_LIST.style.transform = "translateX(-400px)";
        }, 1000);
    }
}

function setTimeoutRotate(index, deg, ms) {
    setTimeout(() => {
        NAV_ITEMS[index].style.transform = "rotate(" + deg + "deg)";
    }, ms);
}