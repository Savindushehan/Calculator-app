

var S1 = document.getElementById("s1");
var S2 = document.getElementById("s2");
var S3 = document.getElementById("s3");



document.getElementById('s1').addEventListener('click', function() {
  console.log("Savindu1");
  document.getElementById('cssLink').href = './Components/Button_1.css';
});
document.getElementById('s2').addEventListener('click', function() {
  console.log("Savindu2");
  document.getElementById('cssLink').href = './Components/Button_2.css';
});
document.getElementById('s3').addEventListener('click', function() {
  console.log("Savindu3");
  document.getElementById('cssLink').href = './Components/Button_3.css';
});

