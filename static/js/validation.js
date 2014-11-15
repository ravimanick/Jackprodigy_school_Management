 

// School name validation

function schoolnamevalidate()
        {
            
        	if(document.schoolRegistration.schoolname.value=="")
        	{
        	    document.getElementById("sn_err").innerHTML="Please enter the school name";
        	    document.schoolRegistration.schoolname.focus();
        		return false;
            	}
        	else if(document.schoolRegistration.schoolname.value!="")
        	{
        	    document.getElementById("sn_err").innerHTML="";
        			
    	}
        	return true;
        	
        }
 
//Board validation
function boardvalidation()
{	
if(!admcheckRadio("schoolRegistration","options"))
{
document.getElementById("board_err").innerHTML="Please Select Board";
document.schoolRegistration.options.checked = true;
return false;
}
else if(admcheckRadio("schoolRegistration","options"))
{
document.getElementById("board_err").innerHTML="";

}
return true;
}





//School mail validation
   
   function schoolemailvalidate()
   {
   var x4=document.forms["schoolRegistration"]["schoolemail"].value;
   if(document.schoolRegistration.schoolemail.value=="")
   {
   document.getElementById("email_err").innerHTML="Please enter email";
   document.schoolRegistration.schoolemail.focus();        		
   return false;
   }      	
   else if (x4!=null || x4!="")
   {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x4))
   {
   document.getElementById("email_err").innerHTML="";
           			
   }
   else {
   document.getElementById("email_err").innerHTML="Invalid e-mail address! Please re-enter.";
   document.schoolRegistration.schoolemail.focus();        		
   return false;
   }
   }
   else if(document.schoolRegistration.schoolemail.value!="")
   {
   document.getElementById("email_err").innerHTML="";
   }
   return true;
   }

   //password validation
   

	function passwordval()
	{
		 
		if(document.schoolRegistration.password.value=="")
		{
	    	
		    document.getElementById("password_err").innerHTML="Please enter Password";
		    document.schoolRegistration.password.focus();
			return false;
		}
		
		else if(document.schoolRegistration.password.value.length<6)
		{
			document.getElementById("password_err").innerHTML="Password Length is less than 6";
			 document.schoolRegistration.password.focus();
			return false;
		
		}
		
		else if(document.schoolRegistration.password.value.length>20)
		{
			document.getElementById("password_err").innerHTML="Please enter Password less than 20";
			
			document.schoolRegistration.password.focus();
			return false;
		}
		else if(document.schoolRegistration.password.value!="") 
		{
		
			
			document.getElementById("password_err").innerHTML="";
		
	
		}
		return true;
	
	}
   
//confirmpwd validation	
	function confirmpasswordval()
	{
		 
		if(document.schoolRegistration.confirmpassword.value=="")
		{
		    document.getElementById("confirm_err").innerHTML="Please enter Confirm password";
		    document.schoolRegistration.confirmpassword.focus();
			return false;
		}
		
		else if(!(document.schoolRegistration.confirmpassword.value==document.schoolRegistration.password.value))
		{
			document.getElementById("confirm_err").innerHTML="Password does not match";
			document.schoolRegistration.password.focus();
			return false;
		}
		else if(document.schoolRegistration.confirmpassword.value!="" )
		{
		    document.getElementById("confirm_err").innerHTML="";
			
			
		}
		return true;
	}
	
	
