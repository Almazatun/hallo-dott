import { BitMapBuilder } from '../builder/bit-map.builder';
import { PixelBuilder } from '../builder/pixel.builder';
import { BitMapUseCase, CreateBitMapInput } from './bit-map.use-case';

let bitMapBuilder: BitMapBuilder;
let pixelBuilder: PixelBuilder;
let bitMapUseCase: BitMapUseCase;


beforeEach(() => {
  bitMapBuilder = new BitMapBuilder();
  pixelBuilder = new PixelBuilder();
  bitMapUseCase = new BitMapUseCase(bitMapBuilder, pixelBuilder);
})


describe("Bit Map Use-Case", () => {
  it("bitMap use-case should create bitMapListWithOptions", () => {
    const createBitMapsInput: CreateBitMapInput[] = [
      { columnSize: 3,
        lineSize: 2,
        pixels: '10,01'
      },
      { columnSize: 2,
        lineSize: 4,
        pixels: '10,01,01,01'
      }
    ]

    const result = bitMapUseCase.createList(createBitMapsInput);
    expect(result.length).toEqual(2);
    expect(result).not.toEqual(0);
    expect(result[0].getColumnSize()).toEqual(3);
    expect(result[0].getLineSize()).toEqual(2);
    expect(result[0].getPixels().length).toEqual(6);
    expect(result[1].getPixels().length).toEqual(8);
  })
});
