'use strict';

describe('Controller: MenuCtrl', function () {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var MenuCtrl,
    scope;
  var $httpBackend, $localStorage;

  var testUser = {
    name: 'username',
    passwd: 'mypassword'
  };

  var testProjects = [{
    'Address': '1\/69-71 Isabella Street, PARRAMATTA, NSW, 2150',
    'Client': 'New South Wales Land & Housing Corporation',
    'ClientRef': '241013',
    'Code': 59005,
    'ContractorRef': null,
    'Coordinator': 'Nelson Chan',
    'Duration': null,
    'Finish': '03\/07\/2014',
    'FinishDate': null,
    'Instructions': '',
    'MasterCode': null,
    'SLA': null,
    'Start': '25\/05\/2014',
    'StartDate': null,
    'Status': 'New',
    'SubClient': null,
    'TaskType': null
  }];


  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _$localStorage_, _$httpBackend_, SR_API_SERVER) {
    $localStorage = _$localStorage_;
    $localStorage.user = angular.copy(testUser);

    // mock http requests
    $httpBackend = _$httpBackend_;
      $httpBackend.expectGET(new RegExp(SR_API_SERVER +
        '/project'
        // Stream legacy
        //'/projects/services/projects.svc/GetProjectsMethod/inputStr/' +
        //testUser.name + '/' + testUser.passwd + '?.*'
        )
      )
      .respond(testProjects);

    // init controller
    scope = $rootScope.$new();
    MenuCtrl = $controller('MenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of Projects to the scope', function () {
    $httpBackend.flush();
    expect(scope.projects.length).toBe(1);
  });

  it('should contain the correct project data', function() {
    $httpBackend.flush();
    expect(scope.projects[0].Code).toBe(59005);
  });
});
