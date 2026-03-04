const express = require('express');
const { add, subtract } = require('./math'); // Add subtract here

const app = express();

app.use(express.json());

// The endpoint you needed
app.get('/calculator/add', (req, res) => {
    const num1 = parseInt(req.query.a);
    const num2 = parseInt(req.query.b);
    
    const result = add(num1, num2);
    res.json({ result });
});
//Add the new route:
app.get('/calculator/subtract', (req, res) => {
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);
    res.json({ result: subtract(x, y) }); // Just 'subtract', no 'math'.
});
// We export the app for testing, but only listen if run directly
if (require.main === module) {
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
}

module.exports = app;