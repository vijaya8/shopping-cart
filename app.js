const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
const db = require("./models");
const Groups = db.groups;
const Products = db.products;
const _ = require("lodash");
const port = 3000;

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

app.get("/", (req, res) => res.send("shopping cart server"));

//This API to get the all the groups data those are active
app.get("/api/getGroups", async (req, res) => {
  try {
    const activeGroupData = await Groups.findAll({
      where: {
        isactive: 1,
      },
    });
    console.log(activeGroupData, "activeGroupData");
    res.status(200).send(activeGroupData);
  } catch (err) {
    console.log(err, "err while getting active groups");
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving active groups.",
    });
  }
});

//This API to get the the product details by productId
app.get("/api/products/:id", async (req, res) => {
  const productId = req.params["id"];
  try {
    const productsById = await Products.findOne({
      where: {
        ID: productId,
      },
    });
    res.status(200).send(productsById);
  } catch (err) {
    console.log(err, "err while getting products by ID");
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving products by ID.",
    });
  }
});

//This API to get the the product-name and product-description related category by groupId those are only active products

app.get("/api/groups/:groupId/products", async (req, res) => {
  const { sequelize } = db;
  const groupId = req.params["groupId"];
  try {
    const testRawQuery = `select p.name as productName, p.description as productDesc, 
                        c.name as categoryName from Groups as g 
                        INNER JOIN Categories as c ON c.groupId=g.ID 
                        INNER JOIN Products as p ON p.categoryId=c.ID 
                        where g.ID = ${groupId} AND g.isactive = ${1} AND p.isactive= ${1} AND c.isactive=${1}`;
    const result = await sequelize.query(testRawQuery, {
      type: sequelize.QueryTypes.SELECT,
    });
    const byCategoryData = _.groupBy(result, "categoryName");
    res.status(200).send(byCategoryData);
  } catch (err) {
    console.log(err, "err while getting products by category");
    res.status(500).send({
      message:
        err.message ||
        "Some error occurred while retrieving products by category.",
    });
  }
});

//This API to get the all products data
app.get("/api/products", async (req, res) => {
  try {
    const productsData = await Products.findAll();
    console.log(productsData, "productsData");
    res.status(200).send(productsData);
  } catch (err) {
    console.log(err, "err while getting products");
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving products",
    });
  }
});

//This API to update {isactive} column  of the all products.
app.post("/api/products", async (req, res) => {
  try {
    const updateAllProductsData = await Products.update({ isactive: 1 });
    console.log(updateAllProductsData, "updateAllProductsData");
    res.status(200).send(updateAllProductsData);
  } catch (err) {
    console.log(err, "err while getting products");
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving products",
    });
  }
});

//This API to update individual product {name} column based on product id.
app.put("/api/products/:id", async (req, res) => {
  const { productName } = req.body;
  const productId = req.params["id"];
  try {
    await Products.update({ name: productName }, { where: { id: productId } });
    res.status(200).send({ message: "Updated successfully" });
  } catch (err) {
    console.log(err, "err while deleting the product by id");
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving products",
    });
  }
});

//This API to delete individual product based on product id.
app.delete("/api/products/:id", async (req, res) => {
  const productId = req.params["id"];
  try {
    await Products.destroy({ where: { id: productId } });
    res.status(200).send({ message: "Deleted successfully" });
  } catch (err) {
    console.log(err, "err while deleting the product by id");
    res.status(500).send({
      message:
        err.message || "Some error occurred while deleting the product by id",
    });
  }
});

app.listen(port, () =>
  console.log(`shopping cart app listening on port ${port}!`)
);
