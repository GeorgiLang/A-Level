/*№5 Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename. Используя встроенные функции массивов:	
Отфильтруйте пользователей младше 18 лет
Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если есть все три, и только firstname и lastname, если middlename нет
Сформируйте новый массив, который содержит только полное имя пользователей*/

var users = [
    {
    firstname: 'John',
    lastname: 'Doe',
    age: 26
    },
    {
    firstname: 'Kevin',
    middlename: 'Michael',
    lastname: 'Kane',
    age: 23,
    },
    {
    firstname: 'Ivan',
    lastname: 'Dragov',
    age: 36
    },
    {
    firstname: 'Sofia',
    lastname: 'Hopco',
    age: 18
    },
    {
    firstname: 'Alexander',
    lastname: 'Nosov',
    age: 12
    },
    {
    firstname: 'Margo',
    middlename: 'Elena',
    lastname: 'Jolie',
    age: 16
    },
    {
    firstname: 'Horatio',
    lastname: 'Cavelli',
    age: 34
    },
    {
    firstname: 'Tom',
    lastname: 'Cruise',
    age: 56
    },
    {
    firstname: 'Li',
    lastname: 'Pit',
    age: 13
    },
    {
    firstname: 'Phillip',
    middlname: 'Richard',
    lastname: 'Mask',
    age: 28
    }
];
// a)
var list = users.filter(function(item) {
    return item.age > 17;
});
console.log(users);
// b) 
list.forEach(function(x){

    if (x.middlename !== undefined) {
        x.fullname = x.firstname +' '+ x.middlename +' '+ x.lastname; 
    }else{
         x.fullname = x.firstname +' '+ x.lastname; 
    }
});
console.log(list);
// c)
var listFullname = list.map(function(x) {
    
    return x.fullname;
}); 
console.log(listFullname);