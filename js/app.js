(function() {


var app = angular.module('store', []);

app.controller('StoreController', function() {
  this.products = gems;
});

app.controller("PanelController", function() {
  this.tab = 1; //sets initial tab
  this.selectTab = function(setTab) { //related to the panel.selectTab(). Selects tab and removes logic from HTML
    this.tab = setTab;
  }
  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  }; 

});


  var gems = [
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'An incredible gem, imported from the farthest lands of..',
    images: [
      {
        full: 'dh-01-full.jpeg',
        thumb: 'dh-01-thumb.jpg'
      }
    ],
    canPurchase: true,
    soldOut: false,
  },
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: "Half the price but it's a subpar gem, really...",
    images: [
      {
        full: 'dh-01-full.jpeg',
        thumb: 'dh-01-thumb.jpg'
      }
    ],
    canPurchase: false,
  }

];

}) ();
