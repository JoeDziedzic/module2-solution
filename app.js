(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('BuyListService', BuyListService);

ToBuyController.$inject = ['BuyListService'];
function ToBuyController(BuyListService) {
  var toBuy = this;

    toBuy.item = BuyListService.getItems();

       toBuy.itemBought = function(index){

        BuyListService.itemPurchased(index);
        BuyListService.itemRemove(index);
       };

  }

AlreadyBoughtController.$inject = ['BuyListService'];
function AlreadyBoughtController(BuyListService) {
  var alreadyBought = this;

  alreadyBought.item = BuyListService.getPurchasedList();

}

function BuyListService(){
  var service = this;

  var items = [
    {
       item_name: "Chicken", item_quantity: 6
     },{
       item_name: "Pack of Bacon", item_quantity: 1
     },{
       item_name: "Heavy Cream", item_quantity: 1
     },{
       item_name: "Mushrooms", item_quantity: 10
     },{
       item_name: "Cheese", item_quantity: 4
     }];
  var itemsP = [];

  service.itemPurchased = function(index){

    itemsP.push(items[index]);
  }

  service.getItems = function(){
    return items;
  }
  service.getPurchasedList = function (){
    return itemsP;
  }


  service.itemRemove = function(index){

    items.splice(index, 1);

  }


}

})();
