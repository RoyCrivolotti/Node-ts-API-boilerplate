import { Service } from 'services/service';
import { Client } from 'clients/client';

jest.mock('clients/client');

beforeEach(() => {
    jest.resetAllMocks();
});

test('doSomethingService - success', async () => {
    const mockId = '123';
    const mockResult = 'result';

    // Cast the Client.doSomethingClient to a jest.Mock
    const mock = Client.doSomethingClient as jest.Mock;

    // Mock the function
    mock.mockReturnValueOnce(mockResult);

    const result = await Service.doSomethingService(mockId);

    expect(result).toBe(mockResult);
    expect(mock).toHaveBeenCalledWith(mockId);
});
