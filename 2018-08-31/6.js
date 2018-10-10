/*Замыкания
  №1 Используя замыкание, напишите функцию createTimer, которая использует 
  метод performance.now() для получения текущей временной метки и служит 
  для замера времени выполнения другого кода:*/

function createTimer() {
    var a = performance.now();

    return function() {
    var b = performance.now();      
        return b - a;
    };
};

var timer = createTimer();
alert('!');
alert( (timer()*1000).toFixed(0) ); 
// время в мкс от начала выполнения createTimer() до момента вызова timer()

