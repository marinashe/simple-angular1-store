"use strict";

var m = angular.module("store", []);

m.controller('StoreCtrl', function () {
    this.inventory = [
        {id: '111', title: 'milk', price: 1.2},
        {id: '123', title: 'yellow cheese', price: 2.1},
        {id: '456', title: 'soft cheese', price: 3.0},
        {id: '426', title: 'apples (kg)', price: 2.52},
    ];

    this.cart = [];

    this.addToCart = product => {
        // TODO: check if id already exists
        this.cart.push(
            {product: product, amount: 1}
        );
    };

});
