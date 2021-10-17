import { BitMapBuilder } from '../builder/bit-map.builder';
import { PixelBuilder } from '../builder/pixel.builder';
import { BitMap } from '../model/bit-map';
import { Pixel } from '../model/pixel';

export interface CreateBitMapInput {
  lineSize: number
  columnSize: number
  pixels: string
}

export class BitMapUseCase {
  constructor(
    private readonly bitMapBuilder: BitMapBuilder,
    private readonly pixelBuilder: PixelBuilder,
  ) {}

  public createList(createBitMapsInput: CreateBitMapInput[]): BitMap[] {
    const bitmaps: BitMap[] = [];

    createBitMapsInput.forEach((createBitMapInput) => {
      const { lineSize, columnSize, pixels } = createBitMapInput;

      const pixelListBitMap = this.createPixelList(lineSize, columnSize, pixels);
      const bitMap = this.create(lineSize, columnSize, pixelListBitMap);

      bitmaps.push(bitMap);
    });

    return bitmaps;
  }

  private createPixelList(lineSize: number, columnSize: number, pixelsString: string): Pixel[] {
    const pixels: Pixel[] = [];
    const lines = pixelsString.split(',');

    for (let line = 0; line < lineSize; line += 1) {
      for (let column = 0; column < columnSize; column += 1) {
        const pixel = this.pixelBuilder
          .setLine(line)
          .setColumn(column)
          .setColor(Number(lines[line].charAt(column)))
          .build();

        pixels.push(pixel);
      }
    }

    return pixels;
  }

  private create(lineSize: number, columnSize: number, pixelList: Pixel[]): BitMap {
    const bitmap = this.bitMapBuilder
      .setLineSize(lineSize)
      .setColumnSize(columnSize)
      .setPixels(pixelList)
      .build();

    return bitmap;
  }
}
