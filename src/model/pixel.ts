import { CONST_PIXEL_COLOR } from '../types';

export class Pixel {
  private i: number // line
  private j: number // column
  private color: CONST_PIXEL_COLOR;

  constructor(i: number, j: number, color: CONST_PIXEL_COLOR) {
    this.i = i;
    this.j = j;
    this.color = color;
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
