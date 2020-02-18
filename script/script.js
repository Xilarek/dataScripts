'use strict';
window.addEventListener('DOMContentLoaded',  () => {
    //вызов через атрибут   
    const date = new Date();
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
        console.log(typeof(hours));

    const getTimeOfDay = () => {
        let timeOfday;
        if ((hours >= 0) && (hours < 5)) {
            timeOfday = 'Спать иди, поздно';
        } if ((hours >= 5) && (hours < 10)) {
            timeOfday = 'Доброе утро';
        } if ((hours >= 10) && (hours < 17)) {
            timeOfday = 'Добрый день';
        } if ((hours >= 17) && (hours < 22)) {
            timeOfday = 'Добрый вечер';
        } if (hours >= 22) {
            timeOfday = 'Доброй ночи';
        }
        console.log(timeOfday);
    };

    const getDayName = () => {
        let dayName = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        let index = newDay;
        console.log('Сегодня:' + dayName[index]);
    };

    const getTime = () => {
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
    };

    const calcDayInYear = () => {
        let newYear = (date.setFullYear(2021, 0, 0));
        let thisYear = (date.setFullYear(2020, 1, 18));
        let calc = newYear - thisYear;
        calc = (calc / 1000) / 60 / 60 / 24;
        console.log('До нового года осталось: ' + calc);
    };
    getTimeOfDay();
    getDayName();
    getTime();
    calcDayInYear();
});