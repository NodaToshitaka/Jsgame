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
  const TILE_SIZE = 32;
  const WALKING_SPEED = 4;
  const scene = new Scene();
  const tilemap = new Tilemap('img/tile.png');
  tilemap.data = map;
  tilemap.x = TILE_SIZE*4 - TILE_SIZE/2;
  tilemap.y = TILE_SIZE*3 - TILE_SIZE/2;
  scene.add(tilemap);
  const yamada = new Tile('img/yamada.png');
  yamada.x = yamada.y = TILE_SIZE*5 - TILE_SIZE/2;
  tilemap.add( yamada );
  scene.onenterframe = () => {
    if ((tilemap.x - TILE_SIZE/2) % TILE_SIZE === 0 && (tilemap.y - TILE_SIZE/2) % TILE_SIZE === 0) {
      tilemap.vx = tilemap.vy = 0;
      if (game.input.left) tilemap.vx = WALKING_SPEED;
      if (game.input.right) tilemap.vx = -1 * WALKING_SPEED;
      if (game.input.up) tilemap.vy = WALKING_SPEED;
      if (game.input.down) tilemap.vy = -1 * WALKING_SPEED;
    }
  }
  game.add(scene);
  game.start();
});
