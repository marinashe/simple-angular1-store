"use strict";

var m = angular.module("store", []);


m.component('veryNicePanel', {
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">{{$ctrl.title}}</h3>
            </div>
            <div class="panel-body">
                <p>
                   {{$ctrl.content}} 
                </p>
            </div>
        </div>
    `,
    bindings: {
        title: '=',
        content: '=',
    }
});

m.component('cart', {
    templateUrl: "cart.component.html",
    bindings: {
        items: '=',
    },
    controller: function CartController () {
        // TODO: fix total()
        this.total = () => 12345;
    }
});

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
