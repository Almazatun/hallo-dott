import { BitMapBuilder } from '../builder/bit-map.builder';

let bitMapBuilderEntity: BitMapBuilder;

beforeEach(() => {

  bitMapBuilderEntity = new BitMapBuilder()
    .setLineSize(5)
    .setColumnSize(5)
    .setPixels([])
})

describe("Bit Map entity builder", () => {

  it("line size should be set value", () => {
    expect(bitMapBuilderEntity.LineSize).toEqual(5);
    expect(bitMapBuilderEntity.LineSize).not.toEqual(1);
  })

  it("line column size should be set value", () => {
    expect(bitMapBuilderEntity.ColumnSize).toEqual(5);
    expect(bitMapBuilderEntity.ColumnSize).not.toEqual(4);
  })
});
