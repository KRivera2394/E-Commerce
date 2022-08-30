const {ProductTag} = require('../models');
const productTagInfo = [
    {
      product_id: 1,
      tag_id: 10,
    },
    {
      product_id: 1,
      tag_id: 11,
    },
    {
      product_id: 1,
      tag_id: 12,
    },
    {
      product_id: 2,
      tag_id: 13,
    },
    {
      product_id: 2,
      tag_id: 14,
    },
    {
      product_id: 2,
      tag_id: 15,
    },
    {
      product_id: 3,
      tag_id: 16,
    },
    {
      product_id: 3,
      tag_id: 17,
    },
    {
      product_id: 3,
      tag_id: 18,
    },
    {
      product_id: 4,
      tag_id: 19,
    },
    {
      product_id: 4,
      tag_id: 20,
    },
    {
      product_id: 4,
      tag_id: 21,
    }
  ];


  const seedProductInfo = () => ProductTag.bulkCreate(productTagInfo);
  module.exports = seedProductInfo;