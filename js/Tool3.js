//Clears input fields
function ClearFields() {
     document.getElementById("textfield1").value = "";
     document.getElementById("textfield2").value = "";
}

//Disables no selected option
function Disable() {
  document.getElementById("selectid").disabled = true;
}

//Enables selected option
function Enable() {
  document.getElementById("selectid").disabled = false;
}

//Checks selections and inputs and performs relevant calculation
function Calculate() {
  var value = document.getElementById("textfield1").value;
  var times = document.getElementById("textfield2").value;
  if (document.getElementById("perm").checked == true) {
    if (value == "") {
      document.getElementById("answer").innerHTML= "Please enter a value";
    } else {
      if (document.getElementById("selectid").value == 0) {
        var result = 1;

        var top = 1;
        var bottom;
        var bottom1 = 1;

        if (times == "") {
          for (var i = 1; i <= value; i++) {
            result*=i;
          }
        } else {
          for (var i = value; i >= 1; i--) {
            top*=i;
            bottom = value-times;
          }
          for (var k = bottom; k >= 1; k--) {
            bottom1*=k;
          }
          console.log(top);
          console.log(bottom);
          result = top/bottom1;
        }

        document.getElementById("answer").innerHTML= "With replacement: " + result;
      } else if (document.getElementById("selectid").value == 1) {

        var result = 1;

        if (times == "") {
          for (var i = 1; i <= value; i++) {
            result*=value;
          }
        } else {
          for (var i = 1; i <= times; i++) {
            result*=value;
          }
        }

        document.getElementById("answer").innerHTML= "Without replacement: " + result;
      }
    }
  } else {

    if (value == "") {
      document.getElementById("answer").innerHTML= "Please enter a value";
    } else {

      var result = 1;

      var top = 1;
      var bottom;
      var bottom1 = 1;
      var bottomDone = 1;

      if (times == "") {
        for (var i = 1; i <= value; i++) {
          result*=i;
        }
      } else {
        for (var i = value; i >= 1; i--) {
          top*=i;
          bottom = value-times;
        }

        for (var j = 1; j <= times ; j++) {
          bottom1*=j;
        }

        for (var k = bottom; k >= 1; k--) {
          bottomDone*=k;
        }
        result = top/(bottomDone*bottom1);
      }

    document.getElementById("answer").innerHTML= "Combinations: " + result;
   }
  }

}
