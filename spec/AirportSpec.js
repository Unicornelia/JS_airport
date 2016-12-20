'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;
  var sunnyWeather;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land', 'takeOff']);
    weather = new Weather();
    sunnyWeather = weather.isStormy = false;

  });

  it('has no planes on default', function(){
    expect(airport._planes).toEqual([]);
  });

  it('has a default capacity of 2', function(){
    expect(airport.capacity).toEqual(2);
  });

  describe('landing', function() {

    it('can accept a plane for landing', function(){
      airport.landPlane(plane);
      expect(airport._planes).toContain(plane);
    });

    it("should confirm the plane has landed or not", function(){
      airport.landPlane(plane);
      expect(plane.land).toHaveBeenCalled();
    });
  });

  describe('taking off', function() {

    it("should let a plane take off", function() {
      airport.takeOffPlane(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });
    it('should remove the plane from the airport', function() {
      airport.landPlane(plane);
      airport.takeOffPlane(plane);
      expect(airport._planes).not.toContain(plane);
    });
  });
});
