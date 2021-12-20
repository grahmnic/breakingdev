const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

app.get('/api/contacts', (req, res) => {
  return db.Contact.findAll()
    .then((contact) => res.send(contact))
    .catch((err) => {
      console.log('***There was an error getting contacts', JSON.stringify(err))
      return res.status(400).send(err)
    })
});

app.post('/api/contacts', (req, res) => {
  const { firstName, lastName, phone } = req.body
  return db.Contact.create({ firstName, lastName, phone })
    .then((contact) => res.send(contact))
    .catch((err) => {
      console.log('***There was an error creating a contact', JSON.stringify(contact))
      return res.status(400).send(err)
    })
});

app.delete('/api/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.Contact.findById(id)
    .then((contact) => contact.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting contact', JSON.stringify(err))
      res.status(400).send(err)
    })
});

app.put('/api/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.Contact.findById(id)
  .then((contact) => {
    const { firstName, lastName, phone } = req.body
    return contact.update({ firstName, lastName, phone })
      .then(() => res.send(contact))
      .catch((err) => {
        console.log('***Error updating contact', JSON.stringify(err))
        res.status(400).send(err)
      })
  })
});

app.listen(5000, () => {
  console.log('Server is up on port 5000');
});