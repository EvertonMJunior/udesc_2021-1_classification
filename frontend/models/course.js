import mongoose from "mongoose";
var Schema = mongoose.Schema;

const CourseSchema = new Schema({
  id: Number,
  name: String,
});

CourseSchema.index({ name: "text" }, { default_language: "pt" });

mongoose.models = {};

const CourseModel = mongoose.model("course", CourseSchema, "courses");

export default CourseModel;
