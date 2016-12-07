describe('Plane', function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it("should be able to land", function(){
    plane.land()
    expect(plane.isLanded).toBe(true);
  });
  it("should be able to take off", function() {
    plane.takeOff()
    expect(plane.isLanded).toBe(false);
  });

});
