/* №1 Создайте функцию a, которая будет служить коротким именем для alert, 
то есть выводит любое пользовательское сообщение в стандартном модальном окне. 
Напишите функцию d, которая будет служить коротким именем для debugger, 
то есть запускает процесс отладки.*/

function a(hello) {
	alert( hello + '!' );
}
function d() {
	debugger
};
a('Hello');
d();
a('World');