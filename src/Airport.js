var Airport = function(){
  this._planes = [];
  this.capacity = 2;
};

Airport.prototype.landPlane = function(plane) {
  plane.land();
  this._planes.push(plane);
};

Airport.prototype.takeOffPlane = function(plane) {
  plane.takeOff();
  this._planes.pop(plane);
};
