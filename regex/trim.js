let trim_func = /^\s+|\s+$/g;

function Trim(str){
    var result;
    if(typeof str === 'string')
    {
        result = str.replace(trim_func, '');
        return result;
    }
    else{
        return false;
    }
}

console.log(Trim(' w3resource '));
