import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  roles: string[];
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string, receivePassword: string): Promise<boolean>;
}

const userSchema = new Schema(
  {
    name: String,
    surname: String,
    username: {
      type: String,
      minLength: 4,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    }, 
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.methods.encryptPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

userSchema.methods.validatePassword = async (
  password: string,
  receivePassword: string
): Promise<boolean> => {
  return await bcrypt.compareSync(password, receivePassword);
};

export default model<IUser>("User", userSchema);
