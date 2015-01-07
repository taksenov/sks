/**
 * @return {number}
 */
function LengthOfNum(n)           //Функция возвращает количество цифр
{                                 //  в записи натурального числа n
    var count=0;

    do {n /= 10; count++} while (n >= 1);   // n/=10 - это тоже, что и n=n/10

    return count;
}

function countDown(second,endMinute,endHour,endDay,endMonth,endYear) {
    var now = new Date();
    second = second ;
    //second = second + now.getSeconds();
    endYear =  endYear || now.getFullYear();
    endMonth = endMonth ? endMonth - 1 : now.getMonth();    //номер месяца начинается с 0
    endDay = endDay || now.getDate();
    endHour = endHour  ;
    endMinute = endMinute ;
    //добавляем секунду к конечной дате (таймер показывает время уже спустя 1с.)

var endDate = new Date(endYear,endMonth,endDay,endHour,endMinute,second+1);
var interval = setInterval(function() { //запускаем таймер с интервалом 1 секунду
    var time = endDate.getTime() - now.getTime();
    if (time < 0) {                      //если конечная дата меньше текущей
        clearInterval(interval);
        console.log("Неверная дата!");
    } else {
        var days = Math.floor(time / 864e5),
            hours = Math.floor(time / 36e5) % 24,
            minutes = Math.floor(time / 6e4) % 60,
            seconds = Math.floor(time / 1e3) % 60,
            nullDays = '',
            nullHours = '',
            nullMinutes = '';

        //console.log(LengthOfNum(days));

        if (LengthOfNum(days) === 1) {
            nullDays = '0';
        }
        if (LengthOfNum(hours) === 1) {
            nullHours = '0';
        }
        if (LengthOfNum(minutes) === 1) {
            nullMinutes = '0';
        }

        document.getElementById('mytimer').innerHTML =
        nullDays + days + ':' + nullHours + hours + ':' + nullMinutes + minutes;
        if (!seconds && !minutes && !days && !hours) {
            clearInterval(interval);
            console.log("Время вышло!");
        }
    }
    now.setSeconds(now.getSeconds() + 1); //увеличиваем текущее время на 1 секунду
}, 1000);
}
countDown(0,0,0,12,1,2015); //устанавливаем таймер
// обратный отсчет до определенной даты
// секунды, минуты, часы, число, месяц, год