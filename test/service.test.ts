import { Service } from 'services/old_service';
import { Client } from 'clients/client';

jest.mock('clients/client');

beforeEach(() => {
    jest.resetAllMocks();
});

test('doSomethingService - success', async () => {
    const mockId = '123';
    const mockResult = 'result';

    const mock = Client.doSomethingClient as jest.Mock;

    mock.mockReturnValueOnce(mockResult);

    const result = await Service.doSomethingService(mockId);

    expect(result).toBe(mockResult);
    expect(mock).toHaveBeenCalledWith(mockId);
});
