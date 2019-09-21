/* you need to store these values in a variable */
let firstFriend= prompt("Enter the name of your first of three friends.");
/* prompt needs to be lower case */
let secondFriend= prompt("Enter the name of your second of three friends.");
let thirdFriend= prompt("Enter the name of your third of three friends.");
/* this needs to be a prompt so they can answer it */
let best= prompt("Enter a 1 if your first person was your best friend, a 2 for the second, and a 3 for the third")
/* this needs [] since it's an array */

var friendNames = [];

/* these need to start at 0 */
friendNames[0] = firstFriend
friendNames[1] = secondFriend
friendNames[2] = thirdFriend
let bestFriend = friendNames[best - 1]

/* firstChar is not a thing so you need to use charAt(0) */
if (bestFriend.charAt(0) == "A")
   alert("Your best friends' name starts with A.")
/* you need a == */
else if (bestFriend.charAt(0) == "B")
   alert("Your best friends' name starts with B.")
else 
   alert("Your name starts with something other than A or B.")


