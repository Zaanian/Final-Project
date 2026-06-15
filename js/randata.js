import { datalist } from "./listdata.js";
//get random number
export let randomNumbers = []
const data = datalist()

export async function fetchTrueRandomIntegers(count, min, max) {
    const url = 'https://api.random.org/json-rpc/4/invoke';

    const payload = {
        jsonrpc: '2.0',
        method: 'generateIntegers',
        params: {
            apiKey: "959c5cba-0250-4962-b98d-e59817c0815d",
            n: count,
            min: min,
            max: max,
            replacement: false // does not duplicate
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
