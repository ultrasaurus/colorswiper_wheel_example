Wheel.View.subclass('Patch', {

  // this is where we can add interactions
  listen: function() {
    this.$.on('tap', this.onTap.bind(this));
  },

  onTap: function(e) {
    e.stopPropagation();
    console.log('tap')

    var red = Math.floor(Math.random()*10);
    var green = Math.floor(Math.random()*10);
    var blue = Math.floor(Math.random()*10);
    this.color_text = "#" + red + green + blue
    console.log(this.color_text)

    this.$.css('background-color', this.color_text)
  }


});