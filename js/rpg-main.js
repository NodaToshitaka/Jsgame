'use strict'

addEventListener('load', () => {
  const game = new Game();
  const yamada = new Sprite('img/yamada.png');
  game.add(yamada)
  game.start();
})
