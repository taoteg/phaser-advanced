// console.log('Preloader.js');

Game.Preloader = function(game) {
  this.preloadBar = null;
};

Game.Preloader.prototype = {
  preload:function() {
    this.preloaderBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloaderBar');
    this.preloaderBar.anchor.setTo(0.5,0.5);
    this.time.advancedTiming = true;
    this.load.setPreloadSprite(this.preloaderBar);

    // LOAD ALL ASSETS.

    // Maptiles.
    this.load.tilemap('map','assets/level1.csv');
    // this.load.image('tileset','assets/tileset.png');
    this.load.image('tileset','assets/tilea4.png');

    // Player sprite.
    this.load.spritesheet('player','assets/player.png',24,26);

    // Buttons.
    this.load.spritesheet('buttons','assets/button_sprite_sheet.png',193,71)
  },
  create:function() {
    this.state.start('Level1');
  },
}
