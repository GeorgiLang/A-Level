/* №6 Напишите функцию аналог метода массива push. Функция добавляет в конец 
переданного в параметре массив произвольное количество элементов.*/

var arr = [1, 1];
function push() {

    for (var i = 0; i < arguments.length; i++) {

        arr[arr.length] = arguments[i];
    }

    return arr;
}
console.log( push(2, 2, 2) );