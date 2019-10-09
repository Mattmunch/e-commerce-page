export const makePrettyCurrency = (number) =>
    number
        .toLocaleString(
            'en-US',
            {
                style: 'currency',
                currency: 'USD',
            });