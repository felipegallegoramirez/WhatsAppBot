const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    profesional: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    day: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      require: true
    },
    hour: {
      type: Number,
      require: true
    },

  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Booking || mongoose.model("Booking", StorageScheme);