/*
    length
    indexOf: startIndexOf and lastIndexOf

    slice
    substring
    substr

    replace: replace and replaceAll

    toUpperCase
    toLowerCase
    
    charCodeAt

    includes
    startsWith
    endsWith
    search

    charAt
    at


    split

    trim: trimEnd and trimStart
*/

// let a = "   This is the Best day of my Life"

// let b = a.length
// let c = a.slice(12,16)
// let d = a.substring(12,-1)
// let e = a.replaceAll("Best", "Happiest")
// let f = a.toUpperCase()
// let g = a.toLowerCase()
// let h = a.indexOf("i")

// let mm = a.toLowerCase()
// let i = mm.includes("this")

// let j = a.charCodeAt("t")

// let l = a.indexOf("T")
// let m = a.indexOf("t")
// let k = a.charCodeAt(l)

// let kk = a.search("This")
// let kk1 = a.startsWith("This")
// let hh = a.charAt(a.indexOf("B"))

// let split = a.split("the")

// console.log("This is the Result: ", split)

// console.log("This is the Result: ".slice())

// let aa = "This is home"
// let bb = "Where i'm ought to be"

// console.log(aa.concat (bb))
// console.log(aa + bb)

// console.log(`${aa} ${bb}`)
// console.log(`This is the result of: ${3 + 5}`)

// console.log(bb)

// Number
//toString()

// console.log(num)
// console.log(num.toString())
// console.log(num.toFixed(2))
//Math
// let num = 33.51
// console.log(3*3)
// console.log(Math.sqrt(25))
// console.log(isNaN("Peter" * 5))

// object {key: value}

// let obj = {
//     name: "Peter",
//     height: 23
// }

// console.log(obj.name)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// Start

// let a = [
//     1,
//     3,
//     45,
//     "This is it, we are here",
//     [22, 18, [243, 88]],
//     { name: "Peter" },
//     [2, 8],
//   ];
  
//   let c = [1, 2, 3, 4, 5, "This is me"];
  
  /*
      length          map
      slice           forEach
      splice          filter
      toString        reduce
      concat
      push            some
      pop             every
      fill            find
      join            findIndex  
      shift           includes
      unshift         
      indexOf
      lastIndexOf
      reverse
   
      = == ===
  
   "5" !== 5
  
      flat
      sort
  */
  let bb = "This is it, we are here";
  let cc = [];
  
  // console.log(a.slice(0, 3));
  // console.log(c.splice(3, 1, 7));
  // console.log(c.concat(a, bb));
  
  console.log(c);
  // console.log(c.push(6));
  console.log("");
  // console.log(c.pop());
  // console.log(c.fill("Love", 0, 2));
  // console.log(c.join(" "));
  // console.log(c.shift());
  // console.log(c.unshift("Hello"));
  // console.log(c.reverse());
//   console.log(a[3].charAt(3));
//   let name = "Peter";
//   // retep
  
//   let convert = name.toLowerCase();
//   let arr = convert.split("");
//   let reverse = arr.reverse();
//   let join = reverse.join("");
  
//   console.log("");
  // console.log(a.flat(2));
  // console.log(a);
  
  let aa = [1, 3, 15, [2, 5, 8, [4, 0]]];
  
  // console.log(aa.flat(2));
  let ab = aa.flat(2);
  
  // console.log(
  //   ab.sort((a, b) => {
  //     return a - b;
  //   }),
  // );
  
  let dc = ["this is me", "i am", 3, 6, { name: "Peter" }];
  
  // console.log(
  //   dc.map((props) => {
  //     return props;
  //   }),
  // );
  
  // for forIn forOf forEach
  // console.log(
  //   ab.reduce((a, b) => {
  //     return a + b;
  //   }),
  // );
  
  // console.log(ab.some((el === 5) => {
  //   return el
  // }))
  
  // console.log(
  //   ab.forEach((el) => {
  //     return console.log(el);
  //   }),
  // );
  
