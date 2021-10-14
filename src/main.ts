import { createBitMapInput, createBitmaps } from './create-bit-maps';

const list: createBitMapInput[] = [
  {
    lineSize: 3,
    columnSize: 4,
    pixels: '0001,0010,0110',
  },
];

const createBitMaps = createBitmaps(list);

console.log('------>', createBitMaps);
