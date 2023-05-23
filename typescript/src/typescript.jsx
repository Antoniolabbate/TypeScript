/**
 * START: Follow the instructions below.
 */

// Add a type annotation to this variable that describes the object it contains.

const countryPopulation: {code: String, population: Number} = {
    code: "NZ",
    population: 5_135_300,
};

// Define a `Country` interface that describes the object in this variable.
// Add the `Country` type as a type annotation for this variable.

interface country = {
    name: string,
    code: string,
    population: number,
};

// Define a `Currency` type alias that describes the object in this variable.
// Add the `Currency` type as a type annotation for this variable.

const currencyData: Coutry = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};

// ----

export {};
