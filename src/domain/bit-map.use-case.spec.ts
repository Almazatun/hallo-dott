import { BitMapBuilder } from '../builder/bit-map.builder';
import { PixelBuilder } from '../builder/pixel.builder';
import { BitMapUseCase, CreateBitMapInput } from './bit-map.use-case';
import { CONST_PIXEL_COLOR } from '../types';

let bitMapBuilder: BitMapBuilder;
let pixelBuilder: PixelBuilder;
let bitMapUseCase: BitMapUseCase;
export let createBitMapsInput: CreateBitMapInput[];


beforeEach(() => {
  bitMapBuilder = new BitMapBuilder();
  pixelBuilder = new PixelBuilder();
  bitMapUseCase = new BitMapUseCase(bitMapBuilder, pixelBuilder);
  createBitMapsInput = [
    { columnSize: 3,
      lineSize: 2,
      pixels: '10,01'
    },
    { columnSize: 2,
      lineSize: 4,
      pixels: '10,01,01,01'
    }
  ]
})


describe("Bit Map Use-Case", () => {
  it("use-case createList method should create bitMapListWithOptions", () => {

    const result = bitMapUseCase.createList(createBitMapsInput);
    expect(result.length).toEqual(2);
    expect(result).not.toEqual(0);
    expect(result[0].getColumnSize()).toEqual(3);
    expect(result[0].getLineSize()).toEqual(2);
    expect(result[0].getPixels().length).toEqual(6);
    expect(result[1].getPixels().length).toEqual(8);
  })

  it("use-case private method should create pixel list", () => {

    const bitMapLineSize =  createBitMapsInput[0].lineSize;
    const bitMapColumnSize =  createBitMapsInput[0].columnSize;
    const bitMapPixelsString =  createBitMapsInput[0].pixels;

    const result = bitMapUseCase["createPixelList"](bitMapLineSize, bitMapColumnSize, bitMapPixelsString)

    expect(result.length).toEqual(6);
    expect(result[0].getColor()).toEqual(CONST_PIXEL_COLOR.WHITE);
    expect(result[1].getColor()).toEqual(CONST_PIXEL_COLOR.BLACK);
    expect(result[1].getColor()).not.toEqual(CONST_PIXEL_COLOR.WHITE);
  })

  it("use-case private method should create bitMap", () => {

    const bitMapLineSize =  createBitMapsInput[1].lineSize;
    const bitMapColumnSize =  createBitMapsInput[1].columnSize;
    const bitMapPixelsString =  createBitMapsInput[1].pixels;
    const pixelList = bitMapUseCase["createPixelList"](bitMapLineSize, bitMapColumnSize, bitMapPixelsString)

    const result = bitMapUseCase["create"](bitMapLineSize, bitMapColumnSize, pixelList)

    expect(result.getColumnSize()).toEqual(2);
    expect(result.getLineSize()).toEqual(4);
    expect(result.getPixels()[0].getColor()).toEqual(CONST_PIXEL_COLOR.WHITE);
  })
});
