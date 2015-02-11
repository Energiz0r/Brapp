/**
 * Created by tommy.kristoffersen on 23.01.2015.
 */

BR.BrewsRoute = Ember.Route.extend({
    setupController: function(controller, model){
        var data = $.get("http://localhost:5000/brew", function(data){
            console.log(data);
            controller.set('model', data);
        })
    },
    renderTemplate: function(){
        this.render('brews', {
            into: 'application'
        })
    }
});