/* №4 Напишите функцию isPalindrom, которая принимает на вход строку, 
проверяет, является ли она палиндромом и возвращает булевое значение. 
Функция должна быть нечувствительна к регистру символов строки.*/

function isPalindrom(abc) {

	var str = abc.toUpperCase().split(' ').join('');
	var str2 = '';

	for(var x = str.length-1; x >= 0; x--) {
     
	    str2 +=str[x];
	}    
	    
	    if (str == str2){
	    	return true;
	    }else{
	    	return false;
	    }
   
}
console.log( isPalindrom('Аргентина манит негра') );