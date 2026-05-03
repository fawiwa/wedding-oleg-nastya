// Укажите дату вашей свадьбы
const weddingDate = new Date("September 06, 2026 16:00:00").getTime();

const timerFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Расчет времени
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Вывод результата в элементы с соответствующими id
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Если дата наступила
    if (distance < 0) {
        clearInterval(timerFunction);
        document.getElementById("timer").innerHTML = "Этот счастливый день настал!";
    }
}, 1000);