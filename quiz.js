app.controller('quiz', function($scope, $http){
	// var currentUserName = 'Daniel';
	$scope.questions = [
		{ name: 'ecology', prompt:'How important is saving the planet from global warming?'},
		{ name: 'poverty', prompt:'How important is it to prevent poverty?'},
		{ name: 'justice', prompt:'How important is it to assure social equality, justice, and respect for all?'}
	];
	$scope.orgScore = function(org){
		var score = 0;
		for (var i = $scope.questions.length - 1; i >= 0; i--) {
			var qnName = $scope.questions[i].name;
			score += org.responses[qnName] * $scope.user.responses[qnName];
		};
		org.score = score;
		return score;
	}
	$http.get('organizations.json').success(function(response){
		$scope.organizations = response;
	});
	$http.get('users.json').success(function(response){
		$scope.users = response;
		$scope.user = $scope.users[0];
		// $scope.$apply();
	});
});