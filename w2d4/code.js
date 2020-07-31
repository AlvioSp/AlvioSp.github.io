"use strict";

// banned words

String.prototype.filter = function(badWords) {
    let arr = this.split(" ");
    let newArr = arr.filter(s => !badWords.includes(s));
    let result = newArr.toString().replace(/,/g, " ");
    console.log(result);
    return result;
}


// BubbleSort 

Array.prototype.bubbleSort = function(){
    let arr = this;
    let len = arr.length;
    for (let i = 0; i < len ; i++) {
        for(let j = 0 ; j < len - i - 1; j++){ 
            if (arr[j] > arr[j + 1]) {
               
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}

// Teacher - subject


var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    var result = this.name + " is now teaching " + subject;
    console.log(result);
    return result;
}

var teacher = new Teacher();

teacher.initialize("Mcall", 45);
