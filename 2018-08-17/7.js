/*Напишите калькулятор обмена валюты USD-UAH. Из первого prompt читается тип операции 
(регистр символов не имеет значения), из второго - сумма, подлежащая конвертации. 
Используя switch, рассчитайте результат конвертации и выведите его в alert.*/
var currency = prompt( "Введите валюту" );
var amount = prompt( "Введите сумму"); 
switch ( currency .toUpperCase(3)){
	case "UAH": alert( ((amount / 27).toFixed(2)) + " $");break;
	case "USD" : alert( ((amount*27).toFixed(2)) + " UAH");break;
	default: alert ( "Try later");
}
