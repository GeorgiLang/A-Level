/* №2 Используя стрелочный синтаксис ES6, напишите функцию max, 
которая сравнивает два числа и возвращает большее:*/

'use strict'; 
let max = (a, b) => {
   if (a > b) return a;
   else return b;
}    
console.log( max(0,-1) );