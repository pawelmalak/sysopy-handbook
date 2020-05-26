const express = require('express');
const router = new express.Router();

const getData = require('./modules/getData');
const addData = require('./modules/addData');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Sysopy Handbook'
  });
});

router.get('/editor', (req, res) => {
  res.render('editor', {
    title: 'Dodaj pytanie | Sysopy Handbook'
  });
});

router.get('/question/get', async (req, res) => {
  res.json(await getData('questions'));
});

router.post('/question/add', async (req, res) => {
  res.json(await addData('question', req.body));
});

router.get('/statistics', async (req, res) => {
  res.json(await getData('statistics'));
});

router.get('/groups', async (req, res) => {
  res.json(await getData('groups'));
});


module.exports = router;