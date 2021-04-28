function thousands_separater(num)
{
    var num_parts = num.toString().split('.');
   num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/gi,",");
    return num_parts.join(".");
}

console.log(thousands_separater(10000.23));