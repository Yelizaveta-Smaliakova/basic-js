const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type) {
        if (type === false) this.type = false;
        else this.type = true;
    }

    encrypt(message, key) {
        if (message === "" || key === "") throw "Error";

        let encrypt_message = "";
        message = message.toUpperCase();
        key = key.toUpperCase();
        let j = 0;
        for (let i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
                let newletter = (message.charCodeAt(i) + key.charCodeAt(j % key.length) - 65 * 2) % 26 + 65;
                encrypt_message += String.fromCharCode(newletter);
                j++;
            }
            else encrypt_message += message[i];
        }
        if (this.type) return encrypt_message;
        else return encrypt_message.split('').reverse().join('');
    }

    decrypt(message, key) {
        if (message === "" || key === "") throw "Error";

        let decrypt_message = "";
        message = message.toUpperCase();
        key = key.toUpperCase();
        let j = 0;
        for (let i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
                let newletter = (message.charCodeAt(i) + 26 - key.charCodeAt(j % key.length)) % 26 + 65;
                decrypt_message += String.fromCharCode(newletter);
                j++;
            }
            else decrypt_message += message[i];
        }
        if (this.type) return decrypt_message;
        else return decrypt_message.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
