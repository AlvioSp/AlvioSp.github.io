
 describe("filter", function(){
    it("filters bad words from the string", function(){
        assert.equal("This house is nice.", "This house is not nice.".filter(['not']));
    });
});


describe("Bubble Sort", function(){
    it("sorts items in array using bubble sort", function(){
        assert.equal('1,2,3,4,5,6', [3,2,4,5,1,6].bubbleSort().toString());
    });
});


describe("Teacher - subject", function(){
    it("checks the teacher__.teach method", function(){
        assert.equal("Mcall is now teaching WAP", teacher.teach("WAP"));
    });
});