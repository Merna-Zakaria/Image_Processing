import request from "supertest";
const resizeImage = require('../utilities/middlewares/resizeImage')

describe('test resizeImage middleware', () => {
  let functionsSPy: {}
  let server: unknown;
  beforeEach(function() {
    //  functionsSPy = {
    //   resizeImageSpy: resizeImage
    // };
    // spyOn(functionsSPy, resizeImage);
    
    server = require('../app');
    request(server).get('/api/images').query({ filename: 'avatar', width: 100, height: 100 });
    // functionsSPy.resizeImageSpy()

  })
  it('test function call', () => {
    // resizeImage()
    // spyOn(window, resizeImage)
     expect(resizeImage).toHaveBeenCalled();
  })
})