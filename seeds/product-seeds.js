const { Product } = require('../models');

const productData = [
  {
    product_name: 'Nintendo Switch',
    price: 249.99,
    stock: 22,
    category_id: 1,
  },
  {
    product_name: 'Elite Atlas Aero',
    price: 79.99,
    stock: 55,
    category_id: 2,
  },
  {
    product_name: 'Blue Yeti',
    price: 99.99,
    stock: 44,
    category_id: 3,
  },
  {
    product_name: 'Logitech 1080p',
    price: 39.99,
    stock: 100,
    category_id: 4,
  },
  {
    product_name: 'Stream Deck XL',
    price: 249.99,
    stock: 11,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
