const router = require('express').Router();
const {Category,Product} = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    }
  })
    .then(results => {
      if(!results) {
        res.status(404).json({message: 'No categories found'});
        return;
      }
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});

router.get('/:id', (req, res) => {
 
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(results => {
      if(!results) {
        res.status(404).json({message: 'No categories found'});
        return;
      }
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});


router.post('/', (req, res) => {
 
  Category.create({
    category_name: req.body.category_name
  })
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(results => {
      if (!results) {
        res.status(404).json({message:'No category found with that ID.'});
        return;
      }
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(results => {
      if (!results){
        res.status(404).json({message: 'No ID found.'});
        return;
      }
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
