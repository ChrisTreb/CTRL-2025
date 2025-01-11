// Button menu
const BTN_MENU = document.getElementById("btn-menu");
// Menu
const MENU = document.getElementById("menu");
// Nav items
const NAV_ITEMS = document.getElementsByClassName("nav-item");
// Nav link list
const NAV_LINK_LIST = document.getElementById("nav-link-list");
// Nav links
const NAV_LINKS = document.getElementsByClassName("nav-link");
// Separators
const NAV_ITEMS_SEPARATORS = document.getElementsByClassName("nav-item-separator");
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
        setTimeoutRotate(2,  0, 500);
        setTimeoutRotate(3, 30, 600);
        setTimeoutRotate(4, 60, 700);
    } else {
        MENU.classList.replace("show", "hide");
        setTimeoutRotate(0, 0, 200);
        setTimeoutRotate(1, 0, 300);
        setTimeoutRotate(2, 0, 400);
        setTimeoutRotate(3, 0, 500);
        setTimeoutRotate(4, 0, 600);
        // Remove hide class
        setTimeout(() => {
            NAV_LINK_LIST.style.transform = "translateX(-400px)";
        }, 1200);
    }
}

function setTimeoutRotate(index, deg, ms) {
    setTimeout(() => {
        NAV_ITEMS[index].style.transform = "rotate(" + deg + "deg)";
        if(MENU.classList.contains("show")) {
            NAV_ITEMS_SEPARATORS[index].style.transform = "rotate(" + (deg + 15) + "deg)";
        } else {
            NAV_ITEMS_SEPARATORS[index].style.transform = "rotate(0deg)";
        }
    }, ms);
}