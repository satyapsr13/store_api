const getAllProducts = async (req, res) => {
  try {
    // const products = await Product.find();
    res.status(200).json({
      data: "products",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllProductsStatic = async (req, res) => {
  try {
    // const products = await Product.find();
    res.status(200).json({
      data: "Static products",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// const getProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
// const createProduct = async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(201).json(product);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
// const updateProduct = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
// const deleteProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(204).json({ message: "Product deleted" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
module.exports = {
  getAllProducts,
  getAllProductsStatic,
  // getProduct,
  // createProduct,
  // updateProduct,
  // deleteProduct,
};
