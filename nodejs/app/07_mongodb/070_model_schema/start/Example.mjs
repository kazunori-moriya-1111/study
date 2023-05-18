import { connect, Schema, model, Mixed } from "mongoose";
import env from "dotenv";
env.config({ path: "../../.env" });

connect(process.env.MONGO_URI);
const catSchema = new Schema({
  name: String,
  size: Number,
  bool: Boolean,
  dt: Date,
  arry: [],
  anything: Mixed,
});
const Cat = model("Cat", catSchema);

const kitty = new Cat();
kitty.name = "Zildjian";
kitty.save().then(() => console.log("meow"));
