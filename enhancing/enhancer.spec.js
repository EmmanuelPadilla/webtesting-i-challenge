const {success, fail, repair, get} = require('./enhancer.js');
const enhancer =require('./enhancer')
// test away!

const item = {
    name: "Broad Sword",
    durability: 0,
    enhancement: 0
}
const item2 = {
    name: "club",
    durability: 55,
    enhancement: 0
}

describe('learning about tests, assertions and matchers', () => {
    it('sanity check', () => { // the test
      expect(2 + 3).toBe(5) // an assertion
      expect(2 + 2).toBe(4) // another assertion
    })
})

describe('success function', () => {
  it('exists', () => {
    expect(success).toBeDefined()
  })
})

describe('fail function', () => {
    it('exists', () => {
      expect(fail).toBeDefined()
    })
  })

  describe('Enhancer functions succeed', () => {
    
    const expectedItem = {
        name: "Broad Sword",
        durability: 100,
        enhancement: 0
    }

    it('exists', () => {
      expect(repair).toBeDefined()
    })
    it("item is repaired to 100 durability", () => {
        expect(enhancer.repair(item)).toEqual(expectedItem)
    })
    it("durability is repaired even when parameter object contains other key value pairs", () => {
        expect(enhancer.repair(item2)).not.toStrictEqual(expectedItem)
        expect(enhancer.repair(item2).durability).toStrictEqual(expectedItem.durability)
    })

    it("return as a new object with a durability rating above 0", () => {
        expect(enhancer.repair(item)).toBeTruthy()
        expect(enhancer.repair(item).durability).toBeTruthy()
    })
  })

  describe("enhancement is successful", () => {

    const expectedItem = {
        name: "Broad Sword",
        durability: 0,
        enhancement: 1
    }

    it("Adds +1 to enhancement on success", () => {
        expect(enhancer.succeed(item).enhancement).toEqual(item.enhancement + 1)
        expect(enhancer.succeed(item)).toEqual(expectedItem)
    })

    it("enhancement is increased even when parameter object contains other key value pairs", () => {
        expect(enhancer.succeed(item2)).not.toStrictEqual(expectedItem)
        expect(enhancer.succeed(item2).enhancement).toStrictEqual(expectedItem.enhancement)
    })

    it("item is returned as a new object with a enhancement rating above 0", () => {
        expect(enhancer.succeed(item)).toBeTruthy()
        expect(enhancer.succeed(item).enhancement).toBeTruthy()
    })

})

  describe('get function', () => {
    it('exists', () => {
      expect(get).toBeDefined()
    })
  })