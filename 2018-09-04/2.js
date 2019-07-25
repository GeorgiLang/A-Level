/* №2 В синтаксисе ES5 создайте объект coffeeMachine со свойством message: 
‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – 
через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.*/

var coffeeMachine = {
    message: "Your coffee is ready!",
    start: function() {
         setTimeout(function(){alert(coffeeMachine.message)},3000);
    }
};
coffeeMachine.start();