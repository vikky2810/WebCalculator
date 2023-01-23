const str = document.getElementById("stringlbl")
var inputE1 = document.getElementById("name").value;
const btnE1 = document.getElementById("btn")

btnE1.onclick = function (){
    document.getElementById("stringlbl").innerHTML = "String" + inputE1
}

