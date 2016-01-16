import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

let UserSchema = new mongoose.Schema({
  email: {type: String, unique: true, lowercase: true},
  password: {type: String},
  profile: {
    name: { type: String, default: '' },
    picture: { type: String, default: '' },
    address: { type: String, default: '' },
  }
})

UserSchema.pre('save', function(next) {
  let user = this;
  if(!user.isModified("password")) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if(err){
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if(err) return next(err);
        user.password = hash;
        next();
    });
  })
});

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('User', UserSchema);
