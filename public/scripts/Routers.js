App.Router = Backbone.Router.extend({
    routes: {
        '': 'getTaskList',
        'taskList/:category': 'getTaskList'
    },
    
    getTaskList: function(category) {
        category = category || 'all';
        
        var intCategory;
        if (category === 'completed')
            intCategory = 1;
        else if (category === 'incomplete')
            intCategory = 0;
        else
            intCategory = '';
        
        var tasks = new App.Collections.Tasks();
        tasks.url = 'todo/'+intCategory;
        tasks.fetch().then(function (){
            new App.Views.AppView({ collection: tasks });
        });
        
        console.log("triggering: get Task List "+ category);
    }
});