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
