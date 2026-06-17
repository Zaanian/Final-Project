import { datalist } from "./listdata.js";
//get random number
export let randomNumbers = []
const data = datalist()
export let randomIndices = []

export async function getRandomSequence(length) {
    const url = 'https://api.random.org/json-rpc/4/invoke';

    const payload = {
        jsonrpc: '2.0',
        method: 'generateIntegerSequences',
        params: {
            apiKey: '7a79b0bf-b7c2-4716-978e-babc0c7ac4ba',
            n: 1,
            length: length,
            min: 0,
            max: length,
            replacement: false,
            base: 10
        },
        id: Math.floor(Math.random() * 1000) // request id
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result.error) {
            console.error('API Error:', result.error.message);
        } else {
            // The sequence array is nested inside the data property
            const sequence = result.result.random.data[0];
            console.log('Your Random Sequence:', sequence);
            randomIndices = result.result.random.data[0]
        }
    } catch (error) {
        console.error('Network Error:', error);
    }
}




export async function fetchTrueRandomIntegers(count, min, max) {
    const url = 'https://api.random.org/json-rpc/4/invoke';

    const payload = {
        jsonrpc: '2.0',
        method: 'generateIntegers',
        params: {
            apiKey: "7a79b0bf-b7c2-4716-978e-babc0c7ac4ba",
            n: count,
            min: min,
            max: max,
            replacement: true // does not duplicate
        },
        id: Math.floor(Math.random() * 1000) // request id
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

        // Extract data from response
        randomNumbers = data.result.random.data;
    } catch (error) {
        console.error('RANDOM.ORG API Error:', error);
    }
}
