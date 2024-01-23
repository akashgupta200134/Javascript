console.log("hello ramji");

// ue can redeclare  the same variable with same name  only while  using the var keyword but not in the case of let.
var a = 5;
console.log(a);
var a = 5;
console.log(a);

//constant

//const a = 56;

// a= 67;
//console.log(a);

//  variable naming rule

//let let = 7;

var let = 89;
console.log(let);

// let if = 45;
// console.log(if);

// dynamic typing

let c = 57;
console.log(c);
c = "akash";
console.log(c);

//objects - this how we create a object

let person = {
    firstName: "akash",
    age: 23,
};
console.log(person.age);

//array on js

let name = ["akash", "rahul", "suraj"];
console.log(name[1]);

console.log(name[3]);

name[3] = "ramesh";
console.log(name);

name[1] = 2;
console.log(name);

// ternary opearator

let age = 23;
let status = age >= 18 ? "vote" : "no vote";

console.log(status);

// logical opearator with non booleans

let t = true;
let b = "akash";
let y = t || b;
let z = t && b;

console.log(y);

console.log(z);

// control statements
// if-else


let marks = 68;
if (marks >= 90) {
    console.log("Grade - A");
} else if (marks >= 78) {
    console.log("Grade - B");
} else if (marks >= 60) {
    console.log("Grade - C");
} else {
    console.log("Grade - D");
}


// switch case
let num = 3;
switch(num){
  case 1:  console.log('A');
    break;

 case 2: console.log('B');
   break;

   case 3 : console.log('C');
   break;

   default : console.log('D');
}


// for loop

for( let i = 0 ; i <6 ; i++){
    console.log(i);
}

// while loop

let i = 0 ;
while(i < 10){
    console.log(i);
    i++;
}


// do while

let R = 1;
do{

console.log("ramji");
R++;

} while(R <= 10);



// object and method

// let rect = {

//     length : 1,
//     breadth : 2,
  
//     draw: function(){
//         console.log("draw the rectangle");
//     }

// };
// console.log(rect.length);
// console.log(rect.draw());



// factory function in  object creation 

function rectangle(length , breadth) {

    return  create = {
      length,
      breadth,
      draw() {
        console.log('draw the diagram');
      }
    };
  }
  
  let rect = rectangle(4,8);
  let rect1 = rectangle(9,5);
  let rect2 = rectangle(7,2);
  
//   console.log(rect.length);
//   console.log(rect.breadth);
//   rect.draw();
//   console.log(rect1.length);
//   console.log(rect1.breadth);
//   rect.draw();
  
//   console.log(rect2.length);
//   console.log(rect2.breadth);
//   rect.draw();


// CONSTRUCTOR FUNCTION => IT INTIALISE AND DEFNE THE METHOD/ PROPERTIES 
// CONSTRUCTOR FUNCTION FOLLOW THE  "PASCAL NOTATION" => FIRST LETTER OF EVERY WORD IS CAPITAL => EXAMPLE => AkashGupta,NameOfStudent.


function word(){

    this.length = 23;
    this.width = 34;

    this.draw = function(){
        console.log("word is big");
    } 
}

let l = new word();

   
// dynamic nature of object

l.color = "yellow"; 
console.log(l);     //  add new properties to object


// remove properties from object

delete l.width;
console.log(l);



// ITERATIVE  THROUGH OBJECTS

// 1) FOR-IN LOOP


let recta =  {
    length : 2,   // length and breadth are the keys of object recta
    breadth : 5
};

// keys are reflected through key variable.
// values are reflected through recta[key].

// for(let key in recta){
//     console.log(key,recta[key]);
//}





// for-of loop

// for of loops are only applicable for iteratives(arrays and maps), but there is a hack to apply the for of loops in object by making the objects in arrays 

for(let key of Object.keys(recta)){  // to print the keys of object

    console.log(key);
}


for(let key of Object.entries(recta)){   // to print the values

    console.log(key);
}


// to find the keys or properties  is present in the objects or not, here is a way to find it.


if('color' in recta){
    console.log("present");  
}

else{
    console.log("absent");
}



// object clone - 1. iteration cloning

let src = {
    a: 9,
    b : 12, 
    c : 34 

};


let dest = {};

for(let key in src){

    dest[key] = src[key];
}

console.log(dest);

src.a++;
console.log(dest);



// 2. assing cloning

let sro = {
    a: 5,
    b: 6,
    c : 9
}


// second source

let src2 = {
    value:25
};

let destn = Object.assign({}, sro , src2);

console.log(destn);
sro++;

console.log(destn);



let src3 = {
    a : 56 ,
    b : 45,
    c: 53
};

let dest1 = {...src3}

console.log(dest1);

src3++;
console.log(dest1);




//IN BUILT BOBJECTS AND  ARRAYS


//1. MATH method


console.log(Math.random());
console.log(Math.max(4,5,6,7));
console.log(Math.round(6.7));
 console.log(Math.abs(-67));


 // 2. string method 

 let lastname= 'gupta';

 console.log(lastname.length);
 console.log(lastname.indexOf('p'));
 console.log(lastname.endsWith('p'));
console.log(lastname.toUpperCase());
console.log(lastname.toLowerCase());


// etc


// template iteration 


//used to print the message as you want using backticks(``).


let message = `today is 
22 january 
the
 big day`;

 console.log(message);



 // DATE AND TIME 


 let date = new Date();

 console.log(date);

 let date2 = new Date("june 07 2000");

 console.log(date2);



 // ARRAYS 


 let numbers = [1,3,5,6,7,8,4];
 numbers.push(23);      /// to add the element in the last 
 console.log(numbers);


 numbers.unshift(56);   /// to add the element  in the begining 
 console.log(numbers);

 numbers.splice(2,0,45,58, 90);
console.log(numbers);




// searching 


console.log(numbers);

console.log(numbers.indexOf(90));
console.log(numbers.indexOf(46));  // if the element is not present in the array it will give  -1


// we want to check the element is present in the array

console.log(numbers.includes(5)); 





