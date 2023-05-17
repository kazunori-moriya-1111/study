import mongoose from "mongoose";
import env from "dotenv";
env.config({ path: "../../.env" });

mongoose.connect(process.env.MONGO_URI);

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat();
kitty.name = "Zildjian";
kitty.save().then(() => console.log("meow"));
