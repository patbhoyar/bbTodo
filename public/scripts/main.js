(function(){

    var tasks = new App.Collections.Tasks;
    tasks.fetch().then(function (){
        var view = new App.Views.AppView({ collection: tasks });
    });
    

})();