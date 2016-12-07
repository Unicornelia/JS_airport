describe("Airport", function(){
  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  it("should confirm the plane landed or not", function(){
    expect( airport.confirm(plane) ).toBe(true);
  });

});
