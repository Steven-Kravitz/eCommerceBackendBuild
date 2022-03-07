const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Nintendo',
  },
  {
    tag_name: 'Sony',
  },
  {
    tag_name: 'Microsoft',
  },
  {
    tag_name: 'Audio',
  },
  {
    tag_name: 'Video',
  },
  {
    tag_name: 'Keyboard',
  },
  {
    tag_name: 'Streaming',
  },
  {
    tag_name: 'Video Games',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;