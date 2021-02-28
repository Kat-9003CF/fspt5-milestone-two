const { expect } = require("chai");
const Building = require("../src/classes/building");
const { isClass } = require("./utilities");

let building = null;

describe("Building", () => {
  beforeEach(() => {
    building = new Building();
  });

  describe("Building", () => {
    it("should be a class", () => {
      expect(isClass(Building)).to.be.true;
    });
    it("should have a number of times the windows have been cleaned", () => {
      expect(building.hasOwnProperty("timesWindowsWashed")).to.equal(true);
    });
    it("should have a number of parking spaces", () => {
      expect(building.hasOwnProperty("freeParkingSpaces")).to.equal(true);
    });
  });

  describe("The washWindows() method", () => {
    it("should update timesWindowsWashed when windows are washed", () => {
      building.washWindows();
      building.washWindows();
      expect(building.timesWindowsWashed).to.equal(2);
    });
  });

  describe("The carArrives(num) method", () => {
    it("should keep track of parking spaces when cars arrive", () => {
      building.carArrives(2);
      building.carArrives(3);
      expect(building.freeParkingSpaces).to.equal(45);
    });
    it("should return Insufficient parking spaces available when parking spaces run out", () => {
      building.carArrives(51);
      expect(building.freeParkingSpaces).to.equal(
        "Insufficient parking spaces available"
      );
    });
  });
});
