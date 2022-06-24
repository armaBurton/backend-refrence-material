const { Router } = require('express');
const Dog = require('../models/Dog');

// HTTP Method => CRUD:
// POST        => Create
// GET         => Read
// PATCH/PUT   => Update
// DELETE      => Delete

// Router() is like app, but for individual resources
module.exports = Router()
  // POST /api/v1/dogs
  .post('/', async (req, res) => {
    const dog = await Dog.insert(req.body);
    res.send(dog);
  })

  // GET /api/v1/dogs
  .get('/', async (req, res) => {
    const dogs = await Dog.findAll();
    res.send(dogs);
  })

  // GET /api/v1/dogs/:id
  .get('/:id', async (req, res, next) => {
    try {
      // select a dog from our database
      const dog = await Dog.findById(req.params.id);
      // return the dog if found
      res.send(dog);
    } catch (error) {
      // return a 404 if no dog found
      error.status = 404;
      next(error);
    }
  })

  // PATCH /api/v1/dogs/:id
  .patch('/:id', async (req, res) => {
    const dog = await Dog.updateById(req.params.id, req.body);
    res.send(dog);
  })

  // DELETE /api/v1/dogs/:id
  .delete('/:id', async (req, res) => {
    const dog = await Dog.deleteById(req.params.id);
    res.send(dog);
  });
