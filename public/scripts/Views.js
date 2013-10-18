App.Views.AppView = Backbone.View.extend({
    initialize: function() {
        var taskView = new App.Views.Tasks({ collection: this.collection });
        $('#tasks').html(taskView.render().el);
        var x = new App.Views.TaskInput({ collection: this.collection });
        
        var categories = new App.Collections.Categories([{'name': 'All', 'alias': 'all'}, {'name': 'Completed', 'alias': 'completed'}, {'name': 'Incomplete', 'alias': 'incomplete'}]);
        var taskCategories = new App.Views.TaskCategories({ collection: categories });
        //$("#categories").html(taskCategories.render().el);
        taskCategories.render().el;
    }
});

App.Views.TaskCategories = Backbone.View.extend({
    el: '.btn-group',
            
    initialize: function() {
      this.$el.html("");  
    },
            
    render: function() {
        this.collection.each(this.addOne, this);
        return this;
    },
            
    addOne: function(model) {
        var category = new App.Views.TaskCategory({ model: model });
        this.$el.append(category.render().el);
    }
});

App.Views.TaskCategory = Backbone.View.extend({
    className: 'btn',
            
    render: function() {
        this.$el.text(this.model.get('name'));
        return this;
    },
            
    events: {
        click: 'categorySelected'
    },
            
    categorySelected: function() {
        appRouter.navigate('taskList/'+this.model.get('alias'), { trigger: true });
        console.log(this.model.get('alias'));
    }
});

App.Views.Tasks = Backbone.View.extend({
    tagName: 'ul',

    initialize: function(){
        this.collection.on('add', this.addOne, this);
    },
    
    render: function() {
        this.collection.each(this.addOne, this);
        return this;
    },
            
    addOne: function(task) {
        var task = new App.Views.Task({ model: task });
        this.$el.append(task.render().el);
    }
});

App.Views.Task = Backbone.View.extend({
    tagName: 'li',
    className: 'taskItem span5' ,       
    template: window.template('tasksTemplate'),
    
    initialize: function() {
        this.model.on('remove', this.removeTask, this);
    },
    
    events: {
        "mouseover": "hovered",
        "mouseout": "movedout",
        "click .delete": "deleteTask",
        "click .check": "completeTask",
    },        
    
    render: function() {
        this.$el.attr('id', this.model.get('id'));
        
        var status;
        
        if (this.model.get('completed') == 1){
            status = "<div class='icon-star check'></div>";
            this.$el.attr('class', 'taskItem span5 strikethrough');
        }
        else
            status = "<div class='icon-star-empty check'></div>";
        
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.append(status);
        return this;
    },
    
    hovered: function() {
        this.$('.delete').css('display', 'block');
    },
    
    movedout: function() {
        this.$('.delete').css('display', 'none');
    },
            
    deleteTask: function() {
        this.model.destroy();
    },
            
    removeTask: function() {
        this.$el.remove();
    },
            
    completeTask: function() {
        console.log(this.$el.attr('class'));
        var completed = this.$('.check').attr('class') === "icon-star-empty check"?0:1;
        if(completed){
            this.model.set('completed', false);
            this.model.save();
            this.$('.check').attr('class', 'icon-star-empty check');
            this.$el.attr('class', 'taskItem span5');
        }else{
            this.model.set('completed', true);
            this.model.save();
            this.$('.check').attr('class', 'icon-star check');
            this.$el.attr('class', 'taskItem span5 strikethrough');
        }
    }
    
});

App.Views.TaskInput = Backbone.View.extend({
    el: '#addTaskForm',
   
    events:{
        'keypress #newTaskInput': 'keypressed'
    },
            
    readTask: function() {
        return {
            taskName: this.$("#newTaskInput").val(),
            completed: false
        };
    },
           
    keypressed: function(e) {
        
        if(e.keyCode === 13){
            e.preventDefault();
            var newModel = new App.Models.Tasks();
            newModel.save(this.readTask());
            this.collection.add(newModel);
            this.$("#newTaskInput").val('')
        }
        
    }
});