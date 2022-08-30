
const { Category } = require('../models');

const categoryInfo = [
    {
        category_name: 'Shirts',
      },
      {
        category_name: 'Music Albumns',
      },
      {
        category_name: 'Sneakers',
      }
      
    ];

const seedCategoryInfo = () => Category.bulkCreate(categoryInfo);
module.exports = seedCategoryInfo;
