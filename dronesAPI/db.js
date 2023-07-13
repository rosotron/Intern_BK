const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://root:root@drone.aw4mywl.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};

module.exports = {
  connectToDatabase,
};
