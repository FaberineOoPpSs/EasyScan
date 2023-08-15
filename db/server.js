const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Read data from JSON file
app.get('/data', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.status(500).send('Internal Server Error');
      return;
    
    }

    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

// Read a single item by ProdId
app.get('/data/:prodId', (req, res) => {
  const prodId = req.params.prodId;
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const jsonData = JSON.parse(data);
    const item = jsonData.find(item => item.ProdId === prodId);
    if (item) {
      res.json(item);
    } else {
      res.status(404).send('Item not found');
    }
  });
});

// Store a single item in JSON file
app.post('/data', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    sdgds

    const jsonData = JSON.parse(data);
    jsonData.push(req.body);

    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), 'utf8', err => {
      if (err) {
        console.error('Error writing to JSON file:', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Data written to JSON file successfully.');
        res.status(201).send('Data written to JSON file successfully.');
      }
    });
  });
});

// Store multiple items in JSON file
app.post('/data/multiple', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const jsonData = JSON.parse(data);
    const newItems = req.body;

    jsonData.push(...newItems);

    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), 'utf8', err => {
      if (err) {
        console.error('Error writing to JSON file:', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Data written to JSON file successfully.');
        res.status(201).send('Data written to JSON file successfully.');
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
