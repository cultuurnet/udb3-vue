const mockRouterWithParams = (params = {}) => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');

  const push = jest.fn();

  const mockRouter = {
    pathname: '/',
    query: {},
    asPath: '/',
    push,
    ...params,
  };

  useRouter.mockImplementation(() => mockRouter);
  return mockRouter;
};

export { mockRouterWithParams };
