var Plane = function(isLanded){
  this.isLanded = isLanded || false;
};

Plane.prototype.land = function(){
  if (this.isLanded == false) {
    return this.isLanded = true;
    console.log("The plane has landed.");
  } else {
    throw new Error('Cannot land again');
  }
};

Plane.prototype.takeOff = function() {
  this.isLanded = false;
  console.log("The plane has taken off.");
};
