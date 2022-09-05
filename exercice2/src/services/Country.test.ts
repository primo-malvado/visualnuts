// import countries from '../data/testData.json'
import { countOfficialLanguages, countryWithHighestNumberOfOfficialLanguages, countryWithHighestNumberOfOfficialLanguagesIncludingDe, getAllLangages, mostUsedLangages, numberOfCountries, sortCountOfficialLanguagesDesc } from './Country'

let countries
beforeEach(() => {
  countries = [
    {
      country: 'US',
      languages: ['en']
    },
    {
      country: 'BE',
      languages: ['nl', 'fr', 'de']
    },
    {
      country: 'NL',
      languages: ['nl']
    },
    {
      country: 'DE',
      languages: ['de']
    },
    {
      country: 'ES',
      languages: ['es']
    }
  ]
})

describe('number of countries', () => {
  test('count 6 countries', () => {
    expect(numberOfCountries(countries)).toBe(5)
  })

  test('count 0 countries', () => {
    expect(numberOfCountries([])).toBe(0)
  })
  test('count 1 countries', () => {
    expect(
      numberOfCountries([{ country: 'aa', languages: ['aa', 'bb'] }])
    ).toBe(1)
  })
})

describe('mostUsedLangages', () => {
  test('get multiple languages with same  ', () => {
    expect(mostUsedLangages(countries)).toStrictEqual(['nl', 'de'])
  })
  test('get empty languages   ', () => {
    expect(mostUsedLangages([])).toStrictEqual([])
  })
})
describe('sortCountOfficialLanguagesDesc', () => {
  test('sort test data', () => {
    expect(sortCountOfficialLanguagesDesc(countries).map(country => country.country)).toStrictEqual(['BE', 'US', 'NL', 'DE', 'ES'])
  })
})

describe('getAllLangages', () => {
  test('sort test data', () => {
    expect(getAllLangages(countries)).toStrictEqual(['en', 'nl', 'fr', 'de', 'es'])
  })

  test('sort with empty data', () => {
    expect(getAllLangages([])).toStrictEqual([])
  })
})

describe('countryWithHighestNumberOfOfficialLanguages', () => {
  test('test data', () => {
    expect(countryWithHighestNumberOfOfficialLanguages(countries)).toHaveProperty('country', 'BE')
  })

  test('empty data', () => {
    expect(countryWithHighestNumberOfOfficialLanguages([])).toStrictEqual(undefined)
  })
})

describe('countOfficialLanguages', () => {
  test('test data', () => {
    expect(countOfficialLanguages(countries)).toBe(5)
  })

  test('empty data', () => {
    expect(countOfficialLanguages([])).toBe(0)
  })
})

describe('countryWithHighestNumberOfOfficialLanguagesIncludingDe', () => {
  test('test data', () => {
    expect(countryWithHighestNumberOfOfficialLanguagesIncludingDe(countries)).toHaveProperty('country', 'BE')
  })

  test('empty data', () => {
    expect(countryWithHighestNumberOfOfficialLanguagesIncludingDe([])).toStrictEqual(undefined)
  })
})
