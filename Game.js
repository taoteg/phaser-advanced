console.log('Game.js');

window.onload = function() {
  console.log('START::window.onload()');

  // General configs.
  var gameWindow = {};
  gameWindow.width = 800;
  gameWindow.height = 600;
  gameWindow.renderer = Phaser.CANVAS;
  gameWindow.domParameter = '';

  // Game config.
  var game = new Phaser.Game(gameWindow.width,gameWindow.height,gameWindow.renderer,gameWindow.domParameter);

  game.state.add('Boot',Game.Boot);
  game.state.add('Preloader',Game.Preloader);
  game.state.add('MainMenu',Game.MainMenu);
  game.state.add('Level1',Game.Level1);

  game.state.start('Boot');

  // Game loop.

  console.log('END::window.onload()');
}
