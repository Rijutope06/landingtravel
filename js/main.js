function showContent() {
    check2 = document.getElementById("checked2").classList.toggle("display-none");
}

check = document.getElementById("checkbox").onclick = function () {
    check1 = document.getElementById("checked1").classList.toggle("display-none");
    showContent();
}
