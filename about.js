
//Jquery function on contact card
$(document).ready(function(){
  $("#contact1").click(function(){
    $("#phonenumber1").slideToggle();
  });
  $("#contact2").click(function(){
    $("#phonenumber2").slideToggle();
  });
  $("#contact3").click(function(){
    $("#phonenumber3").slideToggle();
  });
  $("#contact4").click(function(){
    $("#phonenumber4").slideToggle();
  });
});



//Function to add overlay
function on() 
{
  document.getElementById("overlay").style.display = "block";
}

//Function to remove overlay
function off() 
{
  document.getElementById("overlay").style.display = "none";
}


