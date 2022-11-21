const resizeImage = require("../utilities/middlewares/resizeImage");

describe("test resizeImage middleware", () => {
  it("test function call", () => {
    const spyObj = jasmine.createSpyObj("spyObj", [resizeImage]);
    spyObj[resizeImage]({
      query: { filename: "avatar", width: 100, height: 100 }
    });
    expect(spyObj[resizeImage]).toHaveBeenCalled();
    expect(spyObj[resizeImage]).toHaveBeenCalledWith({
      query: { filename: "avatar", width: 100, height: 100 }
    });
  });
});
