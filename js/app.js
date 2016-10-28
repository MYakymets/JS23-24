requirejs.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    }
  }
});

require(
  [
    "tmpl",
    "jquery",
    "model",
    "view",
    "controller"
  ],
  function ( tmpl, $, model, view, controller ) {
    var firstToDoList = ['learn JS', 'learn HTML', 'make coffee', 'wash the car', 'feed the fish'];
    var model = new model.Model(firstToDoList);
    var view = new view.View(model);
    var controller = new controller.Controller(model, view);
  }
);
