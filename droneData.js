// Dummy Data

const droneData = [
    {
      serialNumber: 'Dron001',
      model: 'Lightweight',
      weightLimit: 300,
      batteryCapacity: 80,
      state: 'IDLE',
      medications: [],
    },
    {
      serialNumber: 'Dron002',
      model: 'Middleweight',
      weightLimit: 400,
      batteryCapacity: 10,
      state: 'LOADING',
      medications: [
        {
          name: 'Medication A',
          weight: 50,
          code: 'ABC123',
          image: 'medication_a.jpg',
        },
      ],
    },
    {
      serialNumber: 'Dron003',
      model: 'Cruiserweight',
      weightLimit: 500,
      batteryCapacity: 100,
      state: 'DELIVERING',
      medications: [
        {
          name: 'Medication B',
          weight: 75,
          code: 'DEF456',
          image: 'medication_b.jpg',
        },
        {
          name: 'Medication C',
          weight: 100,
          code: 'GHI789',
          image: 'medication_c.jpg',
        },
      ],
    },
    {
      serialNumber: 'Dron004',
      model: 'Heavyweight',
      weightLimit: 500,
      batteryCapacity: 50,
      state: 'LOADED',
      medications: [],
    },
    {
      serialNumber: 'Dron005',
      model: 'Lightweight',
      weightLimit: 300,
      batteryCapacity: 60,
      state: 'DELIVERED',
      medications: [
        {
          name: 'Medication D',
          weight: 40,
          code: 'JKL012',
          image: 'medication_d.jpg',
        },
      ],
    },
    {
      serialNumber: 'Dron006',
      model: 'Middleweight',
      weightLimit: 400,
      batteryCapacity: 100,
      state: 'RETURNING',
      medications: [],
    },
    {
      serialNumber: 'Dron007',
      model: 'Cruiserweight',
      weightLimit: 500,
      batteryCapacity: 30,
      state: 'IDLE',
      medications: [
        {
          name: 'Medication E',
          weight: 60,
          code: 'MNO345',
          image: 'medication_e.jpg',
        },
        {
          name: 'Medication F',
          weight: 80,
          code: 'PQR678',
          image: 'medication_f.jpg',
        },
        {
          name: 'Medication G',
          weight: 90,
          code: 'STU901',
          image: 'medication_g.jpg',
        },
      ],
    },
    {
      serialNumber: 'Dron008',
      model: 'Heavyweight',
      weightLimit: 500,
      batteryCapacity: 90,
      state: 'DELIVERING',
      medications: [
        {
          name: 'Medication H',
          weight: 70,
          code: 'VWX234',
          image: 'medication_h.jpg',
        },
      ],
    },
    {
      serialNumber: 'Dron009',
      model: 'Lightweight',
      weightLimit: 300,
      batteryCapacity: 70,
      state: 'LOADED',
      medications: [
        {
          name: 'Medication I',
          weight: 30,
          code: 'YZA567',
          image: 'medication_i.jpg',
        },
        {
          name: 'Medication J',
          weight: 50,
          code: 'BCD890',
          image: 'medication_j.jpg',
        },
      ],
    },
    {
      serialNumber: 'Dron010',
      model: 'Middleweight',
      weightLimit: 400,
      batteryCapacity: 40,
      state: 'RETURNING',
      medications: [],
    },
  ];
  
  module.exports = droneData;
  