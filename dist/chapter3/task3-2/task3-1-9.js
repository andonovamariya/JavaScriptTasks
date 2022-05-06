"use strict";
const DATE = new Date();
const STRING = "YYYY-MM-DD HH:mm:ss Is my proof of concept a A!";
Date.prototype.formatDateByString = function formatDateByString(chosenString) {
    let date = this, stringFormat = chosenString;
    const pad = (digit) => digit.toString().padStart(2, "0");
    const monthName = [
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
    const dayOfWeekName = [
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
        return dayOfWeekName[index - 1].substring(0, 3);
    };
    const getDayLongName = (date) => {
        const index = date.getDay();
        return dayOfWeekName[index - 1];
    };
    const getMonthShortName = (date) => {
        const index = date.getMonth();
        return monthName[index].substring(0, 3);
    };
    const getMonthLongName = (date) => {
        const index = date.getMonth();
        return monthName[index];
    };
    const getQuarter = () => {
        if (date.getMonth() < 2) {
            return 1;
        }
        else if (date.getMonth() < 5) {
            return 2;
        }
        else if (date.getMonth() < 8) {
            return 3;
        }
        else if (date.getMonth() < 11) {
            return 4;
        }
        else {
            return 1;
        }
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
        const janFirst = new Date(date.getFullYear(), 0, 1);
        let numberOfDays = Math.floor((+date - +janFirst) / (24 * 60 * 60 * 1000));
        return Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
    };
    const dateTokens = {
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
        A: (date) => (date.getHours() < 12 ? "AM" : "PM"),
        a: (date) => (date.getHours() < 12 ? "am" : "pm"),
        HH: (date) => pad(date.getHours()),
        H: (date) => date.getHours(),
        mm: (date) => pad(date.getMinutes()),
        m: (date) => date.getMinutes(),
        ss: (date) => pad(date.getSeconds()),
        s: (date) => date.getSeconds(),
        Q: getQuarter,
        W: getWeekOfYear,
    };
    return Object.entries(dateTokens).reduce((result, [token, func]) => {
        return result.replace(token, func(date).toString());
    }, stringFormat);
};
const formattedDate = DATE.formatDateByString(STRING);
console.log(formattedDate);
