const request = require('supertest');
const app = require('./app');

test('GET/?number= positiveNumber shoud return 200', async () =>{
    const response = await request(app).get('/square?number='+ 's');
    expect(response.statusCode).toBe(200); 
    expect(response.body.result).toBe(2);
});