import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    avatar: {
      type: {
        url: String,
        localpath: String,
      },
      default: {
        url: "https://placehold.co/200x200",
        localpath: "",
      },
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercae: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercae: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is require"],
    },
    isEmailVerified: {
      type: Boolean,
      default: true,
    },
    refreshToken: {
      type: String,
    },
    forgetPasswordToken: {
      type: String,
    },
    forgetPasswordExpiry: {
      type: Date,
    },
    emailVerificationToken: {
      type: String,
    },
    emailVerificationExpiry: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  // modified is a function check which field are modified at save
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
// if you create hook on "save" while in other field saving the data , assoicated function with hook run agian and agian.
// we i have to create save guided function

export const user = mongoose.model("User", userSchema);

// mongoose allow you to have methods and hooks connected eith schema .
