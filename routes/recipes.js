const express = require('express');
const router = express.Router();
const recipesController = require("../controllers/recipesController.js");

router.get('/', recipesController.findAll);

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