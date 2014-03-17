function UpdateCost() {
  var sum = 0;
  var gn, elem;
  for (i=0; i<5; i++) {
    gn = 'game'+i;
    elem = document.getElementById(gn);
    if (elem.checked == true) { sum += Number(elem.value); }
  }
  document.getElementById('totalcost').value = sum.toFixed(2);
} 

function UpdateCost1() {
  var sum = 0;
  var gn, elem;
  for (i=0; i<5; i++) {
    gn = 'gam'+i;
    elem = document.getElementById(gn);
    if (elem.checked == true) { sum += Number(elem.value); }
  }
  document.getElementById('totalcost1').value = sum.toFixed(2);
} 
function UpdateCost2() {
  var sum = 0;
  var gn, elem;
  for (i=0; i<5; i++) {
    gn = 'ga'+i;
    elem = document.getElementById(gn);
    if (elem.checked == true) { sum += Number(elem.value); }
  }
  document.getElementById('totalcost2').value = sum.toFixed(2);
} 