import { CONST_PIXEL_COLOR } from '../types';
import { PixelBuilder } from '../bulder/pixel.builder';

export class Pixel {
  private i: number // line
  private j: number // column
  private color: CONST_PIXEL_COLOR;

  constructor(pixelBuilder: PixelBuilder) {
    this.i = pixelBuilder.Line;
    this.j = pixelBuilder.Column;
    this.color = pixelBuilder.Color;
  }

  public getLineIndex(): number {
    return this.i;
  }

  public getColumnIndex(): number {
    return this.j;
  }

  public getColor(): CONST_PIXEL_COLOR {
    return this.color;
  }

  public setColor(colorInput: CONST_PIXEL_COLOR): void {
    this.color = colorInput;
  }
}
