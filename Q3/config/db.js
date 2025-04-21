const mongoose = require('mongoose');

function connectDB() {
  mongoose.connect('mongodb://localhost:27017/ums', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(' MongoDB Connected to UMS'))
  .catch((err) => console.error(' MongoDB Connection Error:', err.message));
}

module.exports = connectDB;
