Wheel.View.subclass('PatchView', {
  init: function() {
    this.model = Color.build();
  },

  listen: function() {
    this.$.on('tap', this.model.change());
    this.model.on('change', this.changeBackground.bind(this));
  },

  changeBackground: function() {
    this.$.css('background-color', this.model.color());
  }
});
