nums=[19, 20, 18, 14, 16]
var s=0
// nums.forEach(function(x){
//     console.log(x)
//     s+=x   
// })


// روش دیگری برای استفاده از حلقه forEach
nums.forEach(x => {
    console.log(x)
    s+=x
});


console.log(s/5)