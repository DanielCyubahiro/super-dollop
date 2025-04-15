const router = {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(),
  back: jest.fn(),
  query: {},
};

module.exports = {
  useRouter: () => router,
};