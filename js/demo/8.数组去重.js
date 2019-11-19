let arr = [1,57,57,415,1,1,4,5,54,5,45];
let brr =[]
arr.forEach(function(item){
    if(brr.indexOf(item) == -1){
        brr.push(item);
    }
})
console.log(brr);