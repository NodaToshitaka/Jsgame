'use strict'

class Game {
  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.canvas.width = width || 320;
    this.canvas.height = height || 320;
    this.objs = [];
  }

  start() {
    this._mainLoop();
  }
  _mainLoop() {
    const ctx = this.canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for(let i=0; i<this.objs.length; i++) {
      this.objs[i].update(this.canvas);
    }
    requestAnimationFrame(this._mainLoop.bind(this));
  }
  add(obj) {
    this.objs.push(obj);
  }
}