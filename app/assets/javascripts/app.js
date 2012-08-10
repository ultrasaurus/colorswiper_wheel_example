// Require all the js files that define your application logic!
//
//= require ./patch


$(document).ready(function() {
  // We don't need a full app object with all the extras for this app ...
  // so we are going to fake it out. The main thing we need is the templates
  window.app = {
    templates: Wheel.Templates.build(),
    eventManager: (Modernizr.touch ? Wheel.TouchManager : Wheel.MouseManager).build()
  };
  window.app.templates.gather(); // get them from the DOM
  // now the templates are available to all the views

  // Here we are building a single view, and giving it a parent DOM element.
  // That means that it will automatically append the view to that dom element. Yay!
  var view = Patch.build({parent: $(document.body), color_text: 'color'});
});


