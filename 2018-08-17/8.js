
/*Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. 
Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt). 
Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском языке, 
если имеет значение 'en' – то на английском, если 'de' – на немецком. 
Выведите на экран приветствие в зависимости от значения переменной lang. 
Решите задачу через if-else и через switch-case.*/

var lang = prompt("Hello!");
var greeting;
if (lang == "ru") {
    (greeting = "Доброе утро!");
}
else if (lang == "en") {
    (greeting = "Good morning!")
} 
else if (lang == "de") {
    (greeting = "Guten morgen!")
}

switch (lang) {
case "ru":
    alert("Доброе утро!");
    break;
case "en":
    alert("Good morning!");
    break;
case "de":
    alert("Guten morgen!");
    break;
default:
    alert("Hello!")
}
