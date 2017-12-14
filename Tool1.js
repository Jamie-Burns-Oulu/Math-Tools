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
      case "Binary":
      dec = parseInt(val, 2);
      break;
      case "Octal":
      dec =parseInt(val, 8);
      break;
      case "Decimal":
      dec =parseInt(val, 10);
      break;
      case "Hexadecimal":
      dec =parseInt(val, 16);
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
