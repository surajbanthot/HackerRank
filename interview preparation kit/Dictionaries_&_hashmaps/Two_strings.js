

function twoStrings(s1, s2){
    let result = "NO";
    const s1_len = s1.length();
    const s2_len = s2.length();

    if(s1_len >= 1 && s1_len<=10000 && s2_len >=1 && s2_len<=10000){
        result = (s1.split('').filter((el, key)=> s2.indexOf(el) > -1).length > 0) ? "YES" : "NO";
    }

    return result;
    }