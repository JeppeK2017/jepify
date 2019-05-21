function jepify() {
    var inputStringArray = document.getElementById("input_field").value.split(" ");

    var resultHolder = document.getElementById("result_header");
    var result;

    if (inputStringArray.length > 1) {
        var firstString = inputStringArray.shift().toLowerCase();

        var camelWords = inputStringArray.map(s => s.charAt(0).toUpperCase() + s.substring(1)).join("");

        result = "#" + firstString + camelWords + "Jep";

    } else {
        result = "#" + inputStringArray.pop().toLowerCase() + "Jep";
    }

    resultHolder.textContent = result;

}