window.addEventListener('load', function() {
    let hoten = document.querySelector("#hoten");
    let pass = document.querySelector("#password");
    let btn = document.querySelector("button");

    btn.onclick = function() {
        localStorage.setItem("hoten",hoten.value)
        localStorage.setItem("pass",pass.value)
        window.location.href = "../html/thongtin.html"
    };
});
