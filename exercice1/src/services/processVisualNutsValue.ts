export function processVisualNutsValue (a: number): string {
  if (a % 15 === 0) {
    return 'Visual Nuts'
  }

  if (a % 3 === 0) {
    return 'Visual'
  }

  if (a % 5 === 0) {
    return 'Nuts'
  }

  return String(a)
}
