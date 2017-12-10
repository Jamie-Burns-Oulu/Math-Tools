//If enter key press trigger conversion function//
function handle(e){
  if(e.keyCode === 13){
    return convert();
  }
  return false;
}

//Conversion function//
function convert() {
  var radix;
  var radixStr = document.getElementById('selectid').value;
  var from = document.getElementById("selid").value;
  var val = parseInt(document.getElementsByTagName("input")[0].value);
  var dec;
    switch(from) {
      case "binary":
      dec = parseInt(val, 2);
      break;
      case "octal":
      dec =parseInt(val, 8);
      break;
      case "decimal":
      dec =parseInt(val, 10);
      break;
      case "hexadecimal":
      dec =parseInt(val, 16);
      break;
      }

  switch(radixStr) {
      case "binary":
      radix = 2;
      break;
      case "octal":
      radix = 8;
      break;
      case "decimal":
      radix = 10;
      break;
      case "hexadecimal":
      radix = 16;
      break;
    }
    var bincheck = new RegExp("[2-9]");
    var res = bincheck.test(val);
    var ans = document.getElementById("answer");

  if (from === "binary"){
          if (res || (isNaN(val))){
            ans.innerHTML = "Please enter a binary number.";
          }
          else{
            ans.innerHTML = "In "+ radixStr+":  " + dec.toString(radix);
          }
    }
//  if (isNaN(val)){
//      ans.innerHTML = "Please enter a "+from+" number.";
//      }
  else{
      ans.innerHTML ="In "+ radixStr+":  " + dec.toString(radix);
      }
}
