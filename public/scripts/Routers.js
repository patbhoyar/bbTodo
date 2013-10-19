App.Router = Backbone.Router.extend({
    routes: {
        '': 'getTaskList',
        'taskList/:category': 'getTaskList'
    },
    
    getTaskList: function(category) {
        category = category || 'all';
        
        var intCategory;
        if (category === 'completed')
            intCategory = '1';
        else if (category === 'incomplete')
            intCategory = '0';
        
        vent.trigger('category:selected', category);
        
        console.log("triggering: get Task List "+ category);
    }
});