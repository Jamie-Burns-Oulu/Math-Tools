function enterkey(e)
{
  if(e.keyCode === 13){
  return myFunction();
  }
  return true;
}


function myFunction()
{
  var Dice = [ "1","2","3","4","5","6"]
  var DiceCount = document.getElementById('DiceCount').value
  var Ones = 0;
  var Twos = 0;
  var Threes = 0;
  var Fours = 0;
  var Fives = 0;
  var Sixes = 0;
  var result = [];
  if(isNaN(DiceCount) || (DiceCount == ""))
  {
 document.getElementById("NaN").innerHTML = "Please enter a number above";
 document.getElementById("counter1").innerHTML = " ";
 document.getElementById("counter2").innerHTML = " ";
 document.getElementById("counter3").innerHTML = " ";
 document.getElementById("counter4").innerHTML = " ";
 document.getElementById("counter5").innerHTML = " ";
 document.getElementById("counter6").innerHTML = " ";
  }
  else
  {
    for (i = 0; i < DiceCount; i++)
    {
        var Random = Dice[Math.floor(Math.random()*6)];
        result.push(Random)
    }
    for (j = 0; j < result.length; j++)
    {
      if (result[j] == 1)
        {
      Ones++
        }
      if (result[j] == 2)
        {
      Twos++
        }
      if (result[j] == 3)
        {
      Threes++
        }
      if (result[j] == 4)
        {
      Fours++
        }
      if (result[j] == 5)
        {
      Fives++
        }
      if (result[j] == 6)
        {
      Sixes++
        }
    }
    document.getElementById("NaN").innerHTML = " ";
    document.getElementById("counter1").innerHTML =  "Number of Ones &#x2680 = "   +Ones;
    document.getElementById("counter2").innerHTML =  "Number of Twos &#x2681 = "   +Twos;
    document.getElementById("counter3").innerHTML =  "Number of Threes &#x2682 = " +Threes;
    document.getElementById("counter4").innerHTML =  "Number of Fours &#x2683 = "  +Fours;
    document.getElementById("counter5").innerHTML =  "Number of Fives &#x2684 = "  +Fives;
    document.getElementById("counter6").innerHTML =  "Number of Sixes &#x2685 = "  +Sixes;
  }
}
