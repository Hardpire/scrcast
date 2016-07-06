//var phrase = require("./ru");
function run() {

    var x = require("./user");
    var vasya = new x.User("vasa");
    var kosa = new x.User("kasa1");

    vasya.say(kosa);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}