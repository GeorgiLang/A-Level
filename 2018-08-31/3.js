/* №3 Напишите функцию, которая вызывается и работает следующим образом:
console.log( multi(2)(3)(4) ); // 24 */

function multi(x) {

    return ( y ) => { 
        return ( z ) => { 
            return x * y * z; 
        }; 
    }; 
} 
console.log( multi(2)(3)(4) ); 