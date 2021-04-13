import mongoose from "mongoose";
var Schema = mongoose.Schema;

const CandidateSchema = new Schema({
  id: Number,
  name: String,
  birth_date: String,
  grade: Number,
  situation: String,
  course: Number,
  affirmative_action_policy: String,
  list_id: Number,
});

CandidateSchema.index(
  { name: "text", course: "text" },
  { default_language: "pt" }
);

mongoose.models = {};

const CandidateModel = mongoose.model(
  "candidate",
  CandidateSchema,
  "candidates"
);

export default CandidateModel;
