var Airport = function(){
  this._planes = [];
  this.capacity = 2;
  this.weather = new Weather();
};

Airport.prototype.landPlane = function(plane) {
  if (this.weather.isStormy() === true) {
    throw ('Cannot land due to bad weather');
  } else {
    plane.land();
    this._planes.push(plane);
  }
};

Airport.prototype.takeOffPlane = function(plane) {
  if (this.weather.isStormy() === true) {
    throw ('Cannot take off due to bad weather');
  } else {
    plane.takeOff();
    this._planes.pop(plane);
  }
};
