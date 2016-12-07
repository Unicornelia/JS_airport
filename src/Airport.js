var Airport = function(){
  this._planes = [];
};

Airport.prototype.landPlane = function(plane){
  plane.land();
  this._planes.push(plane);
};
