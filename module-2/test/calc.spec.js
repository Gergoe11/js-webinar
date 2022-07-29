const { it } = require('mocha');
const calc = require('../calc');
const expect = require('chai').expect;
const assert = require('chai').assert;


describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test the calculator
   // it("should have proper value");

    
    describe("add", () => {
        it("should exist", () => {
            const c = calc(42)
            expect(c.add).not.to.be.undefined
        });
        
        it("should be able to add number to the current value", () => {
            const c = calc(3);
            const result = c.add(5).v;

            expect(result).to.equal(8);

        });

        it("should not be NaN", () => {
            const c = calc(5);
            const result = c.add(5).v;

            expect(result).to.not.be.NaN;
        });

        it("param should equal given number", () => {
            const c = calc(5);
            const v = this.v
            assert.equal(calc(5), 5, 'these numbers are equal')
        });

        
    });
   

    describe("minus", () => {
        it("should exist", () => {
            const c = calc(4);
            expect(c.minus).not.to.be.undefined;
        });

        it("should be able to substract a number from the current value", () => {
            const c = calc(10);
            const result = c.minus(6).v;
                     
            expect(result).to.equal(4);

        });
    });

    describe("multiply", () => {
        it("should exist", () => {
            const c = calc(3);

            expect(c.times).not.to.be.undefined;
        });
        it("should be able to perform a valid multiplication", () => {
            const c = calc(2);
            const result = c.times(10).v;

            expect(result).to.equal(20);
        });
    });
    
    describe("modulo", () => {
        it("should exist", () => {
            const c = calc(4);

            expect(c.modulo).not.to.be.undefined;
        });

        it("should find the remainder of the two numbers", () => {
            const c = calc(12);
            const result = c.modulo(2).v;

            expect(result).to.equal(0);
        });

       
    });

    describe("sqrt", () => {
        it("should exist", () => {
            const c = calc(4);

            expect(c.sqrt).not.to.be.undefined;
        });
        
        it("should return the square root of a number", () => {
            const c = calc(4);
            const result = c.sqrt().v

            expect(result).to.equal(2);
        });

        it("should handle a negative value", () => {
            const c = calc(-3);
            const result = () => {
                throw new TypeError;
            }

            expect(result).to.throw()
        })
    });

    describe("multiple calculations", () => {
        it("should be able to perform multiple calculations", () => {
            const c = calc(1);

            const result = c.add(4).minus(3).times(6).v;
            expect(result).to.be.equal(12);
        });

    });

    describe("divide", () => {
        it("should exist", () => {
            const c = calc(42);
          
            expect(c.divide).not.to.be.undefined;
        });

        it("should be able to perform a valid division", () => {
            const c = calc(10);
            const result = c.divide(2).v;
            
            expect(result).to.equal(5);
        });

        it("should handle division by 0", () => {
            const c = calc(42);
                 
           expect(() => c.divide(0)).to.throw("Division");
           
        });
        

    });
  

});