/*У вас и у вашего друга в кармане столько денег, 
сколько было указано в окнах prompt. В зависимости 
от общей суммы ваших сбережений вы можете полететь на 
Майорку или выпить пива. С помощью условного оператора 
определите ваши возможности и отобразите на экране в alert.*/
var me = prompt("У меня");
var friend = prompt("У друга");
 if ( (+me + +friend) >= 100000){
 	alert ( "Летим на Майорку")
 }
 else{
 	alert( "Пойдем по пивку")
 }