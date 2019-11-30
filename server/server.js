const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5001;


const foodItems = [{name: 'Bode', food: 'Eba', price: '$5'},
                    {name: 'Femi', food: 'Crackers', price: '$2'},
                    {name: 'Wasiu', food: 'Garri', price: '$10'}];

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.get('/food-items', (req, res) => {
    res.send(foodItems);

});

app.post('/food-items', (req, res) => {
    // console.log(req.body);
    foodItems.push(req.body);
    res.sendStatus(201);
})


app.listen(PORT, function() {
    console.log(`listening on ${PORT}`);
});