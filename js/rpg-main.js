'use strict'

addEventListener('load', () => {
  const game = new Game();
  const map = [
    [11,11,11,11,11,11,11,11,11,11],
    [11,10,10,10,10,10,10,10,10,11],
    [11, 4, 4, 4, 4, 4, 4, 4, 4,11],
    [11, 4,11, 4, 4,11,11,11, 4,11],
    [11, 4,11,11,11,11,10,10, 4,11],
    [11, 4,11,10,10,11, 4, 4, 4,11],
    [11, 4,11, 4, 4,11,11,11, 4,11],
    [11, 4, 9, 4, 4, 9,10,11, 4,11],
    [11, 4, 4, 4, 4, 4, 4,11, 4,11],
    [11,11,11,11,11,11,11,11,11,11],
  ];
  const WALKING_SPEED = 4;
  const scene = new Scene();
  const tilemap = new Tilemap('img/tile.png');
  tilemap.data = map;
  scene.add(tilemap);
  const yamada = new Sprite('img/yamada.png');
  scene.add( yamada );
  scene.onenterframe = () => {
    if (game.input.left) yamada.x -= WALKING_SPEED;
    if (game.input.right) yamada.x += WALKING_SPEED;
    if (game.input.up) yamada.y -= WALKING_SPEED;
    if (game.input.down) yamada.y += WALKING_SPEED;
  }
  game.add(scene);
  game.start();
});
