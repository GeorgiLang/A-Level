/* №1 Напишите функцию, которая возвращает куб переданного числа, 
аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:*/

// a)
function cube(n) {
    var y = n;
    for (var i = 1; i < 3; i++) {

        y *= n;
    };
    return y;
};
console.log(cube(4));

// b)
function cube(x, n = 3) {
    if (n === 1) {
        return x;
    }else{
        return x * cube(x, --n);
    };
};
console.log(cube(4));
