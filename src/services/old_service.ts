import { Client } from '../clients/client'

function doSomethingService(id: string): string {
    return Client.doSomethingClient(id);
}

function missingProducts(requested: Array<number>, delivered: Array<number>) {
    const requestedCounterById: Record<number, number> = {};
    for (let i = 0; i < requested.length; i++) {
        if (requestedCounterById[requested[i]]) {
            requestedCounterById[requested[i]]++;
        }
        else {
            requestedCounterById[requested[i]] = 1;
        }
    } // O(n), n => requested length

    const deliveredCounterById: Record<number, number> = {};
    for (let i = 0; i < delivered.length; i++) {
        if (deliveredCounterById[delivered[i]]) {
            deliveredCounterById[delivered[i]]++;
        }
        else {
            deliveredCounterById[delivered[i]] = 1;
        }
    } // O(m), m => delivered length

    const missingProductIDs = [];
    for (const [itemID, requestedAmount] of Object.entries(requestedCounterById)) {
        const id = parseInt(itemID)
        if (!deliveredCounterById[id] || deliveredCounterById[id] < requestedAmount) {
            missingProductIDs.push(parseInt(itemID));
        }
    }


    return missingProductIDs;
}

function intersection(l1: Array<number>, l2: Array<number>) {
    const intersectingElements = [];
    for (let i = 0; i < l1.length; i++) {
        if (l2.includes(l1[i])) intersectingElements.push(l1[i]);
    } // O(n*m), n length of l1, m complexity of the includes (assuming length of l2) 

    return intersectingElements;
}

export const Service = {
    doSomethingService,
    missingProducts,
    intersection,
};
