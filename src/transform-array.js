const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr) == false) {
        throw "Error";
    }
    else {
        let array = [];
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case ("--discard-next"): {
                    i++;
                    break;
                }
                case ("--discard-prev"): {
                    if (arr[i - 2] != "--discard-next") {
                        array.pop();
                    }
                    break;
                }
                case ("--double-next"): {
                    if (i < arr.length - 1) {
                        array.push(arr[i + 1]);
                        array.push(arr[i + 1]);
                        i++;
                    }
                    break;
                }
                case ("--double-prev"): {   
                    if (i != 0 && arr[i - 2] != "--discard-next") {
                        array.push(arr[i - 1]);
                    }
                    break;
                }
                default: {
                    array.push(arr[i]);
                }
            }
        }
        return array;
    } 
};
