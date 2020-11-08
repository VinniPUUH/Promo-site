window.onload = function() {

    let nav = document.querySelector("nav");

    // Animation scroll ------------------------------

    let headerLink = document.querySelector(".header__link");

    let Scroll = (event) => {
        event.preventDefault();

        let sectionID = event.target.getAttribute("href");
        let section = document.querySelector(sectionID);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    nav.addEventListener("click", Scroll);
    headerLink.addEventListener("click", Scroll);

    // Change size of header when scroll ------------
    
    let header = document.querySelector("header");

    window.onscroll = () => {
        if (window.scrollY > 70) {
            header.style.paddingTop = "5px";
        }

        if (window.scrollY < 70) {
            header.style.paddingTop = "30px";
        }
    };

    // Toggle Menu ---------------------------------------

    let toggleButton = document.querySelector(".burger")

    toggleButton.addEventListener("click", function(){
        nav.classList.toggle("nav__toogle");
    })

}