const productsServise = require('../models/products');
const { HttpError } = require('../helpers');

const { ctrlWrapper } = require('../decorators');

const getAll = async (req, res) => {
  const result = await productsServise.getAllProducts();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await productsServise.getProductById(id);
  if (!result) {
    throw HttpError(404, '`Product with this id=${id} not found`');
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await productsServise.addProduct(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await productsServise.updateProduct(id, req.body);
  if (!result) {
    throw HttpError(404, '`Product with this id=${id} not found`');
  }
  res.json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await productsServise.deleteProduct(id);
  if (!result) {
    throw HttpError(404, '`Product with this id=${id} not found`');
  }
  res.json({ message: 'Product deleted' });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
