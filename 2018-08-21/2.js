/* №2 Используя любой цикл, напишите программу, которая в консоли 
выводит текстовое поздравление. Программа поздравляет того, 
чье имя определяется в переменной username:
Happy birthday to you
Happy birthday to you
Happy birthday dear {{username}}
Happy birthday to you*/
var username = "Mr.President";
var happyBD = "Happy birthday to you";

for (var i = 1; i < 4; i++) {
	console.log(happyBD);

    if (i == 2) {
        console.log(happyBD.substring(0,14) +  " dear " +  username)
    }
}