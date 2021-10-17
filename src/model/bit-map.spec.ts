import { BitMapBuilder } from '../builder/bit-map.builder';
import { BitMap } from './bit-map';

let bitMapBuilder: BitMapBuilder;
let bitMap: BitMap;

beforeEach(() => {
  bitMapBuilder = new BitMapBuilder()
  bitMap = bitMapBuilder
    .setLineSize(1)
    .setColumnSize(2)
    .setPixels([])
    .build()
})


describe("Bit Map model", () => {
  it("bitMap line size should be equal 1", () => {
    expect(bitMap.getLineSize()).toEqual(1);
    expect(bitMap.getLineSize()).not.toEqual(2);
  })

  it("bitMap column size should be equal 2", () => {
    expect(bitMap.getColumnSize()).toEqual(2);
    expect(bitMap.getColumnSize()).not.toEqual(3);
  })

  it("bitMap pixels should be equal empty array", () => {
    expect(bitMap.getPixels()).toEqual([]);
  })
});
