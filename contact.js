function mailsent() 
{
	var name=document.forms["myForm"]["firstname"].value;
	if(name=="")
	{
		alert("Kindly fill your name");
		return false;
	}
	
	var email=document.forms["myForm"]["email"].value;
	if(email=="")
	{
		alert("Kindly fill your E-mail");
		return false;
	}

	var subject=document.forms["myForm"]["subject"].value;
	if(subject=="")
	{
		alert("Kindly fill the Subject");
		return false;
	}
	
	var msg=document.forms["myForm"]["message"].value;
	if(msg=="")
	{
		alert("Kindly fill your Message");
		return false;
	}

	
	if(email.indexOf('!',0)>0 && pass.indexOf("@",0)<0 && pass.indexOf('#',0)>0 && pass.indexOf('$',0)>0 && pass.indexOf('&',0)>0 && pass.indexOf('%',0)>0 && pass.indexOf('^',0)>0 && pass.indexOf('*',0)>0)
	{
		alert("Kindly fill an appropriate email address");
		return false;
	}

	
	return alert("Thanks for your response.. We'll get back to you as soon as possible")
}



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



