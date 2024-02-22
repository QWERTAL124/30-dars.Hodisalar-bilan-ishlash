' use strict '

const btn = document.querySelector("#btn");
const overlay = document.querySelector('.overlay');

// btn.onclick = function(){
//     alert('Click from js');
// }

// btn.onclick = function(){
//     alert('Click 2')
// }
// Yuqoridagi 2 ta funksiya dan oxirgii ishlaydi

// 3-ususl

// btn.addEventListener("click", ()=>{
//     alert("Click from eventlistener method")
// });
// btn.addEventListener("click",()=>{
//     alert('Click from second event')
// });

// Yuqoridagi usulda esa 2ala eventlistener ham ishga tushadi

// 3-usul . Mouseenter 

// btn.addEventListener("mouseenter", (event)=>{
//     // alert('Hover');
//     // console.log(event); // event bu hodisalarning ma'lumotlari 
//     // console.log(event.target); // to'g'ridan to'g'ri nishonga olingan (target)ni chiqaradi
//     //event.target yordamida elementlarni o'chirish
//     event.target.remove();
// })

// event target sikllanish jarayonida bo'lsa uni o'chirib tashlolmaymiz.Uning yechimi pastda

let i= 0;

const deleteElement = (event)=>{
    event.target.remove();
}

// // btn.addEventListener('click', deleteElement) 

// // ham addEventListener ham removeEventListener ishlasa elementni o'chirib tashlolmaydi.
// btn.addEventListener('click', deleteElement) 
// btn.removeEventListener('click',deleteElement)

// Ma'lum marta bosilganda hodisani o'chirish
// const addElement = (event)=>{
//     i++;
//     if(i == 3){
//         btn.removeEventListener('click',addElement);
//     }
//     console.log(i)
// }
// btn.addEventListener('click', addElement); 

// const cb = (e)=>{
//     console.log(e.target);
// }
// btn.addEventListener('click',cb);
// overlay.addEventListener('click',cb);// overlay bosilganda bolasiga o'tish



// Brauzerning o'zini tutish holatini o'zgartirish

const link = document.querySelector('a');

link.addEventListener('click',(event)=>{
    event.preventDefault();
    alert('Link');
});

//  Uchta tugmaga baravariga hodisa qo'shish;

const btns = document.querySelectorAll('button');

// Ushbu pasdagi kod xato , chunki btns bu massiv qaytaradi. 
// btns.addEventListener('click',()=>{
//     alert('click');
// })

// Yuqoridagi kodni tuzatish usuli forEach yordamida amlg oshiriladi

const logger = ()=>{
    console.log(1);
}
btns.forEach((item)=>{
    item.addEventListener('click',()=>{
        logger, {once:true};  // once true metodi bu 1mart shu hodisa ishlasin degani
    });
});