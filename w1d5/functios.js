 /* max returns the maximum of 2 numbers */
 function max(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    };
}

/* maxOfThree returns the maximum of 3 numbers */
function maxOfThree(n1, n2, n3) {
    return max(max(n1, n2), n3);
}

/* isVowel returns true or false if the chart is a vowel  */
function isVowel(word) {
    switch (word.charAt(0)) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
            break;
    }
    return false;
}

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

/* findLongestWord returns the length of the longest one.*/
function findLongestWord(words) {
    let maxlong = words[0].length;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxlong) maxlong = words[i].length;
    }
    return maxlong;
}

/* filterLongWords returns the array of words that are longer than i.*/
function filterLongWords(words, b) {
    return words.filter(function(elem, i, array){  return elem.length > b;}).join();
}

/* runs test to see if expected argument is === to value returned by function2test argument */
function Test(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED ";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}


console.log("Expected output of max(27,31) is 31  " + Test(31, max(27, 31)));
console.log("Expected output of maxOfThree(77,57,27) is 77  " + Test(77, maxOfThree(77, 57, 27)));
console.log("Expected output of isVowel('ab') is true  " + Test(true, isVowel('ab')));
console.log("Expected output of sum([1, 2, 3, 4]) is 10  " + Test(10, sum([1, 2, 3, 4])));
console.log("Expected output of multiply([1, 2, 3, 4]) is 24  " + Test(24, multiply([1, 2, 3, 4])));
console.log("Expected output of reverse('jag testar') is ratset gaj  " + Test('ratset gaj', reverse('jag testar')));
console.log("Expected output of findLongestWord(['Expected','output','of','findLongest','Word']) is 11  " + Test(11, findLongestWord(['Expected', 'output', 'of', 'findLongest', 'Word'])));
console.log("Expected output of findLongestWord(['Expected','output','of','findLongest','Word'],5) is 'Expected,output,findLongest'  " + Test('Expected,output,findLongest', filterLongWords(['Expected', 'output', 'of', 'findLongest', 'Word'],5)));

