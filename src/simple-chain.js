const CustomError = require("../extensions/custom-error");

const chainMaker = {
    newchainMaker: [],

    getLength() {
        return this.newchainMaker.length;
    },

    addLink(value) {
        this.newchainMaker.push(value);
        return this;
    },

    removeLink(position) {
        if (typeof (position) === "number" && position === Math.trunc(position) && position <= this.newchainMaker.length) {
            this.newchainMaker.splice(position - 1, 1);
        }
        else {
            this.newchainMaker = [];
            throw "Error";
        }
        return this;
    },

    reverseChain() {
        this.newchainMaker = this.newchainMaker.reverse();
        return this;
    },

    finishChain() {
        if (this.newchainMaker.length === 0) return "";
        else {
            let chain = "";
            chain += "( " + this.newchainMaker[0] + " )";
            for (let i = 1; i < this.newchainMaker.length; i++) {
                chain += "~~( " + this.newchainMaker[i] + " )"
            }
            this.newchainMaker = [];
            return chain;
        }
    },
};


module.exports = chainMaker;
