/* №3 Используя синтаксис ES5, напишите функцию-аналог Math.min(). 
Функция принимает любое количество чисел и возвращает меньшее из них:*/

function min() {

var minNum = (arguments);

for (var i = 0; i < minNum.length; i++) {

    if(minNum[i] < minNum[0]){
        minNum[0] = minNum[i];
    }
	
}    
	return(minNum[0]);
}
console.log( min( 0, -1, 100, 500, 100500) );