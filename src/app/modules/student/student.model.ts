import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  // StudentMethod,
  StudentModel,
  TUserName,
} from './student.interface';
import validator from 'validator';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'First Name can not be more than 20 characters'],
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} is not in capitalizee format ',
    },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, 'Father Name is required'],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Father Occupation is required'],
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Father ContactNo is required'],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, 'Mother Name is required'],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Mother Occupation is requried'],
  },
  motherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Mother ContactNo is requried'],
  },
});

const localGuradianSchema = new Schema<TLocalGuardian>({
  name: {
    trim: true,
    type: String,
    required: [true, 'Local Guradian Name is requried'],
  },
  occupation: {
    trim: true,
    type: String,
    required: [true, 'Local Guradian occupation is requried'],
  },
  contactNo: {
    trim: true,
    type: String,
    required: [true, 'Local Guradian ContactNo is required'],
  },
  address: {
    type: String,
    required: [true, 'Local Guradian Address is requried'],
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User ID is Required'],
      unique: true,
      ref: 'User',
    },
    name: {
      type: userNameSchema,
      required: [true, 'Name is required'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message:
          "The gerder field can only be one of the following : 'male', 'female' or 'other' . ",
      },
      required: [true, 'Gender is requried'],
    },
    dateOfBirth: { type: Date },
    email: {
      type: String,
      trim: true,
      required: [true, 'Email is required'],
      unique: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} is not a valid email type ',
      },
    },
    contactNo: {
      type: String,
      trim: true,
      required: [true, 'ContactNo is requried'],
    },
    emergencyContactNo: {
      type: String,
      trim: true,
      required: [true, 'Emergency ContactNo is required'],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not valid BloodGroup',
      },
    },
    presentAddress: {
      type: String,
      required: [true, 'Present Addresss is requried'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent Address is requried'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian Information is requried'],
    },
    localGuardian: {
      type: localGuradianSchema,
      required: [true, 'Local Guradian Information is required'],
    },
    profileImg: { type: String },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester'
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// virtual
studentSchema.virtual('fullName').get(function () {
  return ` ${this?.name?.firstName} ${this?.name?.middleName} ${this?.name?.lastName}`;
});


// Query Middleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});


// Aggregate Middleware
studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

//creating a custom static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};


export const Student = model<TStudent, StudentModel>('Student', studentSchema);
