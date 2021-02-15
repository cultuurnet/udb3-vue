import {
  getStatusFromResults,
  QueryStatus,
  useAuthenticatedQuery,
} from './authenticated-query';

import { renderHook } from '@testing-library/react-hooks';
import { TestApp } from '../../tests/utils/TestApp';
import { queryFn } from '../../tests/utils/queryFn';
import { setupPage } from '../../tests/utils/setupPage';

describe('getStatusFromResults', () => {
  it('returns error when one result is errror', async () => {
    const result = getStatusFromResults([
      { status: QueryStatus.SUCCESS },
      { status: QueryStatus.ERROR, error: 'this is an error' },
      { status: QueryStatus.ERROR, error: 'this is another error' },
      { status: QueryStatus.SUCCESS },
    ]);
    expect(result).toStrictEqual({
      status: QueryStatus.ERROR,
      error: ['this is an error', 'this is another error'],
    });
  });

  it('returns success when every result is a success', async () => {
    const result = getStatusFromResults([
      { status: QueryStatus.SUCCESS },
      { status: QueryStatus.SUCCESS },
    ]);
    expect(result).toStrictEqual({
      status: QueryStatus.SUCCESS,
    });
  });

  it('returns idle when one results is idle', async () => {
    const result = getStatusFromResults([
      { status: QueryStatus.SUCCESS },
      { status: QueryStatus.IDLE },
    ]);
    expect(result).toStrictEqual({
      status: QueryStatus.IDLE,
    });
  });

  it('returns idle when one results is loading', async () => {
    const result = getStatusFromResults([
      { status: QueryStatus.IDLE },
      { status: QueryStatus.LOADING },
    ]);
    expect(result).toStrictEqual({
      status: QueryStatus.LOADING,
    });
  });
});

describe('useAuthenticatedQuery', () => {
  beforeEach(() => {
    setupPage();
  });

  it('returns data', async () => {
    const data = { data: '12345' };
    fetch.mockResponseOnce(JSON.stringify(data));

    const { result, waitFor } = renderHook(
      () =>
        useAuthenticatedQuery({
          queryKey: ['random'],
          queryFn,
        }),
      { wrapper: TestApp },
    );

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toStrictEqual(data);
  });
  it('fails on not response ok', async () => {
    const message = 'This is an error';
    fetch.mockResponseOnce(JSON.stringify({ title: message }), {
      status: 400,
    });

    const { result, waitFor } = renderHook(
      () =>
        useAuthenticatedQuery({
          retry: false, // disable retry, otherwise the waitFor times out
          queryKey: ['random'],
          queryFn,
        }),
      { wrapper: TestApp },
    );

    await waitFor(() => result.current.isError);

    expect(result.current.error.message).toStrictEqual(message);
  });
});