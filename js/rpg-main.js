'use strict'

addEventListener('load', () => {
  const game = new Game();
  const WALKING_SPEED = 4;
  const scene = new Scene();
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
