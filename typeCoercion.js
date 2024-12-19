let value = "33"
value = Number(value)

let data = "12mk"
data = Number(data)

// console.log(value, data) // number, NaN

/* when converting to Number from:

    String: "33"-> 33, "123abc" -> NaN
    Boolean: true -> 1, false -> 0
    null -> 0
    undefined -> NaN
*/

/* when converting to Boolean:
    1 -> true, 0 -> false
    String: "" -> false, "abc" -> true
    null -> false
    undefined -> false
*/

// ***********************Operations************************
// Arithmetic operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);


/* Operations specific to JS
    in JS exp is evaluated from left to right 
    and being loosely typed, it keeps converting while proceeding, wherever possible

    when '+' is there, string/boolean is converted to number : +true -> 1, +"12" -> 12
    Also, +12 => "12"
*/

// console.log("3"+2)          // 32
// console.log("3"-2)          // 1
// console.log("3"+ 2 + 5)     // left to right -> 325
// console.log(3 + 2 + "5")    // left to right -> 5+"5" -> 55
// console.log(1<2<3)          // left to right -> true<3 -> 1<3 -> true
// console.log(3>2>1)          // left to right -> true>1 -> 1>1 -> false

// console.log(8+4*2/4);       // operator precedence
// console.log(+true);         // converted to string -> 1
// console.log(+"");           // 0

// increment operator
let count = 10
++count
count++
// console.log(count);         //12