//   let cart = [];
//   let itemA = { name: "Bag", cost: 500 };
//   let itemB = { name: "Shoe", cost: 7500 };
//   let itemC = { name: "Neck Chain", cost: 700 };
//   let itemD = { name: "cap", cost: 500 };
//   // console.log("old Cart", cart);
//   cart.push(itemA);
//   cart.push(itemB);
//   cart.push(itemC);
//   cart.push(itemD);
  
//   let d = cart.map((el) => {
//     return el.cost;
//   });
  
//   let ff = d.reduce((a, b) => {
//     return a + b;
//   });
  
//   // #     9200  9,200
  
//   let newVal = (ff * 0.2).toString();
//   let convertArr = newVal.split("");
//   let spliceArr = convertArr.splice(1, 0, ",");
//   let symbol = convertArr.unshift("₦");
//   let joined = convertArr.join("");
  // console.log(joined);
  
  // console.log(`Your total purchase is ${joined} `);
  
  /*
    Arithematic Operators
    +
    -
    *
    /
    %
    --
    ++
    =+
    =-
  
    Comparism Operators
    <
    >
    <=
    >=
    !
    ?
    =
    ==
    ===
    !==
    &&
    ||
    ...
  
    Falsy value
    0
    undefined
    null
    ""
  
    Truty Value
    []
    != 0
    !== ""
  */
  
  // console.log(
  //   myArr.some((el) => {
  //     return el > 0;
  //   }),
  // );
  
  // let myArr = [1, 6, 3, 9, 0];
  let myArr1 = [1];
  let r = 3;
  let k = 8;
  let m = 2;
  
  console.log();
  
  // x >= r
  
  // console.log(
  //   myArr.every((el) => {
  //     return el > 0;
  //   }),
  // );
  
  // console.log(
  //   myArr1.some((el) => {
  //     return el != "1";
  //   }),
  // );
  
  // console.log(
  //   cart.filter((el) => {
  //     return el.name !== "Shoe";
  //   }),
  // );
  
  // if (true) {
  //   console.log("statement");
  // } else {
  //   console.log("statement");
  // }
  
  // true ? console.log("statement") : console.log("statement");
  1
  // let count = 0;
  
  // increasing by 1
  // count = count + 1;
  
  // increasing by 1
  // count = +1;
  
  // increasing by 1
  // count++;
  
  // increasing by any number
  // count = +3;
  
  // console.log(count);
  
//   let count = 0;
  
  // myArr.forEach((el) => {
  //   console.log(el);
  //   count++;
  //   console.log(`I just ran ${count} times`);
  // });
  
  // console.log("This is my total RUN: ", count);
  
//   let myArr = [-1, 1, 200, 6, 3, 9, 0, 30, 20, 15, 4];
  
//   let samp = myArr.sort((a, b) => {
//     return a - b;
//   });
//   let val = samp.length - 1;
//   // console.log(samp);
//   // console.log(val);
//   // console.log("Our final result is: ", samp[val]);
  
//   let xx = [...myArr];
  
  // console.log(Math.max(2, 5, 1, 9));
  // console.log(Math.min(...myArr));
  
  // console.log(
  //   myArr.reduce((a, b) => {
  //     return Math.max(a, b);
  //   }, -Infinity),
  // );
  
  // console.log(
  //   myArr.reduce((a, b) => {
  //     return Math.min(a, b);
  //   }, Infinity),
  // );
  
//   console.log(
//     myArr.reduce((a, b) => {
//       return a > b ? a : b;
//     }),
//   );
  
  // ? :
  
  
  
  
  // /*
  // if(condition){
  //   execute if TRUE
  // }else{
  //  execute if FALSE
  // }
  
  // 0 null undefined ""
  
  // */
  
  // let x = 6;
  // let y = x % 4;
  
  // // console.log(y);
  
  // let arr = [2, 1, 8];
  
  // // if (y === 1) {
  // //   console.log("You are GOOD");
  // // } else {
  // //   console.log("Wetin you write no make sense");
  // // }
  
  // //
  
  // // console.log(zz);
  
  // // y === 1
  // //   ? console.log("You are GOOD")
  // //   : console.log("Wetin you write no make sense");
  
