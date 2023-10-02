import { Schema, model } from "mongoose";

const refreshTokenSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    refreshToken: {
        type: String,
        unique: true,
    },
});

const RefreshTokenModel = model("refreshTokenModel", refreshTokenSchema);
export default RefreshTokenModel;
