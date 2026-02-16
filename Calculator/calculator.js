console.log(" UI Calculator")
function calculate(type) {
    n1 = Number(document.getElementById('number1').value)
    n2 = Number(document.getElementById('number2').value)
    let result

    if (type=== "add") {
       result = n1+n2
    }
     if (type=== "subtract") {
       result =   n1-n2
    }
     if (type=== "multiplication") {
        result =  n1*n2
    }
     if (type=== "divide") {
        result = n2===0? 'cannot divide by zero ' : n1/n2
    }
     if (type=== "percentage") {
        result =  ((n1-n2)/((n1+n2)/2))*100
    }
    if (type=== "power") {
        result =  n1**n2
    }
    document.getElementById("result").innerText = ('Result : ' +result)
}
function clearAll(){
    document.getElementById("result").innerText= " Calculator Reset  "
    document.getElementById('number1').value = ""
    document.getElementById('number2').value = ""
}