//   let arr = [2, 1, 8];
  // arr.some((el) => {
  //   return el === 8
  //     ? console.log("You are GOOD")
  //     : console.log("Wetin you write no make");
  // });
  
  // let size = 0;
  
  // "" ? console.log("I am size") : console.log("I am not size");
  
//   let x = 0; //FALSE;
//   let y = 1; //TRUE;
//   let z = 1; //TRUE;
  
//   if (x && y ) {
//     console.log("I am TRUE");
//   } else {
//     console.log("I am FALSE");
//   }
  
  
  
  
  //  0 - 100
  //  0-39 => F
  //  40-44 => E
  //  45-49 => D
  //  50-59 => C
  //  60-74 => B
  //  75-100 => A
  
  // 49 and below => FAIL
  // 50 and above => PASS
  
  // let score = 55;
  
  // if (score >= 50) {
  //   console.log("You PASS");
  // } else {
  //   console.log("You FAIL");
  // }
  
  // switch (condition) {
  // cases: execute command
  // default:
  // execute
  // }
  
  // switch (score) {
  //   case 6:
  //     console.log("Roll Faster");
  //     break;
  //   case 4:
  //     console.log("Roll Fast");
  //     break;
  //   case 3:
  //     console.log("Roll Normal");
  //     break;
  //   case 2:
  //     console.log("Roll Slow");
  //     break;
  //   case 1:
  //     console.log("Roll Slower");
  //     break;
  //   default:
  //     console.log("STOP");
  // }
  
//   let cutlery = "spoon and knife";
  // switch (cutlery) {
  //   case "spoon":
  //   case "fork":
  //   case "knife":
  //   case "plate":
  //   case "pot":
  //     console.log("I am a cutlery");
  //     break;
  //   case "ball":
  //   case "toy":
  //   case "tv":
  //     console.log("I am not a cutlery");
  //     break;
  //   default:
  //     console.log("You have to put a cutlery");
  // }
//   let score = 3;
  
  // if (score === 55) {
  //   console.log("I passed");
  // }
  // else if (score === 75) {
  //   console.log("I pass well well");
  // }
  // else if (score === 75) {
  //   console.log("I pass well well");
  // }
  // else if (score === 75) {
  //   console.log("I pass well well");
  // }
  // else if (score === 75) {
  //   console.log("I pass well well");
  // }
  // else if (score === 75) {
  //   console.log("I pass well well");
  // }
  // else if (score === 75) {
  //   console.log("I pass well well");
  // }
  // else {
  //   console.log("I can't say!");
  // }
  
  // 00:00 - 11:59
  // 12:00 - 15:59
  // 16:00 - 23:59
//   let xx = 13;
//   console.log(12 > xx > 0);
  
