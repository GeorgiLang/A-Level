/*Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.*/

var array = [1, 2, 3,'a','b','c','4','5','6'];
var sum = 0;
for (var i = 0; i < array.length; i++){
	
	var x = array[i];
	
	if ( !isNaN(x) ) {
		sum += +array[i];
	}
}
console.log(sum);