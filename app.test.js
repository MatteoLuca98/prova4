const request = require('supertest');
const app = require('./app');

test('GET/?number= number shoud return 200', async () =>{
    const response = await request(app).get('/square?number='+4);
    expect(response.statusCode).toBe(200); 
    expect(response.body.result).toBe(2);
});