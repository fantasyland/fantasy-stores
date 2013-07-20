var daggy = require('daggy'),
    Store = daggy.tagged('setter', 'getter');

// Methods
Store.prototype.extract = function() {
    return this.setter(this.getter());
};
Store.prototype.extend = function(f) {
    var self = this;
    return Store(
        function(k) {
            return f(Store(
                self.setter,
                function() {
                    return k;
                }
            ));
        },
        this.getter
    );
};

// Derived
Store.prototype.map = function(f) {
    var self = this;
    return this.extend(function(c) {
        return f(c.extract());
    });
};

// Export
if(typeof module != 'undefined')
    module.exports = Store;
