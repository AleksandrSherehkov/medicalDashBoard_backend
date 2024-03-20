const express = require('express');

const ctrl = require('../../controllers/supplier');
const { validateBody, validateQuery } = require('../../decorators');
const { isValidId } = require('../../middlewares');
const schemas = require('../../schemas/suppliers');

const addSupplierValidate = validateBody(schemas.supplierAddSchema);
const queryParamValidate = validateQuery(schemas.queryParamSchema);

const router = express.Router();

router.get('/', queryParamValidate, ctrl.getAll);

router.get('/:id', isValidId, ctrl.getById);

router.post('/', addSupplierValidate, ctrl.add);

router.put('/:id', isValidId, addSupplierValidate, ctrl.updateById);

router.delete('/:id', ctrl.deleteById);

module.exports = router;
