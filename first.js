
/*Javascript : js is programing langiage,we use it to give the
 instructions to the computer
 For clear scrren in console use ctrl+k */


console.log( " Welcome Prapti !");
console.log( " I love JavaScript");

/*Variables in js=>containers for data/memory
location address. 
=>Variables are case sensitive in js,
=> letter,digit,_ ,$ is aloowed only
=> only first letter should be  _ ,letter,$
=> reserved word cannot be variable names
=> cases = camel case,paskal case,etc

=> let,const,var
=> var : re-declared & updated-global scope 
=> let: cannot be re-declared but updated , block scope
=> const : not redeaclared and redefined - block scope*/
fullName= "Prapti Bidve" ;
console.log(fullName);
college="Guru Gobind Singh COllege Nashik";
console.log(college);
age=24;
let m=78;

console.log(age);
isFollow=false;  //Boolean values
console.log(isFollow);
let x=BigInt("234");
let y=Symbol("Hello!");
//declare object e.g Student
// age=>is the key and 25=> is the value
//object=>collection of values,stored key:value pairs
const student={
    fullNamea:"Akash",
    age:25,
    cgpa:8.4,
    isPass:true,
};
console.log(student["age"]);//used "",'' when we used []
console.log (student.cgpa);//not used '' when used .
student["age"]=student["age"]+1;
console.log(student.age);
//Cretae object product and store the information like, name , price, rating
const product={
    title:"Ball Pen",
    rating:4,
    price:230,
    offer:5,
    
};
console.log(product);
//create a const obect called profile to store information like username,follow,etc 
const profile={
    pname:"prapti",
    posts:195,
    followers:589,
    following:4,
    isFollow:true,


};
console.log(profile);
console.log(typeof profile["pname"]);
