'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;
  var sunnyWeather;
  var stormyWeather;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land', 'takeOff']);
    weather = new Weather();
  });


  it('has no planes on default', function(){
    expect(airport._planes).toEqual([]);
  });

  it('has a default capacity of 2', function(){
    expect(airport.capacity).toEqual(2);
  });

  describe('in bad weather', function() {
    it('cannot accept planes to land due to bad weather', function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function () {airport.landPlane(plane)}).toThrow('Cannot land due to bad weather');
    });

    it('cannot let planes to take off due to bad weather', function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function () {airport.takeOffPlane(plane)}).toThrow('Cannot take off due to bad weather');
    });

  });

  describe('landing', function() {

    it('can accept a plane for landing', function(){
      spyOn(weather, 'isStormy').and.returnValue(false);
      airport.landPlane(plane);
      expect(airport._planes).toContain(plane);
    });

    it("should confirm the plane has landed or not", function(){
      spyOn(weather, 'isStormy').and.returnValue(false);
      airport.landPlane(plane);
      expect(plane.land).toHaveBeenCalled();
    });
  });

  describe('taking off', function() {

    it("should let a plane take off", function() {
      spyOn(weather, 'isStormy').and.returnValue(false);
      airport.takeOffPlane(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });

    it('should remove the plane from the airport', function() {
      spyOn(weather, 'isStormy').and.returnValue(false);
      airport.landPlane(plane);
      airport.takeOffPlane(plane);
      expect(airport._planes).not.toContain(plane);
    });
  });
});
