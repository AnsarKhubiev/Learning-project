/* 01. команды alert и console.log

alert("Hello world!");
console.log("Hello world!"); */

// ------------------------------------------------------------------------------
// 02. Отладка программы с помощью console.log
/* 
let age = 19;
if (age >= 18) {
    console.log("Вы можете сдать на права!");
} else {
    console.log("Воспользуйтесь такси.");
} 
*/

// ------------------------------------------------------------------------------
// 04. Арифметические операции над переменными

/* 
var x = 5;
var y = 20;
var result;
result = x / y;
console.log("file: main.js:27 ~ result:", result);
 */

/* 
var i = 10;
var y = 10;
console.log(i++); // 10
console.log(i); // 11
console.log(++y); // 11
console.log(y); // 11
 */

/* 
var a = "Hello ";
var b = "world!";
console.log(a + b); // Hello world!
 */

// ------------------------------------------------------------------------------
// 05. Условия в JavaScript

/* 
var a = 10;

if (a > 10) {
    console.log("a больше 10");
} else if (a == 11) {
    console.log("a равно " + a);
} else {
    console.log("a меньше 10");
}
 */

/* 
var age = 15;

if (age >= 18 || age <= 60) {
    console.log("Вам меньше 18 или больше 60");
}
 */

// ------------------------------------------------------------------------------
// 05. Конструкция Switch Case

/* 
var a = 10;

switch (a) {
    case 0:
        console.log("a равно 0");
        break;
    case 5:
        console.log("a равно 5");
        break;
    case 10:
        console.log("a равно 10");
        break;
    case 15:
        console.log("a равно 15");
        break;
    default:
        console.log("странное значение");
        break;
}
 */

// ------------------------------------------------------------------------------
// 06. Массивы в JavaScript

/* 
var country1 = "Russia";
var country2 = "USA";
var country3 = "Italy";
var country4 = "France";

console.log(country1);
console.log(country2);
console.log(country3);
console.log(country4);

var countries = ["Russia", "USA", "Italy", "France"];
console.log("file: main.js:109 ~ countries:", countries[0])
 */

// ------------------------------------------------------------------------------
// 07. Обход массива методом for each

/* 
var countries = ["Russia", "USA", "Italy", "France"];
countries.forEach(function (item) {
    console.log(item);
});
 */

// ------------------------------------------------------------------------------
// 08. Обходим массив циклом for

/* 
var i;

for (i = 0; i < 10; i++) {
    console.log(i);
}

var countries = ["Russia", "USA", "Italy", "France"];

for (i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
 */

// ------------------------------------------------------------------------------
// 09. Функции в JavaScript

/* 
function sum(i, j) {
    console.log(i + j);
}
sum(20, 40);
sum(20, 50);

var greeting = function (name = "John Doe", day) {
    console.log("Привет, " + name + "! Желаю тебе хорошего дня!");
    if (day == "Суббота" || day == "Воскресенье") {
        console.log("Хороших выходных!");
    } else {
        console.log("Хорошего рабочего дня!");
    }
};
greeting("Ансар", "Понедельник");
 */

// ------------------------------------------------------------------------------
// 10. Объекты в JavaScript

/* 
function Person(name, age, gender, speciality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.speciality = speciality;

    this.greet = function () {
        console.log("hello, my neame is " + this.name + ".");
    };

    this.story = function(){
        console.log("I am " + this.gender + " and " + this.age + " years old. I am " + this.speciality + ".");
    }
}

var ansar = new Person("Ansar", 34, "male", "web-developer");

ansar.greet();
ansar.story();

var July = new Person("July", 19, "female", "doctor");

July.greet();
July.story();
 */

// ------------------------------------------------------------------------------
// 11. Команды alert, confirm и prompt в JavaScript

/* 
alert("this is alert");
console.log("This is console message");
console.log(prompt("This is promt"));


var userName = prompt("what is your name?")
console.log(userName);

var answer = confirm("Подтвердите свое действие");
console.log(answer);
 */

// function smash(words) {
//     let str ="";
//     words.forEach (function (item){
//       str = str + ` ${item}`;
//     })
//      return str;
//   };

