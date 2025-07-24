const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST route to handle todo item submission
app.post('/submittodoitem', (req, res) => {
    const { itemName, itemDescription } = req.body;

    if (!itemName || !itemDescription) {
        return res.status(400).json({ error: 'Both itemName and itemDescription are required.' });
    }

    // For now, just log the item and return a success message
    console.log('Received To-Do Item:', { itemName, itemDescription });

    return res.status(200).json({ message: 'To-Do item received successfully.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
