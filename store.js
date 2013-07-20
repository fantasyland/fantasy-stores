var daggy = require('daggy'),
    Store = daggy.tagged('set', 'get');

// Methods
Store.prototype.extract = function() {
    return this.set(this.get());
};
Store.prototype.extend = function(f) {
    var self = this;
    return Store(
        function(k) {
            return f(Store(
                self.set,
                function() {
                    return k;
                }
            ));
        },
        this.get
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
