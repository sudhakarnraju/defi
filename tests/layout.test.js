import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../pages/layout';
jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      asPath: '/',
    }),
  };
});

describe('Layout', () => {
  test('renders layout', () => {
    render(
      <Layout>
        <div>Test children</div>
      </Layout>
    );
  });
});
