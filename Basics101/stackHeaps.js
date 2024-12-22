/* Stack - Primitive datatype are stored in Stack memory and when accessed a copy is created.
   Heap - Non primitive datatypes are stored in Heap memory and a reference is passed when accessed.

   when changes are made to variables referencing to same object, the original object is also changed
 */

let userId = 25
let newId = userId              // copy generated
newId = 30
// console.log(userId, newId);  // original value didnt change

let user = {
    id : 1,
    mail: "user@google.com"
}

let user2  = user           // reference passed to user2
user2.mail = "newuser@google.com"

console.log(user.mail, user2.mail);     //changes made to the same reference
