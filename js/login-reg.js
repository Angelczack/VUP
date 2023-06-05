function loginreg(){
   var login=document.getElementsByClassName("login-reg")[0];
   login.style.display="block";
}

function funclose(){
var closebutton=document.getElementsByClassName("login-reg")[0];
  closebutton.style.display="none";
}

var count=1;
function iregfirst(){
count++;
  if(count%2==0)
  {
  var iregfirst=document.getElementById("ireg1");
  iregfirst.style.border="1px solid #ff6fa2";
  iregfirst.style.transition="all 0.5s";
  }
  // else{
  //   var iregfirst=document.getElementById("ireg1");
  //   iregfirst.style.border="1px solid #ccc";
  //   iregfirst.style.transition="all 0.5s";
  // }
}

function iregsecond(){
count++;
if(count%2!=0)
{

  var iregfirst=document.getElementById("ireg1");
  iregfirst.style.border="1px solid #ccc";
  iregfirst.style.transition="all 0.5s";

  var iregsecond=document.getElementById("ireg2");
  iregsecond.style.border="1px solid #ff6fa2";
  iregsecond.style.transition="all 0.5s";
}
else
{
  var iregsecond=document.getElementById("ireg2");
  iregsecond.style.border="1px solid #ccc";
  iregsecond.style.transition="all 0.5s";
}
}

