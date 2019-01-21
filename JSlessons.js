/* Basic Data Structures:
Iterate Through All an Array's Items Using For Loops

We have defined a function, filteredArray, which takes arr,
a nested array, and elem as arguments, and returns a new array.
elem represents an element that may or may not be present on one
or more of the arrays nested within arr. Modify the function,
using a for loop, to return a filtered version of the passed array
such that any array nested within arr containing elem has been removed. */

function filteredArray(arr, elem) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    };
  };
console.log(newArr)
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//-------------------------------------------------
/*Basic Algorithm Scripting: Return Largest Numbers in Arrays

Return an array consisting of the largest number from each
provided sub-array. For simplicity, the provided array will
contain exactly 4 sub-arrays.*/

function largestOfFour(arr) {
  const maxVal = [];
  arr.forEach(function(subArr) {
    maxVal.push(Math.max(...subArr));
  });
return maxVal;
};

//-------------------------------------------------

/*
Check if a string (first argument, str)
ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method,
which was introduced in ES2015. But for the purpose of
this challenge, we would like you to use one of the JavaScript
substring methods instead.

*/

function confirmEnding(str, target) {
str.slice( str.length - target.length ) === target ? str = true: str = false;
return str;
}


//-------------------------------------------------

/*

Basic Algorithm Scripting: Truncate a String

Truncate a string (first argument) if it is longer
than the given maximum string length (second argument).
Return the truncated string with a ... ending.

*/

function truncateString(str, num) {
  if (num >= str.length) {
    return str
  };
  return str.slice(0 ,num) + "...";
}

truncateString("Peter Piper picked a peck of pickled peppers", 11);


//-------------------------------------------------

/*

Basic Algorithm Scripting: Finders Keepers

Create a function that looks through an array
(first argument) and returns the first element in
the array that passes a truth test (second argument).
If no element passes the test, return undefined.

*/


function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
};

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });

//-------------------------------------------------

/*

Basic Algorithm Scripting: Boo who

Check if a value is classified as a boolean primitive.
Return true or false.
Boolean primitives are true and false.

*/

function booWho(bool) {
  return (typeof bool) === 'boolean';
}

booWho(null);

//-------------------------------------------------

/*

Title Case a Sentence

Return the provided string with the first letter of each
word capitalized. Make sure the rest of the word is in lower
case.

For the purpose of this exercise, you should also capitalize
 connecting words like "the" and "of".

*/

function titleCase(str) {
  let arr = str.toLowerCase().split(' ')
  return arr.map(x => x.replace(x[0], x[0].toUpperCase())).join(" ")
};

titleCase("I'M a little tEa pOt");

//-------------------------------------------------

/*

Slice and Splice

You are given two arrays and an index.

Use the array methods slice and splice to copy each element
of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain
the same after the function runs.

*/

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let newa= [...arr2];
  newa.splice(n, 0, ...arr1);
  return newa;
}

//-------------------------------------------------

/*

Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

*/

// This could have been easily resolved by doing:
 // return arr.filter(Boolean)
 // FYI

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
    arr.splice(i, 1);
    i -= 1;
    };
  };
  return arr
}

bouncer([11, "ate", 7, 8, '', false, 9]);


//-------------------------------------------------

/*

Where do I Belong
Return the lowest index at which a value (second argument)
should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.

*/

function getIndexToIns(arr, num) {
 arr.push(num);
 arr.sort((a, b) => a - b);
 console.log(arr);
 return arr.indexOf(num);
 console.log(arr.indexOf(num))
}

getIndexToIns([2, 20, 10], 19);

//-------------------------------------------------

/*

Chunky Monkey
Write a function that splits an array (first argument) into groups the
length of size (second argument) and returns them as a two-dimensional array.

*/


function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, (i + size)))
  };
  return newArr;
};

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

//-------------------------------------------------

// INTERMEDIATE ALGORITHMS

//-------------------------------------------------

