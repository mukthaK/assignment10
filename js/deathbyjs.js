// Solve the following string/math/number/function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.

//STEP 1: Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.Sample Data and OutputExample string: 'webmaster' Expected Output: 'abeemrstw'
function alpahetsInOrder(str) {
    let alphabets = str.split(''); 
    let sorted = alphabets.sort();
    let orderedStr = sorted.join('');
    return orderedStr;
}
console.log(alpahetsInOrder('webmaster'));


//STEP 2: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.Sample Data and OutputExample string: 'the quick brown fox' Expected Output: 'The Quick Brown Fox'
// function toUpperCase(str) {
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join(' ');
// }
// console.log(toUpperCase('the quick brown fox'));


//STEP 3: Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Sample Data and Output Example string: 'The quick brown fox' Expected Output: 5
// function countVowels(str) {
//     let alphabets = str.split('');
//     let count = 0;
//     console.log(alphabets);
//     for (item of alphabets) {
//         if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u' || item === 'A' || item === 'E' || item === 'I' || item === 'O' || item === 'U') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels('The quick brown fox'));


//STEP 4: Write a JavaScript function that generates a string id (specified length) of random characters.Sample Data and OutputExpected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
// function generateStrId(length) {
//     let alphaNumList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//         result += alphaNumList.charAt(Math.floor(Math.random() * alphaNumList.length));
//     }
//     return result;
// }
// console.log(generateStrId(8));
// console.log(generateStrId(5));

//STEP 5: Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.Sample Data and OutputSample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])Expected output: "United States of America"
// function longestName(arr) {
//     let longest_name = arr[0];
//     for (item of arr) {
//         if(item.length > longest_name.length) {
//             longest_name = item;
//         }
//     }
//     return longest_name;
// }
// console.log(longestName(["Australia", "Germany", "United States of America"]));