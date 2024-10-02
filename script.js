// 1 Question

let DayNumber = parseInt(prompt("Enter a Number Between 1 to 7:"));

switch (DayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Enter a valid Number Between 1 to 7");
}


// 2 Question

let MonthNumber = parseInt(prompt("Enter a Number Between 1 to 12:"));

switch (MonthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Enter a valid Number Between 1 to 12");
}

// 3 Question 

let a = 2;

while(a<=10) {
    if(a%2 == 0) {
        console.log(a);
    }
    a++;
}

// 4 Question

let b = 10;

while(b>0) {
    console.log(b);
    b--
}
console.log("Wait is over! Enjoy Your Premium Subscription");
