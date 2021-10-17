import fs from 'fs';
import readline from 'readline';

import { BitMapUseCase, CreateBitMapInput } from './domain/bit-map.use-case';
import { BitMapBuilder } from './bulder/bit-map.builder';
import { PixelBuilder } from './bulder/pixel.builder';

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
    console.log(`Line from file: ${line.trim()}`);
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
        console.log('==>LINE', line);
        console.log('==>lastBitMapListElement', lastBitMapListElement);
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
    console.log(bitMapListWithOptions);
  });
}
