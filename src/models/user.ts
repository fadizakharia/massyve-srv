import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  firstName:string;
  lastName:string;
  username: string;
  password: string;
}

const userSchema = new Schema({
  firstName:{ type: String, required: true },
  lastName:{ type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export default model<IUser>('User', userSchema);
