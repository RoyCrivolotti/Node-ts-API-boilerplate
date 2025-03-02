import { Client } from '../clients/client'

function doSomethingService(id: string): string {
    return Client.doSomethingClient(id);
}

function dummyFunction(requested: Array<number>, delivered: Array<number>) {
    
}

export const Service = {
    doSomethingService,
};
