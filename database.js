const mongoose = require("mongoose");
const { mongooseLeanVirtuals } = require("mongoose-lean-virtuals");
mongoose.plugin(mongooseLeanDefaults);
mongoose.set("setDefaultsOnInsert", false);

// let templateSchema = new mongoose.Schema({
//     field: { type: String, required: true }
// })
// const Templates = mongoose.model("template", templateSchema);

module.exports = {
    connectionPromise: mongoose.connect(`mongodb://localhost:27017/infinimii`)
}