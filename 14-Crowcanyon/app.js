const menu = document.querySelectorAll(".mainMenuItem");
const subMenu = document.querySelectorAll(".subMenu");

console.log(subMenu);

menu.forEach((item, idx)=>{
    item.addEventListener("mouseenter",(e)=>{
        e.preventDefault();

        subMenu[idx].classList.toggle("hidden");
    })
})
