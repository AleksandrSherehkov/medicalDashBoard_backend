const categoriesList = [
  'Medicine',
  'Head',
  'Hand',
  'Dental Care',
  'Skin Care',
  'Eye Care',
  'Vitamins & Supplements',
  'Orthopedic Products',
  'Baby Care',
];
const statusSuppliersList = ['Active', 'Deactive'];

const validUrlImageExtensions = /^https?:\/\/.+\.(jpeg|jpg|png|gif|svg|webp)$/i;
const validDatePattern =
  /^(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2},\s\d{4}$/;

const validDecimalNumber = /^\d+(\.\d{1,2})?$/;
const validStock = /^\d+$/;

module.exports = {
  categoriesList,
  statusSuppliersList,
  validDecimalNumber,
  validStock,
  validUrlImageExtensions,
  validDatePattern,
};
