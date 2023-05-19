import mongoose, { connect, Schema, model } from "mongoose";
import env from "dotenv";
env.config({ path: "../../.env" });

/**
String: 文字列
Number: 数値
Date: 日付
Buffer: バイナリデータ
Boolean: 真偽
Mixed: なんでもOK
ObjectId: Mongo固有のID
Array: 配列
Decimal128: 浮動小数点
Map: マップ
Schema: 他のスキーマ
 */
connect(process.env.MONGO_URI);

// const catSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     size: { type: Number, required: true, enum: [0, 1] },
//     bool: { type: Boolean, default: false, alias: "b" },
//     dt: {
//       type: Date,
//       set: function (newVal) {
//         return new Date(newVal);
//       },
//       get: function (val) {
//         return val instanceof Date ? val : new Date(val);
//       },
//     },
//     arry: [String],
//     anything: Mixed,
//   },
//   { timestamps: true }
// );
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
      default: 3,
    },
  },
  { timestamps: true }
);
const Book = model("Book", bookSchema);

const kitty = new Book({
  title: "てすとぶっく",
  description: "これは説明卵",
  comment: "素晴らしい",
  rating: 4,
});
// kitty.name = "Zildjian";
// kitty.size = 1;
// kitty.arry = [0, 1];
// kitty.dt = "2017/12/21";

kitty.save().then((book) => {
  console.log(book._id);
  mongoose.connection.close();
});
