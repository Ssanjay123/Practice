//@ts-ignore
// function average(...arr):number{
//   let len = arr.length;
//   let total:number = 0;
//   let avg = 0;
//   for(let item in arr){
//      total += arr[item]
//   }
//   avg = total/len;
//   return avg;
// }

import res from "express/lib/response"
import { removeTicks } from "sequelize/types/utils"

// console.log(average(1,2,3,4));


// enum Roles {
//     user="user",
//     admin='admin'
// }

// type LoginDetails = {
//     name?:string,
//     age:number,
//     email:string,
//     password:string
//     role:string
// }

// const user1:LoginDetails = {
// name:"Balaji",
// age:26,
// email:"thorbolebalaji1997@gmail.com",
// password:"Balaji",
// role:Roles.admin
// }

// const user2:LoginDetails = {
//     name:"Dattatray",
//     age:22,
//     email:"thorboledattatray@gmail.com",
//     password:"Balaji",
//     role:Roles.user
//     }

// const info=(user:LoginDetails):string=>{
//     const {name,email,role} = user;
//     return role==="admin"?`${name} is allowed to make changes`:`${name} isn't allowed to make changes.`
// }


// console.log(info(user1));
// console.log(info(user2));

// const inputValue = (value:string|number|boolean)=>{
//     if(typeof value==="string")return value.toUpperCase();
//     if(typeof value==='number') return value*4;
//     if(value===true) return false;
//     if(value===false) return true;
// }

// console.log(inputValue(3));
// console.log(inputValue('Balaji'));
// console.log(inputValue(true));
// console.log(inputValue(false));


// let user1:User={name:'Balaji',age:26}

// let loc:MyLocation={city:'Mumbai',state:'Maharashtra'}


// function createUserProfile(user:User,location:MyLocation):string{
//   return `My name is ${user.name} and i am living in ${location.city}.`
// }

// createUserProfile(user1,loc)

// type User = {
//     name:string,
//     age:number
// }

// type MyLocation = {
//     city:string,
//     state:string
// }

// function add<T>(a:T,b:T):T{
//    console.log(typeof a);
//    console.log(typeof b);
// }

// console.log(add(2,3));
// console.log(add('Balaji','Mahesh'));

interface UserData{
   id:number, 
   name:string,
   avtar_url:string,
   url:string
}



const getUser = document.querySelector("#user") as HTMLInputElement


async function myCustomFetcher<T>(url:string,options?:RequestInit):Promise<T>{

   const response = await fetch(url,options)

   if(!response.ok){
      throw new Error(`Error while connecting with status code ${response.status}`)
   }
   const data = response.json();
   console.log(data);
   
   return data;
}

function fetchUserData(url:string){
    myCustomFetcher<UserData[]>(url,{})
}

fetchUserData("https://api.github.com/users")