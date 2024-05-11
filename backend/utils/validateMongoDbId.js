const mongoose = require("mongoose");
const validateMongoDbId = (id) => {
  const isValid = mongoose.Types.ObjectId(id);
  if (!isValid) {
    throw new Error("This id is not a valid or not Found");
  }
};

module.exports = validateMongoDbId;
