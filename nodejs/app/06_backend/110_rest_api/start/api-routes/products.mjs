import express from "express";

const productRouter = express.Router();

const products = [
  { name: "table", price: 1000 },
  { name: "chair", price: 100 },
  { name: "clock", price: 700 },
];

productRouter.get("/products", function (req, res) {
  res.json(products);
});

productRouter.get("/products/:id", function (req, res) {
  const targetId = req.params.id;
  res.json(products[targetId]);
});

productRouter.post("/products", function (req, res) {
  const newProduct = req.body;
  console.log(newProduct);
  products.push(newProduct);
  console.log(products);
  res.json(newProduct);
});

productRouter.delete("/products/:id", function (req, res) {
  const deleteId = req.params.id;
  products.splice(deleteId, 1);
  console.log(products);
  res.json({ deleteId });
});

productRouter.patch("/products/:id", function (req, res) {
  const updateId = req.params.id;
  const targetProduct = products[updateId];
  if (req.body.hasOwnProperty("price")) {
    targetProduct.price = req.params.price;
  }
  if (req.body.hasOwnProperty("name")) {
    targetProduct.price = req.params.name;
  }
  console.log(products);
  res.json(targetProduct);
});

export default productRouter;
