angular.module('myapp',['myapp.controller']);

angular.module('myapp.controller',['myapp.service'])
  .controller('testController',function($scope,testService){

    $scope.posts={};
    $scope.comments={};
    function GetAllPosts() {
      var getPostsData = testService.getPosts();

      getPostsData.then(function (post) {
         $scope.posts = post.data;

      }, function () {
         alert('Error in getting post records');
      });
    }
         
    function GetAllComments() {
      var getCommentsData = testService.getComments();

      getCommentsData.then(function (comment) {
         $scope.comments = comment.data;

      }, function () {
         alert('Error in getting comment records');
      });
    }		 
		  
    GetAllPosts();
	GetAllComments();
});

angular.module('myapp.service',[])
  .service('testService', function ($http) {

    //get all posts from the endpoint
    this.getPosts = function () {
       return $http.get('https://jsonplaceholder.typicode.com/posts');
    };
	
	//get all comments from the endpoint
	this.getComments = function () {
       return $http.get('https://jsonplaceholder.typicode.com/comments');
    };
 });
