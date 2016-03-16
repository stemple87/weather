var hello = require('./../js/hello.js').hello;
$(document).ready(function(){
  $("#h1").click(function(event){
    hello();
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date());
    datetime.html(date.format('h:mm:ss A'));
};

$(document).ready(function(){
    datetime = $('#time');
    update();
    setInterval(update, 1000);
});

var apiKey = "89a42586d91c7d7a31021f5eea29ab3f";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {

      var temp = response.main.temp;
      temp=(temp*9)/5 - 459.67;
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%"+ "The description in " + city + " is " + temp.toFixed(2));
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
