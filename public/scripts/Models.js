App.Models.Tasks = Backbone.Model.extend({
   defaults: {
       taskName: '',
       completed: ''
   },
   url: 'todo',
//   'sync': this.customSync,
//   
//    customSync: function(method, model, options) {
//        console.log(method);
//        if(method == 'create'){
//            options.url = 'todo'; 
//        }else{
//            options.url = model.url; 
//        }
//        return Backbone.sync(method, model, options);
//    }
});

App.Models.Categories = Backbone.Model.extend({ });
