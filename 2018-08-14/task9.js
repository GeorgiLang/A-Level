/*Задание №9 Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. 
Получите второе число из окна prompt. Сравните и отобразите в модальном окне: 
первое число меньше второго или нет, а также оба значения. 
Постарайтесь сделать все операции (кроме определения переменных) в одну строку 
и прямо в alert(...)*/
var x = Math.round ( Math.random () * 100 );
var y = prompt ( "Enter a number Y" );
alert ( "x < y = " + ( x < y ) +"," + " x = " + x +"," + " y =" + y);