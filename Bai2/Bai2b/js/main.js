function getInput(operator) {
    let s1 = document.querySelector("#s1")
    let s2 = document.querySelector("#s2")
    let num1 = parseFloat(s1.value)
    let num2 = parseFloat(s2.value)
    if(isNaN(num1) || isNaN(num2)) {
        s1.value = ""
        s2.nodeValue = ""
        alert("Du lieu khong hop le")
        return
    }
    if(num2 == 0 && (operator == "chia" || operator == "chiadu")) {
        s2.value = ""
        alert("khi chia mau phai khac 0")
        return
    }
    let res = document.querySelector("#result")
    let val
    if(operator == "cong") val = num1 + num2
    if(operator == "tru") val = num1 - num2
    if(operator == "nhan") val = num1 * num2
    if(operator == "chia") val = num1 / num2
    if(operator == "chiadu") val = num1 % num2
    res.value = val
}