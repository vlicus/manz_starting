console.log("codigo.hola".split("."));

// Separa tanto por punto como por coma
"88.12,44.123".split(/[.,]/);    // ["88", "12", "44", "123"] (4 elementos)

console.log("88.12.44.123,hola".split(/[,.]/));
