// let arr = ["Balaji","Maruti","Dattatray","Balaji","Shobha","Maruti"];

// function count(p){
//     let result=p.reduce((allNames,name)=>{
//         if (allNames[name]){
//             allNames[name]++;
//         }
//         else{
//             allNames[name]=1;
//         }
//         return allNames;
//     },{});
//     return result;
// }

// console.log(count(arr));


// let obj = [{name:"Balaji",age:26},{name:"Dattatray",age:22},{name:"vikas",age:26}]
// function demo(a){
//     let obj2={};
// for(var i=0;i<a.length;i++){
//     console.log(a[i].age)
//    if(!obj2[a[i].age]){
    
//     obj2[a[i].age]=[a[i]]
//    }
//    else{
//     obj2[a[i].age].push(a[i]);
//     }
 
// }
// return obj2;
// }

// console.log(demo(obj));



// let arr = [1,2,6,7,8,10];


// function isMissing(a){
//  let missing = [];

//  for(let i=0;i<a.length-1;i++){
//     if(a[i] && a[i+1]!=a[i]+1){
//         missing.push(a[i]+1)
//     }
// }
//  return missing;
// }

// console.log(isMissing(arr));



//let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];


// const result = sentences.map((a,b)=>{
//       return a.split(' ').length;
// })

// console.log(`sentence at index ${result.indexOf(Math.max(...result))} has maximum number of words.`);





// var obj = {

//     val: 100
    
//     }
    
//     function fun(){
    
//     console.log(this.val)
    
//     }
    
//     fun.call(obj)



// var obj = {

//     val: 100
    
//     }
    
//     function fun(a){
    
//     console.log(this.val + a)
    
//     }
    
//     fun.call(obj,3)




// var obj = {

//     val: 100
    
//     }
    
//     function fun(a, b , c){
    
//     console.log(this.val + a + b + c)
    
//     }
    
//     fun.call(obj, 3, 4, 5)
    
    

// var obj = {

// val: 100

// }

// function fun(a,b,c){

// console.log(this.val+a+b+c);

// }

// fun.call(obj, [3, 4, 5])




// var obj = {

//     val: 100
    
//     }
    
//     function fun(a, b , c){
    
//     console.log(this.val + a + b + c)
    
//     }
    
//     fun.apply(obj,[ 3, 4, 5])


        // var obj = {

        //     val: 100
            
        //     }
            
        //     function fun(a, b , c){
            
        //     console.log(this.val + a + b + c)
            
        //     }
            
        //     const fun2 = fun.bind(obj)
            
            
            
        //     fun2(1, 2,3)
    


//         console.log(a);

//     var a = 5;

// console.log(b)



// let radius = [2,4,7,5]
// function calculation(radius,logic){
//     let result = []
//     radius.forEach(element => {
//         result.push(logic(element))
//     });
//     return result;
// }

// function area(radius){
//      return Math.PI*radius*radius;
// }

// console.log(calculation(radius,area));


// function Greet(name){
//     this.name = name
// }

// Greet.prototype.sayHello = function(age){
//     console.log(`Hello my name is ${this.name}. My age is ${age}.`);
// }


// const balaji = new Greet("Balaji");

//  balaji.sayHello(26);

// demo();


// function countVowels(word){
//   const vowels = word.match(/[aeiou]/g)
//   return vowels?vowels.length : 0;
// }

// console.log(countVowels('Sanjay'));


function demo(){
    if(4){
        let a=10;
    }
    console.log(a);
}

demo()