/* №7 Создайте объект dates для хранения дат. Первая дата – текущая, new Date. 
Вторая дата – текущая дата минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. 
Проверьте, попадает ли введенная дата в диапазон дат объекта dates.*/

var dates = { 
	presentDate: Date.parse(new Date),
	oneYearAgo: ((Date.parse(new Date))-(365*(24*(60*(60*(1000)))))),
}
var enteredDate = prompt("Enter date",'2018-09-01');

if ( (Date.parse(enteredDate) >= (dates['oneYearAgo'])) 
	&& (Date.parse(enteredDate) <= (dates['presentDate'])) ) {

   	alert('попадает в диапазон дат в dates')	  
}else{
	alert('не попадает в диапазон дат в dates' )
}
console.log( dates, Date.parse(enteredDate) ); 