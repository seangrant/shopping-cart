import User from '../models/user';

export default (req, res, next) => {
  const { name, email, password } = req.body;
  let user = new User();

  user.email = email;
  user.name = name;
  user.password = password
  user.save(error => {
    if(error){
      return next(error);
    } else {
      console.log('success');
      res.sendStatus(202);
    }
  })
}
