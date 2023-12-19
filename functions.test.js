let myFunctions = require('./testing-lab/functions')

test('should run', () => expect(2).toBe(2))

test('return two', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test('greet', () => {
    expect(myFunctions.greeting('Jenny')).toBe('Hello, Jenny.')
})


describe('math functions', () => {
test('addition', () => {
    expect(myFunctions.add(4, 5)).toBe(9)
})

test('multiply', () => {
    expect(myFunctions.multiply(4, 5)).toBe(20)
})

test('divide', () => {
    expect(myFunctions.divide(10, 5)).toBe(2)
})

test('subtract', () => {
    expect(myFunctions.subtract(8, 5)).toBe(3)
})
})