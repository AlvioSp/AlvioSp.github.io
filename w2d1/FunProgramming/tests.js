//Test sum
describe("sum", function () {
    it("takes numbers array, and returns sum",
        function () {
            assert.equal(10, sum([1, 2, 3, 4]));
        });
});

//Test multiply
describe("multiply", function () {
    it("takes numbers array, and returns multiply",
        function () {
            assert.equal(24, multiply([1, 2, 3, 4]));
        });
});

//Test reverse
describe("reverse", function () {
    it("takes string, and returns reverse string",
        function () {
            assert.equal('ratset gaj', reverse('jag testar'));
        });
});

//Test filter longest
describe("filter longest", function () {
    it("takes an array of words and an integer i and  returns the array",
        function () {
            assert.equal('Expected,output,findLongest', filterLongWords(['Expected', 'output', 'of', 'findLongest', 'Word'],5));
        });
});



