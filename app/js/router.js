(function(){
    'use strict';

    var Router = Backbone.Router.extend({

        routes: {
            '': 'index'
        },

        showView: function (view) {
            // close and unbind current view
            if (this.currentView) {
                this.currentView.close();
            }

            // set new view
            $('.container').html(view.$el);
            this.currentView = view;

            return view;
        },

        //initialize: function(options){},
        //execute: function(){},

        index: function() {
            console.log('show index route');
            //this.showView(new DummyView);
        }

    });

    // add router to global app namespace
    window.App.Router = new Router();
})();