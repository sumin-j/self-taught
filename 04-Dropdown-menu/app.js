const dropdown = document.querySelector('.dropdown');
const toggleButton = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
const nextButton = document.querySelector('.next-button');

// console.log(dropdown);
// console.log(toggleButton);
// console.log(menu);
// console.log(items);
// console.log(nextButton);

toggleButton.addEventListener('click',()=>{
    menu.classList.toggle('show');
})

toggleButton.addEventListener('blur',()=>{
    menu.classList.remove('show');
})

options.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        const value = e.currentTarget.innerText.trim();
        toggleButton.innerText = value;
        toggleButton.classList.add('selected');
        nextButton.removeAttribute('disabled');
    })
})

