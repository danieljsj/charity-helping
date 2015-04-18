app.controller('quiz', function($scope, $http){ // how do I know I'll actually get $http as my second param!?
	// var currentUserName = 'Daniel';
	$scope.orgScore = function(org){
		if ( ! $scope.user ) return 0;
		var score = 0;
		for (var i = $scope.questions.length - 1; i >= 0; i--) {
			var qnName = $scope.questions[i].name;
			score += org.responses[qnName] * $scope.user.responses[qnName];
		};
		org.score = score;
		return score;
	}
	$http.get('data/questions.json').success(function(response){
		$scope.questions = response;
	});
	$http.get('data/organizations.json').success(function(response){
		$scope.organizations = response;
	});
	$http.get('data/users.json').success(function(response){
		$scope.user = response[0];
	});
});