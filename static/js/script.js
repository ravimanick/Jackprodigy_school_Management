	var schoolpro = angular.module('schoolpro', ['ngRoute']);



	// create the controller and inject Angular's $scope
	schoolpro.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.title = 'schoolprodigy - schoolprodigy.com';
		$scope.description='Todays college management systems has found a new path through our cloud-based product which has redeemed the management system using new easily approachable technology to all the big tedious process. Every college who is using schoolprodigy has got the satisfaction as they have finally found the remedy through a slightly changed approach of schoolprodigy.';	
		});

	schoolpro.controller('moduleController', function($scope) {
		$scope.title = 'Features- schoolprodigy.com';
		$scope.description='Explore new features in schoolprodigy and find out how it makes the college/campus management system easy.';
	});

	schoolpro.controller('partnerController', function($scope) {
		$scope.title = 'Partners - schoolprodigy.com';
		$scope.description='Partners engage with Ebullitent info Systems to consult,market and sell Ebullitent info systems products services and technologies.';	
	});
     
	schoolpro.controller('clientController', function($scope) {
		// create a message to display in our view
		$scope.title = 'Clients- schoolprodigy.com';
		$scope.description='Find some of our prestigious clients and check out who we are??what we are??where we are to??';
	});

	schoolpro.controller('contactusController', function($scope) {
		// create a message to display in our view
		$scope.title = 'Contact us- schoolprodigy.com';
		$scope.description='Contact us to get in touch about technology and features. Get details about the usage and enjoy the cloud technology.';
	});
	
	schoolpro.controller('whyController', function($scope) {
		$scope.title = 'Join us- schoolprodigy.com';
		$scope.description='schoolprodigy is one of the intelligent cloud ERPs. Join us for making it more familiar in education system for the following reasons.';
	});

	schoolpro.controller('requestController', function($scope) {
		$scope.title = 'Request for Demo - schoolprodigy.com';
		$scope.description='Find out why the top universities mostly prefer schoolprodigy and what are amazing features you can experience through schoolprodigy.';
	});
	
	schoolpro.controller('supportController', function($scope) {
		$scope.title = 'Support- schoolprodigy.com';
		$scope.description='Highly gestured support from the support team to retain our direct relationship with clients. Support through phone, email and on-site support for all the regions';
		});
	
	schoolpro.controller('announcementController', function($scope) {
		$scope.title= 'Announcement-schoolprodigy.com';
		$scope.description='As a small message needs a strong attention from the viewers we use Announcement module.';
	});
	schoolpro.controller('AcademicyearController', function($scope) {
		$scope.title= 'Academicyear-schoolprodigy.com';
		$scope.description='An Academic year can be defined as the length of time an academic institution is offering classes during a year';
			
	});
	schoolpro.controller('AssignmentController', function($scope) {
		$scope.title= 'Assignment-schoolprodigy.com';
		$scope.description='Assignments helps in making the students to understand the depth of a subject. A student is assigned to some work on a subject it helps him/her to understand the concepts that has been taught in the class';
			
	});
	schoolpro.controller('TimetableController', function($scope) {
		$scope.title= 'Time table-schoolprodigy.com';
		$scope.description='Time Table has a huge responsibilities in education management system.Managing Proper time table builds up soft relationship among staffs and strengthens the organization.Jackprdigy plays a key role in creating time table and managing it.';
			
	});
	schoolpro.controller('ManagestaffController', function($scope) {
		$scope.title= 'Manage staff-schoolprodigy.com';
		$scope.description='Scheduling work for the staffs in effective manner is  a time consuming process.';
			
	});
	schoolpro.controller('CoursefileController', function($scope) {
		$scope.title= 'Course file-schoolprodigy.com';
		$scope.description='In the most of the colleges course file are printed and given to every student at the beginning of each semester.This practice is helping the student as how they are to be prepared in the upcoming semester.';
			
	});
	schoolpro.controller('PlacementController', function($scope) {
		$scope.title= 'Placement-schoolprodigy.com';
		$scope.description='Campus Placement or Campus Recruitment has become a popular and commonly used method for selecting personnel in an organization,Companies/corporate visit some of the most recognised institutes in an attempt to hire young intelligent and smart students.';
			
	});
	schoolpro.controller('EventController', function($scope) {
		$scope.title= 'Event-schoolprodigy.com';
		$scope.description='Even though the main focus of a college career is academic, devoting students completely on studies can be exhausting for students. With that in mind,extra-curriculars are also a great place to work on students social skills.';
			
	});
	schoolpro.controller('ParentsloginController', function($scope) {
		$scope.title= 'Parents login-schoolprodigy.com';
		$scope.description='As everyone knows bringing up child is a voyage and as parents are the key navigators of childs growth.';
			
	});
	schoolpro.controller('ManageSubjectController', function($scope) {
		$scope.title= 'Manage Subject-schoolprodigy.com';
		$scope.description='Subjects view in a properly organised manner for each degree and department.';
			
	});
	schoolpro.controller('DailyLectureController', function($scope) {
		$scope.title= 'Daily Lecture-schoolprodigy.com';
		$scope.description='Some staffs write down elaborate  daily plans others do the planning inside their heads.';
			
	});

	  schoolpro.controller('ScrollController', [ '$scope', '$location',
		'$anchorScroll', function($scope, $location, $anchorScroll) {
			$scope.gototop = function() {
				// set the location.hash to the id of
				// the element you wish to scroll to.
				$location.hash('top');

				// call $anchorScroll()
				$anchorScroll();
			};
		} ]);
	  
	  