<!doctype html>
<html>
<head>
    <title>Todo App</title>
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="css/view.css"/>
</head>
<body>
    
    <div class="container" id="optionsContainer">
        <div class="span12">
            <h1>ToDo App using Backbone</h1>
        </div>
        <br><br>
        <div class="btn-group text-center span6" id="option">
        </div>
        <div class="span6"></div>
    </div>
    
    <br>

    <div class="container">
        <form id="addTaskForm">
            <input type="text" id="newTaskInput" class="span5" placeholder="Enter new Task..." autofocus/>
        </form>
        
        <div id="tasks">
            <script id="tasksTemplate" type="text/template">
                <%= taskName %>  <div class='icon-remove delete'></div> 
            </script>
        </div>
    </div>

    <script src="scripts/underscore.js"></script>
    <script src="scripts/jquery.js"></script>
    <script src="scripts/backbone.js"></script>

    <script>
        (function() {

            window.App = {
                Models: {},
                Views: {},
                Collections: {},
                Router: {}
            };

            window.template = function(id) {
                return _.template($("#" + id).html());
            };

            window.vent = _.extend({}, Backbone.Events);
        })();
    </script>

    <script src="scripts/Models.js"></script>
    <script src="scripts/Collections.js"></script>
    <script src="scripts/Views.js"></script>
    <script src="scripts/Routers.js"></script>
    <script src="scripts/main.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>


</body>
</html>