var Plane = function(){
  this.isLanded = false;
};

Plane.prototype.land = function(){
  this.isLanded = true;
  console.log("The plane has landed.");
};

Plane.prototype.takeOff = function() {
  this.isLanded = false;
  console.log("The plane has taken off.");
};
