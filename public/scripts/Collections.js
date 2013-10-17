App.Collections.Tasks = Backbone.Collection.extend({   
   model: App.Models.Tasks,
   url: 'todo'
});

App.Collections.Categories = Backbone.Collection.extend({
    model: App.Models.Categories
});
