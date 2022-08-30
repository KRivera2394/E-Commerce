const categorySeed = require('./category-seeds');
const productSeed = require('./product-seeds');
const tagsSeed = require('./tag-seeds');
const productTagsSeed = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedTotal = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await categorySeed();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await productSeed();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await tagsSeed();
  console.log('\n----- TAGS SEEDED -----\n');

  await productTagsSeed();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedTotal();
