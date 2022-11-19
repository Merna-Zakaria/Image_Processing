const request = require("supertest");

describe('GET /api/images',  () => {
    let server: unknown;
    beforeEach(function () {
      server = require('../app');    
    });

    it('responds to /api', async () => {
       let response = await request(server).get('/api')
       expect(response.status).toEqual(200);
       expect(response.text).toBe('main router');
         });
         it('404 everything else', async () => {
         await  request(server)
             .get('/foo/bar')
             .expect(404);
         });
    it('should respond with image/jpeg', async  () => {
        let response = await request(server).get('/api/images').query({ filename: 'avatar', width: 100, height: 100 });
        expect(response.status).toEqual(200);
        expect(response.type).toBe('image/jpeg');
        expect(response.headers["content-type"]).toMatch(/jpeg/)
    });

    it('test image not found', async () => {
        let response = await request(server).get('/api/images').query({ filename: '', width: 100, height: 100 });
        expect(response.status).toEqual(404);
        expect(response.text).toBe('Sorry, no images found to be displayed');
          });
})