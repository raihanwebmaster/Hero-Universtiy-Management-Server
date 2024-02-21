import config from '../config';
import { USER_ROLE } from '../modules/user/user.constant';
import { User } from '../modules/user/user.model';

const superAdmin = {
  id: '0001',
  email: 'raihanemon2015@gmail.com',
  password: config.super_admin_password,
  needsPasswordChange: false,
  role: USER_ROLE.superAdmin,
  status: 'in-progress',
  isDeleted: false,
};

const seedSuperAdmin = async () => {
  // when datebase is connected , we will check is there any use who is super admin
  const isSuperAdminExist = await User.findOne({ role: USER_ROLE.superAdmin });
  if (!isSuperAdminExist) {
    await User.create(superAdmin);
  }
};

export default seedSuperAdmin;
