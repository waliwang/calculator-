let oneBtn = document.getElementById("calc-one");
let twoBtn = document.getElementById("calc-two");
let threeBtn = document.getElementById("calc-three");
let fourBtn = document.getElementById("calc-four");
let fiveBtn = document.getElementById("calc-five");
let sixBtn = document.getElementById("calc-six");
let sevenBtn = document.getElementById("calc-seven");
let eightBtn = document.getElementById("calc-eight");
let zeroBtn = document.getElementById("calc-zero");

let decimalBtn = document.getElementById("calc-decimal");
let clearBtn = document.getElementById("calc-clear");
let simbolBtn = document.getElementById("calc-simbol");
let remainderBtn = document.getElementById("calc-remainder";
let multiplyBtn = document.getElementById("calc-multiply");
let divideBtn = document.getElementById("calc-divide");
let subtractBtn = document.getElementById("calc-subtract");
let plusBtn = document.getElementById("calc-plus");
let eqalBtn = document.getElementById("calc-eqal");
let displayValElement = document.getElementsByClassName("calc-display-val")

let calcBtnNum = document.getElementsByClassName("calc-btn-num ")
let calcBtnOperator = document.getElementsByClassName("calc-btn-operator")

let displayval = "0"
for(let i = 0; i < calcBtnNum.length; i++) {
    calcBtnNum[i].addEvenListener("click",upDatedisplay-val)
}
for(let i = 0; i < calcBtnOperator.length; i++) {
    
}
