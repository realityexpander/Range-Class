var Range = function(start, end, step) {

  if (start === undefined )
    return null;
  if (end === undefined)
    end = start;
  if (step === undefined)
    if(start > end)
      step = -1;
     else
      step = 1;
  
  this.start = start;
  this.end   = end;
  this.step  = step;
};

Range.prototype.size = function () {
  return Math.floor((this.end-this.start+this.step)/this.step);
};

Range.prototype.each = function (callback) {
  if(this.step > 0) {
    for( let i = this.start; i <= this.end; i+=this.step)
      callback(i);
  } else {
    for( let i = this.start; i >= this.end; i+=this.step) {
      callback(i);
    }
  }
};

Range.prototype.includes = function (val) {
  for( let i = this.start; i <= this.end; i+=this.step)
    if (val === i) return true;
  return false;
};
