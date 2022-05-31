const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.closeBtn');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('on');
    modal.style.display='block';
})

closeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.style.display='none';
})

