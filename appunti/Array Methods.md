## Array Methods
```c++
const arr = [1,2,4]
const arr2 = [4,5,6]
const arr3 = [[2,3],1,4,[5,6]]
const arr4 = [4, 1, 6, 2, 3]

arr.at(0)                       =>  1                       // Take a value and returns the item at that index, allowing for positive and negative integers
arr.concat(arr2)                =>  [1,2,3,4,5,6]           // Returns a merged array of twho or more arrays
arr.copyWithin(2)               =>  [1,2,1]                 // Copies part of an array t oanother location in the same array and returns it without modifying its length
arr.entries()                   =>  [0,1],[1,2],[2,3]       // Returns a new Array Iterator object that contains the key/value pairs for each index in the array (in loop)
arr.keys()                      =>  0,1,2                   // Returns a new Array Iterator object that contains the keys for each index in the array (in loop)
arr.values()                    =>  1,2,3                   // Returns a new Array Iterator object that contains the values for each index in the array (in loop)
arr.every()                     =>  true / false            // Returns a boolean value if all elements in the array pass the test implemented by the provided function
arr.some()                      =>  true / false            // Returns a boolean value if one or more elements in teh array pass the test implemented by the provided function
arr.fill(11)                    =>  [11,11,11]              // Returns the modified array changing all elements to a static value from a start index
arr3.flat()                     =>  [2,3,1,4,5,6]           // Creates a new array with all sub-array elements up to the specified depth
arr3.flatMap(e => e)            =>  [2,3,1,4,5,6]           // Returns a new array formed by applying a given callback function to each element of the array (flat() + map())
arr.map(e => e * 2)             =>  [2, 4, 6]               // Create a new array populated with the results of calling a provided function on every element in the calling array.
arr.forEach(e => e)             =>  [1,2,4]                 // Executes a provided function onec for each array element
arr.filter(e => e > 1)          =>  [2,4]                   // Returns a new array with element that passed the determinated condition
arr.reduce((x,y) => x+y)        =>  7                       // Returns a single value of the function's accumulated result from left to right
arr.reduceRight((x,y) => x+y)   =>  7                       // Returns a single value of the function's accumulated result from right to left
arr.find(e => e > 1)            =>  2                       // Returns the first element in the provided array that satisfies the provided testing function
arr.findLast(e => e > 1)        =>  4                       // Returns the last element in the provided array that satisfies the provided testing function
arr.findIndex(e => e > 1)       =>  1                       // Returns the index of the first element in an array that satisfies the provided testing function
arr.findLastIndex(e => e > 1)   =>  1                       // Returns the index of the first element in an array that satisfies the provided testing function
arr.includes(1)                 =>  true                    // Determines whether an array includes a certain value among its entries, returning true or false as appropriate
arr.indexOf(1)                  =>  0                       // Returns the first index at which a given element can be found in the array, or -1 if it is not present
arr.lastIndexOf(1)              =>  0                       // Returns the last index at which a given element can be found in the array, or -1 if it is not present
arr.join('-')                   =>  1-2-3                   // Create and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string
arr.push(0)                     => [1, 2, 4, 0]             // Adds one or more elements to the end of an array and returns the new length of the array
arr.pop()                       => [1, 2]                   // Removes the last element from an array, this method changes the length of the array
arr.unshift(0)                  => [0, 1, 2, 4]             // Adds one or more elements to the beginning of an array and returns the new length of the array
arr.shift()                     => [2, 4]                   // Removes the first element from an array, this method changes the length of the array
arr.slice(1)                    => [2, 4]                   // Returns a copy of a portion of an array into a new array object from start to end (index of elements)
arr.splice(1, 2)                => [2, 4]                   // Changes the contents of array by removing or replacing existing elements and/or adding new elements in place
arr4.sort()                     => [1, 2, 3, 4, 6]          // Returns the same sorted array in ascending order
arr.reverse()                   => [4, 2, 1]                // Returns the same reversed array
arr.toString()                  => 1,2,4                    // Returns a string representing the specified array and it's elements
arr.toLocaleString()            => 1,2,4                    // Returns a string representing the elements of the array separated by a locale-specific String es. ","
arr.length                      => 3                        // Returns the number of elements in that array
Array(7)                        => [empty x7]               // Creates an empty array with a length property of declared number
Array.of(7)                     => [7]                      // Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments
Array.from('ciao')              => [c, i, a, o]             // Creates a new copied Array instance from an iterable or array-like object
Array.isArray([])               => true                     // Determines whether the passed value is an Array
```