let quoteString= 'Failure is simply the opportunity to begin again this time more intelligently';

let upperCaseString= quoteString.toUpperCase();
console.log(upperCaseString);

let authorString= '- Henry Ford'

let completeString= quoteString.concat(authorString);
console.log(completeString);

let secondString= 'Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King'

lowerCaseString= secondString.toLowerCase();
console.log(lowerCaseString);

console.log(secondString.charAt(2));

let findString= secondString.slice(35, -14);
console.log(findString);
