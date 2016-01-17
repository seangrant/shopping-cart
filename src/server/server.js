import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';
import morgan from 'morgan';
import mongoose from 'mongoose';
import userCreate from './routes/user-create';
import bodyParser from 'body-parser';


const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
let db;
mongoose.connect(process.env.MONGO_URL, (err, database) =>{
  if(err){
    console.log(err);
  } else {
    console.log('connected to database');
  }
  db = database;
})

app.post('/user/create', userCreate);

app.post('/cart/data', (req, res) => {
  db.collection('cart').find({}).toArray((err, cart) => {
    res.json(cart);
  })
});
