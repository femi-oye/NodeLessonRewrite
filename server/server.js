const express = require('express');
const app = express();
const PORT = 5001;

const foodItems = [{name: 'Bode', food: 'Eba', price: '$5'},
                    {name: 'Femi', food: 'Crackers', price: '$2'},
                    {name: 'Wasiu', food: 'Garri', price: '$10'}];

app.use(express.static('server/public'));

app.get('/food-items', (req, res) => {
    res.send(foodItems);

});

app.listen(PORT, function() {
    console.log(`listening on ${PORT}`);
});