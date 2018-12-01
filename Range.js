var Range = function(start, end, step) {

  this.start = start;
  this.end = end;
  this.step = step;

  if (end === undefined)
    end = start;
  if (step === undefined)
    step = 1;
  this.store = [...Array(Math.floor((end-start+step)/step))].map( (n,i) => {
    return start + i*step;
  } )

};

Range.prototype.size = function () {
  return this.store.length;
};

Range.prototype.each = function (callback) {
  this.store.map( n => callback(n) );
};

Range.prototype.includes = function (val) {
  return this.store.filter( n => n === val );
};

// var justOne = new Range(3, 100, 3);
// console.log(justOne.store);
// console.log(justOne.size()); //==1

// var evenDigits = new Range(2, 8, 2);
// var elements = [];
// evenDigits.each(function(val){
//   elements.push(val);
// });
// console.log(elements);

var justOne = new Range(1);
justOne.includes(1).should.eql(true);
justOne.includes(50).should.eql(false);

var threes = new Range(3, 100, 3);
threes.includes(3).should.eql(true);
threes.includes(4).should.eql(false);
threes.includes(33).should.eql(true);
threes.includes(99).should.eql(true);


// var oneToTen = new Range(1, 10);
// console.log(oneToTen.size()); //==10

// var Range2 = function (){}
// Range2.prototype.size = function () {
//   return 1;
// };
// var Range3 = new Range2();
// console.log( Range3.size() );
