/* In JS comparison between same data types is like in other languages, 
    but when data types are different, type coercion starts by default.

    * Equality check (==) and comparison operators (>, <, >=, <=) work differently for unequal data types.
    Comparison convert null (but not undefined) to 0 or NaN (a number) :

    * Strict check: === -> checks value as well as data type without type coercion
 */

// console.log(null == 0);
// console.log(null > 0);         // 0>0 false
// console.log(null >= 0);        // 0>=0 true

/* In JS exp is evaluated from left to right 
    and being loosely typed, it keeps converting while proceeding, wherever possible.
*/

// console.log(1<2<3)          // left to right -> true<3 -> 1<3 -> true
// console.log(3>2>1)          // left to right -> true>1 -> 1>1 -> false
