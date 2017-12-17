function maketable(){

    var body = document.body;
    var tbl  = document.createElement('table');
    tbl.style.width  = '510px';
//Creates Bin Numbers 0-500 and title at -1//
    for(var i = -1; i < 501; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 1; j++){
            var td = tr.insertCell();
            if(i == -1){
              td.appendChild(document.createTextNode("Decimal"));
            }
            else {
            td.appendChild(document.createTextNode(i));
            td.style.border = '1px solid black';
          }
        }
//Creates Bin Numbers 0-500 and title at -1//
        for(var j = 0; j < 1; j++){
            var td = tr.insertCell();
            var val= parseInt(i);
            if(i == -1){
              td.appendChild(document.createTextNode("Binary"));
            }
            else {
            td.appendChild(document.createTextNode(val.toString(2)));
            td.style.border = '1px solid black';
          }
        }

//Creates Oct Numbers 0-500 and title at -1//
        for(var j = 0; j < 1; j++){
            var td = tr.insertCell();
            var val= parseInt(i);
            if(i == -1){
              td.appendChild(document.createTextNode("Octal"));
            }
            else {
              td.appendChild(document.createTextNode(val.toString(8)));
              td.style.border = '1px solid black';
            }

        }
//Creates Hex Numbers 0-500 and title at -1//
        for(var j = 0; j < 1; j++){
            var td = tr.insertCell();
            var val= parseInt(i);
            if(i == -1){
              td.appendChild(document.createTextNode("Hexadecimal"));
            }
            else {
            td.appendChild(document.createTextNode(val.toString(16)));
            td.style.border = '1px solid black';
          }
        }

    }
    body.appendChild(tbl);
}
