var hello = require('./../js/hello.js').hello;
$(document).ready(function(){
  $("#h1").click(function(event){
    hello();
  });
});
