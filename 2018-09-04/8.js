/*№Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал 
отформатированное имя пользователя. 
Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию;
2. Метод bind().*/

//№1
var user = {
    name: 'John'
};
function format(start, end) {
    console.log(start + this.name + end);
}
var userFormat = function(a,b){
    this.name = user.name;
    return format(a,b);
}
userFormat ('<<<','>>>');

//№2
var user = {
    name: 'John'
};
function format(start, end) {
    console.log(start + this.name + end);
}

var userFormat = format.bind(user);
userFormat ('<<<','>>>');