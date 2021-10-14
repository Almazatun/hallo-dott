import fs from 'fs';
import readline from 'readline';
import { createBitMapInput, createBitmaps } from './create-bit-maps';

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.

const listBitMaps: createBitMapInput[] = [];

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    // if (line === '') {
    //   return null;
    // }

    try {
      console.log(`Line from file: ${line.trim()}`);
      if (line.includes(' ')) {
        const [lineSize, columnSize] = line.split(' ');
        console.log('==>', lineSize);
        console.log('==>', columnSize);

        const bitMap: createBitMapInput = {
          lineSize: Number(lineSize),
          columnSize: Number(columnSize),
          pixels: '',
        };

        listBitMaps.push(bitMap);
      }
      if (!line.includes(' ')) {
        if (listBitMaps[listBitMaps.length - 1] !== undefined) {
          console.log('==>PIXELS', line);
          console.log('==>PIXELS_1', listBitMaps[listBitMaps.length - 1]);
          const lineArr = [...line.trim()];

          if (lineArr.length === listBitMaps[listBitMaps.length - 1].columnSize) {
            if (listBitMaps[listBitMaps.length - 1].pixels === '') {
              listBitMaps[listBitMaps.length - 1].pixels = line;
            } else {
              listBitMaps[listBitMaps.length - 1].pixels += `,${line}`;
            }
          }
        }
      }
    } catch (error) {
      throw new Error(`Line parsing error: ${error}`);
    }
  });
}
(async () => {
  await processLineByLine();
  console.log('result', listBitMaps);
})();
