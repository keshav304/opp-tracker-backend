import mongoose from "mongoose";
const { Schema } = mongoose;

// database schema
const savedPostSchema = mongoose.Schema({
  userId: String,
  bookmarkedposts: [
    {
      id: String,
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
      }
    }
  ],
});

// converting schema to model
const savedPosts = mongoose.model("savedPosts", savedPostSchema);

//export model so that crud methods can be applied
export default savedPosts;
