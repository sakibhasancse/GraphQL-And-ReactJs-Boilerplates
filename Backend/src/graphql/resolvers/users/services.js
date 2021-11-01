import { Users, Posts, Comments } from '../../models'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import config from '../../../config'

const createUserToken = (userId) => {
    return jwt.sign({ userId }, config.jwt_secret, { expiresIn: config.jwt_expire_time })
}

const addNewUser = async (args) => {
    const { email, name, phone, password } = args;
    const isUser = await Users.findOne({ email: email });
    if (isUser) throw new Error(`User already exists with ${email}`);
    const newPassword = await bcrypt.hash(password, 10);
    const newUser = new Users({
        email, password: newPassword, phone, name
    })
    const user = await newUser.save();
    const token = await createUserToken(user._id)
    return { token, user }
}

const loginUser = async (args) => {

    const { email, password } = args;
    const isUser = await Users.findOne({ email: email });
    if (!isUser) throw new Error(`User not exists with ${email}`);
    const isValidUser = await bcrypt.compare(password, isUser.password);
    if (!isValidUser) throw new Error(`Email and password do not match`);
    const token = await createUserToken(isUser._id);
    return { token: token, user: isUser }
}

const updateUser = async (parent, args, context) => {
    const { userId } = isAuthorized(context);

    const isUpdate = Users.update({ _id: userId }, args);

    return isUpdate;
}

export { addNewUser, loginUser, updateUser }