//   let time = 35;
  
  // if (time >= 0 && time <= 12) {
  //   console.log("Good Morning");
  // } else if (time >= 13 && time <= 16) {
  //   console.log("Good Afternoon");
  // } else {
  //   console.log("Good Evening");
  // }
  /**
   * while
   * doWhile
   * for
   * forIn
   * forOf
   * forEach
   */
  
  // while (condition) {
  //   execute
  // }
  
  // let count = 0;
  // while (count < 10) {
  //   count++;
  //   console.log("Print out Count: ", count);
  // }
  
  // do {
  //   count++;
  //   console.log("Print out Count: ", count);
  // } while (count < 10);
  
  let myName = "Peter Petx";
  let newLetter = myName[0];
  
  // console.log(newLetter);
  
  // for (let i = 0; i < myName.length; i++) {
  //   console.log(myName[i], i);
  // }
  let i = 0;
  while (i <= myName.length-1) {
    console.log(myName[i], i);
    i++;
  
  }
  
  
  
  
  
  
  // // /*
  // // if(condition){
  // //   execute if TRUE
  // // }else{
  // //  execute if FALSE
  // // }
  
  // // 0 null undefined ""
  
  // // */
  
  // // let x = 6;
  // // let y = x % 4;
  
  // // // console.log(y);
  
  // // let arr = [2, 1, 8];
  
  // // // if (y === 1) {
  // // //   console.log("You are GOOD");
  // // // } else {
  // // //   console.log("Wetin you write no make sense");
  // // // }
  
  // // //
  
  // // // console.log(zz);
  
  // // // y === 1
  // // //   ? console.log("You are GOOD")
  // // //   : console.log("Wetin you write no make sense");
  
  // let arr = [2, 1, 8];
  // // arr.some((el) => {
  // //   return el === 8
  // //     ? console.log("You are GOOD")
  // //     : console.log("Wetin you write no make");
  // // });
  
  // // let size = 0;
  
  // // "" ? console.log("I am size") : console.log("I am not size");
  
  // let x = 0; //FALSE;
  // let y = 1; //TRUE;
  // let z = 1; //TRUE;
  
  // //  0 - 100
  // //  0-39 => F
  // //  40-44 => E
  // //  45-49 => D
  // //  50-59 => C
  // //  60-74 => B
  // //  75-100 => A
  
  // // 49 and below => FAIL
  // // 50 and above => PASS
  
  // // let score = 55;
  
  // // if (score >= 50) {
  // //   console.log("You PASS");
  // // } else {
  // //   console.log("You FAIL");
  // // }
  
  // // switch (condition) {
  // // cases: execute command
  // // default:
  // // execute
  // // }
  
  // // switch (score) {
  // //   case 6:
  // //     console.log("Roll Faster");
  // //     break;
  // //   case 4:
  // //     console.log("Roll Fast");
  // //     break;
  // //   case 3:
  // //     console.log("Roll Normal");
  // //     break;
  // //   case 2:
  // //     console.log("Roll Slow");
  // //     break;
  // //   case 1:
  // //     console.log("Roll Slower");
  // //     break;
  // //   default:
  // //     console.log("STOP");
  // // }
  
  // let cutlery = "spoon and knife";
  // // switch (cutlery) {
  // //   case "spoon":
  // //   case "fork":
  // //   case "knife":
  // //   case "plate":
  // //   case "pot":
  // //     console.log("I am a cutlery");
  // //     break;
  // //   case "ball":
  // //   case "toy":
  // //   case "tv":
  // //     console.log("I am not a cutlery");
  // //     break;
  // //   default:
  // //     console.log("You have to put a cutlery");
  // // }
  // let score = 3;
  
  // // if (score === 55) {
  // //   console.log("I passed");
  // // }
  // // else if (score === 75) {
  // //   console.log("I pass well well");
  // // }
  // // else if (score === 75) {
  // //   console.log("I pass well well");
  // // }
  // // else if (score === 75) {
  // //   console.log("I pass well well");
  // // }
  // // else if (score === 75) {
  // //   console.log("I pass well well");
  // // }
  // // else if (score === 75) {
  // //   console.log("I pass well well");
  // // }
  // // else if (score === 75) {
  // //   console.log("I pass well well");
  // // }
  // // else {
  // //   console.log("I can't say!");
  // // }
  
  // // 00:00 - 11:59
  // // 12:00 - 15:59
  // // 16:00 - 23:59
  // let xx = 13;
  // console.log(12 > xx > 0);
  
  // let time = 35;
  
  // // if (time >= 0 && time <= 12) {
  // //   console.log("Good Morning");
  // // } else if (time >= 13 && time <= 16) {
  // //   console.log("Good Afternoon");
  // // } else {
  // //   console.log("Good Evening");
  // // }
  // /**
  //  * while
  //  * doWhile
  //  * for
  //  * forIn
  //  * forOf
  //  * forEach
  //  */
  
  // // while (condition) {
  // //   execute
  // // }
  
  // // let count = 0;
  // // while (count < 10) {
  // //   count++;
  // //   console.log("Print out Count: ", count);
  // // }
  
  // // do {
  // //   count++;
  // //   console.log("Print out Count: ", count);
  // // } while (count < 10);
  
  // let myName = "Peter Petx";
  // let newLetter = myName[0];
  
  // // console.log(newLetter);
  
  // // for (let i = 0; i < myName.length; i++) {
  // //   console.log(myName[i], i);
  // // }
  // let i = 0;
  // while (i <= myName.length-1) {
  //   console.log(myName[i], i);
  //   i++;
  
  // }g
  
  // console.log(new Date("2023-02-27"));
  // let date = "Mon Feb 27 2023 12:16:07";
  // console.log(date.split(" ")[0]);
  
  // 1, 2, 3, 4, 5, 6
  
