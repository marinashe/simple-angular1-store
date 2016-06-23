angular.module("store").component('cart', {
    templateUrl: "cart.component.html",
    bindings: {
        items: '=',
    },
    controller: function CartController() {
        // TODO: fix total()
        this.total = () => 12345;
    }
});

