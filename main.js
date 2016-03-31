"use strict";


var add = function (value1, value2) {
    if (value1 && value2) {
        return value1 + value2;
    } else {
        return "Empty values. Please enter value1 and value2";
    }
};

var updateAnswer = function () {
    var value1 = document.getElementById("var1").value,
    value2 =  document.getElementById("var2").value;

    document.getElementById("answer").innerHTML = add(+value1, +value2);
};

document.getElementById("add-btn").addEventListener("click", function() {
    updateAnswer();
});
