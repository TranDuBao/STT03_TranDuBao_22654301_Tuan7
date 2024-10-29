window.onload = function() {
    let input1 = document.querySelector("#chose1")
    let input2 = document.querySelector("#chose2")
    let color = document.querySelector("#selectColor")
    let cancel = document.querySelector("#cancel")
    let changeColor = document.querySelector("#changeColor")
    let background = document.querySelector(".container")
    let text = document.querySelector(".text")
    console.log(changeColor)
    changeColor.onclick = function() {
        if(input1.checked) {
            if(color.value == 1) background.style.backgroundColor = "red";
            else if(color.value == 2) background.style.backgroundColor = "yellow";
            else if(color.value == 3) background.style.backgroundColor = "green";
        }
        else {
            if(color.value == 1) text.style.color = "red";
            else if(color.value == 2) text.style.color = "yellow";
            else if(color.value == 3) text.style.color = "green";
        } 
    }
    cancel.onclick = function() {
        background.style.backgroundColor = "unset"
        text.style.color = "unset";
    }
}