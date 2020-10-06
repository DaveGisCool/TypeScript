function findNameOfTallestMountain() {
    var tallestPeak = 0;
    var mightyMountain = "";
    var mountain1 = {
        name: 'Kilimanjaro',
        height: 19341
    };
    var mountain2 = {
        name: 'Everest',
        height: 29029
    };
    var mountain3 = {
        name: 'Denali',
        height: 20310
    };
    var mountains = [
        mountain1, mountain2, mountain3
    ];
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (mountain.height > tallestPeak) {
            tallestPeak = mountain.height;
            mightyMountain = mountain.name;
        }
    }
    console.log(mightyMountain);
}
function calcAverageProductPrice() {
    var totalCost = 0;
    var product1 = {
        name: 'panel',
        price: 7.50
    };
    var product2 = {
        name: 'switch',
        price: 3.25
    };
    var product3 = {
        name: 'gear',
        price: 16.00
    };
    var products = [
        product1, product2, product3
    ];
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        totalCost = totalCost + product.price;
    }
    var averagePrice = totalCost / products.length;
    console.log("" + averagePrice);
}
var inventory = [
    { product: {
            name: 'motor',
            price: 10.00
        },
        quantity: 10 },
    { product: {
            name: 'sensor',
            price: 12.50
        },
        quantity: 4 },
    { product: {
            name: 'LED',
            price: 1.00
        },
        quantity: 20 },
];
function calcInventoryValue() {
    var grandTotal = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var stock = inventory_1[_i];
        grandTotal = grandTotal + (stock.product.price * stock.quantity);
    }
    console.log(grandTotal);
}
//# sourceMappingURL=lab.js.map