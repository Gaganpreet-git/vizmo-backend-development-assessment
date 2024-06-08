const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, max: 30 },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      validate: [
        {
          validator: (v) => v.length >= 8,
          message: (props) => `Password must be at least 8 characters long`,
        },
        {
          validator: (v) => /[A-Z]/.test(v),
          message: (props) =>
            `Password must contain at least one uppercase letter`,
        },
        {
          validator: (v) => /[a-z]/.test(v),
          message: (props) =>
            `Password must contain at least one lowercase letter`,
        },
        {
          validator: (v) => /\d/.test(v),
          message: (props) => `Password must contain at least one digit`,
        },
        {
          validator: (v) => /[^a-zA-Z0-9]/.test(v),
          message: (props) =>
            `Password must contain at least one special character`,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.isEmailTaken = async function (email) {
  const result = await this.findOne({ email });
  return result;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  }
  next();
});

userSchema.methods.isPasswordMatch = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
