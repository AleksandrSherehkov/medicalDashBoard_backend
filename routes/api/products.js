const express = require('express');

const ctrl = require('../../controllers/products');
const { validateBody, validateQuery } = require('../../decorators');
const { isValidId } = require('../../middlewares');
const schemas = require('../../schemas/products');

const addProductValidate = validateBody(schemas.productAddSchema);
const queryParamValidate = validateQuery(schemas.queryParamSchema);

// const updateProductFavoriteValidate = validateBody(
//   schemas.productUpdateFavoriteSchema
// );

const router = express.Router();

router.get('/', queryParamValidate, ctrl.getAll);

router.get('/:id', isValidId, ctrl.getById);

router.post('/', addProductValidate, ctrl.add);

router.put('/:id', isValidId, addProductValidate, ctrl.updateById);
// router.patch(
//   '/:id/favorite',
//   isValidId,
//   updateProductFavoriteValidate,
//   ctrl.updateFavorite
// );

router.delete('/:id', ctrl.deleteById);

module.exports = router;
