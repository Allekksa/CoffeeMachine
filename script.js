"use strict";
// const log = console.log;
// log("скрипт подключен");


let items = document.querySelectorAll('.coffee-item');
let balance = document.querySelector('.status-text');
let progressBar = document.querySelector('.progress');
let pay = document.querySelector('.money-status');
for (let item of items){
    item.addEventListener('click', buyCoffee);
};

function buyCoffee(name, price, element){
    //    console.log([this.dataset.name, this.dataset.price, this])
       progressBar.value = 10;

    //    console.log(parseInt(pay.innerHTML))
    //    if(parseInt(pay) === 0){
    //      balance.innerHTML = "Недостаточно средств!"   
    //    }
       
      balance.innerHTML = "Вы выбрали " + this.dataset.name;




// balance.innerHTML = "Ваш " + this.dataset.name + " готовится!"

};

    let money = document.querySelector('.put-money');
    // let pay = document.querySelector('.money-status');
    // console.log([money, pay])
        money.addEventListener('click', function(){
        let countMoney =  parseInt(pay.innerHTML)
        pay.innerHTML = ""
        pay.innerHTML += Number(countMoney + 10)
      
    })


//  while( Number(pay.innerHTML) < Number(this.dataset.price) ){
//         balance.innerHTML = "Недостаточно средств!"   
//        }