/* №5 Создайте ассоциативный массив person, описывающий персону, с произвольным 
количеством произвольных полей. С помощью оператора in или typeof проверьте наличие 
в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет,
то добавляйте его в объект со значением, которое также запрашивается из prompt.*/

var person = {
    name: 'John',
    age: 33,
    language: 'english',
    device: {},
}
var x = prompt('Введите свойство для "person"');
if (x !== null) {

	person[x] = '';
}
if ('job'in person) {

    alert('"' + Object.keys(person)[4] + '"' + 'существует в "person"');
}

for (var key in person) {

    if (key == x) {

        person[[x]] = prompt([x],'Введите значение');
    }
}
console.log(person);