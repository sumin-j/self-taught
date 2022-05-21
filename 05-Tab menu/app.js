const lists = document.querySelectorAll('.tab-menu li a');
const items = document.querySelectorAll('section article');

lists.forEach((list,idx)=>{
    list.addEventListener('click',(e)=>{
        e.preventDefault();
        for(let el of lists) {
            el.classList.remove('on')
        }
        lists[idx].classList.add('on');
        for(let el of items){
            el.classList.remove('on')
        }
        items[idx].classList.add('on')
;    })
})