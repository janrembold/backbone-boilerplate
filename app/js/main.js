(function($){
    'use strict';

    $(document).ready(function(){
        Backbone.history.start({ pushState: true, root: '/' });
    });
})(jQuery);