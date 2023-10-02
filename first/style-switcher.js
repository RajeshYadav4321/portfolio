/*=======================toggle style switcher ====================== */
const styleSwitcherToggle = document.querySelector(".style-sewitcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// window.addEventListener("scroll", () =>{
//     if(document.querySelector("style-switcher").classList.contains("open"))
//     {
//         document.querySelector("style-switcher").classList.remove("open");
//     }
// });
