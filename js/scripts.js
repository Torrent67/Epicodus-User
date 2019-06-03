$(document).ready(function(){
  $("#click").click(function(){
    var initial = prompt ("Input random fact about self to generate code name.");
      var letterCount = initial.length;
      var firstChar = initial.charAt(0).toUpperCase();
      var lastChar = initial.charAt(letterCount-1).toUpperCase();
      var firstLast = capsFirst(firstChar, lastChar);
      var lastFirst = capsLast(lastChar, firstChar);
      var sentenceFL = initfl(initial, firstLast);
      var midpointChar = (letterCount/2);
      var middle = midway (initial, midpointChar);
      var buttonOne = button1(middle,sentenceFL);
      var test = initial.charAt(midpointChar);
      var reversed = reverseString(buttonOne);
        alert (buttonOne);
    })

$("#click2").click(function(){
  var initial = prompt ("Input random fact about self to generate code name.");
    var letterCount = initial.length;
    var firstChar = initial.charAt(0).toUpperCase();
    var lastChar = initial.charAt(letterCount-1).toUpperCase();
    var firstLast = capsFirst(firstChar, lastChar);
    var lastFirst = capsLast(lastChar, firstChar);
    var sentenceFL = initfl(initial, firstLast);
    var midpointChar = (letterCount/2);
    var middle = midway (initial, midpointChar);
    var buttonOne = button1(middle,sentenceFL);
    var test = initial.charAt(midpointChar);
    var reversed = reverseString(buttonOne);
      alert (reversed);
  })
})
var capsFirst = function(firstChar, lastChar) {
  return firstChar+lastChar;
}
var capsLast = function(lastChar, firstChar) {
  return lastChar+firstChar;
}
var initfl = function(initial, firstLast){
  return initial+firstLast;
}
var midway = function (initial, midpointChar)  {
  return initial.charAt(midpointChar);
}
var button1 = function (middle, sentenceFL) {
  return middle+sentenceFL;
}
var reverseString = function (buttonOne) {
  return buttonOne.split("").reverse().join("");
}
