
// function fun(ab,b){
//     var a = ()=>{
//         console.log(this.name)
//     }
//     a();
// }

// fun.call({name:'Balaji'});


// let obj = {
//    name:'Balaji',
//    myMethod:function(){
//        let sirname = 'Thorbole'
//        return function inside(){
//         console.log(this);
//        }
      
//    }
// }

// obj.myMethod()()

console.log(globalThis);



// function a(){
//     return this.length;
// }
// let arr = [2,"BB",a]

// console.log(arr[2]());



// function x(){
//     let a = 10;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// x()();


// Array.prototype.myJoin = function(seperator){
//     let result = '';
//     for(let i=0;i<=this.length-1;i++){
//           result+=this[i];
//           if(i!=this.length-1){
//             result+=seperator
//           }
//     }
//     return result;
// }

// let name = arr.myJoin(" ")
// console.log(name);

// Array.prototype.myPush = function(...elements){
//     for(let element of elements){
//         this[this.length] = element;
//     }
//     return this.length
// }


// let rr = arr.push(1,2,4,5,6)
// console.log(rr);

// Array.prototype.myPop = function(){
//    let lastIndex = this.length-1;
//    let poppedElement = this[lastIndex];
//    this.length = lastIndex;
//    return poppedElement;
// }
//  let arr = ["Balaji","Maruti","Thorbole"];

//  let pp = arr.myPop();

// console.log(arr);
// console.log(pp);



// let str = "Hey JS,You are AMAZING."

// let vowels = ['a','e','i','o','u']
// function findVowels(s){
//    let count = 0;
//    for(let i of s.toLowerCase()){
//      if(vowels.includes(i)){
//       count++;
//      }
//    }
//    return count;
// }

// console.log(findVowels(str)); 


// let string = "Hey there i am the best javascript developer"


// function findLongestWord(str){
//   let longestWord = '';
// //   let max = 0;
// //  let maxword = str.split(' ').forEach(element => {
// //    if(element.length>max){
// //       max = element.length
// //       longestWord=element
// //    }
// //  })

// for(let element of str.split(' ')){
//    if(element.length>longestWord.length)
//      longestWord = element;
// }
//  return {longestWord,max:longestWord.length};

// }

// console.log(findLongestWord(string));