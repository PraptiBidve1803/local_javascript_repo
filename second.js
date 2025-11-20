
// Chapter 1 & 2. Variables and data types & Operartors
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
=> const : not redeaclared and redefined - block scope
=> Primitives Data types : numbers,string,boolean,undefied,null,BigInt,Symbol
=> non-primitives: object(Arrays,functions)
=> operators : used to perform some opeartions on data*/
//Arithemetic Operators

let a=2;
let b=3;
console.log("a=",a," & b=",b);
console.log("a+b=",a+b);//a+b= : expression, a&b are operands , + :operators
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b); // remainder value
console.log("a**b=",a**b);  //a^b

//Unary Opeartors : increament & decreament
a++;
console.log("a=",a);
console.log("++a=",++a);//it increamnet first then print
console.log("a=",a);
console.log("a++=",a++);//post increamnet , change value after
console.log("a=",a);

//Asignment Operator
let d=6;
let e=9;
d += 4;  //d=d+4
console.log("d =",d);

//Comparison Operators : == only check value. Its an stricter version=> === : check value and data types
console.log("d=!e",d!=e);
console.log("d==5",d==5);

//logical operators
let cond1=d>e;
let cond2=d===6;
console.log("cond1 && cond2" , cond1 && cond2);
let cond3=e===9;
console.log("cond1 && cond3" , cond1 && cond3);
console.log("cond1 || cond2" , cond1 || cond2);
console.log("!(d>e)" , !(d>e));

//conditional statements
let age=25;
if (age>=18) {
    console.log(" you can vote");
}

if(age<18) {
    console.log("you cannot vote");
}


let mode="dark";
let color;

if(mode==="dark"){
    color="black";
}
if(mode==="light"){
    color="white";
}

console.log(color);
//if else Statement

let colour;
if(mode==="dark"){
    colour="black";
} else {
    colour="white";
}
console.log(colour);

let sage=21;
if(sage>=21){
    console.log("Eligible for UPSC");
}else{
    console.log(" NOT eligible for UPSC");
}

let k=6;
if(k%2==0){
    console.log("Number is even");
}else{
    console.log("Number is odd");
}

// else if statement

let eage=79;
if(eage<18){
    console.log("junior");
}else if(eage>60){
    console.log("senior");
}else{
    console.log("middle");
}

let sub = "maths";
if(sub=="maths"){
    console.log("Applicable for engineering");

}
else if(sub=="Biology"){
    console.log("Applicable for Pharmacy");
}
else if(sub=="Literature"){
    console.log("Applicable for Arts");
}
else{
    console.log("Take a Diploma or any other branch")
}
/*let sub="math";
let Groupa;
if (sub==="math"){
    Groupa="PCM";
   
}else if(sub==="Biology"){
    Groupa="PCB";
}else{
    Groupa="other";
}
let modea="Dark";
let colora;
if(modea==="Dark"){
    color="black";
}else if(modea==="blue"){
    colora="blue";
}else{
    color="red";
}*/
console.log("hello Abhijit");
let subject="Math";
let Group;
if(subject==="Math"){
    Group="PCM";
} else if(subject==="Biology"){
    Group="PCB";
}else{
    Group="Other";
}
console.log(Group);
if(Group==="PCM")console.log(Group);

//Ternary Operator
let studentAge=24;
let result = studentAge>=18 ? "adult" : "not adult";
console.log(result);
//look the mdn document for the switch statement 

alert("hello");   //One time popup
let FullName=prompt("Hello !"); //It take input from user
console.log(FullName);

let num=prompt("Enter a number")
if(num%5===0){
    console.log( num,"is multiple of 5");
}else{
    console.log( num,"is not multiple of 5");
}

let number=prompt("Enter a number");
if(number%7===0){
    console.log(number," is multiple of 7");
}
else{
    console.log( number," is not multiple of 7");
}



// Practic question 2

//let score= prompt ("Enter your score");
/*let grade;

if(score>=90 && score<=100){
    grade = "A";
}else if(score>=70 && score<=89){
    grade = "B";
}else if (score>=60 && score<=69){
    grade= "C" ;
}else if(score>=50 && score<=59) {
    grade = "D" ;
}else if (score>=0 && score<=49){
    grade="F";
}
console.log("According to your scores , your grade was : " , grade);*/

//practice question

let student_score=prompt("Enter your Score(0-100)");
let Grade;
if(student_score>=80 && student_score<=100){
    Grade="A";
}else if(student_score>=70 && student_score<=79){
    Grade="B";
} else if(student_score>=60 && student_score<=69){
    Grade="C";
}else if(student_score>=50 && student_score<=59){
    Grade="D";
}else if(student_score>=0 && student_score<=49){
    Grade="F";
}
console.log("According to your scores, your grade is:",Grade);






    

    



