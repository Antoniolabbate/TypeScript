doubleThePopulation(5);

doubleThePopulation("6.12");

doubleThePopulation(8_526);

doubleThePopulation(false);

// Alter this function so the `language2` parameter is optional.
// Hint: Check `language2` is not `undefined` before passing it to `console.log()`.

function languagesSpoken(country: string, language1: string, language2?: string): void {
    console.log(`The languages spoken in ${country} are:`);


    if(language2 !== undefined){
        console.log(language2)
    }

    console.log(language1);

    console.log(language2);
}

languagesSpoken("Colombia", "Spanish", "English");

languagesSpoken("Greece", "Greek");

languagesSpoken("New Zealand", "English", "Māori");

// ----

export {};
