(function(){
    'use strict';

    // global App namespace
    window.App = {};

    // extend backbone view with a global close function
    Backbone.View.prototype.close = function() {
        if (this.onClose) {
            this.onClose();
        }
        this.remove();
    };
})();