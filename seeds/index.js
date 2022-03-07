const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synced');
  await seedCategories();

  await seedProducts();

  await seedTags();

  await seedProductTags();

  console.log('Seeding complete')
  process.exit(0);
};

seedAll();
