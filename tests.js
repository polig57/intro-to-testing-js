// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return "Hello, Jane!" when passed "Jane"', function() {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return "Hello, Alex!" when passed "Alex"', function() {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return "Hello, Pat!" when passed "Pat"', function() {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return "Hello, World!" when called', function() {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when passed "true"', function() {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when passed "false"', function() {
        expect(sayHello(false)).toBe('Hello, World!');
    });
});
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return true when passed in "5"', function() {
        expect(isFive('5')).toBeTruthy();
    });
    it('should return a boolean no matter the input', function() {
        expect(isFive()).toBeFalsy();
    });
});
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter the input', function() {
        expect(isEven()).toBeFalsy();
    });
    it('should return true when passed in "2" ', function() {
        expect(isEven(2)).toBeTruthy();
    });
    it('should return true when passed in "-4" ', function() {
        expect(isEven(-4)).toBeTruthy();
    });
    it('should return false when passed in "3" ', function() {
        expect(isEven(3)).toBeFalsy();
    });
    it('should return false when passed in "banana" ', function() {
        expect(isEven('banana')).toBeFalsy();
    });
    it('should return true when called with "Infinity" ', function() {
        expect(isEven(Infinity)).toBeFalsy();
    });
    it('should return false when called with a boolean input ', function() {
        expect(isEven(true)).toBeFalsy();
    });
    it('should return false when called with a boolean input ', function() {
        expect(isEven(false)).toBeTruthy();
    });
});
