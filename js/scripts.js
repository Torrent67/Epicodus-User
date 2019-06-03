$(document).ready(function(){
  $("#click").click(function(){
    var initial= prompt ("Tell me about yourself. Age, height, favorite pet, name of first grade teacher.");
    return initial;
    var firstLetter=initial.charAt(0);
    return firstLetter;
    alert (firstLetter);
  })
})
