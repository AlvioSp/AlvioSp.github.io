/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) 
all the numbers in an array of numbers
/* 5 Define a function reverse() that computes the reversal of a string.
/* 7 Write a function filterLongWords() that takes an array of words and an integer i and 
returns the array of words that are longer than i. */ 
 

/* sum returns the sum all the numbers in an array of numbers  */
function sum(n1) {
    return n1.reduce(function (accumulator, elem) {return accumulator + elem;}, 0);
}

/* multiply returns the multiply all the numbers in an array of numbers  */
function multiply(n1) {
    return n1.reduce(function (accumulator, elem) {return (accumulator * elem);}, 1);            
}

/* reverse returns the reversal of a string*/
function reverse(word) {
    return word.split("").reverse().join("");
}

/* filterLongWords returns the array of words that are longer than i.*/
function filterLongWords(words, b) {
    return words.filter(function(elem, i, array){  return elem.length > b;}).join();
}

