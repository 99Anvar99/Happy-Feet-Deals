const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Men' },
    { name: 'Women' },
    { name: 'Kids' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Shoe1',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '../../client/src/images/shoe1.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Shoe2',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: '../../client/src/images/shoe2.jpg',
      category: categories[1]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Shoe3',
      category: categories[2]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: '../../client/src/images/shoe3.jpg',
      price: 7.99,
      quantity: 20
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'user1_firstname',
    lastName: 'user1_lastname',
    email: 'user1@testmail.com',
    password: '12345',
    orders: [
      {
        products: [products[0]._id, products[1]._id, products[2]._id]
      }
    ]
  });

  await User.create({
    firstName: 'user2_firstname',
    lastName: 'user2_lastname',
    email: 'user2@testmail.com',
    password: '1234'
  });

  console.log('users seeded');

  process.exit();
});
