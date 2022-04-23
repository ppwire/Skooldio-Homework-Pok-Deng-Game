const util = require('./util');

describe("Get Point", () => {
   test('Queen should be return 0', () => {
      expect(util.getPoint({ face: 'Queen' })).toBe(0);
   });
   test('King should be return 0', () => {
      expect(util.getPoint({ face: 'King' })).toBe(0);
   });
   test('Jack should be return 0', () => {
      expect(util.getPoint({ face: 'Jack' })).toBe(0);
   });
   test('8 should be return 8', () => {
      expect(util.getPoint({ face: 8 })).toBe(8);
   });
   test('Ace should be return 1', () => {
      expect(util.getPoint({ face: 1 })).toBe(1);
   });
});

describe("Cal Point", () => {
   test('19 should be return 9', () => {
      expect(util.calPoint(19)).toBe(9);
   });

   test('1 should be return 1', () => {
      expect(util.calPoint(1)).toBe(1);
   });

   test('9 should be return 9', () => {
      expect(util.calPoint(9)).toBe(9);
   });

   test('16 should be return 6', () => {
      expect(util.calPoint(16)).toBe(6);
   });
});