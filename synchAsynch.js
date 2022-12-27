/*javascript run the code in a synchronus way*/

const processorder = (customer) => {
    console.log(`processing order for customer`);
    var currentTime = new Date().getTime();
    while (currentTime + 5000 >= new Date().getTime());
    console.log(`order processed for customer 1`);
}
console.log(`take order for customer 1`);
processorder();
console.log(`completed for customer 1`);




/*make it to execute the code in a asynchronus way*/
const processorders = (customer) => {
    console.log(`processing order for customer`);
    var currentTime = new Date().getTime();
   setTimeout(()=>{
    console.log(`cooking completed`);
},8000);
console.log(`order processed for customer 1`);
}
    
console.log(`take order for customer 1`);
processorders();
console.log(`completed for customer 1`);