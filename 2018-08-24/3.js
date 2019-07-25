/* №3 Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
a. Добавьте в начало массива значение ‘Backbone.js’
b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
c. Добавьте в массив значение ‘CommonJS’ вторым элементом
d. Найдите и удалите из массива значение ‘jQuery’, 
выведите его в alert со словами “Это здесь лишнее”*/

var arr = ['AngularJS', 'jQuery'];
arr.unshift('Backbone.js');
arr.push('ReactJS', 'Vue.js');
arr.splice(1,0, 'CommonJS');
var x = arr.indexOf('jQuery');
alert('Это здесь лишнее ' + '"' + arr[x] + '"');
arr.splice(x,1);
console.log(arr);