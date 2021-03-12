const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof (sampleActivity) !== "string") return false;
    else
        if (typeof (parseInt(sampleActivity, 10)) === "number" && (parseInt(sampleActivity, 10)) > 0 &&
            Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)) > 0)
            return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
        else return false;
};
