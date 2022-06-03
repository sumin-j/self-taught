const box = document.querySelector('.accordion-item');
const title = document.querySelectorAll('.title');
const content = document.querySelectorAll('.content');

console.log(title);
console.log(content);

title.forEach((menu, idx)=>{
    menu.addEventListener('click',()=>{
        console.log('click')
        content[idx].classList.toggle('on');
        title[idx].classList.toggle('on');
    })
})

