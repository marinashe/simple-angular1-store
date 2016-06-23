angular.module("store").component('cart', {
    templateUrl: "cart.component.html",
    bindings: {
        items: '=',
    },
    controller: function CartController() {
        this.total = () =>  this.items.reduce(
            (prev, current) => prev + current.product.price * current.amount, 0)
    }
});

