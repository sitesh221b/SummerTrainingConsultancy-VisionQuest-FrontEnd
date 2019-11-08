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

//Function to like our website
function like(x) 
{
  x.classList.toggle("fa-thumbs-down");
}


//Function of modal
function modalsubmit()
{
  var v1=document.getElementById("modalname").value;
  var v2=document.getElementById("modalentreprise").value;
  if(v1=="" || v2=="")
  {
    alert("Please fill all the fields!");
    return false;
  }
  var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var ans =  pattern.test(v2); 

  if(ans == false)
  {
      alert("You have entered an invalid email address!, kindly recheck");
      return false;
  }

	document.getElementById('id01').style.display='none';
	alert('Thankyou for your interest.We will revert back soon!');
  return true;
}
function modaldismiss()
{
	document.getElementById('id01').style.display='none';
	alert('We hope to connect again someday!');
}

//Function for chat box
function openForm() 
{
  document.getElementById("myForm").style.display = "block";
}
function closeForm() 
{
  document.getElementById("myForm").style.display = "none";
}
function closeFormAfterSend() 
{

  var v=document.getElementById("query-text").value;
  if(v=="")
  {
  }
  else
  {
    alert('Thankyou for your valuable feedback!');
    document.getElementById("myForm").style.display = "none";
    return false;
  }
}


//Function to switch between tablinks
function openLink(evt, linkName) 
{
  var i, x, tablinks;
  x = document.getElementsByClassName("myLink");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}
