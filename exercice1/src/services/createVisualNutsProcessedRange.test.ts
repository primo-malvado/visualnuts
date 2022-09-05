import { createVisualNutsProcessedRange } from './createVisualNutsProcessedRange'

describe('createVisualNutsProcessedRange', () => {
  test('generic use', () => {
    expect(createVisualNutsProcessedRange(10)).toHaveLength(10)
    expect(createVisualNutsProcessedRange(100)).toHaveLength(100)
    expect(createVisualNutsProcessedRange(0)).toHaveLength(2)
    expect(createVisualNutsProcessedRange(-10)).toHaveLength(12)

    expect(createVisualNutsProcessedRange(10)).toStrictEqual(['1', '2', 'Visual', '4', 'Nuts', 'Visual', '7', '8', 'Visual', 'Nuts'])
    expect(createVisualNutsProcessedRange(-5)).toStrictEqual(['1', 'Visual Nuts', '-1', '-2', 'Visual', '-4', 'Nuts'])
  })
})
