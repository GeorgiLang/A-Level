/* №9 Напишите функцию concat, которая соединяет две строки, разделенные 
каким-то символом: разделитель и строки передаются в параметрах функции. 
Используя карринг, создайте новую функцию hello, которая которая выводит 
приветствие тому, кто передан в ее параметре:*/

function concat(arguments) {
    var obj = {};
    var arrForName = [];
    var arrForMail = []; 
    var arrTransit = arrForName;
    
    for (var i = 0; i < arguments.length; i++) {

        if ( arguments[i].match(/[^@]/) ){

            arrTransit.push( arguments[i] );
        }else{
            
            arrTransit = arrForMail;
        }
    } 
    obj.username = arrForName.join('');
    obj.mail = arrForMail.join(''); 
    return obj;
}    
console.log(concat('cucumber@gmail.com'));

var hi = function(x) {
   
    return function (y) {

        alert(x + y) ;
    }
}
var hello = hi('Hello ')
hello('World'); // Hello World
hello('John'); // Hello John