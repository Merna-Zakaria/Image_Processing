import request from "supertest";
const baseUrl = 'http://localhost:3000'
const resizeImage = require('../utilities/middlewares/resizeImage') 

describe('test resizeImage middleware', () => {
  let functionsSPy: { resizeImageSpy: () => {}; }
  beforeEach(function() {
     functionsSPy = {
      resizeImageSpy: resizeImage
    };
    spyOn(functionsSPy, 'resizeImageSpy');

    request(baseUrl).get('/api/images').query({ filename: 'avatar', width: 100, height: 100 });
    functionsSPy.resizeImageSpy()
  })
  it('test function call', () => {
    expect(functionsSPy.resizeImageSpy).toHaveBeenCalled()
  })
})