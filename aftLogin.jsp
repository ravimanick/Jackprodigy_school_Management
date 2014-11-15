<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app="schoolpro">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>School Admin</title>

<jsp:include page="school_js.jsp"></jsp:include>
</head>

<body>
	<jsp:include page="header.jsp"></jsp:include>
	
	<div class="container-fluid">
		<div class="row-fluid">
			<!-- <div class="col-md-12 col-lg-12 col-sm-12- col-xs-12"> -->

			<jsp:include page="leftmenu.jsp"></jsp:include>
			<div class="col-md-8">
				<div id="contentarea" class="well">

					<div class="page-header" style="font-size: 16px;">
						<strong>Welcome</strong>
						<div style="height: 60px;"></div>
					</div>

					<div class="pull-right" style="margin-right: 20px;">
						<button type="button" class="btn btn-primary"
							onclick="ajaxpage('addstd.jsp','contentarea');">Add</button>
					</div>
					<div style="height: 60px;"></div>





					<!-- angular templating -->
					<!-- this is where content will be injected -->
				</div>

			</div>

		</div>
	</div>
	</div>

	<script
		src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script
		src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>

</body>

</html>