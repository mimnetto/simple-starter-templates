/*put your external javascript here - build your own js library!*/

/*here is an example code that writes out today's date*/
var printDay = function(pa1) {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[pa1];
};
var printMonth = function(p2) {
  var months = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October",
    "November", "December"
  ];
  return months[p2];
};
var d = new Date().getDay();
var m = new Date().getMonth();
var aa = new Date().getDate();
var ye = new Date().getFullYear();
var div = document.getElementById('todayIs'); /*since this is external js we need to give a div an id in the HTML and reference it here*/
div.innerHTML = div.innerHTML + printDay(d) + ', ' + printMonth(m) + '&nbsp' + aa + ',  ' + ye;
