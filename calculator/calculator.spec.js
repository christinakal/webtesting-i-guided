const { add, hello } = require('./calculator.js');

// test away!
describe('Hello world', () => {
    it('should return Hello world!', () => {
        // for toBe to work the function needs to return something
        expect(hello()).toBe("Hello world!");
        expect(hello()).not.toBe("Hello world");
        expect(hello()).not.toBeUndefined();
    });
});
 