(function(){
    
    new App.Views.AppView();
        
    window.appRouter = new App.Router;
    Backbone.history.start();
})();