function convertUSDToEuro(usdValue) {
    const usdToEuro = 0.95;
    const euroValue = usdValue * usdToEuro;

    return euroValue;
}

function formatEuroValue(value) {
    return value.toFixed(2) + " €";
}


// TODO ask user for input later
const userValue = 4.4;

const euroValue = convertUSDToEuro(userValue);
const formatedValue = formatEuroValue(euroValue);

console.log(formatedValue);
