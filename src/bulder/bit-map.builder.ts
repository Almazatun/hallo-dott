import { Pixel } from '../model/pixel';
import { BitMap } from '../model/bit-map';

export class BitMapBuilder {
  private lineSize: number;
  private columnSize: number;
  private pixels: Pixel[];

  constructor() {
    this.lineSize = 0;
    this.columnSize = 0;
    this.pixels = [];
  }

  setLineSize(lineSize: number): BitMapBuilder {
    this.lineSize = lineSize;
    return this;
  }

  get LineSize(): number {
    return this.lineSize;
  }

  setColumnSize(columnSize: number): BitMapBuilder {
    this.columnSize = columnSize;
    return this;
  }

  get ColumnSize(): number {
    return this.columnSize;
  }

  setPixels(pixels: Pixel[]): BitMapBuilder {
    this.pixels = pixels;
    return this;
  }

  get Pixels(): Pixel[] {
    return this.pixels;
  }

  build(): BitMap {
    return new BitMap(this);
  }
}
