var fs = require("fs");
const Product = require("../Model/product");
const getAllProducts = async (req, res) => {
  try {
    const { featured, company, name } = req.query;
    const queryObject = {};
    if (featured) {
      queryObject.featured = featured === "true" ? true : false;
    }
    if (company) {
      queryObject.company = company;
    }
    if (name) {
      queryObject.name = name;
    }

    const products = await Product.find(req.query);
    res.status(200).json({
      count: products.length,
      data: products,
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
const createProduct = async (req, res) => {
  try {
    // const sampleProduct =
    var data = fs.readFileSync("product.json");
    var binaryData = Buffer.from(data, "base64").toString("binary");
    var product = JSON.parse(binaryData);
    // uncode the base64 data

    console.log(product);

    // console.log("----------------");

    // const newProduct = new Product(product);
    // console.log(newProduct);
    const output = await Product.insertMany(product);
    res.status(201).json({
      count: output.length,
      data: output,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
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
  createProduct,
  // getProduct,
  // createProduct,
  // updateProduct,
  // deleteProduct,
};
