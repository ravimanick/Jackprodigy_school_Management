
function model(){
	$('.launch-modal').click(function(){
		$('#myModal').modal({
			keyboard: true
		});
	}); 
}

/*ChkALL*/

function toggle(source) {
	  checkboxes = document.getElementsByName('chkAll');
	  
	  for(var i=0, n=checkboxes.length;i<n;i++) {
	    checkboxes[i].checked = source.checked;
	  }
	}

function joindate()
{
    $('#txtDateofjoin').datepicker({
        autoclose: true,
        todayHighlight: true
        });
	}

function joinTodate()
{
    $('#txtDateofjointo').datepicker({
        autoclose: true,
        todayHighlight: true
        });
	}

/*Timepicker*/

function battimeFrom()
{
	$('#timepicker3').timepicker({
		defaultTime: 'current',
	    minuteStep: 1,
	    disableFocus: true,
	    template: 'dropdown'
	});
		
}

function battimeTo()
{
	$('#timepicker4').timepicker({
		defaultTime: 'value',
        minuteStep: 1,
        disableFocus: true,
        template: 'dropdown'
		});
}

