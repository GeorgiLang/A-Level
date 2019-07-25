/*№3 Создайте функцию hello(), которая выводит приветствие пользователю. 
Создайте два объекта, содержащие поля firstname, lastname. Используя метод call 
и функцию hello() приветствуйте каждого из пользователей персонально.*/

var obj1 = {
    firstname: 'John',
    lastname: 'Doe'
};
var obj2 = {
    firstname: 'Jane',
    lastname: 'Moor'
};
function hello() {
    return alert('Hello ' + this.firstname + ' ' + this.lastname + ' !');
};
hello.call(obj1);
hello.call(obj2);