/**
 * Created by tommy.kristoffersen on 23.01.2015.
 */

BR.NewBrewsRoute = Ember.Route.extend({
    model: function(){
        return BR.Brew.create();
    },

    renderTemplate: function(){
        this.render('newBrews', {
            into: 'application'
        })
    },
    actions: {
        saveBrew: function(brew){
            console.log('creating new ' + brew.get('name') + 'A:' + brew.name);
            var data = JSON.stringify({name: brew.name});
            $.ajax({
                type: "POST",
                url: "http://localhost:5000/brew",
                data: data,
                contentType : "application/json"
            });
            this.transitionTo('brews');
        }
    }
});