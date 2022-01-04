'use strict'
class Tile extends Sprite {
  constructor( img, size ) {
    super(img, size, size);
    this.size = size || 32;
  }
}