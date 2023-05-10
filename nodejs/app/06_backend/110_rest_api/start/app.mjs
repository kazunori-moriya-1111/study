import express from "express";

const PORT = 8080;
const app = express();

app.use(express.json());

const products = [
  { name: "table", price: 1000 },
  { name: "chair", price: 100 },
  { name: "clock", price: 700 },
];

app.get("/products", function (req, res) {
  res.json(products);
});

app.post("/create-product", function (req, res) {
  const newProduct = req.body;
  console.log(newProduct);
  products.push(newProduct);
  console.log(products);
  res.json(newProduct);
});

app.post("/delete-product", function (req, res) {
  const deleteId = req.body.id;
  products.splice(deleteId, 1);
  console.log(products);
  res.json({ deleteId });
});

app.post("/update-product", function (req, res) {
  const updateId = req.body.id;
  const targetProduct = products[updateId];
  if (req.body.hasOwnProperty("price")) {
    targetProduct.price = req.body.price;
  }
  if (req.body.hasOwnProperty("name")) {
    targetProduct.price = req.body.name;
  }
  console.log(products);
  res.json(targetProduct);
});

app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});
