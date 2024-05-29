"use strict";
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
// Object.defineProperty(exports, "__esModule", { value: true });
const getUser = document.querySelector("#user");
async function myCustomFetcher(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Error while connecting with status code ${response.status}`);
    }
    const data = response.json()
     console.log(data);
    return data;
}
function fetchUserData(url) {
    myCustomFetcher(url, {});
}
fetchUserData("https://api.github.com/users");
