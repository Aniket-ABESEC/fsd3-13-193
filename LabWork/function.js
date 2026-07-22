const numberToWord = (num) => {
    const words = [
        "One", "Two", "Three", "Four", "Five",
        "Six", "Seven", "Eight", "Nine", "Ten"
    ];

    if (num >= 1 && num <= 10) {
        return words[num - 1];
    } else {
        return "Invalid input! Enter a number between 1 and 10.";
    }
};


console.log(numberToWord(1));    
console.log(numberToWord(5));   
console.log(numberToWord(10)); 
console.log(numberToWord(15));  