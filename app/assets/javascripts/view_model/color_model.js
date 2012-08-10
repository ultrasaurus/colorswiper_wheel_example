Wheel.Class('Color', {
  change: function() {
    this.hex(this._class.randomColor());
  }
}, {
  properties: ['hex'],
  randomColor: function() {
    return Math.floor(Math.random()*10);
  }
});