//   let dices = [1, 2, 3, 4, 5, 6];
  
//   let newVal = Math.floor(Math.random() * dices.length);
  
//   let val = dices[newVal];
  
//   console.log(val);
  
  // switch (val) {
  //   case 1: {
  //     console.log("Poor Roll");
  //     break;
  //   }
  //   case 2: {
  //     console.log("Not bad");
  //     break;
  //   }
  //   case 3: {
  //     console.log("Hmmm, you try");
  //     break;
  //   }
  //   case 4: {
  //     console.log("Wow, you don dey try");
  //     break;
  //   }
  //   case 5: {
  //     console.log("Awesome....!");
  //     break;
  //   }
  
  //   default: {
  //     console.log("Excellent, roll");
  //   }
  // }
  
  // if (val === 1) {
  //   console.log("Poor Roll");
  // } else if (val === 2) {
  //   console.log("Not bad");
  // } else if (val === 3) {
  //   console.log("Hmmm, you try");
  // } else if (val === 4) {
  //   console.log("Wow, you don dey try");
  // } else if (val === 5) {
  //   console.log("Awesome....!");
  // } else {
  //   console.log("Excellent, roll");
  // }
  
//   let guess = 3;
//   console.log(val, guess);
  
//   if (val === guess) {
//     console.log("You won");
//   } else {
//     console.log("You loss");
//   }
  
//   from chrome:
  
//   let date = new Date("2023-02-09").toString()
//   let val = date.split(" ")[0]
  
//   console.log("the Result: ",  val)
  
  
//   switch(val){
//       case "Mon": {
//           console.log("This is Monday")
//           break
//       }
//            case "Tue": {
//           console.log("This is Tuesday")
//           break
//       }
//            case "Wed": {
//           console.log("This is Wednesday")
//           break
//       }
//            case "Thu": {
//           console.log("This is Thursday")
//           break
//       }
//            case "Fri": {
//           console.log("This is Friday")
//           break
//       }
  
//       default:{
//          console.log("Can't find this...!") 
//       }
//   }
  
//   console.log(new Date("2023-02-09"))
  
  
  
  
  
  // new Start...
  // # FUNCTION
  
  // newMan()
  // function newMan () {}
  // const newMan() => {}
  
//   function newGame() {
//     let guess = 3;
//     console.log(val, guess);
  
//     if (val === guess) {
//       console.log("You won");
//     } else {
//       console.log("You loss");
//     }
//   }
  
//   function maxVal() {
//     let arr = [3, 6, 1, 8];
  
//     let result = Math.max(...arr);
//     // console.log(result)
//     return result;
//   }
  
//   function newMath() {
//     return 5 - 3;
//   }
  
//   let a = 13;
  