// console.log(smash([
//       "Be",
//       "careful",
//       "there",
//       "shouldn't",
//       "be",
//       "a",
//       "space",
//       "at",
//       "the",
//       "beginning",
//       "or",
//       "the",
//       "end",
//       "of",
//       "the",
//       "sentence",
//   ]));

//------------------------------------------------------------

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
//     youTime = pontoonDistance / youSpeed;
//     sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed);

//     if (youTime > sharkTime) {
//         return "Shark Bait!";
//     } else if (youTime <= sharkTime) {
//         return "Alive!";
//     };
// };

//------------------------------------------------------------

// function digitize(n) {
//     return String(n).split("").reverse().map(Number);
// }
// digitize(1234567);

//------------------------------------------------------------

// function hero(bullets, dragons){
//     return bullets >= dragons * 2;
// };
//------------------------------------------------------------

// function feast(beast, dish) {
//     return (
//         beast[0] === dish[0] &&
//         beast[beast.length - 1] === dish[dish.length - 1]
//     );
// };

//------------------------------------------------------------

// function isIsogram(str) {
//    return console.log(new Set(str.toLowerCase()).size === str.length);
// }
// isIsogram("isogr");

//------------------------------------------------------------

function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${
        sperm === "XY" ? "son" : "doughter"
    }.`;
}
chromosomeCheck("XY");

//------------------------------------------------------------

// function getCount(str) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     let countsOfvowels = 0;
//     str.split("").forEach(function (item) {
//         if (vowels.includes(item)) {
//             countsOfvowels++;
//         };
//     });
//     return countsOfvowels;
// };
// getCount("ansar");

//------------------------------------------------------------

// function check(a, x) {
//     return a.includes(x);
// };

//------------------------------------------------------------

// function litres(time) {
//    return console.log(Math.floor(time * 0.5));;
// };

//------------------------------------------------------------

// function solution(str) {
//     return str.split().reverse().join("");
// };

//------------------------------------------------------------

// function makeNegative(num) {
//     return num <= 0 ? num : -num;
//   }

//------------------------------------------------------------

// function isTriangle(a,b,c){
//     return (a + b + c) - Math.max(a, b, c) > Math.max(a, b, c);
// };

//------------------------------------------------------------

// function bmi(weight, height) {
//     const bmi = weight / height ** 2;
//     if (bmi <= 18.5) {
//         return "Underweight";
//     } else if (bmi <= 25.0) {
//         return "Normal";
//     } else if (bmi <= 30.0) {
//         return "Overweight";
//     } else if (bmi > 30) {
//         return "Obese";
//     }
// }

//------------------------------------------------------------

// function stringToArray(string){
//     return string.split(" ");
// }

//------------------------------------------------------------

// function disemvowel(str) {
//     var vowels = ["a", "e", "i", "o", "u"];

//      return str.split("").filter(function (item) {
//          return vowels.indexOf(item.toLowerCase()) == -1;
//     }).join("");
// };

// function disemvowel1(str) {
//    return str.replace(/[aeiou]/gi, "");
// };

//------------------------------------------------------------

// const myArray = [["John", 23], ["cat", 2]];
// const removedFromMyArray = myArray.pop();

//------------------------------------------------------------

// const myArray = [["John", 23], ["dog", 3]];
// const removedFromMyArray = myArray.shift();

//------------------------------------------------------------

// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();
// myArray.unshift(["Paul", 35]);

//------------------------------------------------------------

// const myList = [
//     ["milan", 5],
//     ["lazio", 4],
//     ["inter", 3],
//     ["lion", 2],
//     ["barsa", 1]
// ];

//------------------------------------------------------------
// function reusableFunction () {
//     console.log("Hi World");
// };
// reusableFunction();

//------------------------------------------------------------

// function functionWithArgs(a, b) {
//     console.log(a + b);
// };
// functionWithArgs(4, 3);

//------------------------------------------------------------

// function timesFive(num) {
//     return num * 5;
// }

//------------------------------------------------------------

// Declare the myGlobal variable below this line
let myGlobal = 10;
function fun1() {
    oopsGlobal = 5;
}

// Only change code above this line
//   function fun2() {
//     let output = "";
//     if (typeof myGlobal != "undefined") {
//       output += "myGlobal: " + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined") {
//       output += " oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }

//------------------------------------------------------------

// function myLocalScope() {
//     // Only change code below this line
//   var myVar = 5;
//     console.log('inside myLocalScope', myVar);
//   }
//   myLocalScope();

//   // Run and check the console
//   // myVar is not defined outside of myLocalScope
//   console.log('outside myLocalScope', myVar);

//------------------------------------------------------------

// // Setup
// let outerWear = "T-Shirt";
// function myOutfit() {
//   // Only change code below this line
//   const  outerWear = "sweater";
//   // Only change code above this line
//   return outerWear;
// }
// myOutfit();

//------------------------------------------------------------

// let sum = 0;

// function addThree() {
//   sum = sum + 3;
// }

// function addFive() {
//     return sum += 5;
// }
// addThree();
// addFive();

//------------------------------------------------------------

// let processed = 0;
// function processArg(num) {
//   return (num + 3) / 5;
// };
// processed = processArg(7);

//------------------------------------------------------------

// function nextInLine(arr, item) {
//     arr.push(item);
//     return arr.shift();
// }

// let testArr = [1, 2, 3, 4, 5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

//------------------------------------------------------------

// function welcomeToBooleans() {
//     return true; // Change this line
//   }

//------------------------------------------------------------

// function trueOrFalse(wasThatTrue) {
//     if (wasThatTrue) {
//         return "Yes, that was true";
//     } else {
//         return "No, that was false";
//     };
// };

//------------------------------------------------------------

// function testEqual(val) {
//     if (val === 12) { // Change this line
//       return "Equal";
//     }
//     return "Not Equal";
//   }

//   testEqual(10);

//------------------------------------------------------------

// function testStrict(val) {
//     if (val === 7) { // Change this line
//       return "Equal";
//     }
//     return "Not Equal";
//   }

//   testStrict(10);

//------------------------------------------------------------

// function checkLogs(log) {
//     let days = 0;
//     let prevHour = 999999;

//     log.forEach((el) => {
//         let currentHour = parseInt(el.replace(/:/g, ""));

//         if (currentHour <= prevHour) days++;
//         prevHour = currentHour;
//     });

//     return days;
// };

// checkLogs(["12:12:12"]);
// checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]);
// checkLogs(["12:00:00", "23:59:59", "00:00:00"]);
// checkLogs(["12:00:00", "12:00:00", "00:00:00"]);
// checkLogs([]);

//------------------------------------------------------------

// Setup
// function compareEquality(a, b) {
//   if (a === b) {
//     // Change this line
//     return "Equal";
//   }
//   return "Not Equal";
// }

// compareEquality(10, "10");

//------------------------------------------------------------

// Setup
// function testStrictNotEqual(val) {
//   if (val !== 17) {
//     // Change this line
//     return "Not Equal";
//   }
//   return "Equal";
// }

// testStrictNotEqual(10);

// function showMessage(firstName, lastName, nickName) {
//     userName = firstName ?? lastName ?? nickName;
//     console.log(userName);
// };

// showMessage(undefined, undefined, "Ans");

// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }

// function checkAge1(age) {
//   return age > 18 || confirm("Родители разрешили?");
// }

// function getMinNumber(a, b) {
//   return a > b ? b : a < b ? a : "числа равны";
// }

// function showMinNumber(a, b) {
//   console.log(getMinNumber(a, b));
// }

// showMinNumber(6, 6);

// function getNumbers() {
//     let numb = 0;
//     while (numb < 1 || numb % 1 !== 0) {
//         alert("Введите целое число больше 0");
//         numb = parseInt(prompt("Введите число"));
//     }
//     return numb;
// }

// function pow() {
//     const numb1 = getNumbers();
//     const numb2 = getNumbers();

//     result = numb1 ** numb2;
//     alert(result);
// }

// pow();

// function ask(question, yes, no) {
//     if (confirm(question())) {
//         yes();
//     } else {
//         no();
//     }
// }

// function question() {
//     return "Вы хотите спать?";
// }

// function sayYeas() {
//     alert("Ложитесь спать");
// }

// function sayNo() {
//     alert("Поработайте");
// }

// ask(question, sayYeas, sayNo);

function countOfOccurrences(str, value) {
    modStr = str.toLowerCase().split('');
    modValue = value.toLowerCase();
    
    return modStr.filter(item => item === value).length
}