'use strict';
window.addEventListener('DOMContentLoaded', function () {
    //вызов через атрибут   
    let date = new Date();
    console.log(date);

    let year = date.getFullYear(),
        //Для корректности +1 
        month = (date.getMonth() + 1),
        //0 день - воскресенье 
        day = date.getDate(),
        newDay = date.getDay(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        milliseconds = date.getMilliseconds();

    function getTimeOfDay() {
        let timeOfday;
        if (10 < hours > 7) {
            timeOfday = 'Доброе утро';
        }
        if (17 < hours > 10) {
            timeOfday = 'Добрый день';
        }
        if (22 < hours > 17) {
            timeOfday = 'Добрый вечер';
        }
        if (hours > 22) {
            timeOfday = 'Доброй ночи';
        } else {
            timeOfday = 'Доброй ночи';
        }
        console.log(timeOfday);
    }

    function getDayName() {
        let dayName = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        let index = newDay;
        console.log('Сегодня:' + dayName[index]);
    }

    function getTime() {
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        console.log('Текущее время: ' + hours + ':' + minutes + ':' + seconds);
    }

    function calcDayInYear() {
        let newYear = (date.setFullYear(2021, 0, 0));
        let thisYear = (date.setFullYear(2020, 1, 18));
        let calc = newYear - thisYear;
        calc = (calc / 1000) / 60 / 60 / 24;
        console.log('До нового года осталось: ' + calc);
    }
    getTimeOfDay();
    getDayName();
    getTime();
    calcDayInYear();


});