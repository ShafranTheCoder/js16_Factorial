"use strict";
let n = 5;
function inputAsking(){
   n = prompt("Write number:", `${n}`);
}
function inputChecking() {
    while (n.replace (/\d/g, '').length || n== null) {
        alert("Введите только цифры!");
        inputAsking();
    } alert ("All is fine");
}
function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
inputAsking();
inputChecking();
alert(factorial(n));

