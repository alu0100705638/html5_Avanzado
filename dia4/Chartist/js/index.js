$(document).ready(function(){

  var data = {
    //labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
    series: [20, 10, 30, 40
              //{data: [2, 4, 6, 8, 10, 12]},
             //{data: [1, 2, 3, 4, 5, 6]},
             //{data: [20, 10, 30, 40//]}
          ]
        }//;
  var options = {}

  new Chartist.Pie('.chart', data, options);
});
