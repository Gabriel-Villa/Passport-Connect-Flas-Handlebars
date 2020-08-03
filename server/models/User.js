const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true , required: true },
  password: { type: String, required: true }
},{
  timestamps: true
});

UserSchema.methods.encryptPassword = async (password) => {
    return await bcrypt.hash(password, bcrypt.genSalt(10));
}

UserSchema.methods.matchPassword = async function(password){
    await bcrypt.compare(password, this.password);
}


module.exports = model("User", UserSchema);