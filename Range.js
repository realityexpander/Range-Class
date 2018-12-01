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
  console.log(this.start, this.end, this.step);

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

// var justOne = new Range(1);
// console.log(justOne.store);
// console.log(justOne.size()); //==1

// var evenDigits = new Range(2, 8, 2);
// var elements = [];
// evenDigits.each(function(val){
//   elements.push(val);
// });
// console.log(evenDigits.includes(2)) //True
// console.log(elements);

// var justOne = new Range(1);
// justOne.includes(1).should.eql(true);
// justOne.includes(50).should.eql(false);

// var threes = new Range(3, 100, 3);
// threes.includes(3).should.eql(true);
// threes.includes(4).should.eql(false);
// threes.includes(33).should.eql(true);
// threes.includes(99).should.eql(true);


// var oneToTen = new Range(1, 10);
// console.log(oneToTen.size()); //==10

// var Range2 = function (){}
// Range2.prototype.size = function () {
//   return 1;
// };
// var Range3 = new Range2();
// console.log( Range3.size() );


var countdown = new Range(10, 0, -1);
var elements = [];
countdown.each(function(val){
  elements.push(val);
});
console.log(elements); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
