window.onload = function() {
    document.querySelector("#hoten_out").innerText = localStorage.getItem("hoten")
    document.querySelector("#password_out").innerText = localStorage.getItem("pass")
}