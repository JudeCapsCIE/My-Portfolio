document.addEventListener('DOMContentLoaded', function () {
    // Set the date and time of the birthday event (in UTC)
    const eventDate = new Date('July 31, 2024 18:00:00 UTC').getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(function () {
        const currentDate = new Date().getTime();
        const timeRemaining = eventDate - currentDate;

        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Display the countdown
            document.getElementById('countdown').innerHTML =
                '<b>Countdown:</b> ' +
                days + 'd ' +
                hours + 'h ' +
                minutes + 'm ' +
                seconds + 's';
        } else {
            // Display a message when the event has passed
            document.getElementById('countdown').innerHTML = '<b>The event has passed!</b>';
            clearInterval(countdownInterval);
        }
    }, 1000);
});