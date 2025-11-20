//Chapter 3.Loops in JS

//console.log("Hello Prapti");
for( let i=1;i<=5;i++){
    console.log("Hello Prapti");
}
let n=8
let sum=9;
for( let j=1; j<=n; j++){
    sum=sum+j;
    
}
console.log("sum=",sum);

for(let k=1;k<=4; k++){
    console.log("k",k);
}

//while loop
let a=1;//intialization
while(a<=30){
    console.log("a", a);
    a++;//updation of a
}

//do while loop
let A=1;
do{
    console.log("A",A);
    A++;
}while(A<=20);

//for-of loop
let str="HELLO PRAPTI";
let size=0
for(let h of str) {
    console.log("h",h);
    size++;
}
console.log("string size" ,size);
//ex2
let str1 = "Hello Prapti"
for(let l of str1){
    console.log("l=",l);
}
//for-in loop
/*let student={
    names:"Prapti",
    age : 20,
    cgpa:8.4,
    ispass:true

};
for(let key in student){
    console.log("key=", key,"value=",student[key]);

}
*/

//practice question print even numbers
for( let l=0;l<=100;l++){
    if(l%2===0){//even numbers
        console.log("l",l);
    }
}

for (let count=0;count<=200;count++){
    if(count%2===0){
        console.log("count",count);
    }
}


//practice question2

/*let gameNum=25;
let userNum = prompt("Guess the game number :");

while(userNum != gameNum){
    userNum = prompt("You entered wrong Number. Guess again :");
}

console.log("Congratulations , you enterd correct number");*/
/*let game_num=9;
let user_num=prompt("Guess the number");
while(game_num!= user_num){
    user_num=prompt("Guess the again ,you guess wrong number");
}
console.log("Congratualtions you enterd correct number");
*/
//STRINGS
let str8="Prapti";
console.log("string",str8);
console.log("string",str8[3]);

//Template litrals
let specialstring=`this is a template`; //type of string
console.log(typeof specialstring);


//EX
let obj={
    item:"pen",
    price:"10",
};
let output=`the cost of the ${obj.item} is ${obj.price} rupees`;
console.log(output);
let add=`the addition is ${4+8+9}  `;
console.log(add);
//escape character
console.log("Prapti\nBidve");

let M="hello\nPrapti";
newStr=M.toUpperCase();
console.log(M);
console.log(newStr);
console.log(newStr.slice(1,5));
 let S1="Prapti";
let S2="Bidve";
let S3=S1+S2;
console.log(S1.concat(S2));
console.log(S3);
console.log(M.replace("hello","BIDVE"));//first hello is the search value and the bidve is the replace value
console.log(M.charAt(3));//search character at particular index

/*let user_name=prompt("Enter your fullname with no spaces")
console.log(user_name);
let result="@"+user_name+user_name.length;
console.log(result);*/

//practice question
/*let S4= prompt("Enter your fullName without spaces");
console.log(S4);
let S5 ="@" + S4+S4.length;
console.log(S5);*/

//CHAPTER 4 ARRAYS, arrays are mutable
let marks=[25,98,95,98,96,93];//typeof : object
console.log(marks);
console.log(marks.length);
marks[1]=100;
console.log(marks);
//for loop ,array length = total numbers/values present
for(let idx=0;idx<marks.length;idx++){
    console.log(marks[idx]);
}
//for of loop
for(let m of marks){
    console.log(m);
}

let cities=["mumabi","nagpur","patana","pune"];
for(city of cities){
    console.log(city.toUpperCase());
}

//practice question
let studentMarks=[85,97,44,37,76,60];
let sumMarks=0;
for(let val of studentMarks){
    sumMarks+= val;
}
let avg = sumMarks/ studentMarks.length;
console.log(`avg marks of the class =${avg}`);


let student_marks=[89,96,35,85,96,74,56,98];
let summation=0;
for(let val of student_marks){
    summation=summation+val;
}
let average=summation/student_marks.length;
console.log(`The avearge of the marks is ${average}`);
    

//practice question
let items = [250,645,300,900,50];
//let W = 0;
/*for(let val of items){
    //console.log(`value at index ${W} = ${val}`);
    let offer = val/10;
    items[W] = items[W]-offer;
    console.log(`value after offer=${items[W]}`);
    W++;
}*/
for( let W=0;W<items.length;W++){
    let offer = items[W]/10;
    items[W]-= offer;
}

console.log(items);

let prices=[456,678,432,456,678,345];
//10% discount on 450 = 450/10=45 therefore value=405
for(let r=0;r<prices.length;r++){
    let offer=prices[r]/10;
    prices[r]-=offer;
}

console.log(`The price after the dicount is ${prices}`);


