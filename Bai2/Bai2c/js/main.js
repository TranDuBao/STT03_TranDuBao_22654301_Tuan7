
window.onload = function() {
    let inputs = document.querySelectorAll("input")
    document.querySelector("button").onclick = function() {
        let res = ""
        inputs.forEach(function(x) {
            if(x.checked) {
                res += `${x.getAttribute("data-label")}, `
            }
            document.querySelector(".user-select").innerText = res
        })
    }
}