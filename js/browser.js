var hello = function() {
  alert("hello")
}

$(document).ready(function(){
  $("#h1").click(function(event){
    hello();
  })
})
