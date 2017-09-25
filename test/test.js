import { describe, it } from 'mocha';
import assert from 'assert';
import * as app from '../src/main.js';

describe('AritGeo', () => {
  describe('handle invalid inputs', () => {
    it('should return 0 when the value of the argument is empty', () => {
        const expected = 0;
        assert.equal(app.aritGeo([]), expected);
    });

    it('should return -1 when the value of the argument is a string', () => {
        const expected = -1;
        assert.equal(app.aritGeo('string'), expected);
    });

    it('should return -1 when the value of the argument is an empty string', () => {
        const expected = -1;
        assert.equal(app.aritGeo(''), expected);
    });

    it('should return -1 when the value of the argument is 0', () => {
        const expected = -1;
        assert.equal(app.aritGeo(0), expected);
    });

    it('should return -1 when the value of the argument is less than 1', () => {
        const expected = -1;
        assert.equal(app.aritGeo(-1), expected);
    });

    it('should return -1 when the value of the argument is Infinity', () => {
        const expected = -1;
        assert.equal(app.aritGeo(Infinity), expected);
    });

  });

  describe('handle valid inputs', () => {
    it('should return "Arithmetic"', () => {
        const expected = 'Arithmetic';
        assert.equal(app.aritGeo([5, 7, 9, 11, 13, 15]), expected);
    });

    it('should return "Arithmetic"', () => {
        const expected = 'Arithmetic';
        assert.equal(app.aritGeo([1, 2, 3, 4, 5]), expected);
    });

    it('should return "Geometric"', () => {
        const expected = 'Geometric';
        assert.equal(app.aritGeo([2, 6, 18, 54]), expected);
    });

    it('should return "Geometric"', () => {
        const expected = 'Geometric';
        assert.equal(app.aritGeo([2, 4, 8, 16, 32, 64, 128, 256]), expected);
    });

  });
});