var inputForm = document.querySelector("#tableForm");
var input = document.querySelector("#inputID");
var table = document.querySelector(".time-table");
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// https://developer.mozilla.org/en-US/docs/Web/Events
inputForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var tableOf = input.value;
    table.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
        //   console.log(tableOf + " x " + i + " =", tableOf * i);
        var message = "".concat(tableOf, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 X\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ").concat(i, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 =\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ").concat(tableOf * i);
        table.innerHTML += "".concat(message, " <br>");
    }
});





