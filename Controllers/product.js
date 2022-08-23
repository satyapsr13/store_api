// var fs = require("fs");
const Product = require("../Model/product");
const getAllProducts = async (req, res) => {
  try {
    
    const { featured, company, name, sort, fields, numericFilters } = req.query;
    const queryObject = {};
    if (featured) {
      queryObject.featured = featured === "true" ? true : false;
    }
    if (company) {
      queryObject.company = company;
    }
    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }

    let result = Product.find({});
    if (sort) {
      const sortList = sort.split(",").join(" ");
      // console.log(sort);
      result = result.sort(sortList);
    } else {
      result = result.sort("createdAt");
    }
    if (fields) {
      const fieldsList = fields.split(",").join(" ");
      // console.log(sort);
      result = result.select(fieldsList);
    }
    if (numericFilters) {
      const operatorMap = {
        ">": "$gt",
        "<": "$lt",
        ">=": "$gte",
        "<=": "$lte",
        "=": "$eq",
      };
      const regex = /\b(<|>|<=|>=|=)\b/g;
      let filters = numericFilters.replace(
        regex,
        (match) => `-${operatorMap[match]}-`
      );
      const options = ["price", "rating"];

      // console.log(filters);

      filters = filters.split(",").forEach((filter) => {
        const [field, operator, value] = filter.split("-");
        if (options.includes(field)) {
          queryObject[field] = { [operator]: Number(value) };
        }
      });
      result = result.find(queryObject);

      console.log(filters);
      // result = result.find(numericFiltersList);
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const product = await result.limit(limit).skip(skip).exec();

    res.status(200).json({
      count: product.length,
      data: product,
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
    // var data = fs.readFileSync("product.json");
    // var binaryData = Buffer.from(data, "base64").toString("binary");
    // var product = JSON.parse(binaryData);
    // uncode the base64 data

    // console.log(product);

    // console.log("----------------");

    // const newProduct = new Product(product);
    // console.log(newProduct);
    // const output = await Product.insertMany(product);
    res.status(201).json({
      count: 0,
      data: "work on progress",
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
