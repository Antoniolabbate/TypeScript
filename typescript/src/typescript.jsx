/**
 * START: Follow the instructions below.
 */

// Add a tuple type annotation for this tuple.
const withcountryPopulation: [string, number];

const countryPopulation: [string, number] = ["China", 1_412_600_000];

// Change the `CountryWithPopulation` type into a tuple type.
// This should fix the type error on Line 14.

type CountryWithCurrency = [string, string, string];

const countryCurrency: CountryWithCurrency = ["Italy", "Euro", "EUR"];

// Add a tuple type annotation that prevents this tuple from being modified.
// Use the readonly modifier and the tuple type syntax: readonly [type, type]
// This will cause a type error. Remove the code that now has a type error.

const countryLanguage: readonly [string, string] = ["Greece", "Greek"];

// countryLanguage.reverse();  // Type error - Property 'reverse' does not exist on type 'readonly [string, string]'.

console.log(countryLanguage);

// ----

export {};
