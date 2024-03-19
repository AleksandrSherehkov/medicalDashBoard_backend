const express = require('express');

const ctrl = require('../../controllers/products');
const { validateBody } = require('../../decorators');
const schemas = require('../../schemas/products');

const addProductValidate = validateBody(schemas.productAddSchema);

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/', addProductValidate, ctrl.add);

router.put('/:id', addProductValidate, ctrl.updateById);

router.delete('/:id', ctrl.deleteById);

module.exports = router;
