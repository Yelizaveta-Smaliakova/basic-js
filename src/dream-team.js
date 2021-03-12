const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
        let team = "";
        for (let i = 0; i < members.length; i++) {
            if (typeof members[i] === "string") {
                let j = 0;
                while (members[i][j] === " ") j++;
                team += members[i][j];
            }
        }
        return team.toUpperCase().split("").sort().join("");
    }
    else return false;
};
