const express = require('express');
const router = express.Router();

const data = [
    {id: 1, title: 'Greek style peas in tomato sauce', order: 1, completed: true},
    {id: 2, title: 'Quick bolognese', order: 2, completed: true },
    {id: 3, title: 'Lentil soup', order: 3, completed: true},
    {id: 4, title: 'Burgers', order: 4, completed: false},
    {id: 5, title: 'Quick pizza', order: 5, completed: false},
];

router.get('/', function (req, res) {
    res.status(200).json(data);
});

router.get('/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

router.post('/', function (req, res) {
    let recipeIds = data.map(recipe => recipe.id);
    let orderNums = data.map(recipe => recipe.order);

    let newId = recipeIds.length > 0 ? Math.max.apply(Math, recipeIds) + 1 : 1;
    let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;

    let newRecipe = {
        id: newId,
        title: req.body.title,
        order: newOrderNum,
        completed: false,
        createdOn: new Date()
    };

    data.push(newRecipe);
    res.status(201).json(newRecipe);
});

module.exports = router;