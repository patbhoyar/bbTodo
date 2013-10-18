App.Models.Tasks = Backbone.Model.extend({
   defaults: {
       taskName: '',
       completed: ''
   },
   methodToURL: {
    'create': 'todo/create',
    'update': 'todo/update',
    'delete': 'todo/delete'
  },

  sync: function(method, model, options) {
        //console.log(model);
        options = options || {};
    
        var arg = '';
        if(method === 'delete')
            arg = '/'+model.get('id');
        else if(method === 'update')
            arg = '/'+model.get('id');
    
    options.url = model.methodToURL[method.toLowerCase()]+arg;

    return Backbone.sync.apply(this, arguments);
  }
});

App.Models.Categories = Backbone.Model.extend({ });
