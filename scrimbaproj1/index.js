
let count1 = document.getElementById("count-el1")
let count2 = document.getElementById("count-el2")
let count = 0
let sum = 0

function add1(){
    count +=1
    count1.textContent = count
}
function add2(){
    count +=2
    count1.textContent = count
}
function add3(){
    count +=3
    count1.textContent = count
}

function add11(){
    sum +=1
    count2.textContent = sum
}
function add22(){
    sum +=2
    count2.textContent = sum
}
function add33(){
    sum +=3
    count2.textContent = sum
}