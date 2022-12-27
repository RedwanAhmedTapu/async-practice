/*we have done it in a asynchronus way */

const takeorder = (customer,callback) => {
    console.log(`take order for ${customer}`);
    callback(customer);
};
const processorder = (customer) => {
    console.log(`processing order for ${customer}`);
    setTimeout(() => {
        console.log(`cooking completed`);
    }, 5000);
    console.log(`order processed for ${customer}`);
};
const completorder=(customer=>{
    console.log(`order completed for ${customer}`);
});


takeorder('customer 1',(customer)=>{
    processorder(customer,(customer)=>{
     completorder(customer);
    });
});
console.log(`the code is controlled in a asynchonus way`);