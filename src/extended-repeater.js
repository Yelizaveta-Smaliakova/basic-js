const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let repeatTimes = (typeof options.repeatTimes === "undefined") ? 0 : options.repeatTimes;
    let separator = (typeof options.separator === "undefined") ? "+" : options.separator;
    let addition = (typeof options.addition === "undefined") ? "" : options.addition;
    let additionRepeatTimes = (typeof options.additionRepeatTimes === "undefined") ? 0 : options.additionRepeatTimes;
    let additionSeparator = (typeof options.additionSeparator === "undefined") ? "|" : options.additionSeparator;

    str += "" + addition;

    for (let i = 1; i < additionRepeatTimes; i++) {
        str += "" + additionSeparator + addition;
    }

    let str2 = str;

    for (let i = 1; i < repeatTimes; i++) {
        str += "" + separator + str2;
    }
    return str;
};
  