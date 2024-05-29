function mani(arr){
  arr.push(5);
  arr=[1];
  return arr;
}

let list =[1,2,3,4];

console.log(mani(list)); 

console.log(list);

list=mani(list);

console.log(list);