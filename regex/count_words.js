function count_words(str){
    //exclude start and end white space
    str1 = str1.replace(/(^\s*)|(\s*$)/gi, "");
    //convert 2 or more spaces to 1
    str1 = str1.replace(/[ ]{2,}/gi, " ");
    //exclude newline with a start spacing
    str1 = str1.replace(/\n /, "\n");
    
}