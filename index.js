
window.addEventListener("load", () => {
    const loading = document.querySelector(".loading");

    loading.classList.add("loader-hidden");

    loading.addEventListener("transitionend", () => {
        document.body.removeChild("loading");
    })
} )


function openMenu() {
    document.body.classList += " menu--open"
    
}
function closeMenu() {
    document.body.classList.remove('menu--open')
}