//   function newMath2(tunde = "I am", numb = 1) {
//     // return tunde + " That i am";
//     // return tunde;
//     return tunde.repeat(numb);
//   }
  
//   function newMath3(kk, bb) {
//     return kk > bb;
//   }
  
  // [].sort((a, b) => {
  //   return a - b
  // })
  
  // console.log();
  // console.log(newMath3(1, 4));
  
  // console.log(newMath());
  // console.log(maxVal());
  
  // console.log("7" * 4)
  
//   let maxValue = (arr) => {
//     return Math.max(...arr);
//   };
//   let newArr = [1, 8, 4, 0];
//   // console.log(maxValue(newArr));
  
//   let myMax = (somethingElse) => {
//     let arranged = somethingElse.sort((a, b) => {
//       return a - b;
//     });
//     return arranged[somethingElse.length - 1];
//   };
  
//   // console.log(myMax([2, 0, 9, 4, 22, 99]));
  
//   let ourArr = [7, 9, 10, 5, 2];
  
  // console.log(myMax(ourArr));
  
//   let myCount = (a, b) => {
//     return a - Math.pow(b, 2);
//   };
  
  // console.log(myCount(12, 4));
  // slice(1)
  
//   let square = () => {
//     return 9 * 9;
//   };
  // ₦7
  // ₦70
  // ₦700
  // ₦7,000
  // ₦70,000
  // ₦700,000
  // ₦7,000,000
//   console.log(money(90000));
  
  
  
  
  // const myMoney = (value) => {
  //   let data = value.toString();
  
  //   if (data.length <= 3) {
  //     let res = data.split("");
  //     res.unshift("₦");
  //     res.push(".00");
  //     return res.join("");
  //   } else if (data.length === 4) {
  //     let res = data.split("");
  //     res.splice(1, 0, ",");
  //     res.unshift("₦");
  //     res.push(".00");
  //     return res.join("");
  //   } else {
  //     return "This is wrong";
  //   }
  // };
  
  // console.log(myMoney(58));
  
  // const value = (a, b) => {
  //   console.log(arguments);
  // };
  
  // // console.log(value(1, 6));
  
  // value(2, 5, 6, 8, 90, 2);
  
//   let myValue = (x, y) => {
//     console.log("This is it: ", arguments.length);
  
//     return x * y;
//   };
  
  // console.log(myValue(5, 9, 8, 0, 9, 6));

//   const prompt = require("prompt-sync")();
  
  // let aa = prompt("Enter a value: ");
  // console.log(`Your entered value is ${aa}`);
  
  // let comp = 12;
  // let guess = parseInt(prompt("Guess my Mind: "));
  // // let guess = parseInt(myGuess);
  // if (comp === guess) {
  //   console.log("Guess: ", guess, "comp: ", comp);
  //   console.log("You Won!");
  // } else {
  //   console.log("Guess: ", guess, "comp: ", comp);
  //   console.log("You Lost");
  // }
  
  // let guess = parseInt(prompt("Guess my Mind: "));
  
  // let xx = prompt("Guess my First Number: ");
  // let yy = prompt("Guess my Second Number: ");
  
  // let x1 = parseInt(xx);
  // let y1 = parseInt(yy);
  
  // console.log(x1 + y1);
  
  // let guess = prompt("Guess my Mind: ");
  
  // if (isNaN(guess)) {
  //   console.log("This can't be");
  // } else {
  //   let newGuess = parseInt(guess);
  //   console.log(newGuess);
  // }
  
  // let x1 = prompt("Enter X1: ");
  // let x2 = prompt("Enter X2: ");
  
  // if (isNaN(x1) && isNaN(x2)) {
  //   console.log("Please put in a valid Number");
  // } else {
  //   let xx1 = parseInt(x1);
  //   let xx2 = parseInt(x2);
  
  //   console.log(xx1 + xx2);
  // }
  
  // let randomNumb = Math.floor(Math.random() * 5);
  // console.log(randomNumb);
  // let userEntry = prompt("Take a Guess: ");
  
  // if (isNaN(userEntry)) {
  //   console.log("e no fit work...!");
  // } else {
  //   let entry = parseInt(userEntry);
  //   if (randomNumb !== entry) {
  //     console.log("You lost!");
  //   } else {
  //     console.log("You win!");
  //   }
  // }
