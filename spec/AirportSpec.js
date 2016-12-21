'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land', 'takeOff']);
    weather = new Weather();
  });

  it('should spy on isStormy', function () {
    var spy = spyOn(weather, 'isStormy');
    weather.isStormy();
    expect(spy).toHaveBeenCalled();
  });

  it('should spy on isStormy and return false', function() {
    var spy = spyOn(weather, 'isStormy').and.returnValue(false);
    expect(weather.isStormy()).toEqual(false);
  });

  it('has no planes on default', function(){
    expect(airport._planes).toEqual([]);
  });

  it('has a default capacity of 2', function(){
    expect(airport.capacity).toEqual(2);
  });

  describe('in bad weather', function() {
    it('airport has stormy weather', function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(weather.isStormy()).toEqual(true);
    });

    it('airport has sunny weather', function() {
      spyOn(weather, 'isStormy').and.returnValue(false);
      expect(weather.isStormy()).toEqual(false);
    });

    it('cannot accept planes to land due to bad weather', function() {
      var spy = spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function() {
        airport.landPlane(plane);
      }).toThrow(new Error('Cannot land due to bad weather'));
    });

    it('cannot let planes to take off due to bad weather', function() {
      var spy = spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function() {
        airport.takeOffPlane(plane);
      }).toThrow(new Error('Cannot take off due to bad weather'));
    });
  });

  describe('landing', function() {

    it('can accept a plane for landing', function(){
      var spy = spyOn(weather, 'isStormy').and.returnValue(false);
      airport.landPlane(plane);
      expect(airport._planes).toContain(plane);
    });

    it("should confirm the plane has landed or not", function(){
      var spy = spyOn(weather, 'isStormy').and.returnValue(false);
      airport.landPlane(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it('cannot accept more planes than the default capacity', function() {
      var spy = spyOn(weather, 'isStormy').and.returnValue(false);
      airport.landPlane(plane);
      airport.landPlane(plane);
      airport.landPlane(plane);
      expect(function() {airport.isFull()}).toThow('Cannot land, airport is full');
    });
  });

  describe('taking off', function() {

    it("should let a plane take off", function() {
      var spy = spyOn(weather, 'isStormy').and.returnValue(false);
      airport.landPlane(plane);
      airport.takeOffPlane(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });

    it('should remove the plane from the airport', function() {
      var spy = spyOn(weather, 'isStormy').and.returnValue(false);
      airport.landPlane(plane);
      airport.takeOffPlane(plane);
      expect(airport._planes).not.toContain(plane);
    });

    it('cannot take off planes when airport is empty', function() {
      var spy = spyOn(weather, 'isStormy').and.returnValue(false);
      airport.isEmpty();
      airport.takeOffPlane(plane);
      expect(function() {airport.isEmpty()}).toThow('Cannot take off, airport is empty');
    });
  });
});