/*

Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum
 of those two numbers plus the sum of all the numbers
 between them.

The lowest number will not always come first.

*/

function sumAll(arr) {
 let newArr = arr.sort((x,y) => x-y)
 let arrBetw = between(...newArr);
  return arrBetw.reduce((x,y) => x + y )
}
function between(x, y) {
  let betweenNum = [];
  for (x; x <= y; x++) {
    betweenNum.push(x);
  }
  return betweenNum;
}
sumAll([14, 10]);

//-------------------------------------------------

/*

Diff Two Arrays

Compare two arrays and return a new array with any items only
found in one of the two given arrays, but not both. In other
words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.

*/

function diffArray(arr1, arr2) {
  let newArr1 = arr1.filter(function(x) {
    if (arr2.indexOf(x) === -1) {
      return x
    } //Finding unique value of 1st array
  });
  let newArr2 = arr2.filter(function(y) {
    if (arr1.indexOf(y) === -1) {
      return y
    } //Finding unique value of 2nd array
  });
  return newArr1.concat(newArr2)
}

diffArray([1, 2, 3, 6, 5], [1, 2, 3, 4, 5]);

//-------------------------------------------------

/*

Seek and Destroy

You will be provided with an initial array (the first argument
in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same
value as these arguments.

*/

function destroyer(arr) {
  let arg = arr.slice.call(arguments, 1)
  return arr.filter(function(x) {
    if (!arg.includes(x)) {
      return x;
    }
  })
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//-------------------------------------------------

/*

Wherefore art thou
Make a function that looks through an array of objects
(first argument) and returns an array of all objects that
have matching name and value pairs (second argument). Each
name and value pair of the source object has to be present
in the object from the collection if it is to be included in
the returned array.

For example, if the first argument is [{ first: "Romeo",
last: "Montague" }, { first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }], and the second
argument is { last: "Capulet" }, then you must return
the third object from the array (the first argument),
because it contains the name and its value, that was
passed on as the second argument.

*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let keys = Object.keys(source);
  arr = collection.filter(function(obj) {
    let colKey = Object.keys(obj)
    for (let i = 0; i < keys.length; i++)  {
      if (colKey.indexOf(keys[i]) === -1) {
        return false
      }
      if (obj[colKey[colKey.indexOf(keys[i])]] !== source[keys[keys.indexOf(keys[i])]]) {
        return false
      }
    }
    return obj
  })
  console.log(arr)
  // Only change code above this line
  return arr;
}

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});

//-------------------------------------------------


/*

Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

function spinalCase(str) {
  let arr = [];
  arr = str.replace(/([a-z])([A-Z])/g, '$1 $2') === str ? str.replace(/_/g, " ").split(" ") : str.replace(/([a-z])([A-Z])/g, '$1 $2').split(" ")
  return arr.join("-").toLowerCase();
}
spinalCase("ThisIsSpinalTap");

//-------------------------------------------------

/*

Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

*/

function translatePigLatin(str) {
  let vowelRegex = /[aeiou]/i; 
  if (str.search(vowelRegex) === -1) {
    return str.concat("ay")
  }
  return str.search(vowelRegex) === 0 ? str.concat("way") : str.slice(str.search(vowelRegex)).concat(str.slice(0, str.search(vowelRegex)) + "ay")
}

//-------------------------------------------------

/*

Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

*/

function myReplace(str, before, after) {
  let regex = new RegExp(before, "i")
  let firstChar = str.charAt(str.indexOf(str.match(regex)))
  if (firstChar === firstChar.toUpperCase()) {
    after = after.charAt(0).toUpperCase().concat(after.slice(1))
  }
  return str.replace(regex, after)
}

myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped");

//-------------------------------------------------

/*

DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


*/

function pairElement(str) {
  let pair = [...str];
  console.log(pair)
  const convert = {
      G: ["G", "C"],
      C: ["C", "G"],
      T: ["T", "A"],
      A: ["A", "T"]
  };
    return pair.map( (elem) => convert[elem]);
}

pairElement("GCG");

//-------------------------------------------------

/*

Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/

function fearNotLetter(str) {
  let arr = []
  for (let i = 0 ; i < str.length; i++ ) {
      arr.push(str.charCodeAt(i));
  }
 return arr.reduce((x,y) =>  {
      if (x - y === - 2) {
          return String.fromCharCode(x + 1);
      } 
      return y;
      })
}

//-------------------------------------------------

/*

 Sorted Union
Write a function that takes two or more arrays and returns a new array 
of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in 
their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final 
array should not be sorted in numerical order.

*/

function uniteUnique() {
  let newArr =[];
  for (let i = 0; i < arguments.length; i++) {
      newArr.push(...arguments[i])
      console.log(arguments[i])
  }
  let unique = [...new Set(newArr)]
  return unique
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// ---------------------

/*

Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
 
*/

function convertHTML(str) {
  // &colon;&rpar;
  let regex = /<|>|"|'|&/g;
  let refObj = {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
      "&": "&amp;"
  }
  return regex[Symbol.replace](str, (val) => {
      return refObj[val]
  })
}

convertHTML("Dolce & Gabbana");

//-------------------------------------------------

/*

Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers 
that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional 
number in the sequence is the sum of the two previous numbers. The first six 
numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less 
than or equal to 10 are 1, 1, 3, and 5.


*/

function sumFibs(num) {
  let oddSum = 1;
  let fibCount = [1];
  for (let i = 1; i <= num; i += fibCount.shift()) {
      console.log(i)
      if (i % 2 !== 0) {
          console.log(i)
          oddSum += i;
      }
      fibCount.push(i)
  }
  return oddSum;
}

sumFibs(75024);

//-------------------------------------------------

/*

Drop it
Given the array arr, iterate through and remove each element 
starting from the first element (the 0 index) until the function 
func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, 
otherwise, arr should be returned as an empty array.

*/

function dropElements(arr, func) {
  let newArr = arr;
  let val;
  // perform while loop as long as function is false and array length is not zero.
  while (!func(val) && newArr.length != 0) {
    // When function if false, remove first element of the array
          if (!func(newArr[0])) {
              newArr.shift()
          }
    // when function is true, set val to first element of array to end while loop.
          if (func(newArr[0])) {
              console.log(newArr[0])
              val = newArr[0]
          }
  }
  return newArr;
}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});

