function ajaxpage(url,div)
{
	/*alert(url+"the div is"+div);*/
	var a;
	var b=div;
    if (window.XMLHttpRequest)
    {
      a=new XMLHttpRequest();
    }
    else
    {
      a=new ActiveXObject("Microsoft.XMLHTTP");
    }
 
	a.onreadystatechange=function()
	{
	  if(a.readyState==4 && a.status==200 && b=="Logout")
	  {
		  window.location.assign("../index.jsp");
	  }
	  else (a.readyState==4 && a.status==200)
	  {
	    document.getElementById(div).innerHTML=a.responseText;
	   }
	  
	};
	a.open("POST",url,true);
	a.send();
} 


$(document).ready(function(){
  $("#addsection").modal('show');
});

function ajaxdata(url,div)
{
var st_name=document.getElementById("st_name").value;

ajaxpage(url+'&st_name=' +st_name, id);
}




/*function orderModal(order_id){
	  var tr = $('#mymodal' + order_id);
	  var det=order_id;
	  var info_to_insert = "details: " + order_id+".";*/
	  
