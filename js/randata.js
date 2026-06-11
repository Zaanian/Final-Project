

//get random number
export async function getTrueRandomIntegers() {
    const url = 'https://random.org';


    const payload = {
        jsonrpc: "2.0",
        method: "generateIntegers",
        params: {
            apiKey: "959c5cba-0250-4962-b98d-e59817c0815d",
            n: 1,
            min: 0,
            max: 10,
            replacement: true
        },
        id: 1
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
            console.error(`API Error (${data.error.code}): ${data.error.message}`);
        } else {
            const randomNumbers = data.result.random.data;
            console.log('True Random Numbers:', randomNumbers);
        }
    } catch (error) {
        console.error('Network Error:', error);
    }
}