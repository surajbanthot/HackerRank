function vowel_count(str){
    return str.match(/[aeiou]/gi).length;
}

console.log(vowel_count('The quick brown fox jumped over the lazy dog'));

