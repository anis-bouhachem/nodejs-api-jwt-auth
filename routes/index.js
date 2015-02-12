/**
 * Created by Anis on 11/02/2015.
 */

var normalizedPath = require("path").join(__dirname);

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    if(file != "index.js")
        module.exports[file.slice(0, file.indexOf(".") - file.length)] = require("./" + file);
});
