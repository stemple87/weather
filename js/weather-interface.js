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
