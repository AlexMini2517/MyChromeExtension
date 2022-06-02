/*
window.onload = function() {
    navigator.clipboard.writeText("È");
}
*/

window.onload = function() {
    let inputElement = document.createElement("input");
    inputElement.setAttribute("value", "È");
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand("copy");
    document.body.removeChild(inputElement);
    window.close();
}