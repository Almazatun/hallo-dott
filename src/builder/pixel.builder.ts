import { CONST_PIXEL_COLOR } from '../types';
import { Pixel } from '../model/pixel';

export class PixelBuilder {
  private line: number
  private column: number
  private color: CONST_PIXEL_COLOR

  constructor() {
    this.line = 0;
    this.column = 0;
    this.color = 0;
  }

  public get Line(): number {
    return this.line;
  }

  public setLine(line: number): PixelBuilder {
    this.line = line;
    return this;
  }

  public get Column(): number {
    return this.column;
  }

  public setColumn(column: number): PixelBuilder {
    this.column = column;
    return this;
  }

  get Color(): CONST_PIXEL_COLOR {
    return this.color;
  }

  public setColor(color: CONST_PIXEL_COLOR): PixelBuilder {
    this.color = color;
    return this;
  }

  public build(): Pixel {
    return new Pixel(this);
  }
}
