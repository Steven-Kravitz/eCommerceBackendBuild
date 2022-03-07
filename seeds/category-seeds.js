const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Consoles',
  },
  {
    category_name: 'Headphones',
  },
  {
    category_name: 'Microphones',
  },
  {
    category_name: 'Cameras',
  },
  {
    category_name: 'Accessories',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
