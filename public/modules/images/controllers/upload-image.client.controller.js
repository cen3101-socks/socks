var images = angular.module('images');

images.controller('ImageUploadController',
    ['$scope', 'Images', '$http', '$location',
        function($scope, Images, $http, $location) {
            $scope.setUploadFile = function(files) {
                $scope.files = files;
            };
            $scope.uploadFile = function($event) {
                $event.preventDefault();
                console.log('uploading');
                var fd = new FormData();
                fd.append('image', $scope.files[0]);
                console.log(fd);

                $http.post('/upload-image', fd, {
                    withCredentials: true,
                    headers: {'Content-Type': undefined },
                    transformRequest: angular.identity
                }).success(function(response) {
                    $scope.response = response;
                    $scope.isUploaded = true;
                    $location.path('/images');
                }).error(function() {
                    $scope.isUploaded = false;
                });
                return false;
            };
        }]);
