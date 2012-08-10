// Checkout step 2 and 3 in the Card example for more on the view/model
// paradigm in Wheel.js.
Wheel.View.subclass('PatchView', {
  init: function() {
    this.model = Color.build();
  },

  // The view listens for both events on the DOM and events on the model.
  // It handles both with changes on the view. Unlike Angular, Ember, etc
  // that bind data to the view via special markup and/or js in the HTML,
  // Wheel.js expects the view object to handle this logic.
  //
  // That said, I think there is a place for a 'rerender' method that
  // unlistens for the events on the dom, renders the template again into 
  // the parent element, and then listens. I haven't built that out yet.
  //
  listen: function() {
    this.$.on('tap', this.model.change());

    // Separating out the model from the view is kind of overkill here,
    // but if there were some more complex logic that happened in the Color
    // model, it would be great to encapsulate it there, rather than here. Also,
    // once the business logic moves into the model, we have the benefit of setting
    // off a huge chain reaction of changes with just a single click. It all happens
    // in the model layer, with views responding to their changes.
    //
    // Also, the model has properties, which are instance methods that set
    // and attribute, and also trigger events when those properties change.
    // There is the more generate 'change' event, when any property changes.
    // Then there is the specific proprety event, which is seen below.
    this.model.on('change:hex', this.changeBackground.bind(this));
  },

  // I also think there is a place for delegating a 'css' method to the $ element.
  // Currently there are other conveniences delegated there.
  changeBackground: function() {
    this.$.css('background-color', this.model.color());
  }
});
