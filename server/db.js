const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mayankkudwan:DSSrCtMWeQQzoZUY@cluster0.bx758gb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  codeforcesHandle: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  githubHandle: {
    type: String,
    required: false,
    trim: true,
  },
  linkedinHandle: {
    type: String,
    required: false,
    trim: true,
  },

});

// problemSchema coming from the problems.js file
const problemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
    contestId: {
    type: Number,
    required: true,
  },
  index: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
});

const User = mongoose.model('User', userSchema);
const Problem = mongoose.model('Problem', problemSchema);
module.exports = { User, Problem };
