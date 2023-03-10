import mongoose from "mongoose";
import modelOptions from "./model.options.js";
import cryto from "crypto";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    displayName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    salt: {
        type: String,
        required: true,
        select: false
    },
}, modelOptions);

userSchema.methods.setPassword = function(password){
    this.salt = cryto.randomBytes(16).toString("hex");

    this.password = cryto.pbkdf2Sync(
        password, 
        this.salt,
        1000,
        64,
        "sha512" 
    ).toString("hex");
};

userSchema.methods.validPassword = function(password){
    const hash = cryto.pbkdf2(
        password, 
        this.salt,
        1000,
        64,
        "sha512" 
    ).toString("hex");

    return this.password === hash;
};

const userModel = mongoose.model("User", userSchema);

export default userModel;