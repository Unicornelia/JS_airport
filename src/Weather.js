  var Weather = function(){
  };

  Weather.prototype.isStormy = function(){
    if (Math.floor(Math.random() * 2) === 0) {
      return true;
    }
    else {
      return false;
    }
  };
