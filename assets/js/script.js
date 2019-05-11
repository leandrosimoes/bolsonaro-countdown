(() => {
    document.addEventListener("DOMContentLoaded", function () {
        let targetDate = new Date(2023, 0, 1, 0, 0, 0, 0);
        let onStart = () => {
            document.querySelectorAll('.countdown__item').forEach(item => item.classList.add('show'))
        }
        let onTick = ({ years, days, hours, minutes, seconds }) => {
            document.querySelector('.countdown__item.years').innerHTML = years;
            document.querySelector('.countdown__item.days').innerHTML = days;
            document.querySelector('.countdown__item.hours').innerHTML = hours;
            document.querySelector('.countdown__item.minutes').innerHTML = minutes;
            document.querySelector('.countdown__item.seconds').innerHTML = seconds;
        };
        let sufixes = new LsCountdownSufixes({ years: 'a' })
        let options = new LsCountdownOptions({ targetDate, onStart, onTick, sufixes });
        let countdown = new LsCountdown(options);

        countdown.start();
        window.mycountdown = countdown;
    });
})();