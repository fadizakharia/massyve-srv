import { argon2id, hash } from 'argon2'
import User from '@models/user';
 const mockUser = async ()=>{
  try{
    const hashedPassword = await hash('test',{type:argon2id});
    const user = {
      firstName: 'Fadi',
      lastName: 'Zakharia',
      username: 'test',
      password: hashedPassword
    }
    const foundUser = await User.findOne({username: user.username});
    if(foundUser){
      return;
    }
    await User.create(user);
  }catch(err){
    console.error(err);
  }
}
export default mockUser