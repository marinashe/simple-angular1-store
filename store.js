"use strict";

var m = angular.module("store", []);

m.controller('StoreCtrl', function StoreCtrl($http) {
    this.loaded = false;
    this.loadingMessage = "Loading inventory...";
    $http.get('inventory.json').then(resp => {
        this.inventory = resp.data;
        this.loaded = true;
    }).catch(()=> {
        this.loadingMessage = "Something went terribly wrong. sorry."
    });

    this.cart = [
        // {product:this.inventory[0], amount: 1}
    ];

    this.addToCart = product => {
        // TODO: check if id already exists
        this.cart.push(
            {product: product, amount: 1}
        );
    };

});
