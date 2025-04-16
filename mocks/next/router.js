import next from "next/router";

const useRouter = jest.spyOn(next, 'useRouter');

export function mockNextUseRouter(props) {
  useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    back: jest.fn(),
    push: jest.fn(),
    ...props,
  }));
}