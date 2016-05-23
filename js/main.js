var app = angular.module('site', ['ui.bootstrap', 'ngAria']);

app.factory('Backend', ['$http',
    function($http) {
      var get = function(url) {
        return function() {
          return $http.get(url)
            .then(function(resp) {
              return resp.data;
            });
        };
      };

      // return {
      //   bootcamp: get('data/bootcamp.json'),
      //   projects: get('data/projects.json')
      // };
      return {
        bootcamp: function(){
          return {
          "Bootcamp": [{
            "Week": 1,
            "Title": "Getting Started",
            "Objectives": ["some objectives", "some objectives", "some objectives"],
            "url": "https://github.com/devsecops/bootcamp/blob/master/Week-1/README.md",
            "Lessons": [{
              "number": 1,
              "name": "Introductions",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-1/LESSON-1.md"
            }, {
              "number": 2,
              "name": "Lab Guides",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-1/LESSON-2.md"
            }, {
              "number": 3,
              "name": "Let's Get Moving!",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-1/LESSON-3.md"
            }]
          }, {
            "Week": 2,
            "Title": "Building a Weak Application (Development)",
            "Objectives": ["Develop a Rails API", "Deploy to AWS manually", "Explore AWS-CLI & AWS-SDK"],
            "url": "https://github.com/devsecops/bootcamp/blob/master/Week-2/README.md",
            "Lessons": [{
              "number": 1,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-2/LESSON-1.md"
            }, {
              "number": 2,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-2/LESSON-2.md"
            }, {
              "number": 3,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-2/LESSON-3.md"
            }]
          }, {
            "Week": 3,
            "Title": "Security",
            "Objectives": ["Deploy a Vulnerable application to AWS", "Attack the application using different techniques (e.g. OWASP Top 10)", "Explore security tools (e.g. Metasploit, NMap, SQLMap, BurpSuite ...etc)"],
            "url": "https://github.com/devsecops/bootcamp/blob/master/Week-3/README.md",
            "Lessons": [{
              "number": 1,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-3/LESSON-1.md"
            }, {
              "number": 2,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-3/LESSON-2.md"
            }, {
              "number": 3,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-3/LESSON-3.md"
            }]
          }, {
            "Week": 4,
            "Title": "Keeping the Weak Alive (Operations)",
            "Objectives": ["Understanding data generated by attackers", "Detection & alerting with Splunk"],
            "url": "https://github.com/devsecops/bootcamp/blob/master/Week-4/README.md",
            "Lessons": [{
              "number": 1,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-4/LESSON-1.md"
            }, {
              "number": 2,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-4/LESSON-2.md"
            }, {
              "number": 3,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-4/LESSON-3.md"
            }]
          }, {
            "Week": 5,
            "Title": "Building a Rugged Application (Development)",
            "Objectives": ["Service Oriented Architecture (SOA)", "Automated AWS Deployments with CloudFormation", "Whitelisting & Attack Maps"],
            "url": "https://github.com/devsecops/bootcamp/blob/master/Week-5/README.md",
            "Lessons": [{
              "number": 1,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-5/LESSON-1.md"
            }, {
              "number": 2,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-5/LESSON-2.md"
            }, {
              "number": 3,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-5/LESSON-3.md"
            }]
          }, {
            "Week": 6,
            "Title": "Rugged Security",
            "Objectives": ["Account Takeovers", "Advanced cloud hacking techniques", "Lateral movement & privilege escalation"],
            "url": "https://github.com/devsecops/bootcamp/blob/master/Week-6/README.md",
            "Lessons": [{
              "number": 1,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-6/LESSON-1.md"
            }, {
              "number": 2,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-6/LESSON-2.md"
            }, {
              "number": 3,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-6/LESSON-3.md"
            }]
          }, {
            "Week": 7,
            "Title": "Rugged Operations",
            "Objectives": ["Restacking AWS Accounts", "Forensics in the Cloud", "Incident Response in the Cloud"],
            "url": "https://github.com/devsecops/bootcamp/blob/master/Week-7/README.md",
            "Lessons": [{
              "number": 1,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-7/LESSON-1.md"
            }, {
              "number": 2,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-7/LESSON-2.md"
            }, {
              "number": 3,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-7/LESSON-3.md"
            }]
          }, {
            "Week": 8,
            "Title": "Red Team vs Blue Team (Hack Lab)",
            "Objectives": ["Put all your skills together", "Hack all the things", "Don't get caught by the Blue Team"],
            "url": "https://github.com/devsecops/bootcamp/blob/master/Week-8/README.md",
            "Lessons": [{
              "number": 1,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-8/LESSON-1.md"
            }, {
              "number": 2,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-8/LESSON-2.md"
            }, {
              "number": 3,
              "name": "",
              "url": "https://github.com/devsecops/bootcamp/blob/master/Week-8/LESSON-3.md"
            }]
          }, {
            "Week": 9,
            "Title": "Presentations: 5-minute Demos",
            "Objectives": ["Problem-sovling", "Contribute to the open-source community", ""],
            "url": "https://github.com/devsecops/bootcamp/blob/master/Week-9/README.md",
            "Lessons": [{
              "number": 1,
              "name": "",
              "url": ""
            }, {
              "number": 2,
              "name": "",
              "url": ""
            }, {
              "number": 3,
              "name": "",
              "url": ""
            }]
          }]
        }},
        projects: function(){
          return {"All projects": ["awesome-devsecops", "controlplane", "heroes", "raindance", "radar", "assumer", "playbook", "devsecops", "forecast", "firebolt", "weatherman", "foghorn", "experiments", "catv", "science", "aws-policies", "ssl_checks"]
        }}
      }
    }
  ])
  .controller('MainCtrl', ['Backend', '$scope', 'filterFilter', '$anchorScroll',
    function(Backend, $scope, filterFilter, $anchorScroll) {
      var self = this;

      Backend.projects()
        .then(function(data) {
          self.projects = data;
        });

      Backend.bootcamp()
        .then(function(data) {
          self.bootcamp = data;

          $.ajax({
            url: 'https://raw.githubusercontent.com/devsecops/devsecops.github.io/master/data/bootcamp.json',
            dataType: 'jsonp',
            jsonpCallback: 'JSON_CALLBACK',
            success: function(data) {
              var projects = data[0].Bootcamp;
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

              var featuredProjects = new Array();

              self.featured.forEach(function(name) {
                for (var i = 0; i < projects.length; i++) {
                  var project = projects[i];
                  if (project.Name == name) {
                    featuredProjects.push(project);
                    return;
                  }
                }
              });

              self.projects = projects;
              self.featuredProjects = featuredProjects;
              $scope.$apply();
            }
          });
          $.ajax({
            url: 'https://popularrepostg.blob.core.windows.net/popularrepos/projectssummary.json',
            dataType: 'jsonp',
            jsonpCallback: 'JSON_CALLBACK',
            success: function(stats) {
              if (stats !== null) {
                $scope.overAllStats = stats[0];
              }
            }
          });
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
