let leapYear;
let month = 4;
let dayInMonth;

switch (month) {
    case 0: dayInMonth = 31;
        break;
    case 1: if (leapYear = false) {
        dayInMonth = 29;
        break;
    } else {
        dayInMonth = 28;
        break;
    }
    case 2: dayInMonth = 31;
        break;
    case 3: dayInMonth = 30;
        break;
    case 4: dayInMonth = 31;
        break;
    case 5: dayInMonth = 31;
        break;
    case 6: dayInMonth = 31;
        break;
    case 7: dayInMonth = 31;
        break;
    case 8: dayInMonth = 30;
        break;
    case 9: dayInMonth = 31;
        break;
    case 10: dayInMonth = 30;
        break;
    case 11: dayInMonth = 31;
        break;
    default:
        console.error(`Unknown month ${month}`);
        break;
}

console.log(dayInMonth);