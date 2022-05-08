"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CHOSEN_DATE = new Date();
const convertDateToISO8601 = (chosenDate) => {
    const date = chosenDate;
    const pad = (n) => {
        let digit = n;
        return digit < 10 ? "0" + digit : digit.toString();
    };
    return (date.getFullYear() +
        "-" +
        pad(date.getMonth() + 1) +
        "-" +
        pad(date.getDate()) +
        " " +
        pad(date.getHours()) +
        ":" +
        pad(date.getMinutes()) +
        ":" +
        pad(date.getSeconds()) +
        "." +
        pad(date.getMilliseconds()));
};
console.log(convertDateToISO8601(CHOSEN_DATE));