//phone validation	
	
	 function schoolphonevalidate()
     {
     if(document.schoolRegistration.phone.value=="")
     {
     document.getElementById("phone_err").innerHTML="Please enter phone number";
    document.schoolRegistration.phone.focus();
     return false;
     }
     else if(document.schoolRegistration.phone.value.length<6)
     {
     document.getElementById("phone_err").innerHTML="Please enter valid phone number";

    document.schoolRegistration.phone.focus();
     return false;
     }
     else if(document.schoolRegistration.phone.value.length>15)
     {
     document.getElementById("phone_err").innerHTML="Please enter valid phone number";
            	
    document.schoolRegistration.phone.focus();
     return false;
     }
     else if(document.schoolRegistration.phone.value!="")
     {
     document.getElementById("phone_err").innerHTML="";
     }
     return true;
     } 
	 
	//////////// 
     	
	 function isNumberKey(evt)
	 {
	    var charCode = (evt.which) ? evt.which : event.keyCode
	    if (charCode > 31 && (charCode < 48 || charCode > 57))
	       return false;

	    return true;
	 }
	 
	 ///// mob number validation
	 function schoolmobilevalidate()
	 {
	 if(document.schoolRegistration.mobile.value=="")
	 {
	 document.getElementById("mobile_err").innerHTML="Please enter Mobile number";
	 document.schoolRegistration.mobile.focus();
	 return false;
	 }
	 else if(document.schoolRegistration.mobile.value.length<10)
	 {
	 document.getElementById("mobile_err").innerHTML="Please enter valid Mobile number";

	 document.schoolRegistration.mobile.focus();
	 return false;
	 }
	 else if(document.schoolRegistration.mobile.value.length>10)
	 {
	 document.getElementById("mobile_err").innerHTML="Please enter valid Mobile number";
	        	
	 document.schoolRegistration.mobile.focus();
	 return false;
	 }
	 else if(document.schoolRegistration.mobile.value!="")
	 {
	 document.getElementById("mobile_err").innerHTML="";
	 }
	 return true;
	 }
	 
	 
	 // Address line1 validation           
     function schooladdress1validate()
     {
     	if(document.schoolRegistration.addressline1.value=="")
     	{
     	    document.getElementById("address1_err").innerHTML="Please enter addressline1";
     	    document.schoolRegistration.addressline1.focus();
     		return false;
     	}
		else if(document.schoolRegistration.addressline1.value!="")
     	{
     	   document.getElementById("address1_err").innerHTML="";
     	  	}
     	return true;
     } 
	 
     // School City vALIDATION
     function cityvalidate()
     {
     	if(document.schoolRegistration.city.value=="")
     	{
     	    document.getElementById("city_err").innerHTML="Please enter city";
     	    document.schoolRegistration.city.focus();
     		return false;
     	}
			else if(document.schoolRegistration.city.value!="")
     	{
     	   document.getElementById("city_err").innerHTML="";
     	  	}
     	return true;
     }
     
     // state validation
     function statevalidation()
     {
     if(document.schoolRegistration.state.value=="")
     {
     document.getElementById("state_err").innerHTML="Enter Your State";
     document.schoolRegistration.state.focus();
     return false;
     }
     else if(document.schoolRegistration.state.value!="")
     {
     document.getElementById("state_err").innerHTML="";
     }
     return true;
     }
     
     // pin code validation
     function pinvalidate()
     {
     if(document.schoolRegistration.pin.value=="")
     {
     document.getElementById("pin_err").innerHTML="Enter Your Pin";
     document.schoolRegistration.pin.focus();
     return false;
     }
     else if(document.schoolRegistration.pin.value.length<6)
     {
     	document.getElementById("pin_err").innerHTML="Please enter valid pin code";
     	
     	document.schoolRegistration.pin.focus();
     	return false;
      }		
     else if(document.schoolRegistration.pin.value!="")
     {
     document.getElementById("pin_err").innerHTML="";
     }
     return true;
     }
     //contact name
     function cpnameval()
     {
      	if(document.schoolRegistration.cpname.value=="")
     	{
     	    document.getElementById("cpname_err").innerHTML="Please enter contact person Name";
     	    document.schoolRegistration.cpname.focus();
     		return false;
         	}
     	else if(document.schoolRegistration.cpname.value!="")
     	{
     	    document.getElementById("cpname_err").innerHTML="";
     	}
     	return true;
     }
     
 	
   //cont person phone validation	
   	
   	 function cpphonevalidate()
        {
        if(document.schoolRegistration.cpphone.value=="")
        {
        document.getElementById("cpphone_err").innerHTML="Please enter phone number";
       document.schoolRegistration.cpphone.focus();
        return false;
        }
        else if(document.schoolRegistration.cpphone.value.length<6)
        {
        document.getElementById("cpphone_err").innerHTML="Please enter valid phone number";

       document.schoolRegistration.cpphone.focus();
        return false;
        }
        else if(document.schoolRegistration.cpphone.value.length>15)
        {
        document.getElementById("cpphone_err").innerHTML="Please enter valid phone number";
               	
       document.schoolRegistration.cpphone.focus();
        return false;
        }
        else if(document.schoolRegistration.cpphone.value!="")
        {
        document.getElementById("cpphone_err").innerHTML="";
        }
        return true;
        } 
   	 
   	 ///// mob number validation
	 function cpmobilevalidate()
	 {
	 if(document.schoolRegistration.cpmobile.value=="")
	 {
	 document.getElementById("cpmobile_err").innerHTML="Please enter Mobile number";
	 document.schoolRegistration.cpmobile.focus();
	 return false;
	 }
	 else if(document.schoolRegistration.cpmobile.value.length<10)
	 {
	 document.getElementById("cpmobile_err").innerHTML="Please enter valid Mobile number";

	 document.schoolRegistration.cpmobile.focus();
	 return false;
	 }
	 else if(document.schoolRegistration.cpmobile.value.length>10)
	 {
	 document.getElementById("cpmobile_err").innerHTML="Please enter valid Mobile number";
	        	
	 document.schoolRegistration.cpmobile.focus();
	 return false;
	 }
	 else if(document.schoolRegistration.cpmobile.value!="")
	 {
	 document.getElementById("cpmobile_err").innerHTML="";
	 }
	 return true;
	 }
	 
	 

	//contact mail validation
	   
	   function cpemailvalidate()
	   {
	   var x4=document.forms["schoolRegistration"]["cpemail"].value;
	   if(document.schoolRegistration.cpemail.value=="")
	   {
	   document.getElementById("cpemail_err").innerHTML="Please enter email";
	   document.schoolRegistration.cpemail.focus();        		
	   return false;
	   }      	
	   else if (x4!=null || x4!="")
	   {
	   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x4))
	   {
	   document.getElementById("cpemail_err").innerHTML="";
	           			
	   }
	   else {
	   document.getElementById("cpemail_err").innerHTML="Invalid e-mail address! Please re-enter.";
	   document.schoolRegistration.cpemail.focus();        		
	   return false;
	   }
	   }
	   else if(document.schoolRegistration.cpemail.value!="")
	   {
	   document.getElementById("cpemail_err").innerHTML="";
	   }
	   return true;
	   }
//domain name validation
	   function domainnameval()
		 {
		 if(document.schoolRegistration.domain.value=="")
		 {
		 document.getElementById("domain_err").innerHTML="You cannot leave this empty";
		 document.schoolRegistration.domain.focus();
		 return false;
		 }
		 else 
		 {
		 document.getElementById("domain_err").innerHTML="";
		 return true;
		 }
		 }
	   
	   
	   
	   function dbnameval()
		 {
		 if(document.schoolRegistration.domain.value=="")
		 {
		 document.getElementById("db_err").innerHTML="You cannot leave this empty";
		 document.schoolRegistration.domain.focus();
		 return false;
		 }
		 else 
		 {
		 document.getElementById("db_err").innerHTML="";
		 return true;
		 }
		 }
	   
	//make disable true   
	   $(document).ready(function () {        
	       alert("hi");
		   $("#rename").click(function(){
		       alert('Are you sure want to change the standard?');
		       $("#standard").prop('disabled',false);
		       event.preventDefault();
		   });
		   });  
	   
	   
 