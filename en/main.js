
/// ****************** logic of the counter ******************
// Set the date we're counting down to
var countDownDate = new Date("Oct 13, 2018 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    var clock = document.getElementById('clockdiv');
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    daysSpan.innerHTML = days.toString();
    hoursSpan.innerHTML = ('0' + hours).slice(-2);
    minutesSpan.innerHTML = ('0' + minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + seconds).slice(-2);
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").classList.add('hide');
        document.getElementById("agenda").classList.add('col-md-offset-3');
        document.getElementById("reserve").classList.add('hide');
        $('#tab-content').addClass('width-50');
        $('#section-two .nav-tabs').addClass('width-50-nav-tabs');
        $(".new-footer-style").addClass('padding-bottom-60');
    }
}, 1000);
// ****************** end logic of the counter ******************