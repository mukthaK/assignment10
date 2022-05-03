//STEP 1:Create an application that prompts the user for their name. Then, find the length of characters in the person’s name. Use the alert method to display the result.
function findLength() {
    let userName = prompt('Please enter your name');
    alert(`length of characters in your name ${userName} is ${userName.length}.`);
}
findLength();

//STEP 2:Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
// function findLetter() {
//     let userName = prompt('Please enter your name');
//     let num = prompt('Enter a numeric value');
//     let letterToFind = String.fromCharCode(num).toLowerCase();
//     let pos = userName.indexOf(letterToFind);
//     if(pos >= 0) {
//         alert(`Name '${userName}'. The letter '${letterToFind}' corresponding to the numeric value ${num} is found at position ${pos+1}`);
//     } else {
//         alert(`Name '${userName}'. The letter ${letterToFind} corresponding to the numeric value ${num} is NOT found`);
//     }    
// }
// findLetter();

//STEP 3:Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
// let firstName = prompt('Enter your First Name');
// let lastname = prompt('Enter your Last Name');
// alert(`Your name is: ${firstName.concat(lastname)}`);
// alert('Your name is: ' + firstName.concat(lastname));

//STEP 4:Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
// let txt = 'The quick brown fox jumps over the lazy dog';
// alert(`The index of the word 'fox' is found at position ${txt.indexOf('fox')}`);

//STEP 5:Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
// let text = 'The quick brown fox jumps over the lazy fox';
// alert('The last index of the word fox is found at position ' + text.lastIndexOf('fox'));

//STEP 6: Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
// let text = 'The quick brown fox jumped over the lazy dog';
// let userName = prompt('Enter your full name');
// alert(text.replace('the lazy dog', userName));

//STEP 7: Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
// let text = 'The quick brown fox jumps over the lazy dog';
// let word = prompt('Enter a word');
// alert(text.search(word));

//STEP 8: Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
// let old_string = 'The quick brown fox jumps over the lazy dog';
// let new_string = old_string.substring(old_string.length - 12);
// alert(new_string.toUpperCase());

//STEP 9: Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
// let text = '            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
// alert(text.trim().toLowerCase());

//STEP 10: Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
// let text = 'the quick brown fox jumps over the lazy dog';
// alert(text.charAt(0).toUpperCase()+text.slice(1));
