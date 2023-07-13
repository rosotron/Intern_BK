const express = require('express');
const router = express.Router();
const { seeDrone,registerDrone, loadMedications, getBatteryLevel,checkAvailableDrones, getLoadedMedications } = require('./droneController');

// Register drone
router.post('/drones', registerDrone);

// Get all drone
router.get('/drones', seeDrone);

// Load medications
router.post('/drones/:id/medications', loadMedications);

// Get Loaded Medications
router.get('/drones/:id/medications', getLoadedMedications);

// Get battery level
router.get('/drones/:id/battery', getBatteryLevel);

// Check available drones
router.get('/drones/available', checkAvailableDrones);

module.exports = router;
