console.log(" UI Calculator")

function add(n1,n2){
         return n1+n2
    }

function calculate(type) {
    n1 = Number(document.getElementById('number1').value)
    n2 = Number(document.getElementById('number2').value)

    let result

    function add(n1,n2){
         return n1+n2
    }
    if (type=== "add") {
       result = add(n1,n2)
    }
    function subtract(n1,n2){
        return  n1-n2
    }
     if (type=== "subtract") {
       result =   subtract(n1,n2)
    }
    function multiplication(n1,n2){
        return n1*n2
    }
     if (type=== "multiplication") {
        result = multiplication(n1,n2)
    }
    function divide(n1,n2){
        if (n2===0) {
            return 'can not divide by zero'
        }
        else {
            return n1/n2
        }
    }
     if (type=== "divide") {
        result = divide(n1,n2)
    }
    function percentage(n1,n2){
        return ((n1-n2)/((n1+n2)/2))*100
    }
     if (type=== "percentage") {
        result =  percentage(n1,n2)
    }
    function power(n1,n2){
        return  n1**n2
    }
    if (type=== "power") {
        result = power(n1,n2)
    }
    document.getElementById("result").innerText = ('Result : ' +result)
}


function clearAll(){
    document.getElementById("result").innerText= " Calculator Reset  "
    document.getElementById('number1').value = ""
    document.getElementById('number2').value = ""
}
resultBox.style.opacity = 0;
setTimeout(()=>{
    resultBox.style.opacity = 1;
},100);
