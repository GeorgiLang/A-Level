/* №6 Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
прочитанными из prompt (например: brand, model, resolution, color...), 
не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.*/

var person = {
    name: 'John',
    age: 33,
    language: 'english',
    device: {},
}
	var device = {
		brand: 1,
		model: 1,
		resolution: 1,
		color: 1,
	}
	for (var key in device) {

		person.device[[key]] = prompt(key , 'Введите значение');
	    
	} 
var x = prompt( 'Введите свойство для "person"');
if (x !== null) {

	person[x] = '';
}
if ('job'in person) {

    alert('"' + Object.keys(person)[4] + '"' + 'существует в "person"');
}

for (var key in person) {

    if (key == x) {

        person[[x]] = prompt('Введите значение');
    }
}
console.log(person,person.phone);
