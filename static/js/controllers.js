'use strict';


var myApp = angular.module('myApp', []);

myApp.controller('MainController', function ($scope, $http) {
  var data = [
  {
    x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
    y: [1, 3, 6],
    type: 'scatter'
  }
  ];

  Plotly.newPlot('chart1', data, {});
  Plotly.newPlot('chart2', data, {});
  Plotly.newPlot('chart3', data, {});
  Plotly.newPlot('chart4', data, {});

});
//Directives