'use strict';

describe('Controller: ProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var ProjectCtrl,
    scope,
    ShareProperty;

  var testProject = {
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
  };


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _ShareProperty_) {

    ShareProperty = _ShareProperty_;
    ShareProperty.set('active_project', testProject);

    spyOn(ShareProperty, 'get').and.callThrough();

    scope = $rootScope.$new();
    ProjectCtrl = $controller('ProjectCtrl', {
      $scope: scope
    });
  }));


  it('should have $scope.project defined with correct details', function() {
    expect(scope.project).toBeDefined();
    expect(scope.project.Code).toBe(testProject.Code);
    expect(ShareProperty.get).toHaveBeenCalledWith('active_project');
  });

});
