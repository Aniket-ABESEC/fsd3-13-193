const toWords =(digit)=>{
    switch (digit){
    case 1:
    return "one";
    case 2:
        return "two";
    case 3:
        return "three";
    case 4:
        return "four";
        case 5:
            return "five";
            case 6:
                return "six";
    case 7:
        return "seven" ;
        case 8:
            return " eight";
            case 9:
                return "nine";
        case 10:
            return "ten";          
    }
};

console.log(toWords(5));
console.log(toWords(3));
console.log(toWords(7));
    