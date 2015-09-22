var ht = require('ht');
module.exports = {
    echo : function(inp) {
        return "Echoing back " + ht.version;
    }
}