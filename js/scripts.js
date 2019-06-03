$(document).ready(function(){
  $("#click").click(function(){
    var initial = prompt ("Tell me about yourself. Age, height, favorite pet, name of first grade teacher.");
      var letterCount = initial.length;
      var firstChar = initial.charAt(0).toUpperCase();
      var lastChar = initial.charAt(letterCount-1).toUpperCase();
      alert (firstChar+lastChar);
      var reverse = lastChar+firstChar;
      alert (reverse);



  })
})
