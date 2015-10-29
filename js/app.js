(function() {


var app = angular.module('store', []);

app.controller('StoreController', function() {
  this.product = gem;
  this.techstack = meanStack;

});

app.controller('MeanController', function() {
  this.techstack = meanStack;

});

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .',
    canPurchase: true,
    soldOut: false,
  }

  var meanStack = {
    frontEnd: 'Angular',
    backEnd: 'node.js',
    database: 'MONGO DB',
  }
}) ();
