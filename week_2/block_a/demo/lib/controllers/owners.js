const { Router } = require('express');
const Owner = require('../models/Owner');

module.exports = Router()
  .post('/', async (req, res) => {
    const owner = await Owner.insert(req.body);
    res.send(owner);
  })
  .get('/', async (req, res) => {
    const owners = await Owner.getAll();
    res.send(owners);
  })
  .get('/:id', async (req, res) => {
    const owner = await Owner.getById(req.params.id);
    res.send(owner);
  })
  // Get an owner's dogs
  .get('/:id/dogs', async (req, res) => {
    const owner = await Owner.getById(req.params.id);
    const ownerWithDogs = await owner.getDogs();
    res.send(ownerWithDogs);
  });
