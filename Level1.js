// console.log('Level1.js');

Game.Level1 = function(game) {};

var levelConfig = {};
levelConfig.gravity = 1400;

var map;
var tile = {};
tile.width = 64;
tile.height = 64;
var layer;

var player;
var controls = {};
var playerConfig = {};
playerConfig.speed = 150;
playerConfig.jumpTimer = 0;

var button;

Game.Level1.prototype = {
  create:function() {
    this.stage.backgroundColor = "AA0099";
    this.physics.arcade.gravity.y = levelConfig.gravity;

    map = this.add.tilemap('map',tile.width,tile.height);
    map.addTilesetImage('tileset');
    map.setCollisionBetween(0,2);  // 0,0 or 0,2. depends on tileset.

    layer = map.createLayer(0);
    layer.resizeWorld();

    player = this.add.sprite(100,500,'player');
    player.anchor.setTo(0.5,0.5);
    player.animations.add('idle',[0,1],1,true);
    player.animations.add('jump',[2],1,true);
    player.animations.add('run',[3,4,5,6,7,8],7,true);
    this.physics.arcade.enable(player);
    this.camera.follow(player);
    player.body.collideWorldBounds = true;

    controls = {
      right: this.input.keyboard.addKey(Phaser.Keyboard.D),
      left: this.input.keyboard.addKey(Phaser.Keyboard.A),
      up: this.input.keyboard.addKey(Phaser.Keyboard.W),
    };

    button = this.add.button(this.world.centerX - 95, this.world.centerY + 200, 'buttons', function(){
      console.log('pressed button');
    }, this, 2, 1, 0);

    button.fixedToCamera = true;
  },
  update:function() {
    this.physics.arcade.collide(player,layer);

    player.body.velocity.x = 0;

    if (controls.right.isDown) {
      player.animations.play('run');
      player.scale.setTo(1,1);
      player.body.velocity.x += playerConfig.speed;
    }

    if (controls.left.isDown) {
      player.animations.play('run');
      player.scale.setTo(-1,1);
      player.body.velocity.x -= playerConfig.speed;
    }

    if (controls.up.isDown && (player.body.onFloor() || player.body.touching.down) && this.time.now > playerConfig.jumpTimer) {
      player.body.velocity.y = -600;
      playerConfig.jumpTimer = this.time.now + 750;
      player.animations.play('jump');
    }

    if (player.body.velocity.x == 0 && player.body.velocity.y == 0) {
      player.animations.play('idle');
    }
  },
}
