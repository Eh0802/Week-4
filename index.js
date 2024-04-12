
window.addEventListener("load", () => {
    const loading = document.querySelector(".loading");

    loading.classList.add("loader-hidden");

    // // loading.addEventListener("transitionend", () => {
    // //     document.body.removeChild(" loading");
    // })
} )


function openMenu() {
    document.body.classList += " menu--open"
    
}
function closeMenu() {
    document.body.classList.remove('menu--open')
}

function toHomePage() {
    window.location.href = `${window.location.origin}/index.html`
}
function idLowToHigh() {
    window.location.href = `http://127.0.0.1:5500/PokeID+.html`
}
function searchPage() {
    window.location.href = `http://127.0.0.1:5500/Search.html`
}
