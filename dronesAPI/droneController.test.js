const mongoose = require('mongoose');
const request = require('supertest');
const app= require("./server");

beforeAll(async () => {
  await mongoose.connect('mongodb+srv://root:root@drone.aw4mywl.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  //await mongoose.connection.dropDatabase();
  await mongoose.connection.dropCollection('drones');
  await mongoose.connection.close();
});

describe('Drone Controller', () => {
  let droneId;

  describe('POST /drones', () => {
    test('should register a new drone: Case 1', async () => {
      const response = await request('http://localhost:5000/api/')
        .post('/drones')
        .send({
          serialNumber: 'Dron001',
          model: 'Lightweight',
          weightLimit: 300,
          batteryCapacity: 80,
          state: 'IDLE',
          medications: [],
        })
        .expect(200);
    });
  });

  describe('POST /drones', () => {
    test('should register a new drone: Case 2', async () => {
      const response = await request('http://localhost:5000/api/')
        .post('/drones')
        .send({
          serialNumber: 'Dron002',
          model: 'Lightweight',
          weightLimit: 300,
          batteryCapacity: 80,
          state: 'IDLE',
          medications: [],
        })
        .expect(200);

      droneId = response.body._id;
    });
  });

  describe('POST /drones', () => {
    test('should register a new drone: Case 3', async () => {
      const response = await request('http://localhost:5000/api/')
        .post('/drones')
        .send({
          serialNumber: 'Dron003',
          model: 'Lightweight',
          weightLimit: 300,
          batteryCapacity: 80,
          state: 'DELIVERING',
          medications: [{
            name: 'Medication B',
            weight: 60,
            code: 'DEF456',
            image: 'medication_b.jpg',
          }],
        })
        .expect(200);

    });
  });

  describe('GET /drones', () => {
    test('should retrieve all drones', async () => {
      const response = await request('http://localhost:5000/api/').get('/drones').expect(200);

      expect(response.body.length).toBe(3);
    });
  });

  describe('POST /drones/:id/medications', () => {
    test('should load medications onto a drone', async () => {
      const response = await request('http://localhost:5000/api/')
        .post(`/drones/${droneId}/medications`)
        .send({
          name: 'Medication A',
          weight: 50,
          code: 'ABC123',
          image: 'medication_a.jpg',
        })
        .expect(200);

      expect(response.body.medications.length).toBe(1);
    });
  });

  describe('GET /drones/:id/medications', () => {
    test('should retrieve loaded medications for a drone', async () => {
      const response = await request('http://localhost:5000/api/').get(`/drones/${droneId}/medications`).expect(200);

      expect(response.body.medications.length).toBe(1);
    });
  });

  describe('GET /drones/:id/battery', () => {
    test('should retrieve the battery level of a drone', async () => {
      const response = await request('http://localhost:5000/api/').get(`/drones/${droneId}/battery`).expect(200);

      expect(response.body.batteryLevel).toBeDefined();
    });
  });

  describe('GET /drones/available', () => {
    test('should retrieve available drones', async () => {
      const response = await request('http://localhost:5000/api/').get('/drones/available').expect(200);

      expect(response.body.availableDrones.length).toBe(1);
    });
  });
});
