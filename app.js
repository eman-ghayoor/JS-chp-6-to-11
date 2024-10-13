                  ////////// Chp no 6 to 8......../////////

/////  Q no 1.....////
let num = 5;
let a = num + 5;
console.log(a);
document.write ("<h1> Q no 1 </h1>");
document.write ("<h2> part a </h2>");
document.write ("The value of a is: 10");
let num2 = 10;
let Newnum = ++num2;
console.log(Newnum);
document.write ("<h2> part b </h2>");
document.write ("The value of ++a is: 11 <br>");
document.write ("Now the value of a is: 11");
let num3 = 12;
let Newnum1 = num3++;
console.log(Newnum1);
document.write ("<h2> part c </h2>");
document.write ("The value of a++ is: 11 <br>");
document.write ("Now the value of a is: 12");
let num4 = 12;
let Newnum2 = --num4;
console.log(Newnum2);
document.write ("<h2> part d </h2>");
document.write ("The value of --a is: 11 <br>");
document.write ("Now the value of a is: 11");
let num5 = 10;
let Newnum3 = num5--;
console.log(Newnum3);
document.write ("<h2> part e </h2>");
document.write ("The value of a-- is: 11 <br>");
document.write ("Now the value of a is: 10");

/////  Q no 2.....////
let A = 2;
let b = 1;
let al = --A;
console.log(al);
let alg =  --a - --b ;
console.log(alg);
let algeb = --a - --b + ++b; 
console.log(algeb);
let algebra = --a - --b + ++b + b--; 
console.log(algebra);
document.write ("<h1> Q no 2 </h1>");
document.write ("a is: 2 <br>");
document.write ("b is: 1 <br>");
document.write ("Result is: 8");

/////  Q no 3.....////
let name = prompt("Please enter your name:");
console.log ("Hello! nice to meet you");

/////  Q no 5.....////
//Table 
let number5 = 5

for (var table=1; table<=10; table++){
    let answer = number5*table
    console.table(`${number5} x ${table} =${answer}`);
}

/////  Q no 6.....////

document.write ("<h1> Q no 6 </h1>");
document.write ("<h2> Subject-Total-Marks-Obtained Marks-Percentage </h2><br>");
document.write ("English 100 - 54 = 54%<br>");
document.write ("Math   100 - 54 = 54% <br>");
document.write ("Math   100 - 48 = 48% <br>");
document.write ("marks 156 out of 300 <br>");
document.write ("percentage is 52% <br>");
let English = 54;
let Math = 54;
let Urdu = 48;
let totalmarks = 300;
let Obtained = 156;
let Percentage = Obtained / totalmarks * 100;
console.log(Percentage);









          ////////// Chp no 9 to 11......../////////
          document.write ("<h2> chp 9 to 11 </h2>");

/////  Q no 1.....////
let city = prompt("Please enter the name of your city:")
console.log("Welcome to the city of light");

/////  Q no 2.....////
let gender = prompt("Please enter your gender (male/female):");
switch (gender) {
    case "male":
        console.log("Good morning sir");
        break;
    case "female":
        console.log("Good morning ma'am");
        break;
}        

/////  Q no 3.....////
let color = prompt("Enter the color of the traffic signal (red/yellow/green):");
switch (color) {
    case "red":
        console.log("Must stop");
        break;
    case "yellow":
        console.log("Ready to move");
        break;
    case "green":
        console.log("Move now");
        break;
}


/////  Q no 4.....////
let fuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));
console.log("Please refill the fuel in your car.");

/////  Q no 5.....////
let a1 = 4; 
if (++a1 === 5){ 
alert("given condition for variable a is true"); 
} 

let b1 = 82; 
if (b1++ === 82){ 
alert("given condition for variable b is true"); 
} 

let c = 12; 
if (c++ === 12){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 15){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
}
let materialCost = 20000; 
let laborCost = 2000; 
let totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
} 
if (true){ 
    alert("True"); 
} 
if("car" < "cat"){ 
    alert("car is greater than cat"); 
    }  
    
/////  Q no 6.....////
let tmarks = 300;
let obt = 219 ;
let percent = obt / tmarks *100;
console.log(percent);
let grade = "A";
let Remarks = "good";
console.log(grade , Remarks);
document.write ("<h1> Q no 6 </h1>");
document.write ("<h2> Marksheet </h2>");
document.write ("total mark = 300 <br>");
document.write ("Obtained marks = 219 <br>");
document.write ("Percentage = 73% <br>");
document.write ("Grade : A <br>");
document.write ("Remarks : Good <br>");


/////  Q no 7.....////
let userGuess = prompt("Guess the secret number (between 1 and 10):");
switch (userGuess) {
    case "5":
        console.log("Bingo! Correct answer");
        break;
        case "+1":
            console.log("Close enough to the correct answer");
            break;
}

/////  Q no 8.....////
let number = prompt("Enter a number to check if it's divisible by 3:");
switch (number) {
    case "6":
        console.log("this number is divisible by 3");
        break;
        case "20":
            console.log("This number is not divisible by 3");
            break;
}


/////  Q no 9.....////
let number1 = prompt("Enter a number to check if it's even or odd:");
if (!isNaN(number)) {
    // Check if the number is even or odd
    if (number % 2 === 0) {
        console.log(`${number} is an even number.`);
    } else {
        console.log(`${number} is an odd number.`);
    }
}

/////  Q no 10.....////
let temperature = prompt("Enter the temperature:");
switch (temperature) {
    case "40":
        console.log("It is too hot outside.");
        break;
        case "30":
            console.log("The Weather today is Normal.");
            break;
            case "20":
                console.log("Today’s Weather is cool.");
                break;
                case "10":
                    console.log("OMG! Today’s weather is so Cool.”");
                    break;
        
} 

/////  Q no 11.....////
 let num1 = +prompt("Enter a number 1");
 let operation = prompt("Enter a opration");
 let num8 = +prompt("Enter number 2");

 if (operation == "+") {
     alert(num1+num2);
 }
 else if (operation =="-") {
     alert(num1-num2);
 }
 else if (operation == "*") {
     alert(num1*num2);
 }
 else if (operation == "/") {
     alert(num1/num2);
 }
 else if (operation == "%") {
    alert(num1/num2);
}
 else{
     alert("invalid opration")
    }
