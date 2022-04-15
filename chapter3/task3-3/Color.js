class Color {
  constructor(red = 0, green = 0, blue = 0, hexademical = "000000", opacity) {
    this.r = red;
    this.g = green;
    this.b = blue;
    this.hex = hexademical;
    this.opacity = opacity;
  }
  getColorRGB() {
    if (
      this.r >= 0 &&
      this.g >= 0 &&
      this.b >= 0 &&
      this.r <= 255 &&
      this.g <= 255 &&
      this.b <= 255
    ) {
      if (this.opacity) {
        return `rgb(${this.r}, ${this.g}, ${this.b}), ${this.opacity}`;
      } else {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
      }
    } else {
      return "You entered invalid value for the rgb color. Try again with a different input.";
    }
  }
  getColorShortHex() {
    const regexShortHex = /^[A-Fa-f0-9]{3}$/;
    if (regexShortHex.test(this.hex)) {
      return `#${this.hex}`;
    } else {
      return "You should insert a valid short hex value with 3 digits as string.";
    }
  }
  getColorLongHex() {
    const regexLongHex = /^[A-Fa-f0-9]{6}$/;
    if (regexLongHex.test(this.hex)) {
      return `#${this.hex}`;
    } else {
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
