const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router()
  .post('/', async (req, res) => {
    const dog = await Dog.insert(req.body);
    res.send(dog);
  })
  .get('/', async (req, res) => {
    const dogs = await Dog.getAll();
    res.send(dogs);
  })
  .get('/:id', async (req, res) => {
    const dog = await Dog.getById(req.params.id);
    res.send(dog);
  })
  // Get a dog's owners
  .get('/:id/owners', async (req, res) => {
    const dog = await Dog.getById(req.params.id);
    console.log('dog', dog);
    // { id: '1', name: 'Ruby', age: 10, weight: '11 lbs' }
    const dogWithOwners = await dog.getOwners();
    console.log('dogWithOwners', dogWithOwners);
    //{
    //   id: '1',
    //   name: 'Ruby',
    //   age: 10,
    //   weight: '11 lbs',
    //   owners: [ { id: '1', firstName: 'Dan', lastName: 'Minkevitch' } ]
    // }
    res.send(dogWithOwners);
  });
