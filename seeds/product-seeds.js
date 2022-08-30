const {Product} = require('../models');

const productInfo = [
    {
        product_name: 'Graphic T-Shirt',
        category_id: 1,
        price: 9.99,
        stock: 19
    },
    {
        product_name: 'Blue Polo Shirt',
        category_id: 1,
        price: 12.99,
        stock: 15
    },
    {
        product_name: 'White Dress Shirt',
        category_id: 1,
        price: 15.99,
        stock: 10
    },
    {
        product_name: 'Blue Nike Hoodie ',
        category_id: 1,
        price: 29.99,
        stock: 5
    },
    {
        product_name: ' "KISS" Albumn',
        category_id: 2,
        price: 19.99,
        stock: 4
    },
    {
        product_name: '"ACDC Albumn"  ',
        category_id: 2,
        price: 19.99,
        stock: 7
    },
    {
        product_name: '"Metalica" Albumn',
        category_id: 2,
        price: 24.99,
        stock: 10
    },
    {
        product_name: 'Red Running Shoes',
        category_id: 3,
        price: 79.99,
        stock: 13
    }

];

const seedProductInfo = () => Product.bulkCreate(productInfo);
module.exports = seedProductInfo;
