<!doctype html>
<html>
<head>
    <title>Todo App</title>
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="css/view.css"/>
</head>
<body>

    <div class="container">
        <h1>ToDo App using Backbone</h1>

        <form id="addTaskForm">
            <input type="text" id="newTaskInput" class="span5" placeholder="Enter new Task..." autofocus/>
            <div class="btn" id="refresh"><i class="icon-refresh"></i></div>
        </form>
        <div id="tasks">
            <script id="tasksTemplate" type="text/template">
                <%= taskName %>  <div class='icon-remove delete'></div> 
            </script>
        </div>
    </div>
    
    <br><br><br>
    
    <div class="container" id="optionsContainer">
        <div class="span3"></div>
        <div class="btn-group text-center span6" id="option">
        </div>
        <div class="span3"></div>
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