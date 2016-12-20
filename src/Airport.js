var Airport = function(){
  this._planes = [];
  this.capacity = 2;
  this.weather = new Weather();
};

Airport.prototype.landPlane = function(plane) {
  if (this.weather.isStormy() === true) {
    throw ('Cannot land due to bad weather');
  }
  if (this._planes.length >= this.capacity) {
    throw ('Cannot land, airport is full');
  } else {
    plane.land();
    this._planes.push(plane);
  }
};

Airport.prototype.takeOffPlane = function(plane) {
  if (this.weather.isStormy() === true) {
    throw ('Cannot take off due to bad weather');
  }
  if (this._planes.length <= 0) {
    throw ('Cannot take off, airport is empty');
  } else {
    plane.takeOff();
    this._planes.pop(plane);
  }
};

Airport.prototype.isFull = function() {
  return this._planes.length >= this.capacity;
};

Airport.prototype.isEmpty = function() {
  return this._planes.length <= 0;
};
