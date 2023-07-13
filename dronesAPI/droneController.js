const Drone = require('./droneModel');

// Register drone
const registerDrone = async (req, res) => {
  try {
    const drone = new Drone(req.body);
    await drone.save();
    res.json(drone);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register the drone' });
  }
};

// See all drones
const seeDrone = async (req, res) => {
    try {

      const drone = await Drone.find();
      res.json(drone);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve drones' });
    }
  };

// Load medications
const loadMedications = async (req, res) => {
  try {
    const drone = await Drone.findById(req.params.id);
    if (!drone) {
      return res.status(404).json({ error: 'Drone not found' });
    }

    if (drone.state !== 'IDLE' || drone.batteryCapacity < 25) {
      return res.status(400).json({ error: 'Cannot load medications. Drone is not in a suitable state.' });
    }

    const medication = req.body;
    const totalWeight = drone.medications.reduce((acc, med) => acc + med.weight, 0) + medication.weight;
    if (totalWeight > drone.weightLimit) {
      return res.status(400).json({ error: 'Exceeded drone weight limit' });
    }

    drone.state = 'LOADING';
    drone.medications.push(medication);
    await drone.save();

    res.json(drone);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load medications onto the drone' });
  }
};

// Check the medications loaded
const getLoadedMedications = async (req, res) => {
    try {
      const drone = await Drone.findById(req.params.id);
      if (!drone) {
        return res.status(404).json({ error: 'Drone not found' });
      }
  
      if (drone.state !== 'LOADED' && drone.state !== 'DELIVERING') {
        return res.status(400).json({ error: 'Cannot retrieve loaded medications. Drone is not in a suitable state.' });
      }
  
      const medications = drone.medications;
      res.json({ medications });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve loaded medications' });
    }
  };

// Get battery level
const getBatteryLevel = async (req, res) => {
  try {
    const drone = await Drone.findById(req.params.id);
    if (!drone) {
      return res.status(404).json({ error: 'Drone not found' });
    }

    res.json({ batteryLevel: drone.batteryCapacity });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch drone battery level' });
  }
};

// Check available Drones
const checkAvailableDrones = async (req, res) => {
    try {
      const drones = await Drone.find({
        state: 'IDLE',
        batteryCapacity: { $gt: 25 },
      });
  
      const availableDrones = drones.map((drone) => ({
        serialNumber: drone.serialNumber,
        model: drone.model,
        weightLimit: drone.weightLimit,
        batteryCapacity: drone.batteryCapacity,
        medications: drone.medications,
        totalMedicationWeight: drone.medications.reduce(
          (acc, med) => acc + med.weight,
          0
        ),
      }));
  
      res.json({ availableDrones });
    } catch (error) {
      res.status(500).json({ error: 'Failed to check available drones' });
    }
  };
  

module.exports = {
seeDrone,
  registerDrone,
  loadMedications,
  getBatteryLevel,
  checkAvailableDrones,
  getLoadedMedications
};
