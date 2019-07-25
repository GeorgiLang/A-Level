/* №1 Создайте объект calculator с методами:
read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
sum() возвращает сумму этих двух значений
multi() возвращает произведение этих двух значений
diff() возвращает разницу
div() возвращает частное */

var calculator = {
    x: 0,
    y: 0,
    read: function() {

        this.x = +prompt('x');
        this.y = +prompt('y');
    },
    sum: function() {

        return this.x + this.y;
    },
    multi: function() {

        return this.x * this.y;
    },
    diff: function() {

        return this.x - this.y;
    },
    div: function() {
        
        return this.x / this.y;
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());