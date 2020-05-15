const express = require('express');
const router = new express.Router();

const getData = require('./modules/getData');
const addData = require('./modules/addData');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/editor', (req, res) => {
  res.render('editor');
});

router.get('/question/get', async (req, res) => {
  res.json(await getData('questions'));
});

router.post('/question/add', async (req, res) => {
  console.log(req.body);
  res.json(await addData('question', req.body));
});

router.get('/statistics', async (req, res) => {
  res.json(await getData('statistics'));
});

router.get('/groups', async (req, res) => {
  res.json(await getData('groups'));
});


module.exports = router;