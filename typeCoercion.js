let value = "33"
value = Number(value)

let data = "12mk"
data = Number(data)

console.log(value, data) // number, NaN

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