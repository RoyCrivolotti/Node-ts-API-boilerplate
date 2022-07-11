function doSomethingClient(id: string): string {
    return `This is a client message: ${id}`;
}

export const Client = {
    doSomethingClient,
};
