/* №5 Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или 
‘1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного калькулятора.*/

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

var me = {
    getSum: function() {
        return calculator.x + ' + ' + calculator.y + ' = ' + calculator.sum();
    },
    getMulti: function() {
        return calculator.x + ' * ' + calculator.y + ' = ' + calculator.multi();
    },
    getDiff: function() {
        return calculator.x + ' - ' + calculator.y + ' = ' + calculator.diff();
    },
    getDiv: function() {
        return calculator.x + ' / ' + calculator.y + ' = ' + calculator.div();
    }
};
alert( me.getSum() );
alert( me.getMulti() );
alert( me.getDiff() );
alert( me.getDiv() );