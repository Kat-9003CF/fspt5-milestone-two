const { expect } = require("chai");
const Apartment = require("../src/classes/apartment");
const { isClass } = require("./utilities");

let apartment = null;

describe("Apartment", () => {
  beforeEach(() => {
    apartment = new Apartment();
  });

  describe("Apartment", () => {
    it("should have the properties of the Building class", () => {
      expect(apartment.hasOwnProperty("timesWindowsWashed")).to.equal(true);
      expect(apartment.hasOwnProperty("freeParkingSpaces")).to.equal(true);
    });
  });

  describe("the moved(people, inOrOut) method", () => {
    it("should increase the tenants when tenants move in", () => {
      apartment.moved(2, "out");
      expect(apartment.tenants).to.equal(2);
    });
    it("should increase the tenants when tenants move in", () => {
      apartment.moved(2, "in");
      expect(apartment.tenants).to.equal(6);
    });
  });
});
