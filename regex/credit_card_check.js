function is_creditCard(str)
{
 regexp = /^4[0-9]{12}(?:[0-9]{3})?$/g;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_creditCard("378282246310006"));

console.log(is_creditCard("37828224630006"));
