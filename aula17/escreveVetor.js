var num = [1,8,9,6,]
c = 0
while(c <= num.length){
    console.log(num[c])
    c++
}


for(x=0;x < num.length;x++){
    console.log(x)
    console.log(num[x])
}

 for(let c in num){
     console.log(num[c])
 }

 console.log(num.some())