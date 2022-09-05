import { processVisualNutsValue } from './processVisualNutsValue'
import { range } from './range'

export function createVisualNutsProcessedRange (value: number): string[] {
  const numbers = range(1, value)

  return numbers.map((value) => {
    return processVisualNutsValue(value)
  })
}
