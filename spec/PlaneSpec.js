describe('Plane', function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it("should start out in the sky", function() {
    expect(plane.isLanded).toBe(false);
  });

  it("should be able to land", function(){
    plane.land()
    expect(plane.isLanded).toBe(true);
  });
  it("should be able to take off", function() {
    plane.takeOff()
    expect(plane.isLanded).toBe(false);
  });

  it('plane cannot land again once it has landed', function() {
    airport.landPlane(plane);
    airport.landPlane(plane);
    expect(plane.land()).toThrow(new Error('Cannot land again'));
  });

});
