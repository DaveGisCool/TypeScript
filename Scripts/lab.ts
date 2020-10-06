interface Mountain {
    name: String,
    height: Number
}

function findNameOfTallestMountain() {

    var tallestPeak: Number = 0;
    var mightyMountain: String = "";

    let mountain1: Mountain = {
        name: 'Kilimanjaro',
        height: 19341
    }

    let mountain2: Mountain = {
        name: 'Everest',
        height: 29029
    }

    let mountain3: Mountain = {
        name: 'Denali',
        height: 20310
    }

    let mountains: Mountain[] = [
        mountain1, mountain2, mountain3
    ]

    for (let mountain of mountains) {
        if (mountain.height > tallestPeak) {
            tallestPeak = mountain.height;
            mightyMountain = mountain.name;
        }
        
    }

    console.log(mightyMountain);
}


interface Product {
    name: String,
    price: number
}

function calcAverageProductPrice() {
    var totalCost: number = 0;

    let product1: Product = {
        name: 'panel',
        price: 7.50
    }

    let product2: Product = {
        name: 'switch',
        price: 3.25
    }

    let product3: Product = {
        name: 'gear',
        price: 16.00
    }

    let products: Product[] = [
        product1, product2, product3
    ]

    for (let product of products) {
        totalCost = totalCost + product.price;
    }

    var averagePrice = totalCost / products.length

    console.log(`${ averagePrice }`)
}


interface InventoryItem {
    product: Product,
    quantity: number
}

    let inventory: InventoryItem[] = [
        {product: {
                name: 'motor',
                price: 10.00},
                quantity: 10},
        {product: {
                name: 'sensor',
                price: 12.50},
                quantity: 4},
        {product: {
                name: 'LED',
                price: 1.00},
                quantity: 20},
        ]

function calcInventoryValue() {
    var grandTotal = 0;
    for (let stock of inventory) {
        grandTotal = grandTotal + (stock.product.price * stock.quantity)
    }
    console.log(grandTotal)
}