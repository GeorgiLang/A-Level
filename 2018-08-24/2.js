/* №2 Сгенерируйте массив из N случайных чисел с двумя знаками после запятой. 
Затем переберите массив и распечатайте в консоли значения его элементов, 
возведенные в пятую степень. Для возведения в степень используйте вложенный цикл 
(не метод Math.pow(), не оператор **).*/

var arr = [];
for (var i = 0; i < 15; i++) {

    arr.push(Math.round(Math.random() * 100) / 100);
}
var x = 1;
for (var k = 0; k < arr.length; k++) {

    for (var j = 0; j < 5; j++) {

        x *= arr[k];

    }
    console.log(x);
}