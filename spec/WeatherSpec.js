  'use strict';

  describe('Weather', function(){

    var weather;

    beforeEach(function(){
      weather = new Weather();
    });


    it('weather forecast makes it false', function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(weather.isStormy()).toEqual(false);
    });

    it('weather forecast makes it true', function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(weather.isStormy()).toEqual(true);
    });
  });
