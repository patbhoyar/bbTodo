App.Views.AppView = Backbone.View.extend({
    initialize: function() {
        var taskView = new App.Views.Tasks({ collection: this.collection });
        $('#tasks').html(taskView.render().el);
        var x = new App.Views.TaskInput({ collection: this.collection });
    },
    
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
    className: 'taskItem span3' ,       
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
        
        if (this.model.get('completed') == 1)
            status = "<div class='icon-star check'></div>";
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
        var completed = this.$('.check').attr('class') === "icon-star-empty check"?0:1;
        if(completed){
            this.model.set('completed', false);
            this.model.save();
            this.$('.check').attr('class', 'icon-star-empty check');
        }else{
            this.model.set('completed', true);
            this.model.save();
            this.$('.check').attr('class', 'icon-star check');
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
            this.collection.create(this.readTask());
            this.$("#newTaskInput").val('')
        }
        
    }
});