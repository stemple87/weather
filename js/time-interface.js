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