//   let randomNumb = Math.floor(Math.random() * 5);
//   while (true) {
//     // console.log(randomNumb);
//     let userEntry = prompt("Take a Guess or Press 'r' to Exit: ");
  
//     if (isNaN(userEntry)) {
//       if (userEntry === "r") {
//         console.log("i know say u go come back...!");
//         break;
//       } else {
//         console.log("e no fit work...!");
//       }
//     } else {
//       let entry = parseInt(userEntry);
//       if (randomNumb !== entry) {
//         console.log("You lost!");
//       } else {
//         console.log("You win!");
//         break;
//       }
//     }
//   }
  
  // let count = 0;
  
  // while (count <= 10) {
  //   count++;
  //   if (count === 4) {
  //     console.log("This is it: ", count);
  //     break;
  //   } else {
  //     console.log(count);
  //   }
  // }
  
  
//   let record = [{}, {}, {}, {}]
  
//   let student = {name: "", date: "", time: ""}
  
//   record.push(student)
  
//   myRecord("travis")
  
  
  
  
  // /*
  //     Attendance System.
  //     Guess Game System.
  // */
  // const prompt = require("prompt-sync")();
  // const attendance = () => {
  //   let register = [];
  //   let student = {};
  
  //   while (true) {
  //     let entry = prompt("Who are you or press 'q' to Exit: ");
  //     let time = new Date();
  //     let convTime = time.toString();
  //     let timeDate = convTime.slice(0, 15);
  //     let timer = convTime.slice(16, 24);
  //     let newTime = timer.split(":")[0];
  
  //     if (entry === "q") {
  //       console.log(
  //         `The Total Number of student in attendance is: ${register.length} students`,
  //       );
  
  //       console.log("which are: ");
  
  //       register.map((el) => {
  //         console.log(el.name);
  //       });
  //     } else {
  //       if (newTime > 12) {
  //         student = {
  //           name: entry,
  //           date: timeDate,
  //           time: `${timer.split(":")[0] % 12}:${timer.split(":")[1]}:${
  //             timer.split(":")[2]
  //           }PM `,
  //         };
  //         register.push(student);
  //       } else {
  //         student = {
  //           name: entry,
  //           date: timeDate,
  //           time: `${timer.split(":")[0]}:${timer.split(":")[1]}:${
  //             timer.split(":")[2]
  //           }AM `,
  //         };
  //         register.push(student);
  //       }
  //     }
  
  //     console.log(register);
  //   }
  // };
  
  // // attendance();
  
  // for (let i = 1; i <= 4; i++) {
  //   console.log(i - 1);
  // }
  
//   class Rect {
//     constructor(length, height) {
//       this._length = length;
//       this.height = height;
  
      // console.log(
      //   `the Height is: ${this.height}m and the length is: ${this.length}m`,
      // );
    // }
  
    // perimeter 2(l+b)
    // area (lb)
    // diagonal h = rt(l*2 + b*2)
  
//     perimeter() {
//       return 2 * (this.height + this._length);
//     }
  
//     area() {
//       return this.height * this._length;
//     }
  
//     get readValue() {
//       return `${this._length} and ${this.height}`;
//     }
  
//     set readValue(length) {
//       return (this._length = length);
//     }
//   }
  
//   let rect = new Rect(8, 5);
//   let rect2 = new Rect(1, 7);
  
//   // rect2.length = 3;
  
//   console.log((rect2.readValue = 8));
//   console.log(rect2);
  
