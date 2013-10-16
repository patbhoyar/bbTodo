App.Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'task/:id': 'getTask'
    },
    
    getTask: function(id) {
        console.log("triggering: get Task "+ id);
    }
});