// $(document).ready(function() {
//   var summandsArray = 0;
//   var summands = [1, 2, 3, 4, 5];
//   for (var index = 0; index < summands.length; index += 1) {
//     summandsArray += summands[index];
//   }
//   alert(summandsArray);
//
// });

// $(document).ready(function() {
//   var num = 0;
//   while(num < 30){
//   num = num + 5;
//   // var newArray = num.split();
//   $(".results").append(num);
//   // $(".results").show();
//   }
// });

$(document).ready(function() {
  // for(starting point, end point, increments){
  //   do things, for each increment.
  // }


  var n1 = 5
  var n2 = 30
  var result =[];
  for  (var index=n1; index <= n2; index += n1) {
    $("#results").append("<li>" + index + "</li>");
  }
});
