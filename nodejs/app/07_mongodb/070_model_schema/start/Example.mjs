import { connect, Schema, model, Mixed } from "mongoose";
import env from "dotenv";
env.config({ path: "../../.env" });

connect(process.env.MONGO_URI);
const catSchema = new Schema({
  name: { type: String, require: true },
  size: { type: Number, require: true, enum: [0, 1] },
  bool: { type: Boolean, default: false },
  dt: {
    type: Date,
    set: function (newVal) {
      return new Date(newVal);
    },
    get: function (val) {
      return val instanceof Date ? val : new Date(val);
    },
  },
  arry: [String],
  anything: Mixed,
});
const Cat = model("Cat", catSchema);

const kitty = new Cat();
kitty.name = "Zildjian";
kitty.size = 10;
kitty.dt = "2017/12/21";
kitty.arry = [0, 1];
kitty.save().then((doc) => console.log(doc.dt));
