"use strict";
class Color {
    constructor(red = 0, green = 0, blue = 0, hexademical = "000000", opacity = 0) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.hexademical = hexademical;
        this.opacity = opacity;
    }
    getColorRGB() {
        if (this.red >= 0 &&
            this.green >= 0 &&
            this.blue >= 0 &&
            this.red <= 255 &&
            this.green <= 255 &&
            this.blue <= 255) {
            if (this.opacity) {
                return `rgb(${this.red}, ${this.green}, ${this.blue}), ${this.opacity}`;
            }
            else {
                return `rgb(${this.red}, ${this.green}, ${this.blue})`;
            }
        }
        else {
            return "You entered invalid value for the rgb color. Try again with a different input.";
        }
    }
    getColorShortHex() {
        const regexShortHex = /^[A-Fa-f0-9]{3}$/;
        if (regexShortHex.test(this.hexademical)) {
            return `#${this.hexademical}`;
        }
        else {
            return "You should insert a valid short hex value with 3 digits as string.";
        }
    }
    getColorLongHex() {
        const regexLongHex = /^[A-Fa-f0-9]{6}$/;
        if (regexLongHex.test(this.hexademical)) {
            return `#${this.hexademical}`;
        }
        else {
            return "You should insert a valid long hex value with 6 digits as string.";
        }
    }
}
const firstColor = new Color(76, 0, 76, "098", 24);
console.log(firstColor.getColorRGB());
console.log(firstColor.getColorShortHex());
const secondColor = new Color(65, 234, 1, "876542", 87);
console.log(secondColor.getColorLongHex());
const thirdColor = new Color();
console.log(thirdColor.getColorShortHex());
