var phrase = require("./ru");

function User(name) {
    this.name = name;

}

User.prototype.say = function (who) {
    console.log(this.name + phrase.Hello + who.name);
};

exports.User = User;