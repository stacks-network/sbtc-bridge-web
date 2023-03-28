import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';

const fetchMock = createFetchMock(vi);

fetchMock.enableMocks();
// changes default behavior of fetchMock to use the real 'fetch' implementation and not mock responses
//fetchMock.dontMock();
