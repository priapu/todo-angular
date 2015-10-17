angular.module('todoApp', [])
  .controller('TodoController', function($scope){
    $scope.todos = [
      {
        'text': 'Wake up',
        'completed': true
      },
      {
        'text': 'Make todo app',
        'completed': false
      },
      {
        'text': 'Publish to Github',
        'completed': false
      }
    ];

    $scope.addTodo = function(newTodo) {
      $scope.todos.push({'text': newTodo, 'completed': false});
      $scope.newTodo = '';
    };
  });
