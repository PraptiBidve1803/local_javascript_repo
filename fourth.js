//Exercise
/*Q1 take the prompt from user and check whether number is divisible by 5 or not*/
/*let num=prompt("Enter a number");
if(num%5==0){
    console.log(num,"Number is divisible by 5");

}
else{
    console.log(num,"Number is not divisible by 5",);

}*/

/*Q.2 Write a code which can give grades to students according to their scores 1)90-100,A 2)70-89 ,B 3)60-69 ,C 4)50-59 , D 4)0-49,fail*/
/*let studentScore=prompt("Enter the studentScore");
let Grade;
if(studentScore>=90 && studentScore<=100){
    Grade = "A";
}
else if(studentScore>=70 && studentScore<=89){
    Grade = "B";
}
else if(studentScore>=60 && studentScore<=69){
    Grade = "C";
}
else if(studentScore>=50 && studentScore<=59){
    Grade = "D";
}
else if(studentScore>=0 && studentScore<=49){
    Grade = "fail";
}
console.log("According to your score , your Grade is ",Grade);*/

//Q.3 Print all even numbers from 0 to 100
for(i=0;i<=100;i++){
    if(i%2===0){
        console.log("number is even",i);
    }
}

//Q.4 Create a game where you start with any random game number. Ask the user to keep guessing the number until the users enter the correct number value.
/*let number=56;
let userNum=prompt("Enter the number");
while(number !=userNum){
    userNum=prompt(" You enter the wrong number , Again enter the correct number");
} 
console.log("Congrtulations you enter the correct numer");

//Q.5 Prompt the user to enter their full name , generate a usename for them based on the input. Start usename with @, followed by thier full name and ending with the fullname length
let S1=prompt("Enter the full name");
let S2= "@"+S1+S1.length;
console.log("user name=",S2);*/

//Q.6 For a given array with marks of students ->[85,97,44,37,76,60]. find the avg marks of the entire class
let studentMarks=[85,97,44,37,76,60];
let sumMarks=0;
for(let val of studentMarks){
    sumMarks+=val;
}
let avgmarks=sumMarks/studentMarks.length;
console.log(`The average marks of student is = ${avgmarks}`);

//Q.7 For a given array with price of 5 items ->[250,645,300,900,50]. All items have an offer of 10% OFF on them . Change the array to store final price after applying offer.
let item =[250,645,300,900,456];
for(let i=0;i<item.length;i++){
    let offer=item[i]/10;
    item[i]-=offer;
}
console.log(item);

/*Q.8 Create aarays to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
a.remove the first company from array
b.remove Uber And ola from its place
c.Add Amazon at the end
*/
let companies=["Bloomberg","Microsoft","Uber", "Ola","Google","IBM","Netflix"];
console.log(companies.shift());
console.log(companies);
console.log(companies.splice(1,2));
console.log(companies);
console.log(companies.push("Amazon"));
console.log(companies);

//Q.9 Create a function using the function keyword that takes a string as an argument & returns the numbers of vowels in the string
/*function countVowel(str){
    let count=0;
    for(const char of str) {
        if (char==="a"|| char==="e" || char ==="i" || char==="o"||char==="u"){
            count++;

        }
         
    }
    return count;
}*/
//Q.10 Create an arrow function to perform the same task
const countVowel = (str) => {
    for(const char of str){
        if(char==="a"|| char==="e" || char ==="i" || char==="o"||char==="u"){
            count++;
    }
    
}
    return count;
}

//Q.11 For a given array of numbers , print the square of each value using the forEach loop
let num=[2,4,567,678,432];
num.forEach(val => {
    console.log(val*val);
});



//Q.12we are given array of marks of student .filter our of the marks of student taht scored 90
let markarr=[30,69,97,99,52,89,91,92,93];
let newmarkarr=markarr.filter((val)=>{
    return val>90;
}
)
console.log(newmarkarr);


//Q.13 take a number as a inputfrom user. create a array from numbers 1 to n .use the reduce method to calculate the sum of all numbers in the array . use the reduce method to calculate the product of all numbers in the array
let b = prompt("Enter the numbers");
let arrq=[];
for ( let i=1; i<=b;i++){
    arrq[i-1]=i;
}
console.log(arrq);
let sumarrq=arrq.reduce((res,current)=>{
    return res+current;
})
console.log(sumarrq);
let prodarrq=arrq.reduce((res,current)=>{
    return res*current;
})
console.log(prodarrq); //also known as a factorial of n!

//Create a new button element. Give it a text "click me", background color as a purple and text color as a white 
// insert the button as the first element inside the body tag.
let newBten = document.createElement("button");
newBten.innerText = "Click me !";
newBten.style.color = "white";
newBten.style.backgroundColor = "purple";
document.querySelector("body").prepend(newBten);

// Create a <p> tag in html , give it a class and some styling. Now create a new new class in css and try to append this class to the <p> element. Did you notice , how you overwrite the class name when you add avnew one ? Solve using this problen using classList.

let para = document.querySelector("p");




