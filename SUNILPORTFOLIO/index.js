window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
        navbar.classList.add("sticky");

    }
    else {
        navbar.classList.remove("sticky");
    }
}



function toggleNav () {
    let nav = document.getElementById("nav");
    nav.classList.toggle("show");
}