
let num1="";
let num2="";
let operator="";
let currentNumber =0;
function add (x,y){
    
    return x + y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}

function operate(num1, num2,operator){
    switch (operator){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
            
    }
}
window.addEventListener("click",(e)=>{
    if(e.target.getAttribute("name") === "=")
    {
        document.getElementById("displayText").textContent = currentNumber;
        return;
    }
    document.getElementById("displayText").textContent = `${num1} ${operator} ${num2}`;
})
let goToSecondNumber = false;
const operationButtons = document.querySelectorAll(".opButtons")
operationButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        
        if(e.target.getAttribute("name") === "=")
        {
           
            currentNumber = operate(parseFloat(num1),parseFloat(num2),operator);
            
            
            
            console.log("The answer is "+currentNumber);
            num1 = "";
            num2 = "";
            goToSecondNumber =false;
        }
        else
        {
            goToSecondNumber = true;
            if(num1 ==='')
            {
                num1 = currentNumber;
            }
            operator = e.target.getAttribute("name");
            console.log(operator);
        }   
        
    })

});


const numButtons = document.querySelectorAll(".numButtons")
numButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(!goToSecondNumber)
        {
            num1 +=e.target.getAttribute('name')
            
            console.log(num1);
        }
        else{
            num2 +=e.target.getAttribute('name')
            console.log(num2);
        }
        
    })

});


const miscButtons = document.querySelectorAll(".miscButtons")
miscButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target.getAttribute('name'));
        if(e.target.getAttribute("name") ==="clearButton")
        {
            goToSecondNumber= false;
            operator = "";
            num1 = "";
            num2 = "";
        }
        
    })

});