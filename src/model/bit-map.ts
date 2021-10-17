import { Pixel } from './pixel';
import { BitMapBuilder } from '../builder/bit-map.builder';

export class BitMap {
  private lineSize: number;
  private columnSize: number;
  private pixels: Pixel[];

  constructor(bitMapBuilder: BitMapBuilder) {
    this.lineSize = bitMapBuilder.LineSize;
    this.columnSize = bitMapBuilder.ColumnSize;
    this.pixels = bitMapBuilder.Pixels;
  }

  public getColumnSize(): number {
    return this.columnSize;
  }

  public getLineSize(): number {
    return this.lineSize;
  }

  public getPixels(): Pixel[] {
    return this.pixels;
  }
}
