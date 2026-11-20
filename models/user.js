const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// FIX: require ke last mein '.default' add kiya gaya hai
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
