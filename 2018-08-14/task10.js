/*Найдите и исправьте ошибки в коде:
'use strict';
var x = prompt('Введите Х', '1')
var    y = prompt('Введите Y', '1');
alert( x + y );*/
"use strict";
var x = prompt('Введите Х', '1');
var y = prompt('Введите Y', '1');
alert( +x + +y );