console.log('Level1.js');

Game.Level1 = function(game) {};

var map;
var layer;

Game.Level1.prototype = {
  create:function() {
    this.stage.backgroundColor = "AA0099";
    map = this.add.tilemap('map',64,64);
    map.addTilesetImage('tileset');
    layer = map.createLayer(0);
    layer.resizeWorld();
  },
  update:function() {

  },
}
