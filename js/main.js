var app = angular.module('site', ['ngAnimate','ui.bootstrap', 'ngAria']);

var projectsData = { "All projects": ["awesome-devsecops", "controlplane", "heroes", "raindance", "radar", "assumer", "playbook", "devsecops", "forecast", "firebolt", "weatherman", "foghorn", "experiments", "catv", "science", "aws-policies", "ssl_checks"] };
app.controller('MainCtrl', ['$scope', 'filterFilter', '$anchorScroll',
    function($scope, filterFilter, $anchorScroll) {
      $scope.tabs = [{title: "Projects"},{title: 'Bootcamp'}];

      var self = this;
      self.projects = projectsData;

      $.ajax({
        url: 'https://api.github.com/orgs/devsecops/repos',
        // url: 'https://raw.githubusercontent.com/devsecops/devsecops.github.io/master/data/projects.json',
        dataType: 'json',
        success: function(data) {
          var projects = data;
          $scope.currentPage = 1; //current page
          $scope.maxSize = 5; //pagination max size
          $scope.entryLimit = 36; //max rows for data table

          /* init pagination with $scope.list */
          $scope.noOfRepos = projects.length;
          $scope.noOfPages = Math.ceil($scope.noOfRepos / $scope.entryLimit);
          $scope.resultsSectionTitle = 'All Repos';
          $scope.pageChanged = function() {
            $anchorScroll();
          };

          $scope.$watch('searchText', function(term) {
            // Create $scope.filtered and then calculate $scope.noOfPages, no racing!
            $scope.filtered = filterFilter(projects, term);
            $scope.noOfRepos = $scope.filtered.length;
            $scope.noOfPages = Math.ceil($scope.noOfRepos / $scope.entryLimit);
            $scope.resultsSectionTitle = (!term) ? 'All Repos' : (($scope.noOfRepos === 0) ? 'Search results' : ($scope.noOfRepos + ' repositories found'));
          });

          self.projects = projects;
          $scope.$apply();
        }
      });
      $.ajax({
        url: 'https://raw.githubusercontent.com/devsecops/devsecops.github.io/master/data/bootcamp.json',
        dataType: 'json',
        success: function(data) {
            $scope.bootcamp = data.Bootcamp;
            $scope.$apply();
        }
      });
    }
  ])
  .filter('startFrom', function() {
    return function(input, start) {
      if (input) {
        start = +start; //parse to int
        return input.slice(start);
      }
      return [];
    };
  });
