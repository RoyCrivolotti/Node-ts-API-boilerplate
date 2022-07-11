import { Client } from '../clients/client'

function doSomethingService(id: string): string {
    return Client.doSomethingClient(id);
}

export const Service = {
    doSomethingService,
};