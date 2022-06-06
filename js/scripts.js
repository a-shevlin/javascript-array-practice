const months = ["december", "february"];
/*declare value to array */
months.push("march");
/* push to location at end of array (currently pos 2) */
months.push("april");

let modifiedMonths = months.concat("may");
modifiedMonths[3] = "june";
/* changes value at pos 3 from april to june */

modifiedMonths.unshift("november");
/* shifts array positions to the right and insert "november" at pos 0*/
modifiedMonths.shift();
/* shifts array positions to left and removes "november" "(current pos 0 is december)"*/
modifiedMonths.pop();
/* pops last element from array off (destructive) using in debug console will show element removed as a return*/

const monthsList = modifiedMonths.join();
/* joins array list to single string with commas */
const monthsJoin = modifiedMonths.join("");
/* join array list to single string without commas (ex: decemberfebruarymarch...)*/
const monthsDots = modifiedMonths.join("...");
/* join array list to single string without commas but adds "..." between elements*/

const monthsSlice = modifiedMonths.slice(1);
/* slices off everything before pos 1 */
const monthsSplit = modifiedMonths.slice(1,3);
/* slices off everything before pos 1 and after pos 3 */

const originalArray = [1,2,3,4,5];
let cloneArray = originalArray.slice(3);
cloneArray.push(6);
/* declaring a new array using the same elements but changing the copy use .slice() otherwise you change both arrays */
/* use this instead of creating a pointer -> "let cloneArray = originalArray" */

console.log(months);
console.log(modifiedMonths);

originalArray.forEach(function(number) {
  console.log(number * 2);
});
/* logs each element in originalArray to console after multiplying */
let doubledArray = [];
originalArray.forEach (function(element) {
  doubledArray.push (element *2);
});
/* pushes the originalArray * 2 to doubledArray value */
let sumArray = 0;
originalArray.forEach(function(element) {
  sumArray += element;
});
/* adds values from originalArray to each other and assigns to sumArray */

const sibNames = ["Alex","Katie"];
const rentNames = ["Mary","Marie"];
let combineNames = sibNames.concat(rentNames);
console.log (combineNames);

combineNames.push("Finnley","Milo");
console.log(combineNames);

const reverseNames = combineNames.reverse();
console.log(reverseNames);

reverseNames[3] = "Michael";

let thingsILike = "I like...";
reverseNames.forEach(function(person) {
  thingsILike = thingsILike.concat(" " + person + "!");
});
/*use a forEach .concat to add to a string. */


reverseNames.forEach(function(person) {
  $("#people").append(" " + person + "!");
});
/* use forEach .append to add to pre-existing #id */