function is_html(str){
    regexp = /<([a-z]+) *[^/]*?>/;
    return regexp.test(str)? true : false;
}

console.log(is_html(''));
console.log(is_html('<html>'));