//push ,pop,tostring method
let foodItems=["potato","tomato","mango"];
foodItems.push("burger","pizza","sandwich","apple");
console.log(foodItems);
foodItems.pop();
console.log(foodItems.toString());
//unshift,shift,concat
let boys=["akash","abhi","shrish","swaraj"]
let girls=["prapti","girija","aditi","shreya"]
let group = boys.concat(girls);
console.log(group);
group.unshift("Sai");
console.log(group);
group.shift();
console.log(group);
console.log(group.slice(2,5));
console.log(group.splice(2,2,"arya","rutu"));
console.log(group);

/*
let marks=[250,645,963,582,596];
for(let i=0;i<=marks.length;marks++){
    let offer=marks[i]/10;
    marks[i]=marks[i-offer;]  }
    console.log(marks);
 
 */


//practice question
let companies=["Blommberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies.shift());
console.log(companies);
console.log(companies.splice(1,1,"Ola"));
console.log(companies);
console.log(companies.push("Amazon"));
console.log(companies);

//chapter 5.Functins
function myFunction(){
    console.log("Welcome Prapti !");
    console.log("We are learning JS : ");
}
myFunction();
myFunction();

function Sum(a,b){
    console.log(a+b);
}
Sum(2,8);

function Sub(x,y){
    // function parameter =>  like local variable => block scope of function
    k=x-y;
    return k;
}
let S=Sub(8,6);
console.log(S);


const arrosum=(p,q) =>{
    console.log(p+q);

};


const arromul=(p,q) =>{
    return(p*q);

}

//practice question
function countVowel(str) {
    let count=0;
    for(const char of str) {
        if ( char==="a"|| char==="e"||char==="i"||char==="o"||char==="u" ) {
            count++;
        }
    }

     console.log(count);
}

//forEach loop in arrays
let array=[2,3,4,5,6,4];
array.forEach((val) => {
    
    console.log(val);
});

let arr=["Prapti","Abhi","arnav"];
arr.forEach((val,idx,arr)=>{
    console.log(val.toLocaleUpperCase(),idx,arr);
});

//Map method for array
let marr=["asd","sda","adsfg"];
marr.map((val)=>{
    console.log(val);
})

let parr=[3,4,57,6];
let newparr = parr.map((val)=>{
    return val;

})
console.log(newparr);

//filter
let narr=[5,5,9,6,4,1,235,554,441,212];
let newnarr=narr.filter((val)=>{
    return val % 2===0;
}
)
console.log(newnarr);

//reduce
let darr=[7,78,8,5];
let outputa = darr.reduce((res,curr)=>{
    return res+curr;
}
);
console.log(outputa);

//DOM Part 1 : Selecting with Id/class/Tagname
window.console.log("hi");
console.log(window);
console.dir(document.body.childNodes);
let Id1 = document.getElementById("Bt1");
console.log(Id1);
let class1=document.getElementsByClassName("h1");
console.log(class1);
/*let para=document.getElementsByTagName("p");
console.log(para);*/

//Query Selector
/*let np=document.querySelector("p");
console.log(np);
let npa=document.querySelectorAll("p");
console.log(npa);
let npc=document.querySelector(".h1");
console.log(npc);
let npca=document.querySelectorAll(".h1");
console.log(npca);
let div = document.querySelector("div");
console.dir(div);

//practice question
 let h2=document.querySelector("h2");
 console.dir(h2.innerText);
 h2.innerText=h2.innerText + "from Apna college";

 //practice question
 let divs=document.querySelectorAll(".box");
 //console.dir(divs);
 /*console.dir(divs[0]);
 divs[0].innerText="new value 1";
 divs[1].innerText="new value 1";
 divs[2].innerText="new value 1";*/
 /*let idxd=1;
 for(div of divs){
    div.innerText=`new unique value ${idxd}`;
    idxd++;
 }
 let divsa=document.querySelector("div");
 console.log(divsa);
 let id=div.getAttribute("id");
 console.log(id);
 /*let para = document.querySelector("p");
 console.log(para.getAttribute("class"));*/
 /*let pr= document.querySelector("p");


 console.log(parac.getAttribute("class"));*/
 /*let divb=document.querySelectorAll("div");
 console.log(divb);
 div.style.backgroundColor="green";*/
 /*let div=document.querySelector("div");
 div.style.backgroundColor="green";
 div.style.fontSize="34px";
 div.innerText="Hello";
 let newBtn=document.createElement("button");
 newBtn.innerText="Click me!";
 let div=document.querySelector("div");
 div.append(newBtn);
 let p=document.querySelector("p");
 p.append(newBtn);*/
 let newheading = document.createElement("h1");
 newheading.innerText = "<i>Hi , I am Prapti</i>";
 document.querySelector("body").prepend(newheading);
 let para = document.querySelector("p");
 para.remove();


 






          
                               



                








