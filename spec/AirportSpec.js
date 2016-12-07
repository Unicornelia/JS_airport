  'use strict';

  describe('Airport', function(){
    var airport;
    var plane;

    beforeEach(function(){
      airport = new Airport();
      plane = jasmine.createSpyObj('plane',['land']);
    });

    it('has no planes on default', function(){
      expect(airport._planes).toEqual([]);
    });

    it('can accept a plane for landing', function(){
      airport.landPlane(plane);
      expect(airport._planes).toEqual([plane]);
    });

    it("should confirm the plane has landed or not", function(){
      airport.landPlane(plane);
      expect(plane.land).toHaveBeenCalled();
    });
  });
