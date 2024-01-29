import express from 'express';
const app = express();
const port = 3000;

// Endpoint to get all cheeses
app.get('/cheeses', (req, res) => {
    // Logic to fetch all cheeses from the database
    const cheeses = ['Cheddar', 'Gouda', 'Brie', 'Swiss'];
    res.json(cheeses);
});

// Endpoint to get a specific cheese by ID
app.get('/cheeses/:id', (req, res) => {
    const cheeseId = req.params.id;
    // Logic to fetch the cheese with the given ID from the database
    const cheese = { id: cheeseId, name: 'Cheddar' };
    res.json(cheese);
});

// Endpoint to add a new cheese
app.post('/cheeses', (req, res) => {
    const newCheese = req.body;
    // Logic to add the new cheese to the database
    res.json(newCheese);
});

// Endpoint to update an existing cheese
app.put('/cheeses/:id', (req, res) => {
    const cheeseId = req.params.id;
    const updatedCheese = req.body;
    // Logic to update the cheese with the given ID in the database
    res.json(updatedCheese);
});

app.listen(port, () => {
    console.log(`Express API listening at http://localhost:${port}`);
});
