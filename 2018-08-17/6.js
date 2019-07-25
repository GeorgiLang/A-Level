/*В переменную day записан текущий день недели. Если это не суббота и не воскресенье, 
выведите в alert сентенцию о необходимости идти на работу.*/
var day = prompt( "Какой сегодня день недели?");
switch( day ){
	case "суббота" : alert( "relax ,today is your day\)" );break;
	case "воскресенье" : alert( "relax ,today is your day\)" );break;
	default : alert( "Сегодня рабочий день и пора на работу!" )
}
