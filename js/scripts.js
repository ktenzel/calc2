
  var add = function add(number1, number2) {
  return number1 + number2;
  };
  var subtract = function subtract(number1, number2) {
    return number1 - number2;
  };
  function multiply(number1, number2) {
    return number1 * number2;
  };
  function divide(number1, number2) {
    return number1 / number2;
  };
$(function(){
  $("form#add").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1, number2);
  $("#output").text(result);
  });
});
// };
// function bmi(mass, height) {
//   return mass / Math.pow(height, 2);
// };
// function temp(celsiusTemp) {
//   return celsiusTemp * 1.8 + 32;
// };

// var number1 = parseFloat(prompt("Enter a number:"));
// var number1 = parseFloat(prompt("Enter a number:"));
// var result = temp(number1);
// alert(result);
