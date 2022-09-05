export function range (a: number, b: number): number[] {
  let interval = b - a

  const size = Math.abs(interval) + 1
  const baseArray = Array.from(Array(size).keys())
  if (interval < 0) {
    return baseArray.reverse().map((num) => num + b)
  }

  interval = interval + 1
  return baseArray.map((num) => num + a)
}
