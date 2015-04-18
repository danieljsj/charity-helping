app.controller('quiz', function($scope, $http, $firebaseObject){ // how do I know I'll actually get $http as my second param!?
	

	var ref = new Firebase('https://luminous-inferno-7505.firebaseio.com/data');

	var syncObject = $firebaseObject(ref);

	syncObject.$bindTo($scope, "data");

	$scope.orgScore = function(org){
		if ( ! $scope.data || ! $scope.data.users[0] ) return 0;
		var score = 0;
		for (var i = $scope.data.questions.length - 1; i >= 0; i--) {
			var qnName = $scope.data.questions[i].name;
			score += 
				org.responses[qnName] 
				* 
				$scope.data.users[0].responses[qnName]
			;
		};
		org.score = score;
		return score;
	};

});