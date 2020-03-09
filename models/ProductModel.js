const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String, required: true, max: 100,  index: true},
    price: {type: Number, required: true, index: true}
    // createdAt :{type: Date, default:Date.now, index: true},
    // updatedAt :{type: Date, default:Date.now, index: true},
    
// });
},{timestamps: true, usePushEach: true});
// },{timestamps: true},{ $currentDate: { createdAt: Date.now, updatedAt: Date.now }});

// ProductSchema.index({ name: 1, type: -1 }); // schema level

// Export the model
module.exports = mongoose.model('Product', ProductSchema);