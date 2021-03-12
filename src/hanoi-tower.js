const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns_ = Math.pow(2, disksNumber) - 1;
    let seconds_ = Math.floor((turns_ / turnsSpeed) * 3600);

    let answer = {
        turns: turns_,
        seconds: seconds_
    };
    return answer;
};