//   function myRect() {}
  
  // let a = { name: "peter" };
  // console.log((a.name = "James"));
  // console.log(a);
  
  
  
//   const prompt = require("prompt-sync")();
  
//   let record = [];
//   let student = {};
  
  // student = {
  //   name: "Peter",
  //   date: "Wed 08-03-2023",
  //   time: "11:01:23AM",
  // };
  
//   class Register {
//     constructor(database) {
//       this.database = [];
//     }
  
//     remove() {
//       while (true) {
//         let name = prompt(
//           "Enter the Name you want to Remove or q to Exit: ",
//         ).toLowerCase();
//         console.log(this.database);
//         if (name === "q") {
//           break;
//         } else {
//           this.database = this.database.filter((el) => {
//             return el.name !== name;
//           });
//           console.log(this.database);
//         }
//       }
//     }
  
//     attendance() {
//       while (true) {
//         let realDate = new Date();
//         let dateTime = realDate.toString();
  
//         // let date = dateTime.indexOf("3");
//         let date = dateTime.slice(0, 15);
//         let newTime = dateTime.slice(16, 24);
  
//         let time = newTime.split(":")[0];
//         let time1 = newTime.split(":")[1];
//         let time2 = newTime.split(":")[2];
  
//         let name = prompt("Enter your Name or enter 'q' to Exit: ").toLowerCase();
//         if (name === "q") {
//           console.log(this.database);
//           this.remove();
//           break;
//         } else {
//           if (time == 12) {
//             let realTime = `${time}:${time1}:${time2}PM`;
//             student = {
//               name,
//               date,
//               time: realTime,
//             };
//             this.database.push(student);
//             console.log(this.database);
//           } else if (time > 12) {
//             let realTime = `${time % 12}:${time1}:${time2}PM`;
//             student = {
//               name,
//               date,
//               time: realTime,
//             };
//             this.database.push(student);
//             console.log(this.database);
//           } else {
//             let realTime = `${time}:${time1}:${time2}AM`;
//             student = {
//               name,
//               date,
//               time: realTime,
//             };
//             this.database.push(student);
//             console.log(this.database);
//           }
//         }
//       }
//     }
//   }
  
//   let reg = new Register();
  // reg.attendance();
  // console.log("Coming from Database", record);
  
  // to select
  // console.log(
  //   "Reading from Database",
  //   record.filter((el) => {
  //     return el.name === "peter";
  //   }),
  // );
  
  // to delete
  // console.log(
  //   "Reading from Database",
  //   record.filter((el) => {
  //     return el.name !== "peter";
  //   }),
  // );
  
  // reg.attendance();
  // reg.remove();
  
//   class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     static readignDistance(a, b) {
//       let mainX = a.x + b.x;
//       let mainY = a.y + b.y;
  
//       console.log(mainX, mainY);
//     }
//   }
  
//   let pointA = new Point(3, 5);
//   let pointB = new Point(5, 2);
  
//   // console.log(pointA);
//   // console.log(pointB);
  
//   // Point.readignDistance(pointA, pointB);
  
//   class Grade {
//     constructor(name, score) {
//       this.score = score;
//       this.name = name;
//     }
  
//     static getGrade(...args) {
//       let data = [...args];
//       let newData = data.map((el) => {
//         return el.score;
//       });
  
//       let newScore = newData.sort((a, b) => {
//         return a - b;
//       });
  
//       let score = newScore[newData.length - 1];
  
//       return `The hight score is ${
//         data.filter((el) => {
//           return el.score === score;
//         })[0].name
//       } he/she scored: ${score}Mark `;
//     }
//   }
  
//   // function data() {
//   //   console.log(arguments);
//   // }
  
//   let peter = new Grade("Peter", 20);
//   let peter1 = new Grade("Thywill", 70);
//   let peter3 = new Grade("Osas", 50);
  
//   console.log(Grade.getGrade(peter1, peter, peter3));
  
  
  


  