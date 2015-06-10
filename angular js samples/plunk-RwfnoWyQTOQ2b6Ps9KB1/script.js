// Code goes here

String.prototype.format = function() {
    var args = arguments;

    return this.replace(/\{(\d+)\}/g, function() {
        return args[arguments[1]];
    });
};

