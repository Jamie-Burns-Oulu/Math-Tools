//If enter key press with in input field trigger conversion function//
function handle(e){
  if(e.keyCode === 13){
    return convert();
  }
  return false;
}

//Conversion function//
function convert() {
  var radix;
  var dec;
  var radixStr = document.getElementById('selectid').value;
  var from = document.getElementById("selid").value;
  var val = parseInt(document.getElementsByTagName("input")[0].value);
  var hexsafe = "0x";
  var valhex = document.getElementsByTagName("input")[0].value;
  var hex = hexsafe.concat(valhex);
  var ans = document.getElementById("answer");
  var bincheck = new RegExp("[2-9]");
  var res = bincheck.test(val);

    switch(from) {
      case "Binary":
      dec = parseInt(val, 2);
      break;
      case "Octal":
      dec = parseInt(val, 8);
      break;
      case "Decimal":
      dec = parseInt(val, 10);
      break;
      case "Hexadecimal":
      dec = parseInt(hex, 16);
      break;
      }

  switch(radixStr) {
      case "Binary":
      radix = 2;
      break;
      case "Octal":
      radix = 8;
      break;
      case "Decimal":
      radix = 10;
      break;
      case "Hexadecimal":
      radix = 16;
      break;
    }

//Checks input for binary is valid
  if (from === "Binary"){
          if (res || (isNaN(val))){
            ans.innerHTML = "Please enter a Binary number.";
          }
          else{
            ans.innerHTML = "In "+ radixStr+":  " + dec.toString(radix);
          }
  }
//Checks input for hexadecimal is valid
  else if (from === "Hexadecimal"){
       if (isNaN(dec.toString(radix))){
          ans.innerHTML = "Please enter a "+from+" number.";
          }
          else{
              ans.innerHTML ="In "+ radixStr+":  " + dec.toString(radix);
          }
  }
//Checks input for decmial and octal is a number
  else if (isNaN(val)){
    ans.innerHTML = "Please enter a "+from+" number.";
  }
  else{
      ans.innerHTML ="In "+ radixStr+":  " + dec.toString(radix);
  }

}
