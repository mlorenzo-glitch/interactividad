//alert('Rey Salem');

console.log("Salem Rules");

const TOGGLE_THEME_BTN = document.getElementById("toggle-theme-btn");

TOGGLE_THEME_BTN.addEventListener("click", function(){
    document.body.classList.toggle('Light-theme');
});