/*Найдите и исправьте ошибки в коде:
var x = prompt('x', 0);
var error;

switch (x) {
    case 0: error = 'На ноль делить нельзя';
    case 1: error = 'На единицу делить бессмысленно';
    case NaN: error = 'Не математическая операция';
}

if (error) {
    alert(error);
} else {
    alert(100 / x);
}*/

var x = prompt('Делим 100 на x', 'x');
var error = 100 / x;

switch (error) {
    case Infinity: alert('На ноль делить нельзя');break;
    case 100: alert('На единицу делить бессмысленно');break;
   
}

if (error) {
    alert('Результат = ' + error);
} else {
    alert('Не математическая операция');
}

