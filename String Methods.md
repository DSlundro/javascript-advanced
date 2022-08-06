## String Methods
```c++
1.  'Hello'.at(-1)                      =>  'o'                     // Returns the caracter at a specified index position (negative value included)
2.  'Hello'.charAt(4)                   =>  'o'                     // Returns the caracter at a specified index position
3.  'Hello'.charCodeAt(1)               =>  72                      // Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
4.  'Hello'.codePointAt(1)              =>  101                     // Returns method returns a non-negative integer that is the Unicode code point value at the given position
5.  'Hello'.concat(' World')            =>  'Hello World'           // Returns two or more joined strings
6.  'Hello'.endsWith('o')               =>  true                    // Returns if a string ends with a specified value
7.  'Hello'.startsWith('o')             =>  false                   // Returns if a string starts with a specified value
8.  'Hello'.includes('H')               =>  true                    // Returns if a string contains a specified value
9.  'Hello'.indexOf('l')                =>  2                       // Returns the index (position) of the first occurence of a value in a string
10. 'Hello'.lastIndexOf('l')            =>  3                       // Returns the index (position) of the last occurence of a value in a string
11. 'He'.localeCompare('llo')           =>  -1                      // Returns a number indicating whether a reference string comes before(-1), or after(1), or is the same(0) as the given string in sort order
12. 'Hello'.match(/h/gi)                =>  ['H']                   // Search a string for a value, or a regular expression, and returns the matches
13. 'Hello'.padStart(10,'-')            =>  '-----Hello'            // Returns a string that has been padded at the start with the specified string to the desired length
14. 'Hello'.padEnd(10,'-')              =>  'Hello-----'            // Returns a string that has been padded at the end with the specified string to the desired length
15. 'Hello'.repeat(3)                   =>  'HelloHelloHello'       // Returns a new string with a number of copies of a string
16. 'Hello'.replace('l', 'x')           =>  'Hexlo'                 // Search a string for a value and returns a string where the first value is replaced 
17. 'Hello'.replaceAll('l', 'x')        =>  'Hexxo'                 // Search a string for a value and returns a string where the all values are replaced 
18. 'Hello'.search('l')                 =>  2                       // Search a string for a value and returns the index (position) of the match
19. 'Hello'.slice(0, 3)                 =>  'Hel'                   // Extracts a part of a string and return a new string
20. 'Hello'.split('')                   =>  ['H','e','l','l','o']   // Returns a string into ad array of substrings
21. 'Hello'.substring(0,3)              =>  'Hel'                   // Extracts characters from a string, between two specified indices (positions)
22. 'Hello'.toLocaleLowerCase()         =>  'hello'                 // Returns a string converted to lowercase letters, using the host's locale
23. 'Hello'.toLocaleUpperCase()         =>  'HELLO'                 // Returns a string converted to uppercase letters, using the host's locale
24. 'Hello'.toLowerCase()               =>  'hello'                 // Returns a string converted to lowercase letters
25. 'Hello'.toUpperCase()               =>  'HELLO'                 // Returns a string converted to uppercase letters
26. 'Hello'.valueOf()                   =>  'Hello'                 // Returns the primitive value of a string or a string object
27. '   Hello   '.trim()                =>  'Hello'                 // Returns a string with removed whitespaces
28. '   Hello   '.trimStart()           =>  'Hello  '               // Returns a string with removed whitespaces from the start of a string
29. '   Hello   '.trimEnd()             =>  '  Hello'               // Returns a string with removed whitespaces from the end of a string
30. ['H','e','l','l','o'].toString()    =>  'H,e,l,l,o'             // Returns a string or a string object as a string
31. 'Hello'.length                      =>  5                       // Returns the length of a string
```