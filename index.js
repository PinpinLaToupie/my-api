const express = require('express');
const app = express();
const serverPort = 3310;

const fruits = [
    { id: 1, name: 'Pomme' },
    { id: 2, name: 'Orange' },
    { id: 3, name: 'Poire' },
    { id: 4, name: 'Cerise' },
    { id: 5, name: 'Raisin' },
    { id: 6, name: 'Prune' },
  ];

  app.get('/fruits', (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    
    const limitedFruits = fruits.slice(0, limit);

    console.log(req.query);
    
    res.json(limitedFruits);
});

app.get('/fruits/:id', (req, res) => {
    const fruitId = parseInt(req.params.id);
    const fruit = fruits.find(fruit => fruit.id === fruitId);

    if (fruit) {
        res.json(fruit);
    } else {
        res.status(404).json({ message: 'Fruit non trouvé' });
    }
});

app.get('/fruits/filter', (req, res) => {
    const category = req.query.category;
    
    const filteredFruits = fruits.filter(fruit => fruit.category === category);
    
    res.json(filteredFruits);
});

app.listen(serverPort, () => {
    console.info(
      `Listening on port ${serverPort}`
    );
  });
  