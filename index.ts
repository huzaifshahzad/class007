// console.log("halo world");
//loop
// var index:number=1
// index=index+1
// var result:number=++index
// console.log("index",index);
// console.log("result",result);
// var index:number=1
// while (index< 10) {

//     console.log("index");
//     index++
    
// }
// var index:number=1;
// for(let index=10; index>=5; index--){
//     console.log("shahzad" ,index);
    
// }
// // anitionalization, condition,incremant dicriman for complate loop 
// var index:number=1;
// do{
//     console.log("shahzad", index);
//     index++
    
// }while(index<10)
// write a TS program the calculate sum of evan number in between 1000 time,
// var sum:number=0;
// for (let index = 1; index <=1000; index++) {
//     if (index%2 != 0) {
//         sum=sum+ index;
        
//     }
    
    
// }
// console.log("sum",sum);

var sum:number=0;
var list:number[]=[]
for (let index = 1; index <=100; index++) {
    if (index%2 == 0) {
        sum=sum+ index;
        list.push(index)
        
    }
    
    
    
}
console.log("sum",sum, list);
