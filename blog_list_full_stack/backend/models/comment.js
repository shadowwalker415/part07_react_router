const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  data: {
    type: String,
  },
});

commentSchema.set("toJSON", {
  transform: function (obj, retObj) {
    retObj.id = retObj._id;
    delete retObj._id;
    delete retObj.__v;
  },
});

module.exports = mongoose.model("Comment", commentSchema);
