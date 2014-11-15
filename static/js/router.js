	// configure our routes
	schoolpro.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/menumodules', {
				templateUrl : 'menumodules.html',
				controller  : 'moduleController'
			})

			
				//modules		
			.when('/announcement', {
				templateUrl : 'modules/announcement.html',
				controller  : 'announcementController'
			})
			
			.when('/Academicyear', {
				templateUrl : 'modules/Academicyear.html',
				controller  : 'AcademicyearController'
			})

			.when('/Assignment', {
				templateUrl : 'modules/Assignment.html',
				controller  : 'AssignmentController'
			})
			
			.when('/Timetable', {
				templateUrl : 'modules/Timetable.html',
				controller  : 'TimetableController'
			})
			
			.when('/Managestaff', {
				templateUrl : 'modules/Managestaff.html',
				controller  : 'ManagestaffController'
			})
			
			.when('/Coursefile', {
				templateUrl : 'modules/Coursefile.html',
				controller  : 'CoursefileController'
			})
	
			// route for the contact page
			.when('/partner', {
				templateUrl : 'partner.html',
				controller  : 'partnerController'
			});
	});
