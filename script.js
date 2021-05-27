"use strict";
// const log = console.log;
// log("скрипт подключен");

let status = 'waiting'
let items = document.querySelectorAll('.coffee-item');
let balance = document.querySelector('.status-text');
let progressBar = document.querySelector('.progress');
let pay = document.querySelector('.money-status');
let cupImg = document.querySelector('.coffee-item img')

for (let item of items){
    item.addEventListener('click', buyCoffee);
};

function buyCoffee(name, price, element){
   
    //    console.log([this.dataset.name, this.dataset.price, this])
    progressBar.classList.remove("d-none")
    pay.classList.remove("d-none")
    

    //    console.log(parseInt(pay.innerHTML))
    //    if(parseInt(pay) === 0){
    //      balance.innerHTML = "Недостаточно средств!"   
    //    }
       
        balance.innerHTML = "Вы выбрали " + this.dataset.name;
        let cookingCoffeePrice = Number(this.dataset.price)
       console.log(cookingCoffeePrice)

       let coffeeImg = this.querySelector('img');
       let coffeeImgSrc = coffeeImg.getAttribute('src')
       let parent = document.querySelector(".right")
       let change = document.querySelector('.change')
       let coffeeCup = document.createElement('img')


// balance.innerHTML = "Ваш " + this.dataset.name + " готовится!"
let money = document.querySelector('.put-money');
    // let pay = document.querySelector('.money-status');
    // console.log([money, pay])
        money.addEventListener('click', function(){
        let countMoney =  parseInt(pay.innerHTML)
        pay.innerHTML = ""
        pay.innerHTML += Number(countMoney + 10) + " руб."
        
       
        
    if (parseInt(pay.innerHTML) >= cookingCoffeePrice){
         // когда баланс >= цена - кофе начнет готовится
         status = 'cooking'
         progressBar.value = '20';
     // вставляется чашка
     
     coffeeCup.setAttribute('src', coffeeImgSrc )
     coffeeCup.style.width = "80%"
     coffeeCup.style.paddingLeft = "25px"
     parent.appendChild(coffeeCup)
     // конец вставляется чашка
        
    }
      

        })
//  while( Number(pay.innerHTML) < Number(this.dataset.price) ){
//         balance.innerHTML = "Недостаточно средств!"   
//        }
};

// функция счета денег

    

