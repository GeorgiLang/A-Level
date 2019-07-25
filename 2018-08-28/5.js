/* №5 Напишите функцию аналог метода массива shift. Функция удаляет из 
переданного в параметре массива первый элемент и возвращает новый массив.*/

function shift() {
var arr = [];

for (var i = 0; i < arguments.length; i++) {
	
	arr.push( arguments[i]) ;
}
    var arr2 = arr.slice(0,1);
    return arr2;
}
console.log( shift(2, 5, 6, 8, 23, 0) );