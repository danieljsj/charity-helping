app.controller('importer', function($scope, $http){

  var myDataRef = new Firebase('https://luminous-inferno-7505.firebaseio.com/data');

  var data = {};

  $http.get('data/questions.json').success(function(response){
    data.questions = response;
  });
  
  $http.get('data/organizations.json').success(function(response){
    data.organizations = response;
  });
  
  $http.get('data/users.json').success(function(response){
    data.users = response;
  });

  


  setTimeout(function(){ myDataRef.set(data); console.log(data)}, 1000);

});