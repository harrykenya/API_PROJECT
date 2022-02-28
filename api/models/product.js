const mongoose = require('mongoose');

const productSchema = mongoose.Schema({ //defines how product should look like
  _id: mongoose.Schema.Types.ObjectId, //consturctor function
  name: {type:String, required: true},
  price: {type:Number, required: true},
  productImage: {type: String, required:true}
});

module.exports = mongoose.model('Product', productSchema); 