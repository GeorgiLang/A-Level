/*№4 Создайте объект array с методом инициализации начального значения массива, 
c методами добавления, удаления последнего элемента массива и методом возврата 
текущего состояния массива. Используйте концепцию chaining для создания цепочки 
вызовов.*/

var array = {
    arr: '',
    setValue: function(x) {

        this.arr = x;
        return this;
    },
    push: function (y) {

        this.arr.push(y);
        return this; 
    },
    pop: function () {

        this.arr.pop();
        return this;
    },
    getValue: function() {

        return this.arr; 
    }
}
array
    .setValue([1])
    .push(2)
    .push(3)
    .push(3)
    .pop();

var currentValue = array.getValue();
console.log(currentValue); // [1, 2, 3]  