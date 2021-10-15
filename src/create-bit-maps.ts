import { BitMap } from './model/bit-map';
import { Pixel } from './model/pixel';
import { PixelBuilder } from './bulder/pixel.builder';
import { BitMapBuilder } from './bulder/bit-map.builder';

export interface CreateBitMapInput {
  lineSize: number
  columnSize: number
  pixels: string
}

export function createBitmaps(createBitMapsInput: CreateBitMapInput[]): BitMap[] {
  const bitmaps: BitMap[] = [];

  createBitMapsInput.forEach((createBitMapInput) => {
    const { lineSize, columnSize, pixels: stringPixels } = createBitMapInput;

    const pixels: Pixel[] = [];
    const lines = stringPixels.split(',');

    for (let line = 0; line < lineSize; line += 1) {
      for (let column = 0; column < columnSize; column += 1) {
        const pixel = new PixelBuilder()
          .setLine(line)
          .setColumn(column)
          .setColor(Number(lines[line].charAt(column)))
          .build();

        pixels.push(pixel);
      }
    }
    const bitmap = new BitMapBuilder()
      .setLineSize(lineSize)
      .setColumnSize(columnSize)
      .setPixels(pixels)
      .build();

    bitmaps.push(bitmap);
  });

  return bitmaps;
}
