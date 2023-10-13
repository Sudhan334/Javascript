// console.log('hello');
// var myName = 'sudhan bhandari';
// console.log(myName);

// var myAge = 41;
// var iAmSudhan = true;

// // data types in javascript
// console.log(typeof(myName)); 
// console.log(typeof(myAge));
// console.log(typeof(iAmSudhan));

// Difference between null vs undefined?
// var iAmuseless = null;
// console.log(iAmuseless);

// var iamstandby;
// console.log(iamstandby);


// what is NaN?

// NaN is a property of the global Object.
// In the other words, it is a variabal in global scope.
// The initial value of NaN is Not-A-Number.


// Expression and operators
// 1. Assignment operator
// 2. Logical operator (AND(&&), OR(||), NOT(!))
// 3. Arthmetic operator
// 4. String operator (concatenation operator(+))
// 5. comparison operator
// 6. conditional/ternary operator

// Control Statements and Loops

// 1. if else
// 2.switch statement
// 3. while loop
// 4. do-while loop
// 5. for loop
// 6. for in loop
// 7. for of loop
// 8. conditional operator


// falsy values in javascript
// 0, "", undefined, null, NaN



// var num = 1;
// do{
//     debugger;
//     console.log(num);
//     num++;
// }while(num<=10);



// Functions and function called


// function sum()
// {
//     var a = 2, b = 5;
//     var total = a + b;
//     console.log("The sum of two numbers is " + total);
// }

// sum();


// var funExp = function (a, b) {
//     return a+b;
// }


// console.log("The sum of two numbers is " + funExp(4,9));



// ES6  modern javascript

// 1. var ==> function scope
// let and const ==> Block scope 

 
// function myname()
// {
//     var myFirstname = "sudhan ";
//     if(true){
//         var lastName = "Bhandari";
//     }
//     console.log(myFirstname + lastName);
// }

// myname();


// block scope
// function myname()
// {
//     let myFirstname = "sudhan ";
//     if(true){
//         let lastName = "Bhandari";
//     }
//     console.log(myFirstname + lastName);
// }

// myname();


// 2. Template strings

// console.log(`${variable_name} + ${variable_name}`)



// 3. Default Function Parameter

// 4. Fat arrow Function


// sum();

// function sum()  // This is traditional way to define function
// {
//     var a = 2, b = 5;
//     var total = a + b;
//     console.log("The sum of two numbers is " + total);
// }

//In traditional method we can call the function before its defination but in fat arrow function before call the function we have to define that function.

// using fat arrow function
//console.log(sum()); //this is wrong, we get error


// const sum = () => {
//     let a = 4;
//     let b = 5;
//     return ` The sum of a and b is ${a+b}`;
// }

// console.log(sum()); //This is right


//Also, we can write like this 

// const sum = () =>   `The sum of a and b is ${(a=3)+(b=8)}`

// console.log(sum()); 



// Arrays in javascript

// in javascript, we hava an Array class, and arrays are the prototype of this class

// var myFriends = new Array;
// var myFriends = ['ramesh', 'mahesh', 'manisha', 'nisha'];

// console.log(myFriends[1]);

// // Length of array
// console.log(myFriends.length);


// for in loop and for of loop

// var myFriends = ['ramesh', 'mahesh', 'manisha', 'nisha'];

// for(let elements in myFriends)  //for in loop
// {
//     console.log(elements);
// }

// for(let elements of myFriends) //for of loop
// {
//     console.log(elements);
// }

// var myFriends = ['ramesh', 'mahesh', 'manisha', 'nisha'];

// myFriends.forEach(function(element, index,array){
//     console.log(element + " in index: " + index + " " + array);
// }
// );

// var myFriends = ['ramesh', 'mahesh', 'manisha', 'nisha'];

// // using fat arrow function

// myFriends.forEach((element,index,array)=>{
//     console.log(element + " in index: " + index + " " + array);
// })


