import {
  realMatchesday1,
  realMatchesday2,
  realMatchesday3,
  realMatchesday4,
  realMatchesday5,
  realMatchesday6,
  realMatchesday7,
  realMatchesday8,
} from "./RealMatches";

import {
  testingMatchesday1,
  testingMatchesday2,
  testingMatchesday3,
  testingMatchesday4,
  testingMatchesday5,
  testingMatchesday6,
  testingMatchesday7,
  testingMatchesday8,
} from "./TestMatches";

const TESTING = false;

export const matchesday1 = TESTING ? testingMatchesday1 : realMatchesday1;
export const matchesday2 = TESTING ? testingMatchesday2 : realMatchesday2;
export const matchesday3 = TESTING ? testingMatchesday3 : realMatchesday3;
export const matchesday4 = TESTING ? testingMatchesday4 : realMatchesday4;
export const matchesday5 = TESTING ? testingMatchesday5 : realMatchesday5;
export const matchesday6 = TESTING ? testingMatchesday6 : realMatchesday6;
export const matchesday7 = TESTING ? testingMatchesday7 : realMatchesday7;
export const matchesday8 = TESTING ? testingMatchesday8 : realMatchesday8;

export const allMatches = [
  ...matchesday1,
  ...matchesday2,
  ...matchesday3,
  ...matchesday4,
  ...matchesday5,
  ...matchesday6,
  ...matchesday7,
  ...matchesday8,
];
