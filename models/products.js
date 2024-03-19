const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const productsPath = path.join(__dirname, 'products.json');

const updateProducts = async products => {
  await fs.writeFile(productsPath, JSON.stringify(products, null, 2));
};

const getAllProducts = async () => {
  const products = await fs.readFile(productsPath);
  return JSON.parse(products);
};

const getProductById = async productId => {
  const products = await getAllProducts();
  const product = products.find(({ id }) => id === productId);
  return product || null;
};

const addProduct = async data => {
  const products = await getAllProducts();
  const newProduct = {
    id: nanoid(),
    ...data,
  };
  products.push(newProduct);
  await updateProducts(products);
  return newProduct;
};

const updateProduct = async (productId, data) => {
  const products = await getAllProducts();
  const index = products.findIndex(product => product.id === productId);

  if (index === -1) {
    return null;
  }

  products[index] = { id: productId, ...data };
  await updateProducts(products);
  return products[index];
};

const deleteProduct = async productId => {
  const products = await getAllProducts();
  const index = products.findIndex(({ id }) => id === productId);
  if (index === -1) {
    return null;
  }

  const [result] = products.splice(index, 1);
  await updateProducts(products);
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
};
