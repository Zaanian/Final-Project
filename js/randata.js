
//get random number
export async function fetchTrueRandomIntegers(apiKey, count, min, max) {
    const url = 'https://api.random.org/json-rpc/4/invoke';

    const payload = {
        jsonrpc: '2.0',
        method: 'generateIntegers',
        params: {
            apiKey: apiKey,
            n: count,
            min: min,
            max: max,
            replacement: true // Optional: allows duplicates
        },
        id: Math.floor(Math.random() * 1000) // Unique request ID
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        // Extract the array of numbers from the response object
        return data.result.random.data;
    } catch (error) {
        console.error('RANDOM.ORG API Error:', error);
    }
}
