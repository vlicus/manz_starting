// Testing values will prompt a boolean (true/false) response

// Finite Number?

Number.isFinite(40); // true
Number.isFinite(55.3); // true
Number.isFinite(Infinity); // false

// Integer Number?

Number.isInteger(5); // true
Number.isInteget(5.0); // true
Number.isInteger(5.1); // false

// Safe Number?

Number.isSafeInteger(1e15); // true (green stripe part of the image)
Number.isSafeInteger(1e16); // false (yellow stripe part of the image)

1e309 == Infinity; // true
Number.isSafeInteger(1e309); // false (red stripe part of the image)

// 1e5 means 1 followed by 5 zeros (100000)