//-------------------------------------------------

/*

Steamroller
Flatten a nested array. You must account for varying levels of nesting.

*/

function steamrollArray(arr) {
  let flatArray =[];
  for (let i = 0; i < arr.length; i++) {

      if ( !Array.isArray(arr[i]) ) {

          flatArray.push(arr[i]);

      } if ( Array.isArray( arr[i] ) ) {

          let nestedArr = steamrollArray(arr[i]);
          for (let i= 0; i < nestedArr.length; i++) {
                  flatArray.push(nestedArr[i]);
          }
      }
  }
  return flatArray
  
}

steamrollArray([5, [[4, 5, 6]], 5]);

//-------------------------------------------------

/*

Binary Agents
Return an English translated sentence of the passed binary string.

*/

function binaryAgent(str) {
  let arr = str.split(" ");
  return arr.map(x => {
     return String.fromCharCode(parseInt(x, 2))
  }).join('')
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//-------------------------------------------------

/*

Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true 
if its value is truthy. Otherwise, return false.

*/

function truthCheck(collection, pre) {
  for (let prop in collection) {
      console.log(prop)
      if(!collection[prop][pre]) {
          console.log(false)
          return false;
       }
   }
   console.log(true)
   return true
 }

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");

//-------------------------------------------------

/*

Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.


*/

function addTogether() {
  let arr = [...arguments]
for (let i = 0; i < arr.length; i++) {
  if ((typeof arr[i]) !== "number") {
      return undefined;
  } else if (arr.length === 1) {
      return function add(y){
          if (typeof y !== "number") {
              return undefined;
          }
          return y + arr[i];
      };
  }
}
return arr.reduce((x, y) => x + y)
}

//-------------------------------------------------

/*

Make a Person
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

*/

let Person = function(firstAndLast) {
  let arr = firstAndLast.split(' ')  
  this.getFullName = function() {
    return arr.join(' ');
  };
  this.getFirstName = function() {
    return arr[0];
  };
  this.getLastName = function() {
    return arr[1];
  };
  this.setFullName = function(firstAndLast) {
      let newFull = [];
      newFull = firstAndLast.split(' ');
      for (let i = 0; i < arr.length; i++) {

        // This verifies if both the firstname and lastname from the new input are different

          if (arr[0] !== newFull[0] && arr[1] === newFull[1]) {

            // if only first name is different, it will only return the setFirstName function with the new firstname

              return this.setFirstName(newFull[0])
            
          } else if (arr[1] !== newFull[1] && arr[0] === newFull[0]) {
            
            //if only the lastname is different, it will return the setLastname function with the new lastname

            return this.setLastName(newFull[1])
          } else {
              arr = newFull
              return arr.join(" ")
          }
      }
  };
  this.setFirstName = function(first) {
    arr[0] = first;
    return this.getFullName(arr);
  };
  this.setLastName = function(last) {
      arr[1] = last; 
    return this.getFullName(arr);
  }
}

var bob = new Person('Jose Ross');
console.log(bob.setFullName('Billy Tobar'))
console.log(bob.getFirstName())
console.log(bob.getLastName())
console.log(bob.getFullName())

//-------------------------------------------------

/*

Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
The values should be rounded to the nearest whole number. The body being orbited is Earth.

*/

function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let result = [];
  for (let el in arr) { 
      result.push({
          name: arr[el].name,
          orbitalPeriod:  Math.round( 2 * Math.PI *  Math.sqrt( Math.pow( ( arr[el].avgAlt + earthRadius ) , 3 ) / GM ) )
      })
      console.log(result)
  }
  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//-------------------------------------------------

// FINAL JS PROJECTS

//-------------------------------------------------


//-------------------------------------------------

/*

Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

*/

function palindrome(str) {
  let regex = /[^a-z|0-9]|\s/g;
  let arr = [...str.toLowerCase().replace(regex, '')];
  return arr.join('') === arr.reverse().join('') ? true : false;
}



palindrome("A man, a plan, a canal. Panama");


//-------------------------------------------------

/*

Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

*/

function convertToRoman(num) {
  let decNum = num
  const romArr = ['M', 'CM', 'DC', 'D', 'CD', 'C', 'XC', 'LX', 'L', 'XL', 'X', 'IX', 'VI', 'V', 'IV', 'I'];
  const numArr = [1000, 900, 600, 500, 400, 100, 90, 60, 50, 40, 10, 9, 6, 5, 4, 1];
  let result = '';

  for (let i = 0; i < numArr.length; i++){
      if ((decNum - numArr[i]) >= 0) {
          result += romArr[i];
          decNum -= numArr[i];
          i = -1;
      }
  }
  return result;
 }

 //-------------------------------------------------

/*

Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

*/

function rot13(str) { // LBH QVQ VG!
  let regex = /[A-Z]/g;
  let rotArr = [...str];
return rotArr.map(x => {
    let val = 0;
    if (x.charCodeAt() < 78 && x.match(regex)) {
        val = x.charCodeAt() + 13;
      return String.fromCharCode(val)
    } else if (x.charCodeAt() >= 78 && x.match(regex)) {
      val = x.charCodeAt() - 13;
      return String.fromCharCode(val);
    }
    return x;
}).join('')
};

rot13("SERR YBIR?");

 //-------------------------------------------------

/*
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

*/

