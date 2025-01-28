const mongoose = require ('mongoose')

const PortSchema = new mongoose.Schema({

    id: {
        type: Number,
        unique:true
      },
  
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },

      technologies: {
        type: String,
        required: true,
      },
      githubLink: {
        type: String,
        required: true,
      },
      date:{
        type:Date,
        required: true,


      }
    },
    { timestamps: true }
  
)

PortSchema.pre("save", function (next) {
    if (!this.id) {
        this.id = Math.floor(Math.random() * 10000); // Generate a random numeric ID

    }
    next();
  });


module.exports = mongoose.model("User",PortSchema)

