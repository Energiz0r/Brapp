BR.Router.map(function() {
    this.resource('index', { path: '/' }, function(){
        this.resource('brews');
        this.resource('newBrews')
    });

});