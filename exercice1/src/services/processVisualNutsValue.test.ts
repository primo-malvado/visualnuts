import { processVisualNutsValue } from './processVisualNutsValue'

describe('generate visual nuts from int', () => {
  test('dont change integers not multiple of 3 or 5', () => {
    expect(processVisualNutsValue(1)).toBe('1')
    expect(processVisualNutsValue(2)).toBe('2')
    expect(processVisualNutsValue(4)).toBe('4')
    expect(processVisualNutsValue(7)).toBe('7')
    expect(processVisualNutsValue(8)).toBe('8')
    expect(processVisualNutsValue(-8)).toBe('-8')
  })
  test("generate 'Visual' from multiple of 3", () => {
    expect(processVisualNutsValue(3)).toBe('Visual')
    expect(processVisualNutsValue(6)).toBe('Visual')
    expect(processVisualNutsValue(9)).toBe('Visual')
    expect(processVisualNutsValue(12)).toBe('Visual')
  })
  test("generate 'Nuts' from multiple of 5", () => {
    expect(processVisualNutsValue(5)).toBe('Nuts')
    expect(processVisualNutsValue(10)).toBe('Nuts')
    expect(processVisualNutsValue(20)).toBe('Nuts')
    expect(processVisualNutsValue(25)).toBe('Nuts')
    expect(processVisualNutsValue(35)).toBe('Nuts')
    expect(processVisualNutsValue(-100)).toBe('Nuts')
  })
  test("generate 'Visual Nuts' from multiple of 15", () => {
    expect(processVisualNutsValue(15)).toBe('Visual Nuts')
    expect(processVisualNutsValue(30)).toBe('Visual Nuts')
    expect(processVisualNutsValue(45)).toBe('Visual Nuts')
    expect(processVisualNutsValue(45)).toBe('Visual Nuts')
    expect(processVisualNutsValue(60)).toBe('Visual Nuts')
    expect(processVisualNutsValue(150)).toBe('Visual Nuts')
    expect(processVisualNutsValue(-150)).toBe('Visual Nuts')
    expect(processVisualNutsValue(0)).toBe('Visual Nuts')
  })
})
