const DATE = new Date();
const STRING = "week W ddd(E) YYYY-MMM-DD Do HH:mm:ss Q quarter Is my proof of concept!";
export function transormDateObjectAdvanced(date, sentence) {
    const pad = (num) => num.toString().padStart(2, "0");
    const MONTH_NAME = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const DAY_OF_WEEK = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const getDayShortName = (date) => {
        const index = date.getDay();
        return DAY_OF_WEEK[index - 1].substring(0, 3);
    };
    const getDayLongName = (date) => {
        const index = date.getDay();
        return DAY_OF_WEEK[index - 1];
    };
    const getMonthShortName = (date) => {
        const index = date.getMonth();
        return MONTH_NAME[index].substring(0, 3);
    };
    const getMonthLongName = (date) => {
        const index = date.getMonth();
        return MONTH_NAME[index];
    };
    const getQuarter = () => {
        if (DATE.getMonth() < 2) {
            return 1;
        }
        else if (DATE.getMonth() < 5) {
            return 2;
        }
        else if (DATE.getMonth() < 8) {
            return 3;
        }
        else
            return 4;
    };
    const getDayOfMonth = (date) => {
        const day = date.getDate();
        if (day === 1) {
            return day + "st";
        }
        else if (day === 2) {
            return day + "nd";
        }
        else if (day === 3) {
            return day + "rd";
        }
        else
            return day + "th";
    };
    const getWeekOfYear = () => {
        let januaryFirst = new Date(DATE.getFullYear(), 0, 1);
        let numberOfDays = Math.floor((parseFloat(DATE.toDateString()) -
            parseFloat(januaryFirst.toDateString())) /
            (24 * 60 * 60 * 1000));
        let result = Math.ceil((DATE.getDay() + 1 + numberOfDays) / 7);
        return result;
    };
    const object = {
        YYYY: (date) => date.getFullYear(),
        MMMM: getMonthLongName,
        MMM: getMonthShortName,
        MM: (date) => pad(date.getMonth()),
        M: (date) => date.getMonth(),
        Do: getDayOfMonth,
        DD: (date) => pad(date.getDate()),
        D: (date) => date.getDate(),
        dddd: getDayLongName,
        ddd: getDayShortName,
        E: (date) => date.getDay(),
        HH: (date) => pad(date.getHours()),
        H: (date) => date.getHours(),
        mm: (date) => pad(date.getMinutes()),
        m: (date) => date.getMinutes(),
        ss: (date) => pad(date.getSeconds()),
        s: (date) => date.getSeconds(),
        Q: getQuarter,
        W: getWeekOfYear,
    };
    return Object.entries(object).reduce((result, [pattern, functionPart]) => {
        return result.replace(pattern, functionPart(date).toString());
    }, sentence);
}
console.log(transormDateObjectAdvanced(DATE, STRING));