//Searching and filter in an Array

// var myFriends = ['ramesh', 'mahesh', 'manisha', 'nisha'];

// //indexof
// console.log(myFriends.indexOf('mahesh'));


//CRUD   (create,read, update, delete)
// const animals = ['pig', 'baffalo', 'chicken']
// animals.push('goat')
// console.log(animals);
// console.log( animals.pop());
// console.log(animals);



// 1. filter method
// let marks = [34, 33,59,29,20];

// let newmarks = marks.filter((currentval,index,arr)=>{
//     return currentval > 30;
// })

// console.log(newmarks);
// console.log(marks);

// 2.map method
// let marks = [34, 33,59,29,20];

// let newmarks = marks.map((currentval)=>{
//     return currentval +=5;
// })
// console.log(newmarks);

// 3.reduce method
// let marks = [34, 33,59,29,20];

// let newmarks = marks.reduce((accu,currentval)=>{
//     return accu+=currentval;
// }, 10)

// console.log(newmarks);




//  Strings
// create a string by string constructor
// let myName = new String('Sudhan');
// console.log(myName);

// let myName = "sudhan ";

// console.log(myName.length);

// Escape character

// let myName = "Welcome, to Complete \"JavaScript\" Tutorial for Beginners ";

// console.log(myName.length);




// Finding a string in a string

// const myBioData = 'I am a CS student.';
// console.log(myBioData.indexOf("CS"));

// console.log(myBioData.search("CS"));

//Extracting string parts
// slice(start, end)  // In array splice
// substring(start, end)
// substr(start, length)

// let str = "Apple, Banana, Kiwi"

// let res = str.slice(0, 5)
// console.log(res);

//substring()  method ,it cannot accept negative indexes
// let str = "Apple, Banana, Kiwi"

// let res = str.substring(0,6)
// let res = str.substring(6,-8)
// console.log(res);

//Substr() method
// second parameter specifies the length of the extracted part.
// let fruits = "Apple, Banana, Kiwi"
// let res = fruits.substr(7,8);
// console.log(res);


// let fruits = "Apple, Banana, Kiwi"

// let replaceData =  fruits.replace("Apple", "Grapes")

// console.log(replaceData);
// console.log(fruits);


//char method

// let str = "Hello World";
// console.log(str.charAt(1));
// console.log(str.charCodeAt(1));


// let str = "Hello World";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// concatenation

// let fname = "sudhan"
// let lname = "Bhandari"
// console.log(fname.concat(" ",lname));

// let str = "     Hello  World      "; //removes white spaces from both sides of the string but from between
// console.log(str.trim())


// How to convert the string into array
// By split() method

// let txt = "a, b, c,|, d, e";
// console.log(txt.split(","))  //split on commas
// console.log(txt.split(" "))  //split on spaces
// console.log(txt.split("|"))  //split on pipe

// console.log(txt);



// Date and Time methods (get and set)
// Date(year, month, day, hours. minutes, seconds, milliseconds) takes 7 arguments

// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// console.log(Date.now()); //the time since jan 1 1970 in ms
// let curtime = new Date();
// console.log(curtime.getTime());
// console.log(curtime.getHours());



//Math Object
// console.log(Math.PI)
// console.log(Math.round(19.384));
// console.log(Math.round(10.5));


//Math.ceil(), Math.floor(), Math.sqrt(), Math.max(), Math.random()*10, Math.trunc() it returns integer value



//windows vs document
//DOM

// Object

// let bioData = {
//     myName :"Sudhan Bhandari",
//     myAge :22,
//     getData : function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}.`)
//     }

// };

// bioData.getData();

// Array Destructuring
// const myBioData = ["sudhan","bhandari", 22];
// // let fName = myBioData[0];

// let [fName,lName, age] = myBioData;
// console.log(lName)

// Object Destructuring .......In this we use curly braces instead of big[]braces
// let {fName,lName, age} = myBioData;

hello

world

