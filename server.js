import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';

console.log('URL',process.env.MONGO_URL);

const app = express();
app.use(express.static('public'));

app.listen(3000, () => console.log('listening on port 3000'));
let db;
MongoClient.connect(process.env.MONGO_URL, (err, database) =>{
  db = database;
})

app.get('/cart/data', (req, res) => {
  db.collection('cart').find({}).toArray((err, cart) => {
    res.json(cart);
  })
});
