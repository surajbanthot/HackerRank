// Write a JavaScript program to test the first character of a string is uppercase or no

function upper_case(str)
{
    regex = /^[A-Z]/g;
    if(regex.test(str)){
        console.log("string's first character is a uppercase letter");
    }
    else{
        console.log("first character not a uppercase letter");
    }
}

