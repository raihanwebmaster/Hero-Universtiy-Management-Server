import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userScheam = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);


userScheam.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const student = this;
  student.password = await bcrypt.hash(
    student.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});


// userScheam.post('save', function (doc, next) {;
//   doc.password = '';
//   next();
// });

export const User = model<TUser>('User', userScheam);
