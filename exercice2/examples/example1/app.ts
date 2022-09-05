import { numberOfCountries,
  countryWithHighestNumberOfOfficialLanguagesIncludingDe,
  countOfficialLanguages,
  countryWithHighestNumberOfOfficialLanguages,
  mostUsedLangages
 } from "visualnutsexercice2";

import countries from "./countries.json";

// - returns the number of countries in the world
console.log("numberOfCountries: " + String(numberOfCountries(countries)));

// - finds the country with the most official languages, where they officially speak German (de).
console.log(
  "countryWithHighestNumberOfOfficialLanguagesIncludingDe: " +
    JSON.stringify(
      countryWithHighestNumberOfOfficialLanguagesIncludingDe(countries)
    )
);

// - that counts all the official languages spoken in the listed countries.

console.log(
  "countOfficialLanguages: " + JSON.stringify(countOfficialLanguages(countries))
);

// - to find the country with the highest number of official languages.
console.log(
  "countryWithHighestNumberOfOfficialLanguages: " +
    JSON.stringify(countryWithHighestNumberOfOfficialLanguages(countries))
);

// - to find the most common official language(s), of all countries.
console.log("mostUsedLangages: " + mostUsedLangages(countries).join(", "));
