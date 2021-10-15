import fs from 'fs';
import readline from 'readline';

import { CreateBitMapInput } from './create-bit-maps';

export async function processLineByLine(): Promise<CreateBitMapInput[]> {
  const inputFileName: string = 'input.txt';
  const fileStream = fs.createReadStream(inputFileName);
  let BitMapList: CreateBitMapInput[] = [];

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    try {
      console.log(`Line from file: ${line.trim()}`);
      if (line.includes(' ')) {
        const [lineSize, columnSize] = line.split(' ');

        const bitMap: CreateBitMapInput = {
          lineSize: Number(lineSize),
          columnSize: Number(columnSize),
          pixels: '',
        };

        BitMapList = [...BitMapList, bitMap];
      }
      if (!line.includes(' ')) {
        const lastBitMapListElement = BitMapList[BitMapList.length - 1];
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
    } catch (error) {
      throw new Error(`Line parsing error: ${error}`);
    }
  });

  return BitMapList;
}
