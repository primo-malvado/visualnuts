import { Country, LanguageCode } from '../types/Country'

export function mostUsedLangages (countries: Country[]): LanguageCode[] {
  const langMap = {}

  countries.forEach((country) => {
    country.languages.forEach((lang) => {
      if (langMap[lang] === undefined) {
        langMap[lang] = 1
      } else {
        langMap[lang]++
      }
    })
  })

  const list = Object.keys(langMap)
    .map((key) => {
      return { language: key, count: langMap[key] }
    })
    .sort((a, b) => b.count - a.count)

  const max = list.find((a) => true)
  if (max === undefined) {
    return []
  } else {
    return list
      .filter((item) => item.count === max.count)
      .map((item2) => item2.language)
  }
}

export function sortCountOfficialLanguagesDesc (
  countries: Country[]
): Country[] {
  return countries.sort((a, b) => b.languages.length - a.languages.length)
}

export function getAllLangages (countries: Country[]): string[] {
  const languageList: LanguageCode[] = []

  countries.forEach((country) => {
    country.languages.forEach((lang: LanguageCode) => {
      if (!languageList.includes(lang)) {
        languageList.push(lang)
      }
    })
  })

  return languageList
}

export function countOfficialLanguages (countries: Country[]): number {
  return getAllLangages(countries).length
}

export function countryWithHighestNumberOfOfficialLanguages (
  countries: Country[]
): Country | undefined {
  return sortCountriesByNumberOfOfficialLanguagesDesc(countries).find(
    (item) => true
  )
}
export function countryWithHighestNumberOfOfficialLanguagesIncludingDe (
  countries: Country[]
): Country | undefined {
  return countryWithHighestNumberOfOfficialLanguages(
    filterCountriesByOfficialLanguage(countries, 'de')
  )
}
export function filterCountriesByOfficialLanguage (
  countries: Country[],
  language: string
): Country[] {
  return countries.filter((country) => country.languages.includes(language))
}
export function numberOfCountries (countries: Country[]): number {
  return countries.length
}
export function sortCountriesByNumberOfOfficialLanguagesDesc (countries: Country[]): Country[] {
  return countries.sort((a, b) => b.languages.length - a.languages.length)
}
