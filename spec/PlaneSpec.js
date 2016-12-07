describe('Plane', function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it("should have status landed", function(){
    expect( plane.land() ).toBe(true);
  });

});
