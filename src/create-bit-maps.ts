import { BitMap } from './model/bit-map';
import { Pixel } from './model/pixel';

export interface createBitMapInput {
  lineSize: number
  columnSize: number
  pixels: string
}

export function createBitmaps(createBitMapsInput: createBitMapInput[]): BitMap[] {
  const bitmaps: BitMap[] = [];

  createBitMapsInput.forEach((createBitMapInput) => {
    const { lineSize, columnSize, pixels: stringPixels } = createBitMapInput;

    const pixels: Pixel[] = [];
    const lines = stringPixels.split(',');

    for (let line = 0; line < lineSize; line += 1) {
      for (let column = 0; column < columnSize; column += 1) {
        const pixel = new Pixel(line, column, Number(lines[line].charAt(column)));
        pixels.push(pixel);
      }
    }
    const bitmap = new BitMap(lineSize, columnSize, pixels);
    bitmaps.push(bitmap);
  });

  return bitmaps;
}
