'use strict'

class Tilemap {
  constructor( img, size ) {
    this.img = new Image();
    this.img.src = img;
    this.x = this.y = 0;
    this.size = size || 32;
    this.data = [];
    this.tiles = [];
  }
  add(tile) {
    if(tile instanceof Tile)this.tiles.push(tile);
    else consol.error('Tilemapに追加できるのはTileだけだよ！')
  }
  update( canvas ) {
    this.render( canvas );
    this.onenterframe();
    for(let i=0; i<this.tiles.length; i++) {
      this.tiles[i].update(canvas);
    }
  }
  render( canvas ) {
    for (let y=0; y<this.data.length; y++) {
      const _tileY = this.size * y + this.y;
      if ( _tileY <-1 * this.size || _tileY > canvas.height ) continue;
      for (let x=0; x<this.data[y].length; x++) {
        const _tileX = this.size * x + this.x
        if ( _tileX < -1 * this.size || _tileX > canvas.width ) continue;
        const _frameX = this.data[y][x] % (this.img.width / this.size);
        const _frameY = ~~(this.data[y][x] / (this.img.width / this.size));
        const _ctx = canvas.getContext('2d');
        _ctx.drawImage(
          this.img,
          this.size * _frameX,
          this.size * _frameY,
          this.size,
          this.size,
          _tileX,
          _tileY,
          this.size,
          this.size
        );
      }
    }
  }
  onenterframe() {}
}