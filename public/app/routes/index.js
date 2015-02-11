/**
 * Created by tommy.kristoffersen on 23.01.2015.
 */

BR.IndexIndexRoute = Ember.Route.extend({
    renderTemplate: function(){
        this.render('index', {
            into: 'application'
        })
    }
});