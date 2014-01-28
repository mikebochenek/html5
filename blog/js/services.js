// Define the REST resource service, allowing us to interact with it as a high level service
angular.module('postsService', ['ngResource']).
    factory('Posts', function($resource){
  return $resource('http://localhost\\:8080/angular-blog/rest/posts:postId', {});
});