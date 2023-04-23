import mongoose from "mongoose";

// database schema
const postSchema = mongoose.Schema({
  userId: String,
  eventname: String,
  eventorganiser: String,
  description: String,
  detailsLink: String,
  registrationLink: String,
  category: String,
  eventtime: "",
  place:String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// converting schema to model
const Posts = mongoose.model("Posts", postSchema);

//export model so that crud methods can be applied
export default Posts;
