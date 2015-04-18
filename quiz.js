app.controller('quiz', function($scope, $http){
	$scope.questions = [
		{ name: 'ecology', response:5, prompt:'How important is saving the planet from global warming?'},
		{ name: 'poverty', response:5, prompt:'How important is it to prevent poverty?'},
		{ name: 'justice', response:5, prompt:'How important is it to assure social equality, justice, and respect for all?'}
	];
	$scope.orgScore = function(org){
		var score = 0;
		for (var i = $scope.questions.length - 1; i >= 0; i--) {
			for (var key in org.responses) {
				if ( key == $scope.questions[i].name ){
					score += 
						$scope.questions[i].response 
						* 
						org.responses[key]
					;
				}
			};
		};
		org.score = score;
		return score;
	}
	$http.get('organizations.json').success(function(response){
		$scope.organizations = response;
	});
});