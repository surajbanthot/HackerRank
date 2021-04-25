function maximumToys(prices, k){
//sort the array to get the prices in order
let sortedList = prices.sort((a, b)=> a-b)
let counter=0;
sortedList.forEach(price=>{
    console.log(`Price = ${price}\n`);
    if(k>price){
        k = k - price;
        counter++;
    }
})
console.log(counter);

}

maximumToys([1,12,5,11,200,1000,10], 50)