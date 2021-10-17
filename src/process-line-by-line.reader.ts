import fs from 'fs';
import readline from 'readline';

import { BitMapUseCase, CreateBitMapInput } from './domain/bit-map.use-case';
import { BitMapBuilder } from './builder/bit-map.builder';
import { PixelBuilder } from './builder/pixel.builder';
import { calculateDistanceFromEachPixelToNearestWhite } from './calculate-distance';

export function processLineByLine() {
  const inputFileName: string = 'input.txt';
  const fileStream = fs.createReadStream(inputFileName);
  let bitMapList: CreateBitMapInput[] = [];

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    // console.log(`Line from file: ${line.trim()}`);
    if (line.includes(' ')) {
      const [lineSize, columnSize] = line.split(' ');

      const bitMap: CreateBitMapInput = {
        lineSize: Number(lineSize),
        columnSize: Number(columnSize),
        pixels: '',
      };

      bitMapList = [...bitMapList, bitMap];
    }
    if (!line.includes(' ')) {
      const lastBitMapListElement = bitMapList[bitMapList.length - 1];
      if (lastBitMapListElement !== undefined) {
        const isValidColumnSizeCurrentLine: boolean = [...line.trim()].length === lastBitMapListElement.columnSize;

        if (isValidColumnSizeCurrentLine) {
          if (lastBitMapListElement.pixels === '') {
            lastBitMapListElement.pixels = line;
          } else {
            lastBitMapListElement.pixels += `,${line}`;
          }
        }
      }
    }
  });

  rl.on('close', () => {
    const bitMapBuilder = new BitMapBuilder();
    const pixelBuilder = new PixelBuilder();
    const bitMapUseCase = new BitMapUseCase(bitMapBuilder, pixelBuilder);

    const bitMapListWithOptions = bitMapUseCase.createList(bitMapList);

    for (const bitMap of bitMapListWithOptions) {
      const currentBitMapPixels = bitMap.getPixels();
      const currentBitMapLineSize = bitMap.getLineSize();

      for (let line = 0; line < currentBitMapLineSize; line += 1) {
        const result = currentBitMapPixels.filter(pixel => pixel.getLineIndex() === line)
          .map(pixel => calculateDistanceFromEachPixelToNearestWhite(currentBitMapPixels, pixel))
          .join(' ');

        console.log(`${result}\n`);
      }
      console.log('\n');
    }
  });
}
