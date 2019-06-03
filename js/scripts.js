$(document).ready(function(){
  $("#click").click(function(){
    var initial = prompt ("Tell me about yourself. Age, height, favorite pet, name of first grade teacher.");
    var letterCount = initial.length;
    var firstChar = initial.charAt(0).toUpperCase();
    var lastChar = initial.charAt(letterCount-1).toUpperCase();
    var firstLast = capsFirst(firstChar, lastChar);
    var lastFirst = capsLast(lastChar, firstChar);
    var comboCaps = combined(firstLast,lastFirst);
    alert (firstLast);
    alert (lastFirst);
    alert (comboCaps);
    })
})

var capsFirst = function(firstChar, lastChar) {
  return firstChar+lastChar;
}
var capsLast = function(lastChar, firstChar) {
  return lastChar+firstChar;
}
var combined = function (firstLast, lastFirst) {
  return firstLast + lastFirst;
}
