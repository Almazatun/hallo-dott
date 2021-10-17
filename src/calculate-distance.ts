import { Pixel } from './model/pixel';
import { CONST_PIXEL_COLOR } from './types';

export function calculateDistanceFromEachPixelToNearestWhite(currentBitMapPixels: Pixel[], pixel: Pixel): number {
  let result: number = 0;
  const distanceList: number[] = [];

  if (pixel.getColor() === CONST_PIXEL_COLOR.WHITE) {
    result = 0;
  }

  currentBitMapPixels.filter(currentPixel => currentPixel.getColor() === CONST_PIXEL_COLOR.WHITE)
    .forEach((currentPixel) => {
      let distance: number = 0;
      distance = Math.abs(currentPixel.getLineIndex() - pixel.getLineIndex())
          + Math.abs(currentPixel.getColumnIndex() - pixel.getColumnIndex());

      distanceList.push(distance);
    });

  if (distanceList.length >= 1) {
    const minDistance = Math.min(...distanceList);
    result = minDistance;
  }

  return result;
}
