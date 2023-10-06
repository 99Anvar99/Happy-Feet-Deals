const mongoose = require('mongoose');

const { Schema } = mongoose;

// THis is a sub document.
const orderItemSchema = new mongoose.Schema({
  productId: { type: Schema.Types.ObjectId, required: true },
  quantity: {type: Schema.Types.Number, default: 0 }
});

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [orderItemSchema]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;


// const mongoose = require('mongoose');

// const { Schema } = mongoose;

// const orderSchema = new Schema({
//   purchaseDate: {
//     type: Date,
//     default: Date.now
//   },
//   products: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Product'
//     }
//   ]
// });

// const Order = mongoose.model('Order', orderSchema);

// module.exports = Order;