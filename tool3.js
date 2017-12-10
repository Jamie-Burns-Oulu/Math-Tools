function ClearFields() {
     document.getElementById("textfield1").value = "";
     document.getElementById("textfield2").value = "";
}

function Calculate() {
  if (document.getElementById("selectid").value == 0) {
    var value = document.getElementById("textfield1").value;
    var times = document.getElementById("textfield2").value;
    var result = 1;

    for (var i = 1; i <= value; i++) {
      result*=i;
    }

    document.getElementById("answer").innerHTML= "With replacement " + result;
  } else if (document.getElementById("selectid").value == 1) {
    var value = document.getElementById("textfield1").value;
    var result = document.getElementById("textfield1").value;

    for (var i = value-1; i > 1; i--) {
      result*=i-1;
    }

    document.getElementById("answer").innerHTML= "Without replacement " + result;
  }

}
