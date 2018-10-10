/* №2 Напишите функцию extraCube, которая принимает в качестве параметра или число, 
или массив числовых значений и возвращает либо куб числа, либо массив кубов, 
в зависимости от типа входящего параметра (typeof). Для расчета куба числа вместо 
встроенного метода Math.pow используйте собственную функцию.*/

function extraPow(arguments, n) {
    var arr = [];
    var x;
    if (n < 0){

        x = -n;
    }else{

        x = n;
    };
    if (typeof arguments !== "object") {
        
        var z = pow(arguments);
        return z;
    }else{

        for (var i = 0; i < arguments.length; i++) {
 
            arr.push(pow(arguments[i]));
        };
        return arr;
    }; 
    function pow(num) {

        var y = num;

        for (var j = 0; j < x - 1; j++) {

            y *= num;
        };
        switch (true) {
            case((num === 0 && n === 0) || n === 0 || num === 1): return 1; break;
            case(num > 0 && n > 0): return y; break;
            case(num !== 0 && n < 0): return 1 / y; break;
            case(num < 0 && n > 0): return 1 * y; break;
            case(num === 0 && n < 0): return Infinity; break;
            case(num === 0 && n > 0): return 0;
        }
    };
};
console.log(extraPow( 0, -3));
console.log(extraPow([-3, -1, 0, 1], -1));
