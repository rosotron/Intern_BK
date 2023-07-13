const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
  serialNumber: {
    type: String,
    required: true,
    maxlength: 100,
  },
  model: {
    type: String,
    enum: ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'],
    required: true,
  },
  weightLimit: {
    type: Number,
    required: true,
    max: 500,
  },
  batteryCapacity: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    enum: ['IDLE', 'LOADING', 'LOADED', 'DELIVERING', 'DELIVERED', 'RETURNING'],
    required: true,
  },
  medications: [
    {
      name: String,
      weight: Number,
      code: { type: String, uppercase: true },
      image: String
    }
  ]
});

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;
