/**
 * Copyright (c) 2017-present, Evosphere.
 * All rights reserved.
 */
import isNumberBetween from '../src/isNumberBetween';

it('should return true', () => {
  expect(isNumberBetween(5, 1, 10)).toBe(true);
});

it('should return false', () => {
  expect(isNumberBetween(5, 15, 10)).toBe(false);